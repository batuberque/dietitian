/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { renderIcon } from '../../lib/ui/IconUtils';
import useScrollPosition from '../../lib/hooks/useScrollPosition';
import { useAnimation, motion } from 'framer-motion';

const NavBar: React.FC = () => {
  const location = useLocation();
  const scrollY = useScrollPosition();
  const controls = useAnimation();

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

  useEffect(() => {
    if (scrollY > 50) {
      controls.start({ scale: 0.95 });
    } else {
      controls.start({ scale: 1 });
    }
  }, [scrollY, controls]);

  return (
    <motion.nav animate={controls} initial={{ scale: 1 }}>
      <nav
        ref={menuRef}
        className="bg-gray-100 p-4 shadow-md fixed top-0 w-full z-50"
      >
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 mr-4">
              <span>
                <Link to={'/'}>
                  {' '}
                  <img
                    src={'/assets/png.png'}
                    alt="logo"
                    className="ml-2 rounded-md"
                  />
                </Link>
              </span>
            </div>
            <span className="text-xl font-bold text-gray-700 font-serif">
              <Link to={'/'}>TORA VİNÇ & İNŞAAT</Link>
            </span>
          </div>

          <div className="text-2xl lg:hidden">
            <button onClick={toggleMenu}>
              {renderIcon({
                iconType: 'TfiAlignJustify',
                sizeClass: 'text-xl',
              })}
            </button>
          </div>

          <div
            className={`w-full lg:flex lg:items-center lg:w-auto ${
              !isMenuOpen ? 'hidden' : ''
            }`}
          >
            <Link
              to={'/'}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4 shadow-sm font-serif"
            >
              ANA SAYFA
            </Link>

            <Link
              to={'/about'}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4 shadow-sm font-serif"
            >
              HAKKIMIZDA
            </Link>

            <Link
              to={'/project'}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4 shadow-sm font-serif"
            >
              PROJELERİMİZ
            </Link>
            <Link
              to={'/service'}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4 shadow-sm font-serif"
            >
              HİZMETLERİMİZ
            </Link>

            <Link
              to={'/references'}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4 shadow-sm font-serif"
            >
              REFERANSLAR
            </Link>

            <Link
              to={'/contact'}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 shadow-sm font-serif"
            >
              İLETİŞİM
            </Link>
          </div>
        </div>
      </nav>
    </motion.nav>
  );
};

export default NavBar;
