import React from 'react';
import ParticleEffect from './ParticleEffect';

const Css = () => {
  const cssStyle = {
    background: 'url("/images/background.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const neonSignStyle = {
    color: '#FF00F2', // Neon pink color
    fontSize: '2rem',
    textTransform: 'uppercase',
    letterSpacing: '8px',
    fontWeight: 'bold',
    textShadow: '0 0 10px #FF00F2',
  };

  return (
    <div style={cssStyle}>
      <ParticleEffect />
      <div style={neonSignStyle}>COMING SOON</div>
    </div>
  );
}

export default Css;
