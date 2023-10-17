import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticleEffect = () => {
  // Initialize particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Callback for when particles are loaded
  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-full h-full absolute -z-10"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true }, // Cover the full screen
        background: {
          color: {
            value: '1.7',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onDiv: {
              enable: true,
              selectors: '.avoid-particle',
              mode: 'bounce',
              type: 'rectangle',
            },
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 80,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#FF00F2', // Neon pink
          },
          links: {
            color: '#FF00F2', // Neon pink
            distance: 200,
            enable: true,
            opacity: 0.7, // Adjust opacity for a glowing effect
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'random',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1, // speed for  movement
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 1.7, // glowing effect
          },
          shape: {
            type: 'char', // shape of the connections here
            options: {
              character: {
                value: ['0', '1', '</>', '<div/>', '{}'],
              },
            },
          },
          size: {
            value: { min: 5, max: 10 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleEffect;
