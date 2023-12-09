import React from 'react';

type LoadingFullscreenProps = {
  loading?: boolean;
};

export const LoadingFullscreen: React.FC<LoadingFullscreenProps> = ({
  loading = false,
}) => {
  if (!loading) return null;

  return (
    <div style={styles.root}>
      <div>Yükleniyor...</div>
    </div>
  );
};

const styles = {
  root: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0, 0.1)',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 20,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as React.CSSProperties,
};
