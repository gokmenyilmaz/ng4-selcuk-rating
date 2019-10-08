import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';

import { Oyuncu, MacSatir } from '../models/entityAll';
import { PuanTabloItem, SkorDetay } from '../models/entityAll';

@Injectable()
export class OyuncuService {

 constructor(private af: AngularFireDatabase) {

    }

    OyunculariGetir(): AngularFireList<Oyuncu[]> {
        return this.af.list('/Selcuk/Oyuncular');

    }

    OyuncuGetir(id: number): object {
        return this.af.object('/Selcuk/Oyuncular/' + id);

    }

   oyuncuVarMi(adsoyad:string)
   {
      
    //    return this.af.list('/Selcuk/Oyuncular/',
    //    {
    //        query: {
    //             orderByChild: 'OyuncuAdSoyad',
    //             equalTo: adsoyad
    //         }
    //    })
   }

    OyuncuKaydet(oyuncu: Oyuncu, key: number) {

        return this.af.object('/Selcuk/Oyuncular/' + key.toString())
        .update({
            "OyuncuAdSoyad":oyuncu.OyuncuAdSoyad,
            "AyrilisTarihi":oyuncu.AyrilisTarihi,
            "BaslamaPuan":oyuncu.BaslamaPuan,
            "Dogum_Yili":oyuncu.Dogum_Yili,
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
