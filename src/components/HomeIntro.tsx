'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Box, Film, Cpu } from 'lucide-react';
import { studioInfo } from '@/data/studio';

export default function HomeIntro() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#070D10] overflow-hidden border-b border-white/5">
      {/* Background Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#74E023]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Artistic Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#74E023]/10 border border-[#74E023]/30 text-[#74E023] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Crafting characters, worlds and motion through{' '}
              <span className="text-[#74E023] relative inline-block">
                3D.
                <span className="absolute left-0 right-0 bottom-1 h-1 bg-[#74E023]/40 rounded" />
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl font-light">
              {studioInfo.bioShort}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="group px-6 py-3.5 rounded-full bg-white/5 hover:bg-[#74E023] text-white hover:text-[#070D10] border border-white/10 hover:border-transparent text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <span>Read Full Studio Profile</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/portfolio"
                className="px-6 py-3.5 rounded-full bg-transparent text-[#CBD5E1] hover:text-white text-xs font-bold tracking-wider uppercase transition-colors"
              >
                Explore Full Archive &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Three Creative Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#74E023]/40 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#74E023]/10 text-[#74E023] flex items-center justify-center border border-[#74E023]/20 group-hover:bg-[#74E023] group-hover:text-[#070D10] transition-colors">
                  <Box className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#74E023] transition-colors">
                    3D Modelling
                  </h3>
                  <p className="text-xs text-[#859CA7] mt-0.5">
                    Subdivision modeling, character anatomy & modular kitbashing.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#74E023]/40 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#74E023]/10 text-[#74E023] flex items-center justify-center border border-[#74E023]/20 group-hover:bg-[#74E023] group-hover:text-[#070D10] transition-colors">
                  <Film className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#74E023] transition-colors">
                    3D Animation
                  </h3>
                  <p className="text-xs text-[#859CA7] mt-0.5">
                    Cinematic camera choreography, rigging & keyframe motion.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#74E023]/40 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#74E023]/10 text-[#74E023] flex items-center justify-center border border-[#74E023]/20 group-hover:bg-[#74E023] group-hover:text-[#070D10] transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#74E023] transition-colors">
                    AI Animation
                  </h3>
                  <p className="text-xs text-[#859CA7] mt-0.5">
                    Emerging generative video workflows powered by Google Veo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
