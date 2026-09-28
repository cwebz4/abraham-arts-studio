'use client';

import React from 'react';
import { Sparkles, Terminal, Cpu, Layers, Disc3 } from 'lucide-react';
import { studioInfo } from '@/data/studio';

export default function SoftwareExperience() {
  const tools = [
    {
      name: 'Blender',
      version: 'Cycles / Eevee / Geometry Nodes',
      role: 'Organic Modeling, Shading, Lighting & Simulation',
      tag: 'Primary Core Engine',
      badge: 'Blender 4.x'
    },
    {
      name: 'ZBrush',
      version: 'Digital Clay & Dynamesh',
      role: 'High-Density Anatomy Sculpting & Character Concepts',
      tag: 'Master Sculptor',
      badge: 'Pixologic ZBrush'
    },
    {
      name: 'Maya',
      version: 'Rigging & Animation Kinematics',
      role: 'Industrial Mechanical Animation & Camera Staging',
      tag: 'Studio Pipeline',
      badge: 'Autodesk Maya'
    },
    {
      name: 'Google Veo',
      version: 'Generative AI Motion Model',
      role: 'Next-Gen Generative Visual Direction & Video Synthesis',
      tag: 'AI Frontier',
      badge: 'Veo Synthesis'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#05090C] relative overflow-hidden border-t border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#74E023]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#74E023]/10 border border-[#74E023]/30 text-[#74E023] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Craftsmanship</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Software Stack & Experience
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-[#0A1418] p-4 rounded-2xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-black text-[#74E023] font-mono">
              5+
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                Years of Active Experience
              </p>
              <p className="text-[11px] text-[#859CA7] font-mono">
                Continuous 3D Craft & Motion Exploration
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTINUOUS KINETIC MARQUEE OF TOOLS */}
      <div className="relative w-full overflow-hidden py-4 select-none mb-12">
        <div className="flex w-max animate-marquee space-x-6">
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#091216] border border-white/10 hover:border-[#74E023]/50 transition-colors shadow-lg shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-[#74E023]/15 text-[#74E023] flex items-center justify-center font-black font-mono text-sm border border-[#74E023]/30">
                0{ (index % 4) + 1 }
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-white text-base">
                    {tool.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#74E023]/10 text-[#74E023] border border-[#74E023]/20">
                    {tool.tag}
                  </span>
                </div>
                <p className="text-xs text-[#859CA7] mt-0.5">
                  {tool.version}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 DETAILED WORKBENCH CARDS */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="p-6 rounded-2xl bg-[#081116] border border-white/10 hover:border-[#74E023]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-[#74E023] uppercase tracking-wider">
                    {tool.badge}
                  </span>
                  <Cpu className="w-4 h-4 text-white/30 group-hover:text-[#74E023] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#74E023] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-[#859CA7] leading-relaxed">
                  {tool.role}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
                <span>PRODUCTION LEVEL</span>
                <span className="text-[#74E023] font-bold">PROFESSIONAL</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
