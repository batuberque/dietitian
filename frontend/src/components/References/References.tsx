/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import translation from '../transition';

import logo1 from '../../assets/abb.png';
import logo2 from '../../assets/jti.png';
import logo3 from '../../assets/vestel.png';
import logo4 from '../../assets/abb.png';
import logo5 from '../../assets/jti.png';
import logo6 from '../../assets/vestel.png';

const images = [
  { id: 1, src: logo1, alt: 'Şirket Logosu 1' },
  { id: 2, src: logo2, alt: 'Şirket Logosu 2' },
  { id: 3, src: logo3, alt: 'Şirket Logosu 3' },
  { id: 4, src: logo4, alt: 'Şirket Logosu 4' },
  { id: 5, src: logo5, alt: 'Şirket Logosu 5' },
  { id: 6, src: logo6, alt: 'Şirket Logosu 6' },
  { id: 7, src: logo6, alt: 'Şirket Logosu 6' },
  { id: 8, src: logo6, alt: 'Şirket Logosu 6' },
  { id: 9, src: logo6, alt: 'Şirket Logosu 6' },
];

const References = () => {
  return (
    <div className="max-w-full mx-auto mt-20 px-4 md:px-6 pb-5">
      <h4 className="text-center text-2xl font-bold text-gray-700 mb-1 shadow-sm font-serif">
        REFERANSLARIMIZ
      </h4>
      <div className="flex flex-row flex-wrap justify-center items-center gap-16">
        {images.map((image) => (
          <div key={image.id} className="hover:scale-125 transition-transform">
            <img
              src={image.src}
              alt={image.alt}
              className="h-40 md:h-48 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default translation(References);
