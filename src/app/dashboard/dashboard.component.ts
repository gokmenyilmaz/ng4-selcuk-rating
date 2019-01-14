import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase  } from '@angular/fire/database';

import { Observable } from 'rxjs'
import { Oyuncu, Ayarlar } from 'app/Models/entityAll';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  oyuncularRef: Observable<Oyuncu>;


  klup: string;
  donem: string;
  grupElememanSayilari = "";
  macagelmediSkoru="1-3";
  ratingSistemKodu:0;

  klup_url: string=null;


  constructor( private af: AngularFireDatabase) { }

  ngOnInit() {
    
  }

  RatingGrupOlustur()
  {
      var _donemBasePath=`/${this.klup.toLocaleLowerCase()}/${this.donem.toLocaleLowerCase()}`
      var _ayarlar=new Ayarlar(this.grupElememanSayilari,this.macagelmediSkoru,this.ratingSistemKodu);


      this.af.object(_donemBasePath + "/Ayarlar").set( _ayarlar );

      this.klup_url=  _donemBasePath + "/macfoy/1/A";



  }
}
