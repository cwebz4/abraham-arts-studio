'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Box, Film, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { studioInfo } from '@/data/studio';

export default function ServicesPreview() {
  const icons = [Box, Film, Cpu];

  return (
    <section className="py-24 sm:py-32 bg-[#070D10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#74E023]/10 border border-[#74E023]/30 text-[#74E023] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Production Services
            </h2>
            <p className="text-sm sm:text-base text-[#859CA7] max-w-xl">
              End-to-end 3D asset creation, cinematic motion design, and emerging AI generative synthesis.
            </p>
          </div>

          <Link
            href="/services"
            className="group px-6 py-3 rounded-full bg-white/5 hover:bg-[#74E023] text-white hover:text-[#070D10] border border-white/10 hover:border-transparent text-xs font-bold tracking-wider uppercase transition-all duration-300 self-start md:self-auto flex items-center gap-2 shadow-lg"
          >
            <span>Explore All Capabilities</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* THREE SERVICES CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studioInfo.services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-3xl bg-[#0A1317] border border-white/10 hover:border-[#74E023]/60 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-black font-mono text-white/20 group-hover:text-[#74E023] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#0F1C22] text-[#74E023] border border-white/10 group-hover:border-[#74E023]/40 flex items-center justify-center transition-all group-hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white group-hover:text-[#74E023] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#859CA7] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/5">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#74E023] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {service.software.map((sw) => (
                      <span
                        key={sw}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[#859CA7] border border-white/5"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services#${service.id}`}
                    className="p-2 rounded-full bg-white/5 hover:bg-[#74E023] text-white hover:text-[#070D10] transition-colors"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
