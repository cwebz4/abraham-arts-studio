'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Box, Film, Sparkles, Filter } from 'lucide-react';
import { portfolioData, PortfolioItem, ProjectCategory } from '@/data/portfolio';
import PortfolioCard from '@/components/PortfolioCard';
import MediaLightbox from '@/components/MediaLightbox';
import CTASection from '@/components/CTASection';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeFilter);

  const modelCount = portfolioData.filter((i) => i.category === '3d-models').length;
  const animCount = portfolioData.filter((i) => i.category === '3d-animations').length;

  return (
    <div className="w-full bg-[#070D10] pt-28 sm:pt-36">
      {/* Art Gallery Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-16 border-b border-white/5">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#74E023]/10 border border-[#74E023]/30 text-[#74E023] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Archive & Gallery</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Work / <span className="text-[#74E023]">Selected Projects</span>
          </h1>

          <p className="text-base sm:text-xl text-[#859CA7] font-light leading-relaxed max-w-2xl">
            Explore 3D character sculpts, hard-surface kinematics, commercial product renders, and cinematic AI-driven motion sequences.
          </p>
        </div>
      </section>

      {/* TWO LARGE VISUAL CATEGORY SELECTORS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 3D Models Visual Portal */}
          <Link
            href="/portfolio/3d-models"
            data-cursor="view"
            className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden bg-[#0A1318] border border-white/10 hover:border-[#74E023] transition-all duration-500 shadow-2xl block"
          >
            <Image
              src="/assets/portfolio/3d-models/images/cybernetic-sentinel-v9.svg"
              alt="3D Models Dedicated Gallery"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D10] via-[#070D10]/50 to-transparent" />

            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#74E023]/20 text-[#74E023] border border-[#74E023]/40">
                CATEGORY 01
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#74E023] transition-colors">
                  3D MODELS
                </h2>
                <p className="text-xs text-[#CBD5E1] mt-1">
                  Sculpts, character assets, environments & hard surface ({modelCount} Projects)
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#74E023] text-[#070D10] flex items-center justify-center transform group-hover:scale-110 transition-transform shrink-0">
                <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
              </div>
            </div>
          </Link>

          {/* 3D Animations Visual Portal */}
          <Link
            href="/portfolio/3d-animations"
            data-cursor="play"
            className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden bg-[#0A1318] border border-white/10 hover:border-[#74E023] transition-all duration-500 shadow-2xl block"
          >
            <Image
              src="/assets/portfolio/3d-animations/thumbnails/quantum-flux-showreel.svg"
              alt="3D Animations Dedicated Showreel"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D10] via-[#070D10]/50 to-transparent" />

            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#74E023]/20 text-[#74E023] border border-[#74E023]/40">
                CATEGORY 02
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#74E023] transition-colors">
                  3D ANIMATIONS
                </h2>
                <p className="text-xs text-[#CBD5E1] mt-1">
                  Cinematic showreels, keyframe action & AI generative motion ({animCount} Works)
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#74E023] text-[#070D10] flex items-center justify-center transform group-hover:scale-110 transition-transform shrink-0">
                <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* FILTERABLE COMPLETE ARCHIVE SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        {/* Animated Filter Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-10 mb-10 border-b border-white/5 gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#74E023]" />
            <span className="text-xs font-mono uppercase tracking-wider text-white">
              Filter Portfolio:
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-[#74E023] text-[#070D10] shadow-[0_0_15px_rgba(116,224,35,0.4)]'
                  : 'bg-white/5 text-[#CBD5E1] hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              ALL ({portfolioData.length})
            </button>
            <button
              onClick={() => setActiveFilter('3d-models')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 ${
                activeFilter === '3d-models'
                  ? 'bg-[#74E023] text-[#070D10] shadow-[0_0_15px_rgba(116,224,35,0.4)]'
                  : 'bg-white/5 text-[#CBD5E1] hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              3D MODELS ({modelCount})
            </button>
            <button
              onClick={() => setActiveFilter('3d-animations')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 ${
                activeFilter === '3d-animations'
                  ? 'bg-[#74E023] text-[#070D10] shadow-[0_0_15px_rgba(116,224,35,0.4)]'
                  : 'bg-white/5 text-[#CBD5E1] hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              3D ANIMATIONS ({animCount})
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX */}
      {selectedProject && (
        <MediaLightbox
          item={selectedProject}
          items={filteredProjects}
          onClose={() => setSelectedProject(null)}
          onNavigate={(item) => setSelectedProject(item)}
        />
      )}

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
