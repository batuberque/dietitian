import translation from '../transition';

const About = () => {
  return (
    <div className="max-w-md mx-auto mt-20 space-y-6 text-center">
      <h2 className="text-center text-2xl font-bold text-gray-700 mb-6 shadow-sm font-serif">
        HAKKIMIZDA
      </h2>
      <p className="text-gray-600">
        TORA VİNÇ İNŞAAT, [kuruluş yılı] yılında, inşaat sektöründe yenilikçi ve
        sürdürülebilir çözümler sunmak amacıyla kurulmuştur. Kaliteli hizmet
        anlayışı, müşteri odaklı yaklaşımı ve çevre dostu projeleri ile sektörde
        öncü bir konumda yer almaktadır.
      </p>
      <h3 className="text-lg font-semibold text-gray-700 mt-5 font-serif">
        MİSYONUMUZ
      </h3>
      <p className="text-gray-600">
        Misyonumuz, inşaat sektöründe yüksek standartlarda projeler üreterek,
        müşteri memnuniyetini en üst düzeye çıkarmak ve çevreye saygılı,
        sürdürülebilir yapılar inşa etmektir.
      </p>
      <h3 className="text-lg font-semibold text-gray-700 mt-5 font-serif">
        DEĞERLERİMİZ
      </h3>
      <ul className="text-gray-600 list-disc list-inside text-left mx-auto max-w-sm">
        <li>
          Yenilikçilik: Sektördeki gelişmeleri yakından takip eder, yenilikçi
          çözümler sunarız.
        </li>
        <li>
          Kalite: Her projemizde en yüksek kalite standartlarını hedefleriz.
        </li>
        <li>
          Sürdürülebilirlik: Çevre dostu uygulamalarımızla sürdürülebilir bir
          geleceğe katkıda bulunuruz.
        </li>
        <li>
          Müşteri Memnuniyeti: Müşterilerimizin ihtiyaçlarına yönelik
          özelleştirilmiş hizmetler sunarız.
        </li>
      </ul>
      <h3 className="text-lg font-semibold text-gray-700 mt-5 font-serif">
        BAŞARILARIMIZ VE PROJELERİMİZ
      </h3>
      <p className="text-gray-600">
        [Başarılarınız ve öne çıkan projeleriniz hakkında detaylı bilgi
        ekleyin.]
      </p>
    </div>
  );
};

export default translation(About);
