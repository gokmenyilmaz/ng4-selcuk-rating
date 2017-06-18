import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MacFoyService } from '../macfoy.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { List } from 'linqts/dist/linq';
import { FormsModule, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { Oyuncu, MacSatir } from '../../Models/entityAll';
import { PuanTabloItem, SkorDetay } from '../../Models/entityAll';

import {MdDialog, MdDialogRef} from '@angular/material';

//import {Observable} from 'rxjs/Rx' 
import {Observable} from 'rxjs/Observable'

import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/from';


@Component({
  selector: 'app-mac-foy',
  templateUrl: './mac-foy.component.html',
  styleUrls: ['./mac-foy.component.css']
})

export class MacFoyComponent implements OnInit {

    mac_rows: MacSatir[] = [];
    oyuncular: Oyuncu[] = [];
    oyuncularGruplu: Oyuncu[] = [];
    eklenenOyuncular: Oyuncu[] = [];

    eklenecekOyuncu: Oyuncu = null;
    hafta: number = 1;
    grup: string = 'A';
    grupMacTarih: string;

    haftalar: number[] = [];

    grupluMu: boolean = true;
    gruplar: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
    grupElememanSayilari = "6,6,6,6";

    form: FormGroup;


    ciktiModu: boolean = false;

    puanTabloGenislik: number = 100;
    Count: number;
    subscription: any;

    constructor(
        private reytingServis: MacFoyService,
        private af: AngularFireDatabase,
        private _route: ActivatedRoute
    ) {
        this.puanTabloGenislik = 100;

        this.eklenecekOyuncu = new Oyuncu('', 0, null, null);

        this.haftalar = Array.from(Array(52).keys());

        this.haftaDegisti();


        //  this.oyuncuDuzenleTest();
    }

    degisiklikVarMi(): boolean {
        return true;
    }

    ngOnInit() {
        var d = this._route.snapshot.params["dernek"];

        this.hafta = this._route.snapshot.params["hafta"];
        console.log(this.hafta, this._route.params);
        this.haftaDegisti();
    }



    haftaDegisti() {
        this.af.object('/Selcuk/Maclar/' + this.hafta + '/' + this.grup).subscribe(m => {

            let bugun = new Date(Date.now()).toLocaleDateString();

            this.mac_rows = m.Foy == undefined ? [] : m.Foy;
            this.grupMacTarih = m.Foy == undefined ? bugun : m.Tarih;

            this.oyunculariYukle();




        })


    }

    mactarihiDegisti() {
        if (this.grupMacTarih.length == 10) {
            this.oyunculariYukle();
        }


    }

    oyunculariYukle() {
        this.af.list('/Selcuk/Oyuncular').subscribe(x => {

         

            let macTarihTime = this.parseDateDMY(this.grupMacTarih).getTime();


            this.oyuncular = new List<any>(x)
                .Where(o => this.parseDateDMY(o.BaslamaTarihi).getTime() <= macTarihTime)
                .Where(o => this.parseDateDMY(o.AyrilisTarihi).getTime() > macTarihTime)
                .ToArray();

            // this.oyuncular = new List<any>(x)
            //        .ToArray();


          

            for (let o of this.oyuncular) {
                if (o[this.hafta - 1] == undefined) {
                    o[this.hafta - 1] = { AlinanPuan: 0, Grup: 1, ToplamPuan: o.BaslamaPuan };
                }

                if (o[this.hafta] == undefined) {
                    o[this.hafta] = { AlinanPuan: 0, Grup: 1, ToplamPuan: o.BaslamaPuan };
                }
            }



            this.oyuncular = new List<any>(this.oyuncular)
                .OrderByDescending(o => o[this.hafta - 1].ToplamPuan)
                .ThenBy(o => o.Dogum_Yili)
                .ToArray();

            this.eklenenOyuncular = [];

            let i: number = -1;

            for (let mac of this.mac_rows) {
                i++;
                let oyuncu = this.oyuncular.find(x => x.OyuncuAdSoyad == mac.OyuncuAdSoyad);
                this.eklenenOyuncular.push(oyuncu);
            }

            this.eklenecekOyuncu = new Oyuncu('', 0);



        });
    }

    parseDateDMY(input: string): Date {
        var parts = input.split('.');
        return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    }



    grupDegisti() {

        let liste: Oyuncu[] = this.oyuncular.filter(x => {
            x.GuncelGrup == this.grup;
        })

        this.eklenenOyuncular = [];
        for (let o of liste) {
            this.eklenenOyuncular.push(o);
            this.macaOyuncuEkle(o);
        }

        this.haftaDegisti();
        this.eklenecekOyuncu = new Oyuncu('', 0);

    }


    kayitEt() {

        let i: number = -1;
        for (let mac of this.mac_rows) {
            i++;
            let oyuncu = this.oyuncular.find(x => x.OyuncuAdSoyad == mac.OyuncuAdSoyad);

            this.af.object('/Selcuk/Oyuncular/' + oyuncu["$key"] + '/' + this.hafta).update({
                ToplamPuan: mac.MS_Puan,
                AlinanPuan: mac.AlinanTPuan,
                Grup: mac.GrupId,
                BonusPuan: mac.BonusPuan
            });
        }

        this.mac_rows.map(mac => {
            delete mac['$key'];
            delete mac['$exists'];

        })



        this.af.object('/Selcuk/Maclar/' + this.hafta + '/' + this.grup).
            set({
                Tarih: this.grupMacTarih,
                GrupElememanSayilari: this.grupElememanSayilari,
                Foy: this.mac_rows
            });

    }

    kaydet() {

        var _this = this;

        // bootbox.confirm({
        //     message: "Değişiklikler kaydediliyor?",
        //     buttons: {
        //         confirm: {
        //             label: 'Evet',
        //             className: 'btn-success'
        //         },
        //         cancel: {
        //             label: 'Hayır',
        //             className: 'btn-danger'
        //         }
        //     },
        //     callback: function (result) {
        //         if (result == true) {
        //             _this.kayitEt();
        //         };
        //     }
        // });

    }

    satirKonumDegistir(row: MacSatir, indexYon: number) {
        var index = this.mac_rows.indexOf(row);

        var eskiRowIndex = index;
        var aktifRowIndex = index + indexYon;

        if (aktifRowIndex >= this.mac_rows.length || aktifRowIndex == -1) {

            alert("Bu işlemi gerçekleştiremezsiniz");
            return;
        }

        let element: MacSatir = this.mac_rows[eskiRowIndex];


        this.mac_rows.splice(index, 1);
        this.mac_rows.splice(index + indexYon, 0, element);

        let elementy: Oyuncu = this.eklenenOyuncular[index];
        this.eklenenOyuncular.splice(index, 1);
        this.eklenenOyuncular.splice(index + indexYon, 0, elementy);

        var sutunIndex1 = aktifRowIndex;
        var sutunIndex2 = aktifRowIndex + 1;

        if (indexYon == -1) {
            sutunIndex1 = aktifRowIndex + 1 + 1;
            sutunIndex2 = aktifRowIndex + 1;
        }


        this.mac_rows.forEach(m => {
            var temp = m['C' + sutunIndex1].Skor;

            m['C' + (sutunIndex1)].Skor = m['C' + (sutunIndex2)].Skor;
            m['C' + (sutunIndex2)].Skor = temp;

        })

        for (let mac of this.mac_rows) {
            this.MacOncesiPuanGuncellendi(mac);
        }

    }

    BonusDegisti(_row: MacSatir) {

        _row.MS_Puan = _row.MO_Puan + _row.AlinanTPuan + _row.BonusPuan;
    }

    oyuncuEkleDegisti(_oyuncu: Oyuncu) {
        let ek_oyuncu = this.oyuncular.find(x => x.OyuncuAdSoyad == _oyuncu.OyuncuAdSoyad);
        var oncekiHafta = ek_oyuncu[(this.hafta - 1).toString()];
        if (oncekiHafta == undefined || ek_oyuncu[(this.hafta - 1).toString()] == undefined) {
            this.eklenecekOyuncu.BaslamaPuan = ek_oyuncu.BaslamaPuan;
        }
        else {
            this.eklenecekOyuncu.BaslamaPuan = ek_oyuncu[(this.hafta - 1).toString()].ToplamPuan;
        }
    }


    oyuncuEkle(_oyuncu: Oyuncu) {

        alert("tıklandı");

        if (this.grupluMu == true) {
            let liste: number[] = this.grupElememanSayilari.split(',').map(x => { return parseInt(x) });

            let listeBirikimli: number[] = [];

            var grup_inx = this.gruplar.indexOf(this.grup);

            Observable.from(liste)
                .scan((x, y) => x + y)
                .subscribe(c => listeBirikimli.push(c));


            let baslangicIndex: number = grup_inx == 0 ? 0 : listeBirikimli[grup_inx - 1];


            for (var i = baslangicIndex; i < listeBirikimli[grup_inx]; i++) {
                var o = this.oyuncular[i];

                var oncekiHaftaDurum = o[(this.hafta - 1).toString()];
                if (oncekiHaftaDurum == undefined) oncekiHaftaDurum = { ToplamPuan: o.BaslamaPuan };

                o.BaslamaPuan = oncekiHaftaDurum.ToplamPuan;

                this.macaOyuncuEkle(o);
            }
        }
        else {

            this.macaOyuncuEkle(_oyuncu);
        }

    }

    macaOyuncuEkle(_oyuncu: Oyuncu) {



        let macSayisi = this.mac_rows.length + 1;

        let mx: MacSatir = new MacSatir(1, 1, _oyuncu.OyuncuAdSoyad, _oyuncu.BaslamaPuan, 0, _oyuncu.BaslamaPuan,
            null, null, null, null, null, null, null, null, null, true, 0);

        this.mac_rows.push(mx);


        for (var i = 1; i <= macSayisi; i++) {
            mx["C" + i] = new SkorDetay(_oyuncu.OyuncuAdSoyad, '__', 0, null,'');
        }

        let index: number = 0;

        for (let mac of this.mac_rows) {
            index = index + 1;
            mac["C" + macSayisi] = new SkorDetay(_oyuncu.OyuncuAdSoyad, '__', 0, null,'');

            if (macSayisi == index) mac["C" + macSayisi].Skor = 'X-X';
        }

        this.eklenenOyuncular.push(_oyuncu);

        this.eklenecekOyuncu = new Oyuncu('', 0);



    }

    MacSil(_row: MacSatir) {

        var colIndex = this.mac_rows.indexOf(_row);
        var colCount = this.mac_rows.length;


        for (let row of this.mac_rows) {
            for (let i = colIndex + 1; i < colCount; i++) {
                row["C" + i] = row["C" + (i + 1)];
            }

            row['C' + colCount] = null;

        }

        this.eklenenOyuncular.splice(colIndex, 1);
        let _inx: number = 0;

        this.mac_rows.splice(colIndex, 1);

        this.SolTabloGuncelle();


    }

    PuanTabloItemList: PuanTabloItem[] = [];

    PuanTablosunuGuncelle(guncelDurumMu: boolean) {

        if (guncelDurumMu == false) {

            this.PuanTabloItemList = new List<any>(this.oyuncular)
                .Select(o => new PuanTabloItem(o.OyuncuAdSoyad, o[this.hafta - 1].ToplamPuan,
                    o[this.hafta].AlinanPuan, o[this.hafta].ToplamPuan, o.Grup, o.Dogum_Yili))
                .OrderByDescending(c => c.MO_Puan)
                .ThenBy(c => parseInt(c.Dogum_Yili.toString()))
                .ToArray();
            return;
        }

        let GrupElemanSayilari: number[] = this.grupElememanSayilari.split(',')
            .map(c => { return parseInt(c) })

        let GrupElemanSayilariBirikimli: number[] = []

        let toplam: number = 0;
        GrupElemanSayilari.forEach(x => {
            toplam += x;
            GrupElemanSayilariBirikimli.push(toplam);
        })

        this.PuanTabloItemList = new List<any>(this.oyuncular)
            .Select(o => new PuanTabloItem(o.OyuncuAdSoyad, o[this.hafta - 1].ToplamPuan,
                o[this.hafta].AlinanPuan, o[this.hafta].ToplamPuan, o.GuncelGrup, o.Dogum_Yili))
            .OrderByDescending(c => c.MS_Puan)
            .ThenBy(c => parseInt(c.Dogum_Yili.toString()))
            .ToArray();

        console.log(this.PuanTabloItemList);

        var sayi = 0;
        for (var i = 0; i < this.PuanTabloItemList.length; i++) {

            for (var j = 0; j < GrupElemanSayilariBirikimli.length; j++) {
                if (i < GrupElemanSayilariBirikimli[j]) {
                    this.PuanTabloItemList[i].Grup = this.gruplar[j];
                    break;
                }
            }

        }

        for (let PuanTabloItem of this.PuanTabloItemList) {
            var _oyuncu = this.oyuncular.find(c => c.OyuncuAdSoyad == PuanTabloItem.OyuncuAdSoyad);

            this.af.object('/Selcuk/Oyuncular/' + _oyuncu["$key"]).update({
                GuncelGrup: PuanTabloItem.Grup
            });
        }

    }

    MacaGelmedi(_row: MacSatir) {
         let inx: number = 0;
        if(_row.VarMi==false) 
        {
              _row.VarMi = true;

                for (let _oy of this.eklenenOyuncular) {
                    inx++;
                    if (_row['C' + inx].Skor != 'X-X') 
                    {
                       _row['C' + inx].Aciklama="";
                       _row['C' + inx].Skor="__";
                    }

                     this.TabloyuGuncelle(_row, inx);

                }

              return;
        }

       _row.VarMi=false;

        var satirIndex = this.mac_rows.indexOf(_row);
       
        for (let _oy of this.eklenenOyuncular) {
            inx++;
            if (_row['C' + inx].Skor != 'X-X') {
                _row['C' + inx].Skor = '1-3';

                  if (_row.VarMi == false &&  this.mac_rows[inx-1].VarMi==false) {
                       _row['C' + (inx)].Skor="(1-3)";
                       _row['C' + (inx)].Aciklama="K.H.";

                      this.mac_rows[inx-1]["C" +(satirIndex+1)].Aciklama="K.H.";
                  }

                this.TabloyuGuncelle(_row, inx);
            }
        }

        _row.VarMi = false;

         

    }


    MacOncesiPuanGuncellendi(selectedRow: MacSatir) {
        let aktifRowIndex = this.mac_rows.indexOf(selectedRow);
        let caprazSutun = 'C' + (aktifRowIndex + 1).toString();

        for (let _row of this.mac_rows) {
            this.TabloyuGuncelle(_row, aktifRowIndex + 1);
        }
    }



    TabloyuGuncelle(selectedRow: MacSatir, aktifSutunKey: number) {

        let aktifRowIndex = this.mac_rows.indexOf(selectedRow);
        let caprazRow = this.mac_rows[aktifSutunKey - 1];

        let caprazRowIndex = this.mac_rows.indexOf(caprazRow);


        let caprazSutun = 'C' + (aktifRowIndex + 1).toString();
        let aktifSutun = 'C' + aktifSutunKey.toString();

        let skor = selectedRow[aktifSutun].Skor;

        let karsilikliHukmenMi: boolean = skor.indexOf('(') >= 0;

        skor = skor.replace('(', '').replace(')', '');

        let puan = this.reytingServis.hesapla(selectedRow.MO_Puan, caprazRow.MO_Puan, skor);
        let puan_capraz = this.reytingServis.hesapla(caprazRow.MO_Puan, selectedRow.MO_Puan, skor);

        selectedRow[aktifSutun].Puan = puan;



        if (karsilikliHukmenMi) {
            caprazRow[caprazSutun] = new SkorDetay('xx', '(' + skor.toString() + ')', puan_capraz, ' background-color: yellow;',"K.H.");
        } else {
            caprazRow[caprazSutun] = new SkorDetay('xx', this.SonucuTersCevir(skor), puan * (-1), ' background-color: yellow;',"");
        }


        this.SolTabloGuncelle();


    }

    SolTabloGuncelle(): void {

        let alinanPuan: number = 0;
        let oyuncuInx: number = 0;

        for (let _row of this.mac_rows) {
            let alinanPuan = 0;

            oyuncuInx = 0;
            for (let _col of this.eklenenOyuncular) {
                oyuncuInx++;
                alinanPuan = alinanPuan + _row['C' + oyuncuInx].Puan;
            }

            _row.AlinanTPuan = alinanPuan;
            _row.MS_Puan = _row.MO_Puan + alinanPuan;
        }
    }

    SonucuTersCevir(s: string) {

        if (s === '__') { return s; };

        let items = s.split('-');
        return items[1] + '-' + items[0];

    }

}


