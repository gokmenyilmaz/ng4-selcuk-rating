import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { Oyuncu, MacSatir } from '../Models/entityAll';
import { PuanTabloItem, SkorDetay } from '../Models/entityAll';

@Injectable()
export class OyuncuService {

 constructor(private af: AngularFireDatabase) {

    }

    OyunculariGetir(): FirebaseListObservable<Oyuncu[]> {
        return this.af.list('/Selcuk/Oyuncular');

    }

    OyuncuGetir(id: number): FirebaseObjectObservable<Oyuncu> {
        return this.af.object('/Selcuk/Oyuncular/' + id)

            ;

    }

   oyuncuVarMi(adsoyad:string)
   {
      
       return this.af.list('/Selcuk/Oyuncular/',
       {
           query: {
                orderByChild: 'OyuncuAdSoyad',
                equalTo: adsoyad
            }
       })
   }

    OyuncuKaydet(oyuncu: Oyuncu, key: number) {

        return this.af.object('/Selcuk/Oyuncular/' + key.toString())
        .update({
            "OyuncuAdSoyad":oyuncu.OyuncuAdSoyad,
            "AyrilisTarihi":oyuncu.AyrilisTarihi,
            "BaslamaPuan":oyuncu.BaslamaPuan,
            "Dogum_Yili":oyuncu.Dogum_Yili,
            "GuncelGrup":oyuncu.GuncelGrup,
            "BaslamaTarihi":oyuncu.BaslamaTarihi,
            
            
        });
           
    }

    OyuncuEkle(oyuncu: Oyuncu) {
        return this.af.list('/Selcuk/Oyuncular')
            .push(oyuncu);
          
    }

    OyuncuSil(oyuncu: Oyuncu) {
            
        return this.af.list('/Selcuk/Oyuncular')
            .remove(oyuncu['$key']);
              
       
    }

}
