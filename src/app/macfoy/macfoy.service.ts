import { Injectable } from '@angular/core';
import { AngularFireDatabase  } from '@angular/fire/database';
import { Ayarlar } from 'app/Models/entityAll';

interface IPuanBilgi {
    Diff: number;
    x4_0: number;
    x0_4: number;
    x3_1: number;
    x1_3: number;
    x2_2: number;
    x3_0: number;
    x0_3: number;

    x3_2: number;
    x2_3: number;
}

@Injectable()
export class MacFoyService {

    puanListObj: { [key: number]: IPuanBilgi; } = {};

    puanListObj2: { [key: number]: IPuanBilgi; } = {};

    ratingSistemKod:number;

    constructor() {
        
    }

    puanlariTanimla(ratingSistemKod:number): void {

        this.ratingSistemKod=ratingSistemKod;

        if(ratingSistemKod==1)
        {
            this.puanListObj[50] = { Diff: 50, x4_0: 50, x0_4: 50, x3_1: 25, x1_3: 25, x2_2: 0,x3_0:0,x0_3:0,x3_2:0,x2_3:0 };
            this.puanListObj[150] = { Diff: 150, x4_0: 46, x0_4: 63, x3_1: 21, x1_3: 32, x2_2: 4,x3_0:0,x0_3:0,x3_2:0,x2_3:0 };
            this.puanListObj[250] = { Diff: 250, x4_0: 42, x0_4: 76, x3_1: 17, x1_3: 39, x2_2: 8,x3_0:0,x0_3:0,x3_2:0,x2_3:0 };
            this.puanListObj[350] = { Diff: 350, x4_0: 38, x0_4: 89, x3_1: 13, x1_3: 46, x2_2: 12,x3_0:0,x0_3:0,x3_2:0,x2_3:0 };
            this.puanListObj[450] = { Diff: 450, x4_0: 34, x0_4: 102, x3_1: 9, x1_3: 53, x2_2: 16,x3_0:0,x0_3:0,x3_2:0,x2_3:0 };
            this.puanListObj[550] = { Diff: 550, x4_0: 30, x0_4: 115, x3_1: 5, x1_3: 60, x2_2: 20,x3_0:0,x0_3:0,x3_2:0,x2_3:0 };
            this.puanListObj[650] = { Diff: 650, x4_0: 26, x0_4: 128, x3_1: 1, x1_3: 67, x2_2: 24,x3_0:0,x0_3:0,x3_2:0,x2_3:0 };
            this.puanListObj[750] = { Diff: 750, x4_0: 22, x0_4: 141, x3_1: -3, x1_3: 74, x2_2: 28,x3_0:0,x0_3:0,x3_2:0,x2_3:0 };
            this.puanListObj[850] = { Diff: 850, x4_0: 18, x0_4: 154, x3_1: -7, x1_3: 81, x2_2: 32,x3_0:0,x0_3:0,x3_2:0,x2_3:0 };
            this.puanListObj[950] = { Diff: 950, x4_0: 14, x0_4: 167, x3_1: -11, x1_3: 88, x2_2: 36,x3_0:0,x0_3:0,x3_2:0,x2_3:0 };
            this.puanListObj[1050] = { Diff: 1050, x4_0: 10, x0_4: 180, x3_1: -15, x1_3: 95, x2_2: 40,x3_0:0,x0_3:0,x3_2:0,x2_3:0 };
            this.puanListObj[1150] = { Diff: 1150, x4_0: 6, x0_4: 193, x3_1: -19, x1_3: 102, x2_2: 44,x3_0:0,x0_3:0,x3_2:0,x2_3:0 };
            this.puanListObj[10000] = { Diff: 10000, x4_0: 2, x0_4: 206, x3_1: -23, x1_3: 109, x2_2: 48,x3_0:0,x0_3:0,x3_2:0,x2_3:0 };
    
        }
       
        if(ratingSistemKod==2)
        {
            this.puanListObj2[12] = { Diff: 12,   x4_0: 0, x0_4: 0, x3_1: 8, x1_3: 8,  x2_2: 0,x3_0:8,x0_3:8 ,x3_2: 8, x2_3: 8  };
            this.puanListObj2[37] = { Diff: 37,   x4_0: 0, x0_4: 0, x3_1: 7, x1_3: 10, x2_2: 0,x3_0:7,x0_3:10 , x3_2: 7, x2_3: 10};
            this.puanListObj2[62] = { Diff: 62,   x4_0: 0, x0_4: 0, x3_1: 6, x1_3: 13, x2_2: 0,x3_0:6,x0_3:13 ,x3_2: 6, x2_3: 13};
            this.puanListObj2[87] = { Diff: 87,   x4_0: 0, x0_4: 0, x3_1: 5, x1_3: 16, x2_2: 0,x3_0:5,x0_3:16, x3_2: 5, x2_3: 16 };
            this.puanListObj2[112] = { Diff: 112, x4_0: 0, x0_4: 0, x3_1: 4, x1_3: 20, x2_2: 0,x3_0:4,x0_3:20, x3_2: 4, x2_3: 20 };
            this.puanListObj2[137] = { Diff: 137, x4_0: 0, x0_4: 0, x3_1: 3, x1_3: 25, x2_2: 0,x3_0:3,x0_3:25, x3_2: 3, x2_3:25};
            this.puanListObj2[162] = { Diff: 162, x4_0: 0, x0_4: 0, x3_1: 2, x1_3: 30, x2_2: 0,x3_0:2,x0_3:30,  x3_2: 2, x2_3: 30 };
            this.puanListObj2[187] = { Diff: 187, x4_0: 0, x0_4: 0, x3_1: 2, x1_3: 35, x2_2: 0,x3_0:2,x0_3:35,  x3_2: 2, x2_3: 35 };
            this.puanListObj2[212] = { Diff: 212, x4_0: 0, x0_4: 0, x3_1: 1, x1_3: 40, x2_2: 0,x3_0:1,x0_3:40,  x3_2:1, x2_3: 40};
            this.puanListObj2[237] = { Diff: 237, x4_0: 0, x0_4: 0, x3_1: 1, x1_3: 45, x2_2: 0,x3_0:1,x0_3:45, x3_2: 1, x2_3: 45, };
            this.puanListObj2[1000] = { Diff:900, x4_0: 0, x0_4: 0, x3_1: 0, x1_3: 50, x2_2: 0,x3_0:0,x0_3:50, x3_2: 0, x2_3: 50, };
          
        }
    }


