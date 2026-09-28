'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from 'lucide-react';
import { PortfolioItem } from '@/data/portfolio';

interface VideoCardProps {
  item: PortfolioItem;
  onSelect: (item: PortfolioItem) => void;
}

export default function VideoCard({ item, onSelect }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Intersection Observer: Pauses video when outside viewport, lazy-loads preview
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && !videoError) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(item)}
      data-cursor="play"
      className="group relative rounded-3xl overflow-hidden bg-[#0A1318] border border-white/10 hover:border-[#74E023]/60 transition-all duration-500 cursor-pointer shadow-2xl flex flex-col justify-between"
      role="button"
      tabIndex={0}
      aria-label={`Play animation ${item.title}`}
    >
      {/* Video Viewport Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#070D10]">
        {!videoError ? (
          <video
            ref={videoRef}
            src={item.media}
            poster={item.thumbnail}
            preload="metadata"
            playsInline
            muted
            loop
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        )}

        {/* Ambient Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D10] via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#070D10]/80 text-[#74E023] border border-[#74E023]/30 backdrop-blur-md">
            {item.software.includes('Google Veo') ? 'AI ANIMATION' : '3D ANIMATION'}
          </span>

          <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/60 text-white backdrop-blur-md border border-white/10 flex items-center gap-1.5">
            <Play className="w-2.5 h-2.5 text-[#74E023] fill-current" />
            {item.duration || '01:00'}
          </span>
        </div>

        {/* Centered Big Play Indicator on Idle / Hover */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`w-16 h-16 rounded-full bg-[#74E023] text-[#070D10] flex items-center justify-center shadow-[0_0_30px_rgba(116,224,35,0.6)] transition-all duration-300 ${
              isPlaying ? 'opacity-0 scale-90' : 'opacity-100 scale-100 group-hover:scale-110'
            }`}
          >
            <Play className="w-7 h-7 ml-1 fill-current" />
          </div>
        </div>

        {/* Bottom Expand Cue */}
        <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="p-2 rounded-full bg-[#070D10]/80 text-white text-xs backdrop-blur-md flex items-center gap-1 border border-white/10">
            <Maximize2 className="w-3.5 h-3.5 text-[#74E023]" />
          </span>
        </div>
      </div>

      {/* Editorial Content Below Video */}
      <div className="p-6 bg-[#0B151A] border-t border-white/5 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#74E023]">{item.software.join(' • ')}</span>
          <span className="text-[#859CA7]">{item.year}</span>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-[#74E023] transition-colors">
          {item.title}
        </h3>

        <p className="text-xs text-[#859CA7] leading-relaxed line-clamp-2">
          {item.description}
        </p>

        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/50 group-hover:text-white transition-colors">
          <span>OPEN IN FULLSCREEN THEATER</span>
          <span className="text-[#74E023]">&rarr;</span>
        </div>
      </div>
    </div>
  );
}
