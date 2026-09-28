'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, ExternalLink } from 'lucide-react';
import { PortfolioItem } from '@/data/portfolio';

interface MediaLightboxProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onNavigate: (item: PortfolioItem) => void;
}

export default function MediaLightbox({ item, items, onClose, onNavigate }: MediaLightboxProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Keyboard controls
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, items]);

  useEffect(() => {
    setVideoError(false);
    setIsPlaying(true);
    setCurrentTime(0);
  }, [item]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const totalCount = items.length;

  const handleNext = () => {
    if (currentIndex < totalCount - 1) {
      onNavigate(items[currentIndex + 1]);
    } else {
      onNavigate(items[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(items[currentIndex - 1]);
    } else {
      onNavigate(items[totalCount - 1]);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05090C]/95 backdrop-blur-2xl p-4 sm:p-6 md:p-10 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#74E023] rounded-full blur-[160px]" />
      </div>

      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#74E023]/10 text-[#74E023] border border-[#74E023]/30">
            {item.category === '3d-models' ? '3D MODEL' : '3D ANIMATION'}
          </span>
          <span className="text-xs text-[#859CA7] font-mono">
            {currentIndex + 1} / {totalCount}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/5 hover:bg-[#74E023]/20 text-white hover:text-[#74E023] border border-white/10 hover:border-[#74E023]/50 transition-all z-20 focus:outline-none"
        aria-label="Previous artwork"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/5 hover:bg-[#74E023]/20 text-white hover:text-[#74E023] border border-white/10 hover:border-[#74E023]/50 transition-all z-20 focus:outline-none"
        aria-label="Next artwork"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Area */}
      <div className="relative w-full max-w-6xl max-h-[85vh] flex flex-col lg:flex-row items-center gap-6 z-10 overflow-hidden">
        {/* Media Frame */}
        <div className="relative w-full lg:w-3/4 h-[55vh] sm:h-[65vh] lg:h-[75vh] flex items-center justify-center bg-[#070D10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          {item.type === 'video' ? (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {!videoError ? (
                <video
                  ref={videoRef}
                  src={item.media}
                  poster={item.thumbnail}
                  playsInline
                  autoPlay
                  muted={isMuted}
                  loop
                  onTimeUpdate={() => {
                    if (videoRef.current) {
                      setCurrentTime(videoRef.current.currentTime);
                      setDuration(videoRef.current.duration || 0);
                    }
                  }}
                  onError={() => {
                    // Gracefully fallback to high-fidelity animated poster/simulation if actual mp4 not yet placed
                    setVideoError(true);
                  }}
                  className="w-full h-full object-contain"
                />
              ) : (
                /* Interactive Video Simulator & High-Res Poster when user hasn't copied mp4 yet */
                <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#081216]">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-contain opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D10] via-[#070D10]/50 to-transparent" />
                  <div className="relative z-10 max-w-md p-6 rounded-xl bg-[#0B161B]/90 border border-[#74E023]/30 backdrop-blur-md">
                    <div className="w-12 h-12 rounded-full bg-[#74E023]/20 text-[#74E023] flex items-center justify-center mx-auto mb-3 border border-[#74E023]/40">
                      <Play className="w-6 h-6 ml-1" />
                    </div>
                    <p className="text-white font-bold text-sm tracking-wide">
                      CINEMATIC 3D ANIMATION
                    </p>
                    <p className="text-xs text-[#859CA7] mt-1.5 font-mono">
                      File slot ready for your render:
                    </p>
                    <code className="text-[11px] text-[#74E023] bg-black/50 px-2 py-1 rounded block mt-1 break-all">
                      {item.media}
                    </code>
                  </div>
                </div>
              )}

              {/* Video Player Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2 z-20">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#74E023]"
                  aria-label="Video scrubber"
                />
                <div className="flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1.5 rounded-full hover:bg-white/10 text-[#74E023]"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="font-mono text-[11px] text-[#859CA7]">
                      {formatTime(currentTime)} / {formatTime(duration || 60)}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-[#74E023] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#74E023] animate-pulse" />
                    HD 4K RENDER
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center p-2">
              <Image
                src={item.media}
                alt={item.title}
                fill
                priority
                className="object-contain"
              />
            </div>
          )}
        </div>

        {/* Project Editorial Metadata Sidebar */}
        <div className="w-full lg:w-1/4 flex flex-col justify-between p-4 sm:p-6 bg-[#0E171C]/90 border border-white/10 rounded-2xl max-h-[75vh] overflow-y-auto">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#74E023] tracking-widest uppercase">
                  {item.year}
                </span>
                <span className="text-xs text-[#859CA7] font-mono">
                  {item.aspectRatio.toUpperCase()}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1 tracking-tight">
                {item.title}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#859CA7] leading-relaxed">
              {item.description}
            </p>

            {item.details && (
              <div className="space-y-2 pt-2 border-t border-white/10">
                <p className="text-[11px] font-mono uppercase tracking-wider text-white/70">
                  Techniques & Pipeline
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.details.techniques.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[#CBD5E1] border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-1.5 pt-2 border-t border-white/10">
              <p className="text-[11px] font-mono uppercase tracking-wider text-white/70">
                Software & Tools
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.software.map((sw) => (
                  <span
                    key={sw}
                    className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#74E023]/10 text-[#74E023] border border-[#74E023]/30"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10">
            <a
              href="/contact"
              className="w-full py-2.5 rounded-lg bg-[#74E023] hover:bg-[#8DF246] text-[#070D10] font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Commission Similar Work</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
