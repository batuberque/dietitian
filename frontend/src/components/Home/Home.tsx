import translation from '../transition';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="container mx-auto mt-36">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-700 mb-4 shadow-sm font-serif">
          TORA VİNÇ İNŞAAT
        </h1>
        <p className="text-xl text-gray-500">
          İnşaat ve Vinç Hizmetlerinizde Güvenilir Çözüm Ortağınız
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <div className="max-w-lg">
          <img
            src="/assets/1.jpg"
            alt="TORA VİNÇ İNŞAAT"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-3xl font-semibold text-gray-700">Hizmetlerimiz</h2>
        <p className="text-gray-500 mt-2">
          Yüksek kaliteli ve güvenilir inşaat ve vinç hizmetleri sunuyoruz.
        </p>
      </div>

      <div className="text-center mt-10">
        <button
          className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-600"
          onClick={handleContactClick}
        >
          Bizimle İletişime Geçin
        </button>
      </div>
    </div>
  );
};

export default translation(Home);
