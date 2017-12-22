import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MacFoyService } from '../macfoy.service';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { List } from 'linqts/dist/linq';
import { FormsModule, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { Oyuncu, MacSatir, MacFoy } from '../../Models/entityAll';
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

    constructor(
        private macFoyServis: MacFoyService,
        private af: AngularFireDatabase,
        private _route: ActivatedRoute,
        private _dialog: MatDialog,
        private _snackbar: MatSnackBar,
        private activatedRoute: ActivatedRoute
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

        this.macfoyPath = `/${this.klup}/${this.yil}/MacFoy/${this.hafta}/${this.grup}`;
        this.oyuncularPath = `/${this.klup}/${this.yil}/Oyuncular`;
        let bugun = new Date(Date.now()).toLocaleDateString("tr-TR")

        var _aktifMacFoy=await this.MacFoyuGetir();

        if(_aktifMacFoy==null)
        {
            var macFoyRef=this.af.object(this.macfoyPath);
            var yeniMacFoy=new MacFoy(bugun,this.grupElememanSayilari);
            yeniMacFoy.eklenenOyuncular=[];
            yeniMacFoy.mac_rows=[];

            yeniMacFoy.Tarih=bugun;
            
            macFoyRef.set(yeniMacFoy);

            this.aktifMacFoy=yeniMacFoy;
        }
        else{

            if(_aktifMacFoy.eklenenOyuncular===undefined) _aktifMacFoy.eklenenOyuncular=[];
            if(_aktifMacFoy.mac_rows===undefined) _aktifMacFoy.mac_rows=[];

            this.aktifMacFoy=_aktifMacFoy;
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


    macFoyeOyuncuEkle(_oyuncu: Oyuncu) {

        let macSayisi = this.aktifMacFoy.mac_rows.length + 1;

        let mx: MacSatir = new MacSatir(this.grup, 1, _oyuncu.OyuncuAdSoyad, _oyuncu.BaslamaPuan, 0, _oyuncu.BaslamaPuan,
            null, null, null, null, null, null, null, null, null, true, 0);

        this.aktifMacFoy.mac_rows.push(mx);


        for (var i = 1; i <= macSayisi; i++) {
            mx["C" + i] = new SkorDetay(_oyuncu.OyuncuAdSoyad, '__', 0, null, '');
        }

        let index: number = 0;

        for (let mac of this.aktifMacFoy.mac_rows) {
            index = index + 1;
            mac["C" + macSayisi] = new SkorDetay(_oyuncu.OyuncuAdSoyad, '__', 0, null, '');

            if (macSayisi == index) mac["C" + macSayisi].Skor = 'X-X';
        }

        this.aktifMacFoy.eklenenOyuncular.push(_oyuncu);

        this.eklenecekOyuncu = new Oyuncu('', 0);

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
