import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="header bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <span className="text-xl font-bold text-gray-700">
            <Link to={'/'}>DİYETİSYEN UYGULAMASI</Link>
          </span>
        </div>
        <div className="titles flex gap-4">
          <span className="text-lg text-gray-600 hover:text-gray-800 transition duration-300">
            <Link to={'/post'}>Postlar</Link>
          </span>
          <span className="text-lg text-gray-600 hover:text-gray-800 transition duration-300">
            Sayfalar
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
