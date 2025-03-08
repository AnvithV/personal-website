'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function ParticleBackground() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#6b7280'
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.2,
            random: false
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#6b7280',
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return <div id="particles-js" className="fixed inset-0 -z-10" />;
} 