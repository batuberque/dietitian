import translation from '../transition';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReferenceSlider from '../../lib/ui/referenceSlider';

const Home = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/contact');
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative h-screen">
      <img
        src="/assets/vinc1.jpeg"
        alt="Full Screen Background"
        className="object-cover w-full h-full"
      />

      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-start container mx-auto px-4 md:px-6 mb-20"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white font-serif mb-4 hover:text-gray-200"
          whileHover={{ scale: 1.03 }}
        >
          TORA VİNÇ & İNŞAAT
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white mb-6 hover:text-gray-200"
          whileHover={{ scale: 1.03 }}
        >
          İnşaat ve Vinç Hizmetlerinizde Güvenilir Çözüm Ortağınız
        </motion.p>

        <motion.h2
          className="text-2xl md:text-3xl font-bold text-white mb-2 font-serif hover:text-gray-200"
          whileHover={{ scale: 1.03 }}
        >
          <Link to={'/service'}>HİZMETLERİMİZ</Link>
        </motion.h2>
        <motion.p
          className="text-white text-lg md:text-xl mb-8 hover:text-gray-200"
          whileHover={{ scale: 1.03 }}
        >
          Yüksek kaliteli ve güvenilir inşaat ve vinç hizmetleri sunuyoruz.
        </motion.p>

        <motion.button
          className="bg-transparent text-white px-5 py-2 border border-white rounded hover:bg-gray-700 hover:border-transparent"
          onClick={handleContactClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Bizimle İletişime Geçin
        </motion.button>
      </motion.div>
      <div className="absolute bottom-0 w-full">
        <ReferenceSlider />
        <hr className="border-t border-gray-300 w-full" />
      </div>
    </div>
  );
};

export default translation(Home);
