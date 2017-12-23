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



//import {Observable} from 'rxjs/Rx' 
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/from';
import { MatDialog, MatSnackBar } from '@angular/material';
import { isDefined } from '@angular/compiler/src/util';
import { Route } from '@angular/router/src/config';


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

    grupluMu: boolean = true;
    gruplar: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
    grupElememanSayilari = "6,6,6,6";

    form: FormGroup;

    ciktiModu: boolean = false;

    puanTabloGenislik: number = 100;
    Count: number;
    subscription: any;

    klup: string;
    yil: number;

    hafta: number;

    macfoyPath: string;
    oyuncularPath: string;

    pageBaseRooting:string;

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

    ngOnInit() {

        this.puanTabloGenislik = 100;

        this.eklenecekOyuncu = new Oyuncu('', 0, null, null);

        this.activatedRoute.params.subscribe(params => this.klup = params.klup);

        this.activatedRoute.params.subscribe(params =>
            this.yil = parseInt(params.yil)
        );

        this.activatedRoute.params.subscribe(params => this.grup = params.grup);

        this.activatedRoute.params.subscribe(params => {
            this.hafta = parseInt(params.hafta);
            
            this.macFoyuYukle();
        }
        );

    }

    async macFoyuYukle() {

        this.pageBaseRooting=`/${this.klup}/${this.yil}/macfoy`;
        this.macfoyPath = this.pageBaseRooting + `/${this.hafta}/${this.grup}`;
        this.oyuncularPath = `/${this.klup}/${this.yil}/Oyuncular`;

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
        
        var tumOyuncular=await this.TumOyunculariGetir();

        var zamanSayi=this.macFoyServis.parseDateDMY(this.aktifMacFoy.Tarih).getTime() ;
        
        this.aktifOyuncular=new List<Oyuncu>(tumOyuncular)
                    .OrderBy(o => o.OyuncuAdSoyad)
                    .Where(o => this.macFoyServis.parseDateDMY(o.BaslamaTarihi).getTime() <= zamanSayi)
                    .Where(o => this.macFoyServis.parseDateDMY(o.AyrilisTarihi).getTime() >= zamanSayi)
                    .ToArray();

         var c=1000;

       
    }

    MacFoyuGetir(): Promise<MacFoy> {
        return new Promise<MacFoy>(resolve=> {
            this.af.object<MacFoy>(this.macfoyPath)
                   .valueChanges()
                   .subscribe(p => resolve(p));
        });
    }


    TumOyunculariGetir(): Promise<Oyuncu[]> {
        return new Promise<Oyuncu[]>(resolve=> {
            this.af.list<Oyuncu>(this.oyuncularPath)
                   .valueChanges()
                   .subscribe(p => resolve(p));

        });
    }


    PuanSiraliOyunculariGetirHaftadan(hafta:number, Tarih:Date): Promise<Oyuncu[]> {

        var zamanSayi=this.macFoyServis.parseDateDMY(this.aktifMacFoy.Tarih).getTime() ;

        return new Promise<Oyuncu[]>(resolve=> {
            this.af.list<Oyuncu>(this.oyuncularPath)
                   .valueChanges()
                   .subscribe(p =>{ 

                    var sonuc =  new List<Oyuncu>()
                        .Where(o => this.macFoyServis.parseDateDMY(o.BaslamaTarihi).getTime() <= zamanSayi)
                        .Where(o => this.macFoyServis.parseDateDMY(o.AyrilisTarihi).getTime() >= zamanSayi)
                        .OrderByDescending(c => c.Haftalar[hafta].ToplamPuan)
                        .ThenBy(c => parseInt(c.Dogum_Yili.toString()))
                        .ToArray();
                    
                   return resolve(sonuc)
           
                });

        });
    }


  


    async macFoyeOyuncuEkle(_oyuncu: Oyuncu) {

        if (this.grupluMu == true) {
            let liste: number[] = this.grupElememanSayilari.split(',').map(x => { return parseInt(x) });

            let listeBirikimli: number[] = [];

            var grup_inx = this.gruplar.indexOf(this.grup);

            Observable.from(liste)
                .scan((x, y) => x + y)
                .subscribe(c => listeBirikimli.push(c));


            let baslangicIndex: number = grup_inx == 0 ? 0 : listeBirikimli[grup_inx - 1];


            var tumOyuncular=await this.TumOyunculariGetir();
            var zamanSayi=this.macFoyServis.parseDateDMY(this.aktifMacFoy.Tarih).getTime() ;
            
            this.PuanTabloItemList =new List<Oyuncu>(tumOyuncular)
                        .Where(o => this.macFoyServis.parseDateDMY(o.BaslamaTarihi).getTime() <= zamanSayi)
                        .Where(o => this.macFoyServis.parseDateDMY(o.AyrilisTarihi).getTime() >= zamanSayi)
                        .Select(o => new PuanTabloItem(o.OyuncuAdSoyad, o[this.hafta - 1].ToplamPuan,
                            o[this.hafta].AlinanPuan, o[this.hafta].ToplamPuan, o.GuncelGrup, o.Dogum_Yili))
                            .OrderByDescending(c => c.MO_Puan)
                            .ThenBy(c => parseInt(c.Dogum_Yili.toString()))
                            .ToArray();
              

            for (var i = baslangicIndex; i < listeBirikimli[grup_inx]; i++) {
                var o = this.aktifOyuncular[i]

                var oncekiHaftaDurum = o[(this.hafta - 1).toString()];
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

    grupDegisti(grupAd:string) {

        this._router.navigateByUrl(this.pageBaseRooting + "/" + this.hafta + "/" + this.grup);
    }

    haftaDegisti(haftaAd:number) {

        this._router.navigateByUrl(this.pageBaseRooting + "/" + this.hafta + "/" + this.grup);
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


        this.aktifMacFoy.EklenenOyuncuAdlari.forEach(m => {
            var temp = m['C' + sutunIndex1].Skor;

            m['C' + (sutunIndex1)].Skor = m['C' + (sutunIndex2)].Skor;
            m['C' + (sutunIndex2)].Skor = temp;

        })

        for (let mac of this.aktifMacFoy.Mac_Satirlari) {
            this.MacOncesiPuanGuncellendi(mac);
        }

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
    }}

    


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
