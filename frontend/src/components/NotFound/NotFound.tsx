import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="max-w-md mx-auto mt-20 space-y-4">
      <h2>Üzgünüz, aradığınız sayfa bulunamadı !</h2>
      <p>
        İstediğiniz içeriğe ulaşılamıyor. Lütfen <Link to="/">ana sayfaya</Link>{' '}
        dönün.
      </p>
    </div>
  );
};

export default NotFound;
