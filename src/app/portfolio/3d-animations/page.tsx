'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Film, Sparkles } from 'lucide-react';
import { getProjectsByCategory, PortfolioItem } from '@/data/portfolio';
import VideoCard from '@/components/VideoCard';
import MediaLightbox from '@/components/MediaLightbox';
import CTASection from '@/components/CTASection';

export default function AnimationsCategoryPage() {
  const animations = getProjectsByCategory('3d-animations');
  const [selectedAnimation, setSelectedAnimation] = useState<PortfolioItem | null>(null);

  return (
    <div className="w-full bg-[#070D10] pt-28 sm:pt-36">
      {/* Category Hero Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-16 border-b border-white/5">
        <div className="space-y-6 max-w-4xl">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#74E023] hover:text-[#8DF246] transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Work</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#74E023]/10 text-[#74E023] flex items-center justify-center border border-[#74E023]/30">
              <Film className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#859CA7]">
              SPECIALIZED CATEGORY
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            3D Animations / <span className="text-[#74E023]">Motion & Cinematics</span>
          </h1>

          <p className="text-base sm:text-xl text-[#CBD5E1] font-light leading-relaxed max-w-3xl">
            Complete motion design portfolio encompassing cinematic showreels, mechanical rigging, character performance, commercial timepiece films, and AI-assisted generative animation with Google Veo.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#859CA7]">
            <span>TOTAL SEQUENCES: {animations.length}</span>
            <span>&bull;</span>
            <span className="text-[#74E023]">INTERSECTION OBSERVER OPTIMIZED &bull; 4K UHD</span>
          </div>
        </div>
      </section>

      {/* VIDEO GRID */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animations.map((item) => (
            <VideoCard
              key={item.id}
              item={item}
              onSelect={(anim) => setSelectedAnimation(anim)}
            />
          ))}
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX & VIDEO THEATER */}
      {selectedAnimation && (
        <MediaLightbox
          item={selectedAnimation}
          items={animations}
          onClose={() => setSelectedAnimation(null)}
          onNavigate={(item) => setSelectedAnimation(item)}
        />
      )}

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
