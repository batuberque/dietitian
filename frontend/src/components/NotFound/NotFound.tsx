import { Link } from 'react-router-dom';
import transition from '../transition';

const NotFound = () => {
  return (
    <div className="max-w-md mx-auto mt-20 space-y-4">
      <h2>Üzgünüz, aradığınız sayfa bulunamadı !</h2>
      <p>
        İstediğiniz içeriğe ulaşılamıyor. Lütfen{' '}
        <Link
          className="text-blue-600 hover:text-blue-800 font-semibold underline"
          to="/"
        >
          ana sayfaya
        </Link>{' '}
        dönün.
      </p>
    </div>
  );
};

export default transition(NotFound);
