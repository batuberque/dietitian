import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { renderIcon } from '../../lib/ui/IconUtils';

const Header: React.FC = () => {
  const location = useLocation();
  const menuRef = useRef<HTMLElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState<string | boolean>(false);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  }, []);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header ref={menuRef}>
      <div className="header bg-gray-100 p-4 shadow-md fixed top-0 w-full">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="logo">
            <span className="text-xl font-bold text-gray-700 shadow-sm font-serif">
              <Link to={'/'}>TORA VİNÇ & İNŞAAT</Link>
            </span>
          </div>

          <div className="md:hidden">
            <button className="text-2xl" onClick={toggleMenu}>
              {renderIcon('TfiAlignJustify')}
            </button>
          </div>

          <div
            className={`w-full md:flex md:items-center md:w-auto ${
              !isMenuOpen ? 'hidden' : ''
            }`}
          >
            <div className="text-md md:flex-grow">
              <Link
                to={'/'}
                className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-800 mr-4 shadow-sm font-serif"
              >
                ANA SAYFA
              </Link>
              <Link
                to={'/vision'}
                className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-800 mr-4 shadow-sm font-serif"
              >
                VİZYONUMUZ
              </Link>
              <Link
                to={'/project'}
                className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-800 mr-4 shadow-sm font-serif"
              >
                PROJELER
              </Link>
              <Link
                to={'/service'}
                className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-800 mr-4 shadow-sm font-serif"
              >
                HİZMETLERİMİZ
              </Link>
              <Link
                to={'/contact'}
                className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-800 shadow-sm font-serif"
              >
                İLETİŞİM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
