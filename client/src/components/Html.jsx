import React from 'react';
import ParticleEffect from './ParticleEffect';

const Html = () => {
  const neonSignStyle = {
    color: '#FF00F2', // Neon pink color
    fontSize: '2rem',
    textTransform: 'uppercase',
    letterSpacing: '8px',
    fontWeight: 'bold',
    textShadow: '0 0 10px #FF00F2',
  };

  return (
    <div style={htmlStyle}>
      <ParticleEffect />
      <div style={neonSignStyle}>COMING SOON</div>
    </div>
  );
}

export default Html;
