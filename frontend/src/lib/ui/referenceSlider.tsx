/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { motion } from 'framer-motion';

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
  { id: 7, src: logo6, alt: 'Şirket Logosu 7' },
  { id: 8, src: logo6, alt: 'Şirket Logosu 8' },
  { id: 9, src: logo6, alt: 'Şirket Logosu 9' },
  { id: 1, src: logo1, alt: 'Şirket Logosu 1' },
  { id: 2, src: logo2, alt: 'Şirket Logosu 2' },
  { id: 3, src: logo3, alt: 'Şirket Logosu 3' },
  { id: 4, src: logo4, alt: 'Şirket Logosu 4' },
  { id: 5, src: logo5, alt: 'Şirket Logosu 5' },
  { id: 6, src: logo6, alt: 'Şirket Logosu 6' },
  { id: 7, src: logo6, alt: 'Şirket Logosu 7' },
  { id: 8, src: logo6, alt: 'Şirket Logosu 8' },
  { id: 9, src: logo6, alt: 'Şirket Logosu 9' },
];

const sliderVariants = {
  animate: {
    x: ['-100%', '100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 30,
        ease: 'linear',
      },
    },
  },
  initial: { x: '-100%' },
};

const ReferenceSlider = () => {
  return (
    <div className="bg-gray-100 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={image.alt}
            className="h-24 mx-4 object-contain"
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ReferenceSlider;
