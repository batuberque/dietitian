/* eslint-disable react/display-name */
import { motion } from 'framer-motion';

const transition = (OgComponent: React.ComponentType) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: '#0f0f0f',
          transformOrigin: 'bottom',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '1.3em',
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        TORA VİNÇ&İNŞAAT
      </motion.div>
      <motion.div
        className="slide-out"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: '#0f0f0f',
          transformOrigin: 'top',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '1.3em',
        }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        TORA VİNÇ&İNŞAAT
      </motion.div>
    </>
  );
};

export default transition;
