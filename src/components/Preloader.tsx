'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [split, setSplit] = useState(false);

  useEffect(() => {
    // Check if session has already loaded preloader
    const hasVisited = sessionStorage.getItem('abraham_loaded');
    if (hasVisited) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setSplit(true), 150);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('abraham_loaded', 'true');
          }, 600);
          return 100;
        }
        // Realistic fast progressive easing
        const step = Math.floor(Math.random() * 25) + 12;
        return Math.min(prev + step, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        split ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 pointer-events-auto'
      }`}
      aria-hidden="true"
    >
      {/* Top Split Shutter */}
      <div
        className={`absolute top-0 left-0 right-0 h-1/2 bg-[#05090C] border-b border-[#74E023]/20 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          split ? '-translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Bottom Split Shutter */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-[#05090C] border-t border-[#74E023]/20 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          split ? 'translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Central Brand Identity & Progress Content */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300 ${
          split ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="relative w-20 h-20 mb-6 rounded-2xl overflow-hidden border border-[#74E023]/40 shadow-[0_0_30px_rgba(116,224,35,0.3)] animate-pulse">
          <Image
            src="/assets/brand/logo/logo.svg"
            alt="Abraham Arts Studio Logo"
            fill
            priority
            className="object-contain p-2"
          />
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white">
            ABRAHAM
          </span>
          <span className="font-extrabold text-lg sm:text-xl tracking-wider text-[#74E023]">
            ARTS STUDIO
          </span>
        </div>

        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#859CA7] mb-6">
          3D MODELLING &bull; ANIMATION &bull; CGI
        </p>

        {/* Precision Progress Bar */}
        <div className="w-56 sm:w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-3 border border-white/5">
          <div
            className="h-full bg-[#74E023] rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_#74E023]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between w-56 sm:w-64 text-xs font-mono text-[#859CA7]">
          <span>INITIALIZING WORKSPACE</span>
          <span className="text-[#74E023] font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
