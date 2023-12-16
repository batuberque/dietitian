/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { renderIcon } from './IconUtils';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="w-full h-auto"
      />
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        {renderIcon('IoCaretBackSharp')}
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        {renderIcon('IoCaretForward')}
      </button>
    </div>
  );
};

export default ImageSlider;
