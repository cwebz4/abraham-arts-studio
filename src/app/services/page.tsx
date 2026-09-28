import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowUpRight, CheckCircle2, Box, Film, Cpu, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import { studioInfo } from '@/data/studio';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Our Services | Abraham Arts Studio - 3D Modelling, 3D Animation & AI Animation',
  description:
    'High-end 3D production services by Abraham Arts Studio: Detailed 3D Modeling, Cinematic 3D Animation, and Next-Gen AI Video Synthesis with Google Veo.',
};

export default function ServicesPage() {
  const serviceMedia = [
    {
      id: '3d-modelling',
      image: '/assets/portfolio/3d-models/images/cybernetic-sentinel-v9.svg',
      polyLabel: 'HIGH-FREQUENCY POLYGON SCULPTING',
    },
    {
      id: '3d-animation',
      image: '/assets/portfolio/3d-animations/thumbnails/quantum-flux-showreel.svg',
      polyLabel: 'KEYFRAME & KINEMATIC SIMULATION',
    },
    {
      id: 'ai-animation',
      image: '/assets/portfolio/3d-animations/thumbnails/neural-dreamscapes.svg',
      polyLabel: 'NEURAL MOTION & GOOGLE VEO PIPELINE',
    },
  ];

  return (
    <div className="w-full bg-[#070D10] pt-28 sm:pt-36">
      {/* Services Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-20 border-b border-white/5">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#74E023]/10 border border-[#74E023]/30 text-[#74E023] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Production Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Precision 3D assets, cinematic animation &{' '}
            <span className="text-[#74E023]">AI direction.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#859CA7] font-light leading-relaxed max-w-3xl">
            From initial concept sculpts and subdivision topology to full cinematic showreels and generative video workflows, Abraham Arts Studio delivers end-to-end visual execution tailored for commercial impact.
          </p>
        </div>
      </section>

      {/* THREE DEDICATED MAJOR SERVICE SECTIONS */}
      <div className="divide-y divide-white/5">
        {studioInfo.services.map((service, index) => {
          const media = serviceMedia[index];
          const isEven = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.id}
              className="py-24 sm:py-32 scroll-mt-24 relative overflow-hidden"
            >
              {/* Volumetric Subtle Accent Glow */}
              <div
                className={`absolute top-1/2 ${
                  isEven ? 'right-0' : 'left-0'
                } -translate-y-1/2 w-[500px] h-[500px] bg-[#74E023]/10 rounded-full blur-[180px] pointer-events-none`}
              />

              <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text Column (7 cols) */}
                  <div className={`lg:col-span-7 space-y-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl sm:text-4xl font-black font-mono text-[#74E023]">
                        {service.number}
                      </span>
                      <div className="h-4 w-px bg-white/20" />
                      <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/60">
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-base sm:text-lg text-[#74E023] font-medium mt-2">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Key Technical Offerings */}
                    <div className="space-y-3 pt-2">
                      <p className="text-xs font-mono uppercase tracking-wider text-white/70">
                        Key Capabilities & Methodologies
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2.5 p-3 rounded-xl bg-[#091216] border border-white/5 text-xs text-[#CBD5E1]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#74E023] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables & Software Badges */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] font-mono text-[#859CA7] block mb-1.5">
                          PIPELINE SOFTWARE
                        </span>
                        <div className="flex gap-1.5 flex-wrap">
                          {service.software.map((sw) => (
                            <span
                              key={sw}
                              className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-white border border-white/10"
                            >
                              {sw}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Service CTA */}
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="px-6 py-3 rounded-full bg-[#74E023] hover:bg-[#8DF246] text-[#070D10] text-xs font-black tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(116,224,35,0.4)] flex items-center gap-2 transform hover:scale-105"
                      >
                        <span>START A PROJECT</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </Link>
                    </div>
                  </div>

                  {/* Media Visual Column (5 cols) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-3xl overflow-hidden bg-[#0A1318] border border-white/10 shadow-2xl aspect-[4/3] sm:aspect-square group">
                      <Image
                        src={media.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070D10] via-transparent to-black/30" />

                      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#070D10]/85 border border-white/10 backdrop-blur-md">
                        <span className="text-[10px] font-mono text-[#74E023] block mb-1">
                          {media.polyLabel}
                        </span>
                        <div className="flex items-center justify-between text-xs text-white">
                          <span className="font-bold">{service.title} Showcase</span>
                          <span className="font-mono text-[11px] text-[#859CA7]">4K RENDER READY</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Global Final CTA */}
      <CTASection />
    </div>
  );
}
