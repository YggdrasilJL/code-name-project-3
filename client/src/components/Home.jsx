import React from 'react';
import ParticleEffect from './ParticleEffect';

const Home = () => {
  const homeStyle = {
    background: 'url("/images/background.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // full screen
  };

  return (
    <div style={homeStyle}>
      <div className="relative bg-cover bg-center bg-no-repeat h-screen">
        <ParticleEffect />
        <main className="bg-opacity-80 p-4 relative z-10">
          {/* Your text content goes here */}
        </main>
      </div>
    </div>
  );
};

export default Home;
