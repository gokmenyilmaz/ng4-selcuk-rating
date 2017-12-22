export class Oyuncu {
    constructor(
        public OyuncuAdSoyad: string,
        public BaslamaPuan: number,
        public BaslamaTarihi?: string,
        public AyrilisTarihi?: string,
        public GuncelGrup?: string,
        public Dogum_Yili?: number
    )
    { }
}

export class PuanTabloItem {
    constructor(
        public OyuncuAdSoyad: string,
        public MO_Puan: number,
        public AlinanPuan: number,
        public MS_Puan: number,
        public Grup: string,
        public Dogum_Yili: number
    )
    { }
}


export class SkorDetay {
    constructor(
        public OyuncuKod: string,
        public Skor: string,
        public Puan: number,
        public Sitil: string,
        public Aciklama: string
        )
    { }
}

export class MacFoy {
    constructor(
        public Tarih: string,
        public GrupElemanSayilari: string,
       
        public Mac_Satirlari:MacSatir[]=[],
        public EklenenOyuncuAdlari:string[]=[]
    )
    {
   
    }
}


export class MacSatir {
    constructor(
        public GrupId: string,
        public HaftaId: number,
        public OyuncuAdSoyad: string,
        public MO_Puan: number,
        public AlinanTPuan: number,
        public MS_Puan: number,
        public C1: SkorDetay,
        public C2: SkorDetay,
        public C3: SkorDetay,
        public C4: SkorDetay,
        public C5: SkorDetay,
        public C6: SkorDetay,
        public C7: SkorDetay,
        public C8: SkorDetay,
        public C9: SkorDetay,

        public VarMi: boolean,
        public BonusPuan: number
    )
    { }

   


}
