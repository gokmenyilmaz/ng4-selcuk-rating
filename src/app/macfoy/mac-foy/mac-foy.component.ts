import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MacFoyService } from '../macfoy.service';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { List } from 'linqts/dist/linq';
import { FormsModule, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { Oyuncu, MacSatir, MacFoy, HaftaPuan } from '../../Models/entityAll';
import { PuanTabloItem, SkorDetay } from '../../Models/entityAll';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import {OyuncuListComponent } from '../../oyuncular/oyuncu-list/oyuncu-list.component'


//import {Observable} from 'rxjs/Rx' 
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/from';
import { MatDialog, MatSnackBar } from '@angular/material';
import { isDefined } from '@angular/compiler/src/util';
import { Route } from '@angular/router/src/config';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
    selector: 'app-mac-foy',
    templateUrl: './mac-foy.component.html',
    styleUrls: ['./mac-foy.component.css']
})

export class MacFoyComponent implements OnInit {

    aktifMacFoy:MacFoy;

    aktifOyuncular: Oyuncu[] = [];
    
    oyuncularRef: AngularFireList<Oyuncu>;

    oyuncularGruplu: Oyuncu[] = [];
 

    eklenecekOyuncu: Oyuncu = null;

    grup: string = 'A';
    grupMacTarih: string;

    haftalar: number[] = [];

    gruplar: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
    grupElememanSayilari = "6,6,6,6";

    form: FormGroup;

    gelismisMod: boolean = false;

    puanTabloGenislik: number = 100;
    Count: number;
    subscription: any;

    klup: string;
    donem: string;

    hafta: number;

    macfoyPath: string;
    oyuncularPath: string;

    macfoyBasePath:string;

    PuanTabloItemList:PuanTabloItem[];

    constructor(
        private macFoyServis: MacFoyService,
        private af: AngularFireDatabase,
        private _route: ActivatedRoute,
        private _dialog: MatDialog,
        private _snackbar: MatSnackBar,
        private activatedRoute: ActivatedRoute,
        private _router:Router
    ) {

        this.haftalar = Array.from(Array(52).keys());
    }

    degisiklikVarMi(): boolean {
        return true;

       
    }

    async ngOnInit() {

       

        this.puanTabloGenislik = 100;

        this.eklenecekOyuncu = new Oyuncu('', 0, null, null);

      

        this.activatedRoute.params.subscribe(params => {
            this.klup = params.klup;
            this.donem = params.donem;

            this.grup = params.grup
            this.hafta = parseInt(params.hafta);

            if(params["hafta"]===undefined)
            {
                this.hafta=1;
                this.grup="A";
            }

            this.macfoyBasePath=`/${this.klup}/${this.donem}/macfoy`;
            this.macfoyPath = this.macfoyBasePath + `/${this.hafta}/${this.grup}`;
            this.oyuncularPath = `/${this.klup}/${this.donem}/Oyuncular`;

            this.macFoyuYukle();
        });

    }

    async macFoyuYukle() {

        let bugun = new Date(Date.now()).toLocaleDateString("tr-TR")
      
        var _aktifMacFoy=await this.MacFoyuGetir();

        if(_aktifMacFoy==null)
        {
            var macFoyRef=this.af.object(this.macfoyPath);
            var yeniMacFoy=new MacFoy(bugun,this.grupElememanSayilari);
            yeniMacFoy.EklenenOyuncuAdlari=[];
            yeniMacFoy.Mac_Satirlari=[];

            yeniMacFoy.Tarih=bugun;
            
            macFoyRef.set(yeniMacFoy);

            this.aktifMacFoy=yeniMacFoy;
            this.grupMacTarih=bugun;
        }
        else{

            if(_aktifMacFoy.EklenenOyuncuAdlari===undefined) _aktifMacFoy.EklenenOyuncuAdlari=[];
            if(_aktifMacFoy.Mac_Satirlari===undefined) _aktifMacFoy.Mac_Satirlari=[];

            this.aktifMacFoy=_aktifMacFoy;
            this.grupMacTarih=_aktifMacFoy.Tarih;
        }
 
        this.aktifOyuncular=await this. AdSoyadSirali_AktifOyunculariGetir();

    }

    MacFoyuGetir(): Promise<MacFoy> {
        return new Promise<MacFoy>(resolve=> {
            this.af.object<MacFoy>(this.macfoyPath)
                   .valueChanges()
                   .subscribe(p =>{ 
                    
                    // p.EklenenOyuncuAdlari=p.EklenenOyuncuAdlari===undefined?[]:p.EklenenOyuncuAdlari;
                    // p.Mac_Satirlari=p.Mac_Satirlari===undefined?[]:p.Mac_Satirlari;
                    
                    return resolve(p) }
 
                );
        });
    }


    AdSoyadSirali_AktifOyunculariGetir(): Promise<Oyuncu[]> {
       
        var zamanSayi=this.macFoyServis.parseDateDMY(this.aktifMacFoy.Tarih).getTime() ;

        return new Promise<Oyuncu[]>(resolve=> {
            this.af.list<Oyuncu>(this.oyuncularPath)
                   .valueChanges()
                   .subscribe(p =>{ 

                   var sonuc =  new List<Oyuncu>(p)
                        .Where(o => this.macFoyServis.parseDateDMY(o.BaslamaTarihi).getTime() <= zamanSayi &&
                                    this.macFoyServis.parseDateDMY(o.AyrilisTarihi).getTime() >= zamanSayi)
                        .Select(o=>{o.Haftalar=o.Haftalar==undefined?
                            [ new HaftaPuan(o.BaslamaPuan,0,o.BaslamaPuan)]:o.Haftalar;return o})
                        .OrderBy(c=>c.OyuncuAdSoyad)
                        .ToArray();
                  
                   return resolve(sonuc)
           
                });

        });
    }

    async MacFoySonHaftaGetir()
    {
        return new Promise<number>(resolve=> {
            this.af.list<MacFoy>(this.macfoyBasePath)
                   .snapshotChanges()
                   .subscribe(p =>{ 
                     
                   return resolve(p.length-1)
           
                });

        });
    }

    PuanSiraliOyunculariGetirHaftadan(hafta:number, Tarih:string): Promise<Oyuncu[]> {

        var zamanSayi=this.macFoyServis.parseDateDMY(this.aktifMacFoy.Tarih).getTime() ;

        return new Promise<Oyuncu[]>(resolve=> {
            this.af.list<Oyuncu>(this.oyuncularPath)
                   .valueChanges()
                   .subscribe(p =>{ 

                   var sonuc =  new List<Oyuncu>(p)
                        .Where(o => this.macFoyServis.parseDateDMY(o.BaslamaTarihi).getTime() <= zamanSayi &&
                                    this.macFoyServis.parseDateDMY(o.AyrilisTarihi).getTime() >= zamanSayi)
                        .Select(o=>{o.Haftalar=o.Haftalar==undefined?
                            [ new HaftaPuan(o.BaslamaPuan,0,o.BaslamaPuan)]:o.Haftalar;  return o})
                        
                   var sonuc1= sonuc.OrderByDescending(o=>o.Haftalar[hafta].ToplamPuan)
                            .ThenByDescending(o=>o.Haftalar[hafta].AlinanTPuan)
                            .ThenBy(o=>this.padLeft( o.Dogum_Yili.toString(),4))
                            .ToArray();
                      
                   return resolve(sonuc1)
           
                });

        });
    }


    padLeft(num, size) {
        var s = "000000000" + num;
        return s.substr(s.length-size);
    }


    async macFoyeOyuncuEkle(_oyuncu: Oyuncu, _grupMu:boolean) {

        if (_grupMu == true) {
            let liste: number[] = this.grupElememanSayilari.split(',').map(x => { return parseInt(x) });

            let listeBirikimli: number[] = [];

            var grup_inx = this.gruplar.indexOf(this.grup);

            Observable.from(liste)
                .scan((x, y) => x + y)
                .subscribe(c => listeBirikimli.push(c));


            let baslangicIndex: number = grup_inx == 0 ? 0 : listeBirikimli[grup_inx - 1];


            var puanSiraliOncekiHafta=await this.PuanSiraliOyunculariGetirHaftadan(this.hafta-1,this.aktifMacFoy.Tarih)
         
            for (var i = baslangicIndex; i < listeBirikimli[grup_inx]; i++) {
                var o = puanSiraliOncekiHafta[i]

                var oncekiHaftaDurum = o.Haftalar[(this.hafta - 1).toString()];
                if (oncekiHaftaDurum == undefined) oncekiHaftaDurum = { ToplamPuan: o.BaslamaPuan };

                o.BaslamaPuan = oncekiHaftaDurum.ToplamPuan;

                this.macFoyeTekOyuncuEkle(o);
            }
        }
        else {

            this.macFoyeTekOyuncuEkle(_oyuncu);
        }

    }