    hesapla(oyuncu1_puan: number, oyuncu2_puan: number, macSonuc: string): number {

        if (macSonuc === '__' || macSonuc === 'X-X') { return 0 };

        let reytingiYuksekOyuncu: number;
        let alinanPuan = 0;

        let puanfarki = oyuncu1_puan - oyuncu2_puan;
        let mutlakfark = Math.abs(puanfarki);

        let macSonucAlan = '';
        let mutlakfarkPuanAralik = 0;

        let carpan = 0;


        mutlakfarkPuanAralik = this.PuanAralikBul(mutlakfark,this.ratingSistemKod);
        reytingiYuksekOyuncu = this.IsaretDegerUclu(puanfarki);

        if (reytingiYuksekOyuncu === 1 && (macSonuc === '4-0')) { macSonucAlan = 'x4_0'; carpan = 1; }
        if (reytingiYuksekOyuncu === 1 && (macSonuc === '3-1')) { macSonucAlan = 'x3_1'; carpan = 1; }
        if (reytingiYuksekOyuncu === 1 && (macSonuc === '2-2')) { macSonucAlan = 'x2_2'; carpan = -1; }
        if (reytingiYuksekOyuncu === 1 && (macSonuc === '1-3')) { macSonucAlan = 'x1_3'; carpan = -1; }
        if (reytingiYuksekOyuncu === 1 && (macSonuc === '0-4')) { macSonucAlan = 'x0_4'; carpan = -1; }

        if (reytingiYuksekOyuncu === 1 && (macSonuc === '3-0')) { macSonucAlan = 'x3_0'; carpan = 1; }
        if (reytingiYuksekOyuncu === 1 && (macSonuc === '0-3')) { macSonucAlan = 'x0_3'; carpan = -1; }


        if (reytingiYuksekOyuncu === 2 && (macSonuc === '4-0')) { macSonucAlan = 'x0_4'; carpan = 1; }
        if (reytingiYuksekOyuncu === 2 && (macSonuc === '3-1')) { macSonucAlan = 'x1_3'; carpan = 1; }
        if (reytingiYuksekOyuncu === 2 && (macSonuc === '2-2')) { macSonucAlan = 'x2_2'; carpan = 1; }
        if (reytingiYuksekOyuncu === 2 && (macSonuc === '1-3')) { macSonucAlan = 'x3_1'; carpan = -1; }
        if (reytingiYuksekOyuncu === 2 && (macSonuc === '0-4')) { macSonucAlan = 'x4_0'; carpan = -1; }

        if (reytingiYuksekOyuncu === 2 && (macSonuc === '3-0')) { macSonucAlan = 'x0_3'; carpan = 1; }
        if (reytingiYuksekOyuncu === 2 && (macSonuc === '0-3')) { macSonucAlan = 'x3_0'; carpan = -1; }

        if(this.ratingSistemKod==1)
            alinanPuan = this.puanListObj[mutlakfarkPuanAralik][macSonucAlan] * carpan;

            
        if(this.ratingSistemKod==2)
            alinanPuan = this.puanListObj2[mutlakfarkPuanAralik][macSonucAlan] * carpan;

        return alinanPuan;

    }

    IsaretDegerUclu(sayi: number) {
        if (sayi > 0) { return 1; }
        if (sayi === 0) { return 1; }
        if (sayi < 0) { return 2; }

    }

    PuanAralikBul(_mutlakfark: number, _ratingSistemKod:number): number {


        if(_ratingSistemKod==1)
        {

            for (let item in this.puanListObj) {
                if (_mutlakfark <= parseInt(item)) { return parseInt(item); }
            }
        }

        if(_ratingSistemKod==2)
        {

            for (let item in this.puanListObj2) {
                if (_mutlakfark <= parseInt(item)) { return parseInt(item); }
            }
        }




        return 0;
    }

    parseDateDMY(input: string): Date {
        // todlocaldate string veya textboxtan ilginç olarak bu karakterler geliyor

      input = input.replace(/\u200E/g, '');
   
        var parts = input.split('.');
        var yeniTarih=new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
        return yeniTarih;
    }


  

}