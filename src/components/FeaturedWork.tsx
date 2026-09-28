'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowUpRight, Sparkles } from 'lucide-react';
import { PortfolioItem } from '@/data/portfolio';

interface FeaturedWorkProps {
  projects: PortfolioItem[];
  onSelectProject: (item: PortfolioItem) => void;
}

export default function FeaturedWork({ projects, onSelectProject }: FeaturedWorkProps) {
  // Select key editorial items across 3D Models and 3D Animations
  const heroModel = projects.find((p) => p.slug === 'cybernetic-sentinel-v9') || projects[0];
  const sideModel1 = projects.find((p) => p.slug === 'biomechanical-exoskeleton') || projects[1];
  const fullWidthVideo = projects.find((p) => p.slug === 'quantum-flux-showreel') || projects.find((p) => p.type === 'video') || projects[2];
  const horizModel = projects.find((p) => p.slug === 'orbital-colony-habitat') || projects[3];
  const videoAction = projects.find((p) => p.slug === 'the-sentinel-awakens') || projects[4];
  const charModel = projects.find((p) => p.slug === 'neo-tokyo-cyber-ronin') || projects[5];

  return (
    <section className="py-24 sm:py-32 bg-[#070D10] relative overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#74E023]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#74E023]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#74E023]/10 border border-[#74E023]/30 text-[#74E023] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Featured 3D & Motion Production
            </h2>
            <p className="text-sm sm:text-base text-[#859CA7] max-w-xl">
              A curated curation of high-poly sculptures, cinematic camera sequences, and next-generation AI visuals.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="group px-6 py-3 rounded-full bg-white/5 hover:bg-[#74E023] text-white hover:text-[#070D10] border border-white/10 hover:border-transparent text-xs font-bold tracking-wider uppercase transition-all duration-300 self-start md:self-auto flex items-center gap-2"
          >
            <span>View All Works (15)</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* EDITORIAL MASONRY / DYNAMIC GRID */}
        <div className="space-y-8">
          {/* Row 1: Large Featured Item + Vertical Companion */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Large Hero Card (8 cols) */}
            {heroModel && (
              <div
                onClick={() => onSelectProject(heroModel)}
                data-cursor="view"
                className="lg:col-span-8 group relative rounded-3xl overflow-hidden bg-[#0A1418] border border-white/10 hover:border-[#74E023]/50 transition-all duration-500 cursor-pointer shadow-2xl h-[480px] sm:h-[580px]"
              >
                <Image
                  src={heroModel.media}
                  alt={heroModel.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D10] via-[#070D10]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-[#070D10]/80 text-[#74E023] border border-[#74E023]/30 backdrop-blur-md">
                    FEATURED 3D SCULPT
                  </span>
                  <span className="text-xs font-mono text-white/60">
                    {heroModel.year}
                  </span>
                </div>

                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-[#74E023]">
                      {heroModel.software.join(' • ')}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-1 group-hover:text-[#74E023] transition-colors">
                      {heroModel.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#CBD5E1]/80 mt-1 max-w-lg line-clamp-2">
                      {heroModel.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#74E023] text-[#070D10] flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-[0_0_20px_#74E023] shrink-0">
                    <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            )}

            {/* Vertical Companion Card (4 cols) */}
            {sideModel1 && (
              <div
                onClick={() => onSelectProject(sideModel1)}
                data-cursor="view"
                className="lg:col-span-4 group relative rounded-3xl overflow-hidden bg-[#0A1418] border border-white/10 hover:border-[#74E023]/50 transition-all duration-500 cursor-pointer shadow-2xl h-[480px] sm:h-[580px]"
              >
                <Image
                  src={sideModel1.media}
                  alt={sideModel1.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D10] via-[#070D10]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-[#070D10]/80 text-[#74E023] border border-[#74E023]/30 backdrop-blur-md">
                    HARD SURFACE
                  </span>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-xs font-mono text-[#74E023]">
                    {sideModel1.software.join(' • ')}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-[#74E023] transition-colors">
                    {sideModel1.title}
                  </h3>
                  <p className="text-xs text-[#859CA7] mt-1.5 line-clamp-2">
                    {sideModel1.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Row 2: Full-Width Cinematic Video Showcase */}
          {fullWidthVideo && (
            <div
              onClick={() => onSelectProject(fullWidthVideo)}
              data-cursor="play"
              className="group relative rounded-3xl overflow-hidden bg-[#070D10] border border-white/10 hover:border-[#74E023]/60 transition-all duration-500 cursor-pointer shadow-2xl h-[420px] sm:h-[540px]"
            >
              <Image
                src={fullWidthVideo.thumbnail}
                alt={fullWidthVideo.title}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D10] via-[#070D10]/50 to-transparent opacity-80" />

              {/* Big Pulsing Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#74E023] text-[#070D10] flex items-center justify-center shadow-[0_0_40px_rgba(116,224,35,0.7)] transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-current" />
                </div>
              </div>

              {/* Top Video Status */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#74E023] text-[#070D10] shadow-md">
                  CINEMATIC SHOWREEL
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/60 text-white backdrop-blur-md border border-white/10">
                  {fullWidthVideo.duration || '01:45'} &bull; 4K UHD
                </span>
              </div>

              {/* Bottom Video Metadata */}
              <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-xl">
                  <p className="text-xs font-mono text-[#74E023] tracking-widest uppercase">
                    3D ANIMATION &bull; {fullWidthVideo.software.join(' / ')}
                  </p>
                  <h3 className="text-2xl sm:text-4xl font-black text-white mt-1 group-hover:text-[#74E023] transition-colors">
                    {fullWidthVideo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#CBD5E1]/90 mt-1 line-clamp-1">
                    {fullWidthVideo.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-white/70 bg-[#0C161C]/80 px-4 py-2 rounded-full border border-white/10 self-start sm:self-auto">
                  <span>CLICK TO PLAY IN FULLSCREEN</span>
                </div>
              </div>
            </div>
          )}

          {/* Row 3: Alternating Pair (Horizontal project + Character Portrait) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Horizontal Project (7 cols) */}
            {horizModel && (
              <div
                onClick={() => onSelectProject(horizModel)}
                data-cursor="view"
                className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-[#0A1418] border border-white/10 hover:border-[#74E023]/50 transition-all duration-500 cursor-pointer shadow-2xl h-[420px] sm:h-[480px]"
              >
                <Image
                  src={horizModel.media}
                  alt={horizModel.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D10] via-[#070D10]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-[#070D10]/80 text-[#74E023] border border-[#74E023]/30 backdrop-blur-md">
                    ENVIRONMENT ARCHITECTURE
                  </span>
                </div>

                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#74E023]">
                      {horizModel.software.join(' • ')}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-[#74E023] transition-colors">
                      {horizModel.title}
                    </h3>
                    <p className="text-xs text-[#859CA7] mt-1 line-clamp-2 max-w-md">
                      {horizModel.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#74E023] text-white group-hover:text-[#070D10] flex items-center justify-center transition-colors shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            )}

            {/* Stylized Action/Character (5 cols) */}
            {charModel && (
              <div
                onClick={() => onSelectProject(charModel)}
                data-cursor="view"
                className="lg:col-span-5 group relative rounded-3xl overflow-hidden bg-[#0A1418] border border-white/10 hover:border-[#74E023]/50 transition-all duration-500 cursor-pointer shadow-2xl h-[420px] sm:h-[480px]"
              >
                <Image
                  src={charModel.media}
                  alt={charModel.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D10] via-[#070D10]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-[#070D10]/80 text-[#74E023] border border-[#74E023]/30 backdrop-blur-md">
                    CHARACTER ASSET
                  </span>
                </div>

                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#74E023]">
                      {charModel.software.join(' • ')}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-[#74E023] transition-colors">
                      {charModel.title}
                    </h3>
                    <p className="text-xs text-[#859CA7] mt-1 line-clamp-2 max-w-sm">
                      {charModel.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#74E023] text-white group-hover:text-[#070D10] flex items-center justify-center transition-colors shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
