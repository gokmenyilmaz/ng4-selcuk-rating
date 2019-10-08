
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { List } from 'linqts';
import { FormsModule, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';

import { Oyuncu, MacSatir, HaftaPuan } from '../../models/entityAll';
import { PuanTabloItem, SkorDetay } from '../../models/entityAll';



import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-oyuncu-list',
  templateUrl: './oyuncu-list.component.html',
  styleUrls: ['./oyuncu-list.component.css']
})
export class OyuncuListComponent implements OnInit {

  oyuncularRef: AngularFireList<Oyuncu>;
  oyuncular: Observable<any[]>;

  _isEditMode:boolean;

  eklenecek_oyuncu: Oyuncu = null;

  klup: string;
  donem: string;

  constructor(private af: AngularFireDatabase, private activatedRoute: ActivatedRoute) {

    this._isEditMode=false;
  };

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => this.klup = params.klup);
    this.activatedRoute.params.subscribe((params) => this.donem = params.donem);

    this.oyuncularRef = this.af.list<Oyuncu>(`/${this.klup}/${this.donem}/Oyuncular/`);


    this.oyuncular = this.oyuncularRef.snapshotChanges().pipe(
      map(changes => 
         changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.YeniOyuncuOlustur();

  }

  OyuncuEkle() {

    this.oyuncularRef = this.af.list<any>(`/${this.klup}/${this.donem}/Oyuncular/`);
    
    this.eklenecek_oyuncu.Haftalar[0].AlinanTPuan=0;
    this.eklenecek_oyuncu.Haftalar[0].MacOncesiPuan=this.eklenecek_oyuncu.BaslamaPuan;
    this.eklenecek_oyuncu.Haftalar[0].ToplamPuan=this.eklenecek_oyuncu.BaslamaPuan;

    const newKey=this.oyuncularRef.push(this.eklenecek_oyuncu).key;
    
    this.eklenecek_oyuncu["key"]=newKey;
    this.oyuncularRef.update(newKey,this.eklenecek_oyuncu);

    

    this.YeniOyuncuOlustur();

  }


  YeniOyuncuOlustur() {
    var d = new Date();
    var d1 = new Date(); d1.setFullYear(2020);

    this.eklenecek_oyuncu = new Oyuncu(" ",1500, 
                          d.toLocaleDateString("tr-TR"), d1.toLocaleDateString("tr-TR"), 1970,
                          [ new HaftaPuan(1500,0,1500)])

  }

  OyuncuSil(key:string)
  {
      
    this.oyuncularRef.remove(key);
  }

  OyuncuGuncelle(key:string,oyuncu:Oyuncu)
  {
    oyuncu.Haftalar[0].MacOncesiPuan=oyuncu.BaslamaPuan;
    oyuncu.Haftalar[0].AlinanTPuan=0;
    oyuncu.Haftalar[0].ToplamPuan=oyuncu.BaslamaPuan;
    
    this.oyuncularRef.update(key,oyuncu);
  }

}



