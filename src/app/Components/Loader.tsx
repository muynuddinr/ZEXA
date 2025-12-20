'use client';

import { useState, useEffect } from 'react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden w-screen h-screen">
      {/* Simple background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-teal-400/30 via-teal-300/20 to-teal-400/30 rounded-full mix-blend-multiply filter blur-3xl" style={{ willChange: 'transform' }}></div>
      </div>

      {/* Main zoom animation container */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        {/* ZEXO text */}
        <div className="absolute animate-zoom-expand" style={{ willChange: 'transform, opacity' }}>
          <h1 className="text-[4rem] md:text-[7rem] font-black text-center leading-none" style={{ color: '#08b48d' }}>
            ZƎXO
          </h1>
        </div>

        {/* AGENCY text */}
        <div className="absolute animate-zoom-expand-delay translate-y-24" style={{ willChange: 'transform, opacity' }}>
          <p className="text-center text-sm md:text-base font-light tracking-[0.25em]" style={{ color: '#08b48d' }}>
            AGENCY
          </p>
        </div>
      </div>

      {/* Fade overlay */}
      <div className="fixed inset-0 pointer-events-none animate-fade-out-simple opacity-20 bg-gradient-to-b from-teal-400/10 via-transparent to-teal-400/10"></div>

      <style jsx>{`
        @keyframes zoom-expand {
          0% {
            opacity: 1;
            transform: scale(0.4);
          }
          55% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scale(4.5);
          }
        }

        @keyframes zoom-expand-delay {
          0% {
            opacity: 0;
            transform: scale(0.4) translateY(-20px);
          }
          12% {
            opacity: 1;
          }
          55% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scale(4.5) translateY(-20px);
          }
        }

        @keyframes fade-out-simple {
          0% {
            opacity: 0.3;
          }
          65% {
            opacity: 0.3;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-zoom-expand {
          animation: zoom-expand 3.2s ease-out forwards;
        }

        .animate-zoom-expand-delay {
          animation: zoom-expand-delay 3.2s ease-out forwards;
        }

        .animate-fade-out-simple {
          animation: fade-out-simple 3.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