    macFoyeTekOyuncuEkle(_oyuncu: Oyuncu) {

        let macSayisi = this.aktifMacFoy.Mac_Satirlari.length + 1;

        this.aktifMacFoy.EklenenOyuncuAdlari.push(_oyuncu.OyuncuAdSoyad);

        let mx: MacSatir = new MacSatir(this.grup, 1, _oyuncu.OyuncuAdSoyad, _oyuncu.BaslamaPuan, 0, _oyuncu.BaslamaPuan,
            null, null, null, null, null, null, null, null, null, true, 0);

        this.aktifMacFoy.Mac_Satirlari.push(mx);


        for (var i = 1; i <= macSayisi; i++) {
            mx["C" + i] = new SkorDetay(_oyuncu.OyuncuAdSoyad, '__', 0, null, '');
        }

        let index: number = 0;

        for (let mac of this.aktifMacFoy.Mac_Satirlari) {
            index = index + 1;
            mac["C" + macSayisi] = new SkorDetay(_oyuncu.OyuncuAdSoyad, '__', 0, null, '');

            if (macSayisi == index) mac["C" + macSayisi].Skor = 'X-X';
        }

        this.eklenecekOyuncu = new Oyuncu('', 0);

    }



    macFoySkorlariGuncelle(selectedRow: MacSatir, aktifSutunKey: number) {

        let aktifRowIndex =  this.aktifMacFoy.Mac_Satirlari.indexOf(selectedRow);
        let caprazRow =  this.aktifMacFoy.Mac_Satirlari[aktifSutunKey - 1];

        let caprazRowIndex =  this.aktifMacFoy.Mac_Satirlari.indexOf(caprazRow);


        let caprazSutun = 'C' + (aktifRowIndex + 1).toString();
        let aktifSutun = 'C' + aktifSutunKey.toString();

        let skor = selectedRow[aktifSutun].Skor;

        let karsilikliHukmenMi: boolean = skor.indexOf('(') >= 0;

        skor = skor.replace('(', '').replace(')', '');

        let puan = this.macFoyServis.hesapla(selectedRow.MO_Puan, caprazRow.MO_Puan, skor);
        let puan_capraz = this.macFoyServis.hesapla(caprazRow.MO_Puan, selectedRow.MO_Puan, skor);

        selectedRow[aktifSutun].Puan = puan;

        if (karsilikliHukmenMi) {
            caprazRow[caprazSutun] = new SkorDetay('xx', '(' + skor.toString() + ')', puan_capraz, ' background-color: yellow;', "K.H.");
        } else {
            caprazRow[caprazSutun] = new SkorDetay('xx', this.SonucuTersCevir(skor), puan * (-1), ' background-color: yellow;', "");
        }

        this.macFoySolGuncelle();

    }

