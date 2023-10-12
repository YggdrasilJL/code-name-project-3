import React from 'react';

const Home = () => {
  const homeStyle = {
    background: 'url("/images/background.jpg")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // full screen
  };

  return (
    <div style={homeStyle}>
      <main className="bg-opacity-80 p-4">
        {/* text here if we want to add anything  */}
      </main>
    </div>
  );
};

export default Home;
