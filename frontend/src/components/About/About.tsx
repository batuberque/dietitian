import translation from '../transition';

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-24">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-center text-2xl font-bold text-gray-700 mb-0 shadow-sm font-serif">
            HAKKIMIZDA
          </h2>
          <p className="text-gray-700">
            TORA VİNÇ İNŞAAT, 2015 yılında İzmir’de kurulmuş, mühendislik ve
            inşaat sektöründe faaliyet gösteren bir firmadır. Firmamız, kaliteli
            hizmet anlayışı, müşteri odaklı yaklaşımı ve çevre dostu projeleri
            ile sektörde öncü bir konumda yer almaktadır. Şirketimizin kurucusu
            MEHMET TORA, 38 yıllık meslek hayatında birçok önemli projeye imza
            atmıştır. Ayrıca, şirketimizde inşaat mühendisi olarak görev yapan
            VATAN BARIŞ TORA, projelerimizin teknik yönetiminde önemli rol
            oynamaktadır.
          </p>
          <h3 className="text-center text-lg font-bold text-gray-700 shadow-sm font-serif">
            MİSYONUMUZ
          </h3>
          <p className="text-gray-700">
            Misyonumuz, inşaat sektöründe yüksek standartlarda projeler üreterek
            müşteri memnuniyetini en üst seviyeye çıkarmak, çevreye duyarlı ve
            sürdürülebilir yapılar inşa etmektir.
          </p>
          <h3 className="text-center text-lg font-bold text-gray-700 mb-1 shadow-sm font-serif">
            DEĞERLERİMİZ
          </h3>
          <ul className="text-gray-700 list-disc pl-5">
            <li>Yenilikçilik: Sektördeki yenilikleri yakından takip ederiz.</li>
            <li>
              Kalite: Tüm projelerimizde en yüksek kalite standartlarını
              hedefleriz.
            </li>
            <li>
              Sürdürülebilirlik: Çevre dostu uygulamalarla gelecek nesillere
              katkıda bulunuruz.
            </li>
            <li>
              Müşteri Memnuniyeti: Müşteri ihtiyaçlarını her zaman ön planda
              tutarız.
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 lg:pl-10 mt-5 pb-5">
          <img
            src="/assets/y0.jpeg"
            alt="TORA VİNÇ İNŞAAT"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