    macFoySolGuncelle(): void {

        let alinanPuan: number = 0;
        let oyuncuInx: number = 0;

        for (let _row of this.aktifMacFoy.Mac_Satirlari) {
            let alinanPuan = 0;

            oyuncuInx = 0;
            for (let _col of this.aktifMacFoy.EklenenOyuncuAdlari) {
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


    kaydet() {

        let dialogRef = this._dialog.open(DialogContent, { width: '400px', height: '200px' });

        var _macFoyPath=this.macfoyPath;
        var _aktifMacFoy= this.aktifMacFoy;

        dialogRef.afterClosed().subscribe(result => {
            if (result == 'Ok') {
               
                this.af.object(_macFoyPath).set(_aktifMacFoy);

                var listOyuncu= new List<Oyuncu>(this.aktifOyuncular);
                var oyuncularHaftaRef =  this.af.list<Oyuncu>(this.oyuncularPath);

                for (let row of  this.aktifMacFoy.Mac_Satirlari) {
                {
                    var oyuncu= listOyuncu.Where(c=>c.OyuncuAdSoyad==row.OyuncuAdSoyad).First();
                 
                    if( oyuncu.Haftalar===undefined) oyuncu.Haftalar=[];
                
                    oyuncu.Haftalar[this.hafta]=new HaftaPuan(row.MO_Puan,row.AlinanTPuan,row.MS_Puan);
                    oyuncularHaftaRef.update(oyuncu["key"],oyuncu);
                }
    
            }


                this._snackbar.open('Kayıt işlemi yapıldı', '', { duration: 400 });
            };
        })
    }

    grupDegisti() {

        this._router.navigateByUrl(this.macfoyBasePath + "/" + this.hafta + "/" + this.grup);
    }

    haftaDegisti() {

        this._router.navigateByUrl(this.macfoyBasePath + "/" + this.hafta + "/" + this.grup);
    }

    MacSil(_row: MacSatir) {

        var colIndex =  this.aktifMacFoy.Mac_Satirlari.indexOf(_row);
        var colCount =  this.aktifMacFoy.Mac_Satirlari.length;


        for (let row of  this.aktifMacFoy.Mac_Satirlari) {
            for (let i = colIndex + 1; i < colCount; i++) {
                row["C" + i] = row["C" + (i + 1)];
            }

            row['C' + colCount] = null;

        }

        this.aktifMacFoy.EklenenOyuncuAdlari.splice(colIndex, 1);
        let _inx: number = 0;

        this.aktifMacFoy.Mac_Satirlari.splice(colIndex, 1);

    }

    satirKonumDegistir(row: MacSatir, indexYon: number) {
        var index = this.aktifMacFoy.Mac_Satirlari.indexOf(row);

        var eskiRowIndex = index;
        var aktifRowIndex = index + indexYon;

        if (aktifRowIndex >= this.aktifMacFoy.Mac_Satirlari.length || aktifRowIndex == -1) {

            alert("Bu işlemi gerçekleştiremezsiniz");
            return;
        }

        let element: MacSatir = this.aktifMacFoy.Mac_Satirlari[eskiRowIndex];


        this.aktifMacFoy.Mac_Satirlari.splice(index, 1);
        this.aktifMacFoy.Mac_Satirlari.splice(index + indexYon, 0, element);

        let elementy: string = this.aktifMacFoy.EklenenOyuncuAdlari[index];
        this.aktifMacFoy.EklenenOyuncuAdlari.splice(index, 1);
        this.aktifMacFoy.EklenenOyuncuAdlari.splice(index + indexYon, 0, elementy);

        var sutunIndex1 = aktifRowIndex;
        var sutunIndex2 = aktifRowIndex + 1;

        if (indexYon == -1) {
            sutunIndex1 = aktifRowIndex + 1 + 1;
            sutunIndex2 = aktifRowIndex + 1;
        }


        this.aktifMacFoy.Mac_Satirlari.forEach(m => {
            var temp = m['C' + sutunIndex1].Skor;

            m['C' + (sutunIndex1)].Skor = m['C' + (sutunIndex2)].Skor;
            m['C' + (sutunIndex2)].Skor = temp;

        })

        for (let mac of this.aktifMacFoy.Mac_Satirlari) {
            this.MacOncesiPuanGuncellendi(mac);
        }

    }


    MacaGelmedi(_row: MacSatir) {
        let inx: number = 0;
        if (_row.VarMi == false) {
            _row.VarMi = true;

            for (let _oy of this.aktifMacFoy.EklenenOyuncuAdlari) {
                inx++;
                if (_row['C' + inx].Skor != 'X-X') {
                    _row['C' + inx].Aciklama = "";
                    _row['C' + inx].Skor = "__";
                }

                this.macFoySkorlariGuncelle(_row, inx);

            }

            return;
        }

        _row.VarMi = false;

        var satirIndex =this.aktifMacFoy.Mac_Satirlari.indexOf(_row);

        for (let _oy of this.aktifMacFoy.EklenenOyuncuAdlari) {
            inx++;
            if (_row['C' + inx].Skor != 'X-X') {
                _row['C' + inx].Skor = '1-3';

                if (_row.VarMi == false && this.aktifMacFoy.Mac_Satirlari[inx - 1].VarMi == false) {
                    _row['C' + (inx)].Skor = "(1-3)";
                    _row['C' + (inx)].Aciklama = "K.H.";

                    this.aktifMacFoy.Mac_Satirlari[inx - 1]["C" + (satirIndex + 1)].Aciklama = "K.H.";
                }

                this.macFoySkorlariGuncelle(_row, inx);
            }
        }

        _row.VarMi = false;



    }



    MacOncesiPuanGuncellendi(selectedRow: MacSatir) {
        let aktifRowIndex = this.aktifMacFoy.Mac_Satirlari.indexOf(selectedRow);
        let caprazSutun = 'C' + (aktifRowIndex + 1).toString();

        for (let _row of this.aktifMacFoy.Mac_Satirlari) {
            this.macFoySkorlariGuncelle(_row, aktifRowIndex + 1);
        }
    }

    eklenecekOyuncu_Degisti(_oyuncu: Oyuncu) {
        let ek_oyuncu = this.aktifOyuncular.find(x => x.OyuncuAdSoyad == _oyuncu.OyuncuAdSoyad);
        var oncekiHafta = ek_oyuncu[(this.hafta - 1).toString()];
        if (oncekiHafta == undefined || ek_oyuncu[(this.hafta - 1).toString()] == undefined) {
            this.eklenecekOyuncu.BaslamaPuan = ek_oyuncu.BaslamaPuan;
        }
        else {
            this.eklenecekOyuncu.BaslamaPuan = ek_oyuncu[(this.hafta - 1).toString()].ToplamPuan;
        }
    }

    BonusDegisti(_row: MacSatir) {

        _row.MS_Puan = _row.MO_Puan + _row.AlinanTPuan + _row.BonusPuan;
    }


    async mactarihiDegisti() {
        if (this.grupMacTarih.length == 10) {
            this.aktifOyuncular=await this.PuanSiraliOyunculariGetirHaftadan(this.hafta,this.grupMacTarih);
        }
    }

    async PuanTablosunuGuncelle(guncelDurumMu: boolean) {

        
        var puanSiraliListe=await this.PuanSiraliOyunculariGetirHaftadan(this.hafta,this.grupMacTarih);


        let GrupElemanSayilari: number[] = this.grupElememanSayilari.split(',')
            .map(c => { return parseInt(c) })

        let GrupElemanSayilariBirikimli: number[] = []

        let toplam: number = 0;
        GrupElemanSayilari.forEach(x => {
            toplam += x;
            GrupElemanSayilariBirikimli.push(toplam);
        })

        this.PuanTabloItemList = new List<any>(puanSiraliListe)
            .Select(o => new PuanTabloItem(o.OyuncuAdSoyad, o.Haftalar[this.hafta].MacOncesiPuan,
                o.Haftalar[this.hafta].AlinanTPuan, o.Haftalar[this.hafta].ToplamPuan, o.GuncelGrup, o.Dogum_Yili))
             .ToArray();

      
        var sayi = 0;
        for (var i = 0; i < this.PuanTabloItemList.length; i++) {

            for (var j = 0; j < GrupElemanSayilariBirikimli.length; j++) {
                if (i < GrupElemanSayilariBirikimli[j]) {
                    this.PuanTabloItemList[i].Grup = this.gruplar[j];
                    break;
                }
            }

        }
    }

}

    


@Component({
    template: `

        <div style='display:flex;align-items:flex-end;height:98%;'>
            <p style='align-self:flex-start;width:100%'>Kayıt yapılıyor...</p>
            <div style='display:flex;justify-content:flex-end;width:100%'>
                <button mat-button  (click)="dialogRef.close('Cancel')">Vazgeç</button>
                <button mat-raised-button color="primary" (click)="dialogRef.close('Ok')">Kaydet</button>
            </div>
        </div>


  `,
})
export class DialogContent {
    constructor(public dialogRef: MatDialogRef<DialogContent>) { }
}
