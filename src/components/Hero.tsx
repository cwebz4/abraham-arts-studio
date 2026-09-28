'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Play, Pause, ChevronRight, ChevronLeft, ArrowDown, Eye, Layers } from 'lucide-react';
import { heroMedia, HeroMediaItem } from '@/data/portfolio';

export default function Hero() {
  const [activeScene, setActiveScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const sceneTimerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const totalScenes = heroMedia.length;
  const currentItem = heroMedia[activeScene];

  // Mouse Parallax movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
    const y = (clientY / innerHeight - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  // Automated scene sequencer
  useEffect(() => {
    if (!isPlaying) {
      if (sceneTimerRef.current) clearInterval(sceneTimerRef.current);
      return;
    }

    const duration = currentItem.type === 'video' ? 7000 : 5500;

    sceneTimerRef.current = setTimeout(() => {
      handleNextScene();
    }, duration);

    return () => {
      if (sceneTimerRef.current) clearTimeout(sceneTimerRef.current);
    };
  }, [activeScene, isPlaying, currentItem]);

  const handleNextScene = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveScene((prev) => (prev + 1) % totalScenes);
      setIsTransitioning(false);
    }, 400);
  };

  const handlePrevScene = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveScene((prev) => (prev - 1 + totalScenes) % totalScenes);
      setIsTransitioning(false);
    }, 400);
  };

  const goToScene = (index: number) => {
    if (index === activeScene) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveScene(index);
      setIsTransitioning(false);
    }, 400);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#05090C] select-none perspective-2000"
      aria-label="Abraham Arts Studio Cinematic Hero"
    >
      {/* 3D Depth Matrix Background */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * -15}px, ${mouseOffset.y * -15}px, 0) scale(1.05)`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(116,224,35,0.15),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 scanlines opacity-30" />
      </div>

      {/* MULTI-SCENE 3D VIEWPORT CAROUSEL */}
      <div className="relative w-full h-full flex items-center justify-center">
        {heroMedia.map((item, index) => {
          const isActive = index === activeScene;
          const isNext = (index === (activeScene + 1) % totalScenes);
          const isPrev = (index === (activeScene - 1 + totalScenes) % totalScenes);

          // Calculate 3D transformation matrices based on scene position
          let transformStyle = '';
          let opacity = 0;
          let pointerEvents = 'none';

          if (isActive) {
            opacity = 1;
            pointerEvents = 'auto';
            // Scene 1: Camera push with mask reveal
            // Scene 2: 3D perspective depth with parallax
            // Scene 3: Crop-to-fullscreen video scale
            // Scene 4: Floating panels in 3D space
            // Scene 5: Studio montage perspective
            const depthPush = isTransitioning ? 'scale(1.08)' : 'scale(1.0)';
            const rotX = mouseOffset.y * -4;
            const rotY = mouseOffset.x * 6;
            transformStyle = `translate3d(${mouseOffset.x * 20}px, ${mouseOffset.y * 20}px, 0px) rotateX(${rotX}deg) rotateY(${rotY}deg) ${depthPush}`;
          } else if (isNext) {
            opacity = 0.15;
            transformStyle = 'translate3d(60px, 0px, -300px) rotateY(-15deg) scale(0.85)';
          } else if (isPrev) {
            opacity = 0.15;
            transformStyle = 'translate3d(-60px, 0px, -300px) rotateY(15deg) scale(0.85)';
          } else {
            opacity = 0;
            transformStyle = 'translate3d(0px, 0px, -600px) scale(0.6)';
          }

          return (
            <div
              key={item.id}
              className="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity,
                transform: transformStyle,
                pointerEvents: pointerEvents as any,
                zIndex: isActive ? 10 : 1,
              }}
            >
              {/* Cinematic Art Container */}
              <div
                className="relative w-[92vw] sm:w-[86vw] lg:w-[78vw] h-[65vh] sm:h-[72vh] rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)] border border-white/10 group"
                data-cursor={item.type === 'video' ? 'play' : 'view'}
              >
                {/* Media Renderer: Auto-detects Image or Video */}
                {item.type === 'video' ? (
                  <div className="relative w-full h-full bg-[#070D10]">
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                        if (el && isActive) {
                          el.play().catch(() => {});
                        } else if (el) {
                          el.pause();
                        }
                      }}
                      src={item.src}
                      poster={item.poster}
                      playsInline
                      muted
                      autoPlay={isActive}
                      loop
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070D10]/90 via-transparent to-black/30" />
                  </div>
                ) : (
                  <div className="relative w-full h-full bg-[#070D10]">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      priority={index === 0}
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070D10]/85 via-transparent to-black/25" />
                  </div>
                )}

                {/* Cinematic Vignette & Corner HUD Overlays */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#74E023]/20 text-[#74E023] border border-[#74E023]/40 backdrop-blur-md">
                    SCENE 0{index + 1} // {item.category.toUpperCase()}
                  </span>
                  <span className="hidden sm:inline text-xs font-mono text-white/60">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute top-6 right-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#74E023] animate-ping" />
                  <span className="text-[10px] font-mono text-[#74E023] tracking-widest">
                    4K LIVE VIEW
                  </span>
                </div>

                {/* Bottom Title Bar (Artistic & Minimal - not overwhelming the artwork) */}
                <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="max-w-xl">
                    <p className="text-xs font-mono text-[#74E023] tracking-widest uppercase">
                      ABRAHAM ARTS STUDIO PORTFOLIO
                    </p>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-lg">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#CBD5E1]/80 mt-1 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={item.category === '3D Models' ? '/portfolio/3d-models' : '/portfolio/3d-animations'}
                      className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#74E023] text-white hover:text-[#070D10] text-xs font-bold tracking-wider transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-transparent flex items-center gap-2 shadow-lg"
                    >
                      <Eye className="w-4 h-4" />
                      <span>DISCOVER</span>
                    </a>
                  </div>
                </div>

                {/* Delicate framing border */}
                <div className="absolute inset-0 rounded-3xl border border-white/15 pointer-events-none" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating 3D Perspective Depth Panels (Scene 4 visual aesthetic) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        <div
          className="absolute top-1/4 -left-12 w-48 h-64 rounded-2xl border border-white/10 bg-[#0E171C]/40 backdrop-blur-md opacity-30 hidden xl:block transition-transform duration-700"
          style={{
            transform: `translate3d(${mouseOffset.x * 35}px, ${mouseOffset.y * 35}px, 0) rotateY(30deg)`,
          }}
        />
        <div
          className="absolute bottom-1/4 -right-12 w-52 h-72 rounded-2xl border border-[#74E023]/20 bg-[#0E171C]/40 backdrop-blur-md opacity-30 hidden xl:block transition-transform duration-700"
          style={{
            transform: `translate3d(${mouseOffset.x * -40}px, ${mouseOffset.y * -40}px, 0) rotateY(-30deg)`,
          }}
        />
      </div>

      {/* BOTTOM CONTROLLER & SCENE SELECTOR */}
      <div className="absolute bottom-6 left-0 right-0 z-30 px-6 sm:px-12 flex items-center justify-between pointer-events-none">
        {/* Play/Pause & Scene Progress Dots */}
        <div className="flex items-center gap-3 pointer-events-auto bg-[#070D10]/80 px-4 py-2 rounded-full border border-white/10 backdrop-blur-lg">
          <button
            onClick={toggleAutoPlay}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-[#74E023] transition-colors focus:outline-none"
            aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <div className="h-3 w-px bg-white/20" />

          {/* Scene Indicators */}
          <div className="flex items-center gap-2">
            {heroMedia.map((_, i) => (
              <button
                key={i}
                onClick={() => goToScene(i)}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  i === activeScene
                    ? 'w-8 h-2 bg-[#74E023] shadow-[0_0_10px_#74E023]'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to scene ${i + 1}`}
              />
            ))}
          </div>

          <span className="text-[11px] font-mono text-[#859CA7] pl-1">
            0{activeScene + 1}/0{totalScenes}
          </span>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="hidden md:flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#CBD5E1]">
            SCROLL TO EXPLORE
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-[#74E023] animate-bounce" />
        </div>

        {/* Previous / Next Arrows */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={handlePrevScene}
            className="p-2.5 rounded-full bg-[#070D10]/80 hover:bg-[#74E023] text-white hover:text-[#070D10] border border-white/10 hover:border-transparent transition-all backdrop-blur-lg focus:outline-none"
            aria-label="Previous Scene"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNextScene}
            className="p-2.5 rounded-full bg-[#070D10]/80 hover:bg-[#74E023] text-white hover:text-[#070D10] border border-white/10 hover:border-transparent transition-all backdrop-blur-lg focus:outline-none"
            aria-label="Next Scene"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
