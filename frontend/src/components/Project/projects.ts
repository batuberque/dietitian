export interface Project {
  id: number;
  name: string;
  images: string[];
  description?: string;
  subtitle?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Yeşildere Köprülü Kavşağı KARAYOLLARI 2.BÖLGE',
    images: ['/assets/y0.jpeg', '/assets/y1.jpg', '/assets/y2.jpg'],
    description:
      'İzmir içi ulaşımda Konak-Buca bağlantısını sağlayan İzmir-Buca tüneli devamında önemli bir yapıdır. Sadece Yeşildere Köprülü Kavşağı imalatı 16 ayda trafiğe açılmıştır. 2012/05- 2013/08 Konak bölgesi imalatları 2015 yılında tamamlanarak trafiğe açılmıştır. İşin Süresi : 2012/ Mayıs – 2015 / Mayıs',
    subtitle: 'Ana Firma: K-E İNŞAAT, Alt Taşeron: TORA VİNÇ İNŞAAT',
  },
  {
    id: 2,
    name: 'Ateşçelik-Rüzgar Enerji Santralleri için (RES)',
    images: ['/assets/ar0.jpeg'],
    description:
      'Ateş çelik firmasına ait rüzgar kuleleri ve çelik imalat fabrika yapılması İşin teslim Tarihi : 2011/Aralık',
    subtitle: 'AnaFirma: K-E İNŞAAT, Alt Taşeron: TORA VİNÇ İNŞAAT',
  },
  {
    id: 3,
    name: 'Akaryakıt Tankları, POAŞ ALİAĞA, MARMARA DEPOCULUK',
    images: ['/assets/3.jpeg'],
    description:
      'POAŞ Aliağa’da 10.000 m3 ve 5.000 m3 ‘lük muhtelif boyutlarda akaryakıt tank temelleri yapılması  Marmara Depoculuk Aş. Marmara Ereğli  22.000 m3 ve 7.000 m3’ lük muhtelif boyutlarda akaryakıt tank temelleri yapılması İşin Süresi : 2009/ Aralık – 2010/ Aralık',
    subtitle: 'Ana Firma: K-E İNŞAAT, Alt Taşeron: TORA VİNÇ İNŞAAT',
  },
  {
    id: 4,
    name: 'Alsancak-Liman Viyadükleri',
    images: ['/assets/4.jpg'],
    description:
      'Karayollarına bağlı Alsancak  liman viyadüklerinin revizyonlarının yapılıp tamamlanması Alsancağa bağlantı kollarının yapılması İşin Süresi  : 2011/ Ağustos',
    subtitle: 'Ana Firma: K-E İNŞAAT, Alt Taşeron: TORA VİNÇ İNŞAAT',
  },
  {
    id: 5,
    name: 'Hamdi Dalan Viyadüğü',
    images: ['/assets/5.jpg'],
    description:
      'Karayolları 2.Bölge Müdürlüğü’ne ait  Bornova Hamdi Dalan Viyadüğünün yapılması İşin Süresi : 2008 / Haziran – 2008 / Aralık ',
    subtitle: 'Ana Firma: K-E İNŞAAT, Alt Taşeron: TORA VİNÇ İNŞAAT',
  },
  {
    id: 6,
    name: 'İzmir-İstanbul Otoyolu ( İzmir-Akhisar arası )',
    images: ['/assets/5.jpg'],
    description:
      'İzmir-Akhisar arasında Gediz Nehri gibi büyük açıklıkların da olduğu viyadükler, alt geçit,  köprüler vs gibi sanat yapıları imalatları yapılması İşin Süresi : 2015 / Mayıs – 2018 / Ağustos ',
    subtitle: 'Ana Firma: K-E İNŞAAT, Alt Taşeron: TORA VİNÇ İNŞAAT',
  },
  {
    id: 7,
    name: 'VESTEL A.Ş.',
    images: ['/assets/5.jpg'],
    description:
      'BUZDOLABI FABRİKASI, ÇAMAŞIR MAKİNASI FABRİKASI, ÇİFT KATLI DEPO, DENİZLİ GÜZEL SANATLAR LİSESİ, HİGH END TV FABRİKASI, KLİMA FABRİKASI, PLASTİK ENJEKSİYON FABRİKASI, STRAFOR FABRİKASI, VESTELKOM EGE SERBEST BÖLGE EK BİNASI ',
    subtitle: 'Ana Firma: MŞB İNŞAAT, Alt Taşeron: TORA VİNÇ İNŞAAT',
  },
  {
    id: 8,
    name: 'MANİSA BELEDİYESİ / ÇOK KATLI YERALTI OTOPARKI',
    images: ['/assets/manisa-bel.jpeg'],
    subtitle: 'Ana Firma: MŞB İNŞAAT, Alt Taşeron: TORA VİNÇ İNŞAAT',
  },
  {
    id: 9,
    name: 'DELPHİ OTOMOTİV SİS. LTD. ŞTİ. / YENİ OFİS BİNASI',
    images: ['/assets/delphi.jpeg'],
    subtitle: 'Ana Firma: MŞB İNŞAAT, Alt Taşeron: TORA VİNÇ İNŞAAT',
  },
  {
    id: 10,
    name: 'STAR Aliağa Ege Rafinerisi Projesi',
    images: ['/assets/star-aliaga.jpeg'],
    subtitle: 'Ana Firma: GUNKON İNŞAAT, Alt Taşeron: TORA VİNÇ İNŞAAT',
  },
  {
    id: 11,
    name: 'Yorglass Cam Fabrikası Ek Bina',
    images: ['/assets/star-aliaga.jpeg'],
    subtitle: 'Ana Firma: ERPREFABRİK, Alt Taşeron: TORA VİNÇ İNŞAAT',
  },
  {
    id: 12,
    name: 'İzeltaş Makina Temelleri',
    images: ['/assets/star-aliaga.jpeg'],
    subtitle: 'Ana Firma: TORA VİNÇ İNŞAAT',
  },
  {
    id: 13,
    name: 'Verde Yağ Tank Temelleri',
    images: ['/assets/star-aliaga.jpeg'],
    subtitle: 'Ana Firma: TORA VİNÇ İNŞAAT',
  },
  {
    id: 14,
    name: 'Mosb İstinat Duvarları',
    images: ['/assets/star-aliaga.jpeg'],
    subtitle: 'Ana Firma: TORA VİNÇ İNŞAAT',
  },
  {
    id: 15,
    name: 'Dolce Vita Halı, Bornova Villa Tadilatı ve Kuşcular Villa İnşaatı',
    images: ['/assets/star-aliaga.jpeg'],
    subtitle: 'Ana Firma: TORA VİNÇ İNŞAAT',
  },
  {
    id: 16,
    name: 'Vision Yapı, Urla Çeşmealtı Butik Otel İnşaat',
    images: ['/assets/star-aliaga.jpeg'],
    subtitle: 'Ana Firma: TORA VİNÇ İNŞAAT',
  },
  {
    id: 17,
    name: 'VESTEL Makina Temelleri',
    images: ['/assets/star-aliaga.jpeg'],
    subtitle: 'Ana Firma: TORA VİNÇ İNŞAAT',
  },
  {
    id: 18,
    name: 'Vision Yapı Karaburun Villa İnşaat',
    images: ['/assets/star-aliaga.jpeg'],
    subtitle: 'Ana Firma: TORA VİNÇ İNŞAAT',
  },
  {
    id: 19,
    name: 'Bunge Gıda Aliağa Tank Temelleri',
    images: ['/assets/star-aliaga.jpeg'],
    subtitle: 'Ana Firma: TORA VİNÇ İNŞAAT',
  },
  {
    id: 20,
    name: 'İzmir Serbest Bölge, CMS Jant Ek Bina',
    images: ['/assets/star-aliaga.jpeg'],
    subtitle: 'Ana Firma: TORA VİNÇ İNŞAAT',
  },
  {
    id: 21,
    name: 'Mitsubishi Makina Temelleri',
    images: ['/assets/star-aliaga.jpeg'],
    subtitle: 'Ana Firma: TORA VİNÇ İNŞAAT',
  },
];
