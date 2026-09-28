'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Box, Film, Sparkles } from 'lucide-react';

export default function CategoryPortals() {
  return (
    <section className="py-24 sm:py-32 bg-[#05090C] relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#74E023]/10 border border-[#74E023]/30 text-[#74E023] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Portals</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Explore By Discipline
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#859CA7] max-w-md font-mono">
            Enter specialized galleries tailored for asset inspectability and full-fidelity animation playback.
          </p>
        </div>

        {/* TWO VISUALLY POWERFUL CATEGORY PORTALS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Portal 01: 3D MODELS */}
          <Link
            href="/portfolio/3d-models"
            data-cursor="view"
            className="group relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden bg-[#0A1318] border border-white/10 hover:border-[#74E023] transition-all duration-700 shadow-2xl block"
          >
            {/* Background Representative Media with Hover Zoom */}
            <div className="absolute inset-0 bg-[#070D10]">
              <Image
                src="/assets/portfolio/3d-models/images/cybernetic-sentinel-v9.svg"
                alt="3D Models Portal"
                fill
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-115 group-hover:rotate-1 opacity-60 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05090C] via-[#05090C]/60 to-transparent" />
            </div>

            {/* Portal Watermark Number */}
            <div className="absolute top-8 left-8 select-none pointer-events-none">
              <span className="text-7xl sm:text-8xl font-black text-white/5 font-mono group-hover:text-[#74E023]/20 transition-colors duration-500">
                01
              </span>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute top-8 right-8 z-10">
              <div className="w-12 h-12 rounded-full bg-[#0E191E]/90 text-[#74E023] border border-white/10 group-hover:border-[#74E023] flex items-center justify-center backdrop-blur-md transition-colors duration-300">
                <Box className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#74E023] uppercase">
                SCULPTURE &bull; CHARACTERS &bull; HARD SURFACE
              </span>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-1 tracking-tight group-hover:text-[#74E023] transition-colors duration-300">
                3D MODELS
              </h3>

              <p className="text-xs sm:text-sm text-[#CBD5E1]/80 mt-2 line-clamp-2 max-w-md">
                Detailed digital models, anatomy studies, high-resolution organic sculpts and optimized environment assets.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="px-5 py-2.5 rounded-full bg-[#74E023] text-[#070D10] text-xs font-black tracking-wider uppercase flex items-center gap-2 group-hover:bg-[#8DF246] transition-colors shadow-[0_0_20px_rgba(116,224,35,0.4)]">
                  <span>Enter 3D Models Gallery</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </span>
                <span className="text-xs font-mono text-[#859CA7]">
                  8 Featured Projects
                </span>
              </div>
            </div>
          </Link>

          {/* Portal 02: 3D ANIMATIONS */}
          <Link
            href="/portfolio/3d-animations"
            data-cursor="play"
            className="group relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden bg-[#0A1318] border border-white/10 hover:border-[#74E023] transition-all duration-700 shadow-2xl block"
          >
            {/* Background Representative Media with Hover Zoom */}
            <div className="absolute inset-0 bg-[#070D10]">
              <Image
                src="/assets/portfolio/3d-animations/thumbnails/quantum-flux-showreel.svg"
                alt="3D Animations Portal"
                fill
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-115 group-hover:-rotate-1 opacity-60 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05090C] via-[#05090C]/60 to-transparent" />
            </div>

            {/* Portal Watermark Number */}
            <div className="absolute top-8 left-8 select-none pointer-events-none">
              <span className="text-7xl sm:text-8xl font-black text-white/5 font-mono group-hover:text-[#74E023]/20 transition-colors duration-500">
                02
              </span>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute top-8 right-8 z-10">
              <div className="w-12 h-12 rounded-full bg-[#0E191E]/90 text-[#74E023] border border-white/10 group-hover:border-[#74E023] flex items-center justify-center backdrop-blur-md transition-colors duration-300">
                <Film className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#74E023] uppercase">
                MOTION &bull; CINEMATICS &bull; AI SYNTHESIS
              </span>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-1 tracking-tight group-hover:text-[#74E023] transition-colors duration-300">
                3D ANIMATIONS
              </h3>

              <p className="text-xs sm:text-sm text-[#CBD5E1]/80 mt-2 line-clamp-2 max-w-md">
                Cinematic keyframe sequences, commercial product films, character performances, and modern AI generative motion.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="px-5 py-2.5 rounded-full bg-[#74E023] text-[#070D10] text-xs font-black tracking-wider uppercase flex items-center gap-2 group-hover:bg-[#8DF246] transition-colors shadow-[0_0_20px_rgba(116,224,35,0.4)]">
                  <span>Enter Animation Showreel</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </span>
                <span className="text-xs font-mono text-[#859CA7]">
                  7 Cinematic Works
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
