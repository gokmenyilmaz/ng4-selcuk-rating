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


    mac_rows: MacSatir[] = [];

    aktifOyuncular: Oyuncu[] = [];
    
    
    oyuncularRef: AngularFireList<Oyuncu>;

    oyuncularGruplu: Oyuncu[] = [];
    eklenenOyuncular: Oyuncu[] = [];

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

        this.aktifMacFoy=await this.MacFoyuGetir();

        if(this.aktifMacFoy==null)
        {
            var macFoyRef=this.af.object(this.macfoyPath);
            var yeniMacFoy=new MacFoy(bugun,this.grupElememanSayilari);
            macFoyRef.set(yeniMacFoy);
        }

        var z="11";
       
        // this.af.object<any>(this.macfoyPath)
        //     .valueChanges().subscribe(m => {

        //         this.mac_rows = m == null ? [] : m.Foy;

        //         this.grupMacTarih = m == null ? bugun : m.Tarih;

        //         this.oyunculariMacFoyuneYukle();
        // })


        // let bugun = new Date(Date.now()).toLocaleDateString("tr-TR");

        // var zamanSayi=this.macFoyServis.parseDateDMY(bugun).getTime() ;

        // var tumOyuncular=await this.TumOyunculariGetir();

    
        // this.aktifOyuncular=new List<Oyuncu>(tumOyuncular)
        //                     .OrderBy(o => o.OyuncuAdSoyad)
        //                     .Where(o => this.macFoyServis.parseDateDMY(o.BaslamaTarihi).getTime() <= zamanSayi)
        //                     .Where(o => this.macFoyServis.parseDateDMY(o.AyrilisTarihi).getTime() >= zamanSayi)
        //                     .ToArray();

        //   var c=23;

       
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


    // mactarihiDegisti() {
    //     if (this.grupMacTarih.length == 10) {
    //         this.oyunculariMacFoyuneYukle();
    //     }
    // }

   

    // oyunculariMacFoyuneYukle() {

    //     let macTarihTime = this.macFoyServis.parseDateDMY(this.grupMacTarih).getTime();

    //     for (let o of this.oyuncular) {
    //         if (o[this.hafta - 1] == undefined) {
    //             o[this.hafta - 1] = { AlinanPuan: 0, Grup: 1, ToplamPuan: o.BaslamaPuan };
    //         }

    //         if (o[this.hafta] == undefined) {
    //             o[this.hafta] = { AlinanPuan: 0, Grup: 1, ToplamPuan: o.BaslamaPuan };
    //         }
    //     }

    //     var foyOyunculari = new List<any>(Array.from(this.oyuncular))
    //         .OrderByDescending(o => o[this.hafta - 1].ToplamPuan)
    //         .ThenBy(o => o.Dogum_Yili)
    //         .ToArray();

    //     this.eklenenOyuncular = [];

    //     let i: number = -1;

    //     for (let mac of this.mac_rows) {
    //         i++;
    //         let oyuncu = foyOyunculari.find(x => x.OyuncuAdSoyad == mac.OyuncuAdSoyad);
    //         this.eklenenOyuncular.push(oyuncu);
    //     }

    //     this.eklenecekOyuncu = new Oyuncu('', 0);

    // }

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
