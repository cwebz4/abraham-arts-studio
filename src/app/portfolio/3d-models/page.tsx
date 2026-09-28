'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Box, Sparkles, ArrowUpRight, Layers } from 'lucide-react';
import { getProjectsByCategory, PortfolioItem } from '@/data/portfolio';
import MediaLightbox from '@/components/MediaLightbox';
import CTASection from '@/components/CTASection';

export default function ModelsCategoryPage() {
  const models = getProjectsByCategory('3d-models');
  const [selectedModel, setSelectedModel] = useState<PortfolioItem | null>(null);

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
              <Box className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#859CA7]">
              SPECIALIZED CATEGORY
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            3D Models / <span className="text-[#74E023]">Sculpture & Assets</span>
          </h1>

          <p className="text-base sm:text-xl text-[#CBD5E1] font-light leading-relaxed max-w-3xl">
            Character anatomy, cybernetic hard-surface assemblies, fantasy creature sculpts, and modular environment architecture created across ZBrush, Blender, and Maya.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#859CA7]">
            <span>TOTAL ASSETS: {models.length}</span>
            <span>&bull;</span>
            <span className="text-[#74E023]">CLICK ANY WORK FOR FULLSCREEN HIGH-DPI LIGHTBOX</span>
          </div>
        </div>
      </section>

      {/* EDITORIAL MASONRY GALLERY SUPPORTING VARIED DIMENSIONS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {models.map((item, index) => {
            // Determine visual aspect ratio style for editorial masonry feel
            const isTall = item.aspectRatio === 'portrait';
            const isWide = item.aspectRatio === 'ultrawide';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedModel(item)}
                data-cursor="view"
                className="break-inside-avoid group relative rounded-3xl overflow-hidden bg-[#0A1318] border border-white/10 hover:border-[#74E023]/60 transition-all duration-500 cursor-pointer shadow-xl"
              >
                {/* Visual Image Container without awkward cropping */}
                <div
                  className={`relative w-full overflow-hidden ${
                    isTall ? 'aspect-[3/4]' : isWide ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={item.media}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D10] via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                  {/* Top Bar Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#070D10]/80 text-[#74E023] border border-[#74E023]/30 backdrop-blur-md">
                      {item.aspectRatio.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-white/70">
                      {item.year}
                    </span>
                  </div>

                  {/* Hover Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 z-10 pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-[#74E023] text-[#070D10] flex items-center justify-center shadow-[0_0_25px_#74E023]">
                      <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                    </div>
                  </div>
                </div>

                {/* Editorial Metadata Box */}
                <div className="p-6 bg-[#0B151A] border-t border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#74E023]">
                    <span>{item.software.join(' • ')}</span>
                    <span className="text-[#859CA7]">HIGH-POLY</span>
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-[#74E023] transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-xs text-[#859CA7] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/50 group-hover:text-white transition-colors">
                    <span>EXPLORE TOPOLOGY & DETAILS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#74E023]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX FOR 3D MODELS */}
      {selectedModel && (
        <MediaLightbox
          item={selectedModel}
          items={models}
          onClose={() => setSelectedModel(null)}
          onNavigate={(item) => setSelectedModel(item)}
        />
      )}

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
