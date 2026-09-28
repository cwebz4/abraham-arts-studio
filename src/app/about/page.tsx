import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowUpRight, Sparkles, Box, Film, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { studioInfo } from '@/data/studio';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About Us | Abraham Arts Studio - Olorunleke Abraham',
  description:
    'Learn about Olorunleke Abraham, 3D artist and animator with 5+ years of experience specializing in 3D modeling, animation, and AI visual direction.',
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#070D10] pt-28 sm:pt-36">
      {/* Editorial Hero Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-20 border-b border-white/5">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#74E023]/10 border border-[#74E023]/30 text-[#74E023] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Biography & Master Craft</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Transforming ideas into detailed digital models &{' '}
            <span className="text-[#74E023]">cinematic motion.</span>
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[#859CA7]">
            <div>
              <span className="text-white/40 block">ARTIST & OWNER</span>
              <span className="text-white font-bold text-sm">OLORUNLEKE ABRAHAM</span>
            </div>
            <div className="h-8 w-px bg-white/10 hidden sm:block" />
            <div>
              <span className="text-white/40 block">ROLE</span>
              <span className="text-white font-bold text-sm">3D Artist & Animator</span>
            </div>
            <div className="h-8 w-px bg-white/10 hidden sm:block" />
            <div>
              <span className="text-white/40 block">PRACTICE</span>
              <span className="text-[#74E023] font-bold text-sm">5+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Narrative Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Visual Composition with Studio Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0B151A] aspect-[4/5] shadow-2xl group">
              <Image
                src="/assets/portfolio/3d-models/images/cybernetic-sentinel-v9.svg"
                alt="Olorunleke Abraham 3D Artistry"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D10] via-transparent to-black/20" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#070D10]/80 border border-white/10 backdrop-blur-md">
                <p className="text-[11px] font-mono text-[#74E023] uppercase tracking-wider">
                  STUDIO ARCHIVE
                </p>
                <p className="text-white font-bold text-sm mt-0.5">
                  Abraham Arts Studio Headquarters
                </p>
                <p className="text-[11px] text-[#859CA7] font-mono mt-0.5">
                  Digital Craft &bull; Motion Synthesis &bull; Visual CGI
                </p>
              </div>
            </div>

            {/* Floating Stats Pill */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 p-5 rounded-2xl bg-[#0E171C] border border-[#74E023]/40 shadow-2xl hidden sm:flex items-center gap-4 z-10">
              <div className="w-12 h-12 rounded-xl bg-[#74E023]/20 text-[#74E023] flex items-center justify-center font-black font-mono text-xl">
                5+
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">
                  Years Experience
                </p>
                <p className="text-[11px] text-[#859CA7] font-mono">
                  3D Modeling & Motion
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Artistic Ethos */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-base sm:text-lg text-[#CBD5E1] font-light leading-relaxed">
              <p className="text-xl sm:text-2xl text-white font-normal leading-snug">
                {studioInfo.bioFull}
              </p>

              <p>
                At Abraham Arts Studio, every project is approached with equal emphasis on artistic silhouette and rigorous technical execution. From sculpting organic creature muscles in ZBrush to orchestrating complex camera curves in Maya, the objective remains clear: to build visuals that evoke visceral emotion and demand attention.
              </p>

              <p>
                Rather than treating emerging generative AI tools as a shortcut, Abraham integrates models such as Google Veo as a dynamic visual expansion layer—combining spatial 3D control with neural video synthesis to generate groundbreaking motion aesthetics that stand out from ordinary commercial media.
              </p>
            </div>

            {/* Core Competencies Badges */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#74E023] font-bold">
                Specialized Disciplines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#091317] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Box className="w-4 h-4 text-[#74E023]" />
                    <span>3D Modelling</span>
                  </div>
                  <p className="text-xs text-[#859CA7] leading-relaxed">
                    Subdivision modeling, character anatomy sculpts, and precision hard-surface topology.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#091317] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Film className="w-4 h-4 text-[#74E023]" />
                    <span>3D Animation</span>
                  </div>
                  <p className="text-xs text-[#859CA7] leading-relaxed">
                    Cinematic camera choreography, rigging dynamics, keyframe performance, and lighting.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#091317] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Cpu className="w-4 h-4 text-[#74E023]" />
                    <span>AI Animation</span>
                  </div>
                  <p className="text-xs text-[#859CA7] leading-relaxed">
                    Directorial motion synthesis leveraging Google Veo and 3D pre-visualization pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Workbench Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 border-b border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#74E023] font-bold">
            THE PRODUCTION ENGINE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Software & Technical Tools
          </h2>
          <p className="text-sm text-[#859CA7]">
            Mastery of the industry&apos;s leading digital sculpting, polygon modeling, rigging, and generative tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studioInfo.softwareTools.map((tool) => (
            <div
              key={tool.name}
              className="p-6 rounded-2xl bg-[#0A1318] border border-white/10 hover:border-[#74E023]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#74E023]/10 text-[#74E023] border border-[#74E023]/30">
                    {tool.badge}
                  </span>
                  <span className="text-xs font-mono text-white/40">
                    {tool.proficiency}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white group-hover:text-[#74E023] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs font-mono text-[#859CA7] mt-1 mb-3">
                  {tool.category}
                </p>

                <p className="text-xs text-[#CBD5E1]/80 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#74E023]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="font-mono text-[11px]">Production Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
