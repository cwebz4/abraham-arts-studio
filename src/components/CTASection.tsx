'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { studioInfo } from '@/data/studio';

export default function CTASection() {
  return (
    <section className="py-28 sm:py-36 bg-[#070D10] relative overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#74E023]/12 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#74E023]/10 border border-[#74E023]/30 text-[#74E023] text-xs font-mono font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>COLLABORATION & COMMISSION</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6">
          Have an idea worth{' '}
          <span className="text-[#74E023] block sm:inline">
            bringing to life?
          </span>
        </h2>

        <p className="text-base sm:text-xl text-[#859CA7] max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Whether you need an intricate 3D character, full-scale environment, commercial product motion, or AI visual direction — let's build something exceptional.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#74E023] hover:bg-[#8DF246] text-[#070D10] text-sm font-black tracking-wider uppercase transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(116,224,35,0.4)] flex items-center justify-center gap-2"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </Link>

          <a
            href={studioInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-bold tracking-wider uppercase border border-white/15 hover:border-white/30 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <MessageSquare className="w-4 h-4 text-[#74E023]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Studio Direct Reach Badge */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#859CA7] font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#74E023] animate-pulse" />
            <span>CURRENTLY ACCEPTING NEW PROJECTS</span>
          </div>
          <span>&bull;</span>
          <a href={`mailto:${studioInfo.email}`} className="hover:text-white transition-colors">
            {studioInfo.email}
          </a>
        </div>
      </div>
    </section>
  );
}
