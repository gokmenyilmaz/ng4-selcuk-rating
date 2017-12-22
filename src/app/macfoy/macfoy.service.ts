import { Injectable } from '@angular/core';

interface IPuanBilgi {
    Diff: number;
    x4_0: number;
    x0_4: number;
    x3_1: number;
    x1_3: number;
    x2_2: number;
}

@Injectable()
export class MacFoyService {

    puanListObj: { [key: number]: IPuanBilgi; } = {};

    constructor() {
        this.puanlariTanimla();

    }

    puanlariTanimla(): void {
        this.puanListObj[50] = { Diff: 50, x4_0: 50, x0_4: 50, x3_1: 25, x1_3: 25, x2_2: 0 };
        this.puanListObj[150] = { Diff: 150, x4_0: 46, x0_4: 63, x3_1: 21, x1_3: 32, x2_2: 4 };
        this.puanListObj[250] = { Diff: 250, x4_0: 42, x0_4: 76, x3_1: 17, x1_3: 39, x2_2: 8 };
        this.puanListObj[350] = { Diff: 350, x4_0: 38, x0_4: 89, x3_1: 13, x1_3: 46, x2_2: 12 };
        this.puanListObj[450] = { Diff: 450, x4_0: 34, x0_4: 102, x3_1: 9, x1_3: 53, x2_2: 16 };
        this.puanListObj[550] = { Diff: 550, x4_0: 30, x0_4: 115, x3_1: 5, x1_3: 60, x2_2: 20 };
        this.puanListObj[650] = { Diff: 650, x4_0: 26, x0_4: 128, x3_1: 1, x1_3: 67, x2_2: 24 };
        this.puanListObj[750] = { Diff: 750, x4_0: 22, x0_4: 141, x3_1: -3, x1_3: 74, x2_2: 28 };
        this.puanListObj[850] = { Diff: 850, x4_0: 18, x0_4: 154, x3_1: -7, x1_3: 81, x2_2: 32 };
        this.puanListObj[950] = { Diff: 950, x4_0: 14, x0_4: 167, x3_1: -11, x1_3: 88, x2_2: 36 };
        this.puanListObj[1050] = { Diff: 1050, x4_0: 10, x0_4: 180, x3_1: -15, x1_3: 95, x2_2: 40 };
        this.puanListObj[1150] = { Diff: 1150, x4_0: 6, x0_4: 193, x3_1: -19, x1_3: 102, x2_2: 44 };
        this.puanListObj[10000] = { Diff: 10000, x4_0: 2, x0_4: 206, x3_1: -23, x1_3: 109, x2_2: 48 };
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


        mutlakfarkPuanAralik = this.PuanAralikBul(mutlakfark);
        reytingiYuksekOyuncu = this.IsaretDegerUclu(puanfarki);

        if (reytingiYuksekOyuncu === 1 && (macSonuc === '4-0')) { macSonucAlan = 'x4_0'; carpan = 1; }
        if (reytingiYuksekOyuncu === 1 && (macSonuc === '3-1')) { macSonucAlan = 'x3_1'; carpan = 1; }
        if (reytingiYuksekOyuncu === 1 && (macSonuc === '2-2')) { macSonucAlan = 'x2_2'; carpan = -1; }
        if (reytingiYuksekOyuncu === 1 && (macSonuc === '1-3')) { macSonucAlan = 'x1_3'; carpan = -1; }
        if (reytingiYuksekOyuncu === 1 && (macSonuc === '0-4')) { macSonucAlan = 'x0_4'; carpan = -1; }


        if (reytingiYuksekOyuncu === 2 && (macSonuc === '4-0')) { macSonucAlan = 'x0_4'; carpan = 1; }
        if (reytingiYuksekOyuncu === 2 && (macSonuc === '3-1')) { macSonucAlan = 'x1_3'; carpan = 1; }
        if (reytingiYuksekOyuncu === 2 && (macSonuc === '2-2')) { macSonucAlan = 'x2_2'; carpan = 1; }
        if (reytingiYuksekOyuncu === 2 && (macSonuc === '1-3')) { macSonucAlan = 'x3_1'; carpan = -1; }
        if (reytingiYuksekOyuncu === 2 && (macSonuc === '0-4')) { macSonucAlan = 'x4_0'; carpan = -1; }

        alinanPuan = this.puanListObj[mutlakfarkPuanAralik][macSonucAlan] * carpan;



        return alinanPuan;

    }

    IsaretDegerUclu(sayi: number) {
        if (sayi > 0) { return 1; }
        if (sayi === 0) { return 1; }
        if (sayi < 0) { return 2; }

    }

    PuanAralikBul(_mutlakfark: number): number {
        for (let item in this.puanListObj) {
            if (_mutlakfark <= parseInt(item)) { return parseInt(item); }
        }
        return 0;
    }

    parseDateDMY(input: string): Date {
        var parts = input.split('.');
        return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    }



}