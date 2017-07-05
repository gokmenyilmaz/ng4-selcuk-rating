
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { List } from 'linqts/dist/linq';
import { FormsModule, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { Oyuncu, MacSatir } from '../../Models/entityAll';
import { PuanTabloItem, SkorDetay } from '../../Models/entityAll';

import {MdDialog, MdDialogRef,MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-oyuncu-list',
  templateUrl: './oyuncu-list.component.html',
  styleUrls: ['./oyuncu-list.component.css']
})
export class OyuncuListComponent implements OnInit {

   oyuncular: FirebaseListObservable<Oyuncu[]>;
  
  constructor( private af: AngularFireDatabase) {

        this.oyuncular=this.af.list('/Selcuk/Oyuncular/');

           var d = new Date();

          // this.eklenecek_oyuncu=new Oyuncu("Koray Er",1500,d.toLocaleDateString(),d.toLocaleDateString(),'D',1970);

      };

  ngOnInit() {


  }

  OyuncuEkle(){
    
     

      //this.oyuncular.push( this.eklenecek_oyuncu);
   
  }

}



