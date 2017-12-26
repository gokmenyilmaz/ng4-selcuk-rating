import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable'
import { Oyuncu, Ayarlar } from 'app/Models/entityAll';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  oyuncularRef: AngularFireList<Oyuncu>;


  klup: string;
  donem: string;
  grupElememanSayilari = "";
  macagelmediSkoru="1-3";

  klup_url: string=null;


  constructor( private af: AngularFireDatabase) { }

  ngOnInit() {
    
  }

  RatingGrupOlustur()
  {
      var _donemBasePath=`/${this.klup}/${this.donem}`
      var _ayarlar=new Ayarlar(this.grupElememanSayilari,this.macagelmediSkoru);


      this.af.object(_donemBasePath + "/Ayarlar").set( _ayarlar );

      this.klup_url=  _donemBasePath;



  }
}
