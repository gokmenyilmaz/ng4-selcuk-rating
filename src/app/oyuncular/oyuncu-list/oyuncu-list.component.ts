
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { List } from 'linqts/dist/linq';
import { FormsModule, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { Oyuncu, MacSatir } from '../../Models/entityAll';
import { PuanTabloItem, SkorDetay } from '../../Models/entityAll';

import {MatDialog, MatDialogRef,MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-oyuncu-list',
  templateUrl: './oyuncu-list.component.html',
  styleUrls: ['./oyuncu-list.component.css']
})
export class OyuncuListComponent implements OnInit {

   oyuncular: AngularFireList<Oyuncu[]>;
   eklenecek_oyuncu:Oyuncu=null;
  
  constructor( private af: AngularFireDatabase) {

        this.oyuncular=this.af.list('/Selcuk/Oyuncular/');

      this.OyuncuVarsayilanDegerler();

         

      };

  ngOnInit() {


  }

  OyuncuEkle(){
      this.oyuncular.push(this.eklenecek_oyuncu);

        this.OyuncuVarsayilanDegerler();
     
  }


  OyuncuVarsayilanDegerler()
  {
      var d = new Date();
      var d1=new Date();d1.setFullYear(2020);

      this.eklenecek_oyuncu=new Oyuncu(" ",1500,d.toLocaleDateString(),d1.toLocaleDateString(),'D',1970)
  
  }

}



