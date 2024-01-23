import { renderIcon } from './IconUtils';
import useStore from '../../store/useStore';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const { currentIndex, isChanging, setCurrentIndex, setIsChanging } =
    useStore();

  const changeImage = (newIndex: number) => {
    setIsChanging(true);
    setCurrentIndex(newIndex);
    setTimeout(() => {
      setIsChanging(false);
    }, 380);
  };

  const nextImage = () => {
    changeImage((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    changeImage((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt={`${currentIndex + 1}`}
        className={`w-full max-h-screen h-3/5 object-cover transition-opacity duration-500 ${
          isChanging ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        {renderIcon({
          iconType: 'IoCaretBackSharp',
          sizeClass: 'text-lg',
        })}
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        {renderIcon({
          iconType: 'IoCaretForward',
          sizeClass: 'text-lg',
        })}
      </button>
    </div>
  );
};

export default ImageSlider;
