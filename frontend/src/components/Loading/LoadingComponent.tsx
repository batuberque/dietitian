import React from 'react';
import { motion } from 'framer-motion';

const LoadingFullscreen: React.FC = () => {
  return (
    <motion.div
      style={styles.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={styles.text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        TORA VİNÇ & İNŞAAT
      </motion.div>
    </motion.div>
  );
};

const styles = {
  root: {
    position: 'fixed',
    backgroundColor: '#0f0f0f',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as React.CSSProperties,
  text: {
    color: 'white',
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'center',
  } as React.CSSProperties,
};

export default LoadingFullscreen;
