'use client';

import React from 'react';
import Image from 'next/image';
import { Play, ArrowUpRight, Sparkles } from 'lucide-react';
import { PortfolioItem } from '@/data/portfolio';

interface PortfolioCardProps {
  item: PortfolioItem;
  onSelect: (item: PortfolioItem) => void;
  priority?: boolean;
}

export default function PortfolioCard({ item, onSelect, priority = false }: PortfolioCardProps) {
  const isVideo = item.type === 'video';

  return (
    <div
      onClick={() => onSelect(item)}
      data-cursor={isVideo ? 'play' : 'view'}
      className="group relative rounded-2xl overflow-hidden bg-[#0A1317] border border-white/10 hover:border-[#74E023]/50 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_15px_45px_rgba(0,0,0,0.8)]"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(item);
        }
      }}
      aria-label={`View project ${item.title}`}
    >
      {/* Media Box */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#070D10]">
        <Image
          src={item.thumbnail || item.media}
          alt={item.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Ambient Dark Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D10] via-[#070D10]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#070D10]/80 text-[#74E023] border border-[#74E023]/30 backdrop-blur-md">
            {item.category === '3d-models' ? '3D MODEL' : '3D ANIMATION'}
          </span>

          {isVideo && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/10 text-white backdrop-blur-md flex items-center gap-1">
              <Play className="w-2.5 h-2.5 fill-current text-[#74E023]" />
              {item.duration || 'VIDEO'}
            </span>
          )}
        </div>

        {/* Center Hover Action Indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 z-10 pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-[#74E023] text-[#070D10] flex items-center justify-center shadow-[0_0_25px_#74E023]">
            {isVideo ? (
              <Play className="w-6 h-6 ml-0.5 fill-current" />
            ) : (
              <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
            )}
          </div>
        </div>
      </div>

      {/* Editorial Content Below Image */}
      <div className="p-5 flex flex-col justify-between bg-[#0C161C] border-t border-white/5">
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-[#859CA7] mb-1.5">
            <span>{item.year}</span>
            <span className="text-[#74E023]">{item.software.join(' • ')}</span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-[#74E023] transition-colors duration-300 line-clamp-1">
            {item.title}
          </h3>

          <p className="text-xs text-[#859CA7] mt-1.5 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
          <span className="text-[11px] font-mono text-white/50 group-hover:text-white/90 transition-colors flex items-center gap-1">
            VIEW DETAILS
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#74E023] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}
