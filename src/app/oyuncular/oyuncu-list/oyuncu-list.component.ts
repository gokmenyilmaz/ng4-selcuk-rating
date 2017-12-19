
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { List } from 'linqts/dist/linq';
import { FormsModule, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';

import { Oyuncu, MacSatir } from '../../Models/entityAll';
import { PuanTabloItem, SkorDetay } from '../../Models/entityAll';

import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';

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

  club: string;
  yil: number;

  constructor(private af: AngularFireDatabase, private activatedRoute: ActivatedRoute) {

    this._isEditMode=true;
  };

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => this.club = params.club);
    this.activatedRoute.params.subscribe((params) => this.yil = params.yil);

    this.oyuncularRef = this.af.list<Oyuncu>(`/${this.club}/${this.yil}/Oyuncular/`);

    this.oyuncular = this.oyuncularRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });


    this.OyuncuVarsayilanDegerler();

  }

  OyuncuEkle() {
    this.oyuncularRef.push(this.eklenecek_oyuncu);

    this.OyuncuVarsayilanDegerler();

  }


  OyuncuVarsayilanDegerler() {
    var d = new Date();
    var d1 = new Date(); d1.setFullYear(2020);

    this.eklenecek_oyuncu = new Oyuncu(" ", 1500, d.toLocaleDateString(), d1.toLocaleDateString(), 'A', 1970)

  }

  OyuncuSil(key:string)
  {
      
    this.oyuncularRef.remove(key);
  }

  OyuncuGuncelle(key:string,oyuncu:Oyuncu)
  {
    this.oyuncularRef.update(key,oyuncu);
  }

}



