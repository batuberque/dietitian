import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="header bg-gray-100 p-4 shadow-md fixed top-0 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="logo mb-4 md:mb-0">
          <span className="text-xl font-bold text-gray-700">
            <Link to={'/'}>TORA VİNÇ & İNŞAAT</Link>
          </span>
        </div>

        <div className="titles flex flex-col md:flex-row gap-4">
          <span className="text-lg text-gray-600 hover:text-gray-800 transition duration-300">
            <Link to={'/'}>ANA SAYFA</Link>
          </span>
          <span className="text-lg text-gray-600 hover:text-gray-800 transition duration-300">
            <Link to={'/vision'}>VİZYONUMUZ</Link>
          </span>
          <span className="text-lg text-gray-600 hover:text-gray-800 transition duration-300">
            <Link to={'/post'}>POSTLAR</Link>
          </span>
          <span className="text-lg text-gray-600 hover:text-gray-800 transition duration-300">
            <Link to={'/contact'}>İLETİŞİM</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
