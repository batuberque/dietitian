import translation from '../transition';

const Vision = () => {
  return (
    <div className="max-w-md mx-auto mt-20 space-y-4 text-center">
      <h2 className="text-center text-2xl font-bold text-gray-700 mb-5 shadow-sm font-serif">
        VİZYONUMUZ
      </h2>
      <p className="text-gray-600 space-y-4 px-4 md:px-6">
        &quot;Sürdürülebilir ve yenilikçi çözümlerle inşaat sektöründe öncü
        olmak ve kaliteli hizmetlerimizle müşteri memnuniyetini en üst düzeye
        çıkarmak.&quot;
      </p>
      <div className="mt-6 space-y-4 px-4 md:px-6">
        <img
          src="/assets/1.jpg"
          alt="Vizyonumuz"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="text-gray-500 mt-4 space-y-4 px-4 md:px-6">
        <p>Biz, TORA VİNÇ İNŞAAT olarak...</p>
        <ul className="list-disc list-inside ">
          <li>Yenilikçi ve çevre dostu yaklaşımlarımızla öne çıkarız.</li>
          <li>
            Müşteri ihtiyaçlarına özel, yüksek kalitede hizmetler sunarız.
          </li>
          <li>Topluma ve çevreye katkı sağlayan projeler geliştiririz.</li>
        </ul>
      </div>
    </div>
  );
};

export default translation(Vision);
