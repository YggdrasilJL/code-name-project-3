import React from 'react';
import ParticleEffect from './ParticleEffect';

const Home = () => {
  return (
    <div className="text-white text-5xl text-center flex flex-col items-center justify-center">
      <div className="mt-52 max-w-screen-2xl avoid-particle">
        <h1 className="text-cyber-yellow font-semibold">
          STEP INTO THE WORLD OF <span className='text-6xl'>CYBERSCRIPT</span> A CYBERPUNK THEMED
          PLATFORM FOR MASTERING THE FUNDAMENTALS OF WEB DEVELOPMENT.
        </h1>
      </div>
      <div className="flex justify-around mt-96 w-full text-4xl">
        <div className="w-fit hover:scale-150 duration-500">
          <a
            href="/register"
            className="border border-cyber-yellow p-5 rounded-md rounded-br-3xl bg-cyber-black avoid-particle"
          >
            REGISTER_
          </a>
        </div>
        <div className="w-fit hover:scale-150 duration-500">
          <a
            href="/login"
            className="border border-cyber-yellow p-5 rounded-md rounded-br-3xl bg-cyber-black avoid-particle"
          >
            LOG_IN
          </a>
        </div>
      </div>
      <ParticleEffect />
    </div>
  );
};

export default Home;
