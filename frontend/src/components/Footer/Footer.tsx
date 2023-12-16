import React from 'react';
import { renderIcon } from '../../lib/ui/IconUtils';

const Footer: React.FC = () => {
  return (
    <div className="footer bg-gray-200 p-4 shadow-up-md w-full mt-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-sm font-light text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} TORA VİNÇ & İNŞAAT. Tüm hakları
            saklıdır.
          </span>
        </div>

        <div className="contact-info flex gap-4 justify-center mb-4 md:mb-0">
          <a
            href="tel:+123456789"
            className="text-gray-600 hover:text-gray-800 transition duration-300 flex items-center"
          >
            {renderIcon('BsFillTelephoneFill')}{' '}
            <span className="ml-2">+90 545 545 45 45</span>
          </a>
          <a
            href="mailto:toravincinsaat@gmail.com"
            className="text-gray-600 hover:text-gray-800 transition duration-300 flex items-center"
          >
            {renderIcon('IoMdMail')}{' '}
            <span className="ml-2">toravincinsaat@gmail.com</span>
          </a>
        </div>

        <div className="social flex gap-4 justify-center">
          <a
            href="https://facebook.com"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            {renderIcon('FaFacebookF')}
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            {renderIcon('FaTwitter')}
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            {renderIcon('FaInstagram')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
