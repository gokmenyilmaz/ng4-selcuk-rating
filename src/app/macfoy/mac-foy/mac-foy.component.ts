import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MacFoyService } from '../macfoy.service';

import { AngularFireDatabase  } from '@angular/fire/database';

import { List } from 'linqts';
import { FormsModule, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { Oyuncu, MacSatir, MacFoy, HaftaPuan, Ayarlar } from '../../Models/entityAll';
import { PuanTabloItem, SkorDetay } from '../../Models/entityAll';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import {OyuncuListComponent } from '../../oyuncular/oyuncu-list/oyuncu-list.component'


//import {Observable} from 'rxjs/Rx' 
import { Observable, from, of } from 'rxjs'
import { map, filter, scan } from "rxjs/operators";


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
    donemBasePath: string;

    aktifMacFoy:MacFoy;

    aktifOyuncular: Oyuncu[] = [];
    
    oyuncularRef: Observable<Oyuncu>;

    oyuncularGruplu: Oyuncu[] = [];
 

    eklenecekOyuncu: Oyuncu = null;

    grup: string = 'A';
    grupMacTarih: string;

    haftalar: number[] = [];

    gruplar: string[] = ['A', 'B', 'C', 'D', 'E', 'F','G','H'];
    grupElememanSayilari = "";

    form: FormGroup;

    gelismisMod: boolean = false;

    Count: number;
    subscription: any;

    klup: string;
    donem: string;

    hafta: number;

    macfoyPath: string;
    oyuncularPath: string;

    macfoyBasePath:string;

    PuanTabloItemList:PuanTabloItem[];

    Ayarlar:Ayarlar;

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
            this.donemBasePath=`/${this.klup}/${this.donem}`;
            this.macfoyPath = this.macfoyBasePath + `/${this.hafta}/${this.grup}`;
            this.oyuncularPath = `/${this.klup}/${this.donem}/Oyuncular`;

            this.macFoyuYukle();
        });

    }

    async macFoyuYukle() {

        this.Ayarlar= await this.AyarlariGetir();

        if(this.Ayarlar==null)
        {

            var _ayar=new Ayarlar("6,6,6,6","1-3",0);
            this.af.object(this.donemBasePath + "/Ayarlar").set(_ayar);
            this.Ayarlar=_ayar;
        }

        if(this.Ayarlar.RatingSistemKodu==null)  this.Ayarlar.RatingSistemKodu=1;

        this.macFoyServis.puanlariTanimla(this.Ayarlar.RatingSistemKodu);

        let bugun = new Date(Date.now()).toLocaleDateString("tr-TR")
      
        var _aktifMacFoy=await this.MacFoyuGetir();

        if(_aktifMacFoy==null)
        {
            var macFoyRef=this.af.object(this.macfoyPath);
            var yeniMacFoy=new MacFoy(bugun);
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
 
        this.grupElememanSayilari=this.Ayarlar.VarsayilanGrupBolunme;
        this.aktifOyuncular=await this. AdSoyadSirali_AktifOyunculariGetir();

    }

    AyarlariGetir(): Promise<Ayarlar> {
        return new Promise<Ayarlar>(resolve=> {
            this.af.object<Ayarlar>(this.donemBasePath + "/Ayarlar")
                   .valueChanges()
                   .subscribe(p =>{ 
                    return resolve(p) }
 
                );
        });
    }

    AyarlariKaydet()
    {
        this.af.object(this.donemBasePath + "/Ayarlar").set(
           this.Ayarlar
        )

        this.grupElememanSayilari=this.Ayarlar.VarsayilanGrupBolunme;
        
    }

    async grupTabAktif()
    {
        if (this.grupMacTarih.length == 10) {
            this.aktifOyuncular=await this.PuanSiraliOyunculariGetirHaftadan(this.hafta,this.grupMacTarih);
        }
    }

    MacFoyuGetir(): Promise<MacFoy> {
        return new Promise<MacFoy>(resolve=> {
            this.af.object<MacFoy>(this.macfoyPath)
                   .valueChanges()
                   .subscribe(p =>{ 
                   
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

    PuanSiraliOyunculariGetirHaftadan(_hafta:number, _tarih:string): Promise<Oyuncu[]> {

        var zamanSayi=this.macFoyServis.parseDateDMY(_tarih).getTime() ;

        return new Promise<Oyuncu[]>(resolve=> {
            this.af.list<Oyuncu>(this.oyuncularPath)
                .valueChanges()
                .subscribe(p =>
                { 
                    var sonuc =  new List<Oyuncu>(p)
                            .Where(o => this.macFoyServis.parseDateDMY(o.BaslamaTarihi).getTime() <= zamanSayi &&
                                        this.macFoyServis.parseDateDMY(o.AyrilisTarihi).getTime() >= zamanSayi)
                            .Select(o=>
                                {
                                    if(o.Haftalar==undefined) o.Haftalar=[];

                                    if(o.Haftalar[_hafta]==undefined) 
                                        o.Haftalar[_hafta]=new HaftaPuan(o.BaslamaPuan,0,o.BaslamaPuan);

                                return o
                                
                                })
                            .OrderByDescending(o=>o.Haftalar[_hafta].ToplamPuan)
                            .ThenByDescending(o=>o.Haftalar[_hafta].AlinanTPuan)
                            .ThenBy(o=>this.padLeft( o.Dogum_Yili.toString(),4))
                            .ToArray();
                
                    return resolve(sonuc)

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

            from(liste)
            .pipe(scan((x, y) => x + y))
            .subscribe(c => listeBirikimli.push(c));


            let baslangicIndex: number = grup_inx == 0 ? 0 : listeBirikimli[grup_inx - 1];


            var puanSiraliOncekiHafta=await this.PuanSiraliOyunculariGetirHaftadan(this.hafta-1,this.grupMacTarih)
         
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



    macFoySkorlariGuncelle(kendiSatir: MacSatir, aktifSutunKey: number) {

        let aktifSatirIndex =  this.aktifMacFoy.Mac_Satirlari.indexOf(kendiSatir);
        let rakipSatir =  this.aktifMacFoy.Mac_Satirlari[aktifSutunKey - 1];

        let rakipSutun = 'C' + (aktifSatirIndex + 1).toString();
        let kendiSutun = 'C' + aktifSutunKey.toString();

        let kendiSkorDetay=kendiSatir[kendiSutun];
        let rakipSkorDetay=rakipSatir[rakipSutun];

        let skor_kendi = kendiSkorDetay.Skor;
      
        let karsilikliHukmenMi: boolean = skor_kendi.indexOf('(') >= 0;

        skor_kendi = skor_kendi.replace('(', '').replace(')', '');
        let skor_rakip=this.SkoruTersCevir(skor_kendi);
       

        let puan_kendi = this.macFoyServis.hesapla(kendiSatir.MO_Puan, rakipSatir.MO_Puan, skor_kendi);
        let puan_rakip = this.macFoyServis.hesapla(rakipSatir.MO_Puan, kendiSatir.MO_Puan, skor_rakip);

        let skor_rakip_kh='(' + skor_kendi.toString() + ')';
        let puan_rakip_kh = this.macFoyServis.hesapla(rakipSatir.MO_Puan, kendiSatir.MO_Puan, skor_kendi);


        kendiSkorDetay.Puan = puan_kendi;

        this.SkorDetayGuncelle(rakipSkorDetay,'xx',skor_rakip, puan_rakip, ' background-color: yellow;', "");

        if (karsilikliHukmenMi)
            this.SkorDetayGuncelle(rakipSkorDetay,'xx', skor_rakip_kh, puan_rakip_kh, ' background-color: yellow;', "K.H.");

        this.macFoySolGuncelle();
    }


    public SkorDetayGuncelle(skorDetay:SkorDetay,oyuncuKod:string,skor:string,puan:number,sitil:string,aciklama:string)
    {
        skorDetay.OyuncuKod=oyuncuKod;
        skorDetay.Skor=skor,
        skorDetay.Puan=puan,
        skorDetay.Sitil=sitil,
        skorDetay.Aciklama=aciklama
    }

    macFoySolGuncelle(): void {

        let alinanPuan: number = 0;
        let oyuncuInx: number = 0;

        for (let _Satir of this.aktifMacFoy.Mac_Satirlari) {
            let alinanPuan = 0;

            oyuncuInx = 0;
            for (let _col of this.aktifMacFoy.EklenenOyuncuAdlari) {
                oyuncuInx++;
                alinanPuan = alinanPuan + _Satir['C' + oyuncuInx].Puan;
            }

            _Satir.AlinanTPuan = alinanPuan;

            // toplarken yanyana yazıyordu o yüzden
            _Satir.MS_Puan = parseInt(_Satir.MO_Puan.toString()) +parseInt(alinanPuan.toString());
        }
    }

    SkoruTersCevir(s: string) {

        if (s === '__') { return s; };

        let items = s.split('-');
        return items[1] + '-' + items[0];
    }


    kaydet() {

        // let dialogRef = this._dialog.open(DialogContent, { width: '400px', height: '200px' });

        var _macFoyPath=this.macfoyPath;
        var _aktifMacFoy= this.aktifMacFoy;

               
        this.af.object(_macFoyPath).set(_aktifMacFoy);

        var listOyuncu= new List<Oyuncu>(this.aktifOyuncular);
        var oyuncularHaftaRef =  this.af.list<Oyuncu>(this.oyuncularPath);

        for (let Satir of  this.aktifMacFoy.Mac_Satirlari) 
        {
            var oyuncu= listOyuncu.Where(c=>c.OyuncuAdSoyad==Satir.OyuncuAdSoyad).First();
            
            if( oyuncu.Haftalar===undefined) oyuncu.Haftalar=[];
        
            oyuncu.Haftalar[this.hafta]=new HaftaPuan(Satir.MO_Puan,Satir.AlinanTPuan,Satir.MS_Puan);
            oyuncularHaftaRef.update(oyuncu["key"],oyuncu);
        }
        this._snackbar.open('Kayıt işlemi yapıldı', '', { duration: 400 });
    }

    grupDegisti() {

        this._router.navigateByUrl(this.macfoyBasePath + "/" + this.hafta + "/" + this.grup);
    }

    haftaDegisti() {

        this._router.navigateByUrl(this.macfoyBasePath + "/" + this.hafta + "/" + this.grup);
    }

    MacSil(_Satir: MacSatir) {

        var colIndex =  this.aktifMacFoy.Mac_Satirlari.indexOf(_Satir);
        var colCount =  this.aktifMacFoy.Mac_Satirlari.length;


        for (let Satir of  this.aktifMacFoy.Mac_Satirlari) {
            for (let i = colIndex + 1; i < colCount; i++) {
                Satir["C" + i] = Satir["C" + (i + 1)];
            }

            Satir['C' + colCount] = null;

        }

        this.aktifMacFoy.EklenenOyuncuAdlari.splice(colIndex, 1);
        let _inx: number = 0;

        this.aktifMacFoy.Mac_Satirlari.splice(colIndex, 1);

    }

    satirKonumDegistir(Satir: MacSatir, indexYon: number) {
        var index = this.aktifMacFoy.Mac_Satirlari.indexOf(Satir);

        var eskiSatirIndex = index;
        var aktifSatirIndex = index + indexYon;

        if (aktifSatirIndex >= this.aktifMacFoy.Mac_Satirlari.length || aktifSatirIndex == -1) {

            alert("Bu işlemi gerçekleştiremezsiniz");
            return;
        }

        let element: MacSatir = this.aktifMacFoy.Mac_Satirlari[eskiSatirIndex];


        this.aktifMacFoy.Mac_Satirlari.splice(index, 1);
        this.aktifMacFoy.Mac_Satirlari.splice(index + indexYon, 0, element);

        let elementy: string = this.aktifMacFoy.EklenenOyuncuAdlari[index];
        this.aktifMacFoy.EklenenOyuncuAdlari.splice(index, 1);
        this.aktifMacFoy.EklenenOyuncuAdlari.splice(index + indexYon, 0, elementy);

        var sutunIndex1 = aktifSatirIndex;
        var sutunIndex2 = aktifSatirIndex + 1;

        if (indexYon == -1) {
            sutunIndex1 = aktifSatirIndex + 1 + 1;
            sutunIndex2 = aktifSatirIndex + 1;
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


    MacaGelmedi(_Satir: MacSatir) {
        let inx: number = 0;
        if (_Satir.VarMi == false) {
            _Satir.VarMi = true;

            for (let _oy of this.aktifMacFoy.EklenenOyuncuAdlari) {
                inx++;
                if (_Satir['C' + inx].Skor != 'X-X') {
                    _Satir['C' + inx].Aciklama = "";
                    _Satir['C' + inx].Skor = "__";
                }

                this.macFoySkorlariGuncelle(_Satir, inx);

            }

            return;
        }

        _Satir.VarMi = false;

        var satirIndex =this.aktifMacFoy.Mac_Satirlari.indexOf(_Satir);

        for (let _oy of this.aktifMacFoy.EklenenOyuncuAdlari) {
            inx++;
            if (_Satir['C' + inx].Skor != 'X-X') {
                _Satir['C' + inx].Skor = this.Ayarlar.MacaGelmemeSkoru;

                if (_Satir.VarMi == false && this.aktifMacFoy.Mac_Satirlari[inx - 1].VarMi == false) {
                    _Satir['C' + (inx)].Skor = `(${this.Ayarlar.MacaGelmemeSkoru})`;
                    _Satir['C' + (inx)].Aciklama = "K.H.";

                    this.aktifMacFoy.Mac_Satirlari[inx - 1]["C" + (satirIndex + 1)].Aciklama = "K.H.";
                }

                this.macFoySkorlariGuncelle(_Satir, inx);
            }
        }

        _Satir.VarMi = false;



    }



    MacOncesiPuanGuncellendi(selectedSatir: MacSatir) {
        let aktifSatirIndex = this.aktifMacFoy.Mac_Satirlari.indexOf(selectedSatir);
        let rakipSutun = 'C' + (aktifSatirIndex + 1).toString();

        for (let _Satir of this.aktifMacFoy.Mac_Satirlari) {
            this.macFoySkorlariGuncelle(_Satir, aktifSatirIndex + 1);
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

    BonusDegisti(_Satir: MacSatir) {

        _Satir.MS_Puan = _Satir.MO_Puan + _Satir.AlinanTPuan + _Satir.BonusPuan;
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
