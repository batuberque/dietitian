import React from 'react';
import { renderIcon } from '../../lib/ui/IconUtils';

const Footer: React.FC = () => {
  return (
    <div className="footer bg-gray-200 p-2 sm:p-4 shadow-up-md w-full">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <div className="mb-2 sm:mb-0">
          <span className="text-xs sm:text-sm font-light">
            © {new Date().getFullYear()} TORA VİNÇ & İNŞAAT. Tüm hakları
            saklıdır.
          </span>
        </div>

        <div className="contact-info flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mb-2 sm:mb-0">
          <a
            href="tel:+905333895972"
            className="text-gray-600 hover:text-gray-800 transition duration-300 flex items-center justify-center"
          >
            {renderIcon({
              iconType: 'BsFillTelephoneFill',
              sizeClass: 'text-md sm:text-lg',
            })}
            <span className="ml-1 sm:ml-2">+90 533 389 59 72</span>
          </a>
          <a
            href="mailto:toravincinsaat@gmail.com"
            className="text-gray-600 hover:text-gray-800 transition duration-300 flex items-center justify-center"
          >
            {renderIcon({
              iconType: 'IoMdMail',
              sizeClass: 'text-lg sm:text-2xl',
            })}
            <span className="ml-1 sm:ml-2">toravincinsaat@gmail.com</span>
          </a>
        </div>

        <div className="social flex gap-2 sm:gap-4 justify-center items-center">
          {/* <a
            href="https://facebook.com"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            {renderIcon({
              iconType: 'FaFacebookF',
              sizeClass: 'text-lg sm:text-xl',
            })}
          </a> */}
          {/* <a
            href="https://twitter.com"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            {renderIcon({
              iconType: 'FaTwitter',
              sizeClass: 'text-lg sm:text-xl',
            })}
          </a> */}
          <a
            href="https://instagram.com/toravincinsaat"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            {renderIcon({
              iconType: 'FaInstagram',
              sizeClass: 'text-lg sm:text-xl',
            })}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
