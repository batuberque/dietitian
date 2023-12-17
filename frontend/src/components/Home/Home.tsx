import translation from '../transition';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="container mx-auto mt-24">
      <div className="text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
          <img
            src="/assets/png.png"
            alt="Logo"
            className="h-20 w-20 self-center rounded-lg"
          />
          <h1 className="text-4xl font-bold text-gray-700 shadow-sm font-serif self-center">
            TORA VİNÇ & İNŞAAT
          </h1>
        </div>
        <p className="text-xl text-gray-500 p-6">
          İnşaat ve Vinç Hizmetlerinizde Güvenilir Çözüm Ortağınız
        </p>
      </div>

      <div className="flex justify-center mt-1 space-y-4 px-4 md:px-6">
        <div className="max-w-lg">
          <img
            src="/assets/1.jpg"
            alt="TORA VİNÇ İNŞAAT"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="text-center mt-5 space-y-4 px-4 md:px-6">
        <h2 className="text-center text-2xl font-bold text-gray-700 mb-1 shadow-sm font-serif">
          Hizmetlerimiz
        </h2>
        <p className="text-gray-500 mt-2">
          Yüksek kaliteli ve güvenilir inşaat ve vinç hizmetleri sunuyoruz.
        </p>
      </div>

      <div className="text-center mt-5 mb-5">
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
