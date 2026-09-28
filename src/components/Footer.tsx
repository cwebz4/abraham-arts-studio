'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MessageSquare, Facebook, ArrowUpRight, ArrowUp } from 'lucide-react';
import { studioInfo } from '@/data/studio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05090C] text-white border-t border-white/10 relative overflow-hidden select-none">
      {/* Massive Brand Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] text-[18vw] font-black tracking-tighter whitespace-nowrap">
        ABRAHAM ARTS
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-12 relative z-10">
        {/* Top Massive Statement */}
        <div className="pb-16 border-b border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono text-[#74E023] uppercase tracking-[0.3em] font-bold block mb-2">
              LOOKING AHEAD
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white">
              LET&apos;S CREATE.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={studioInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#74E023] hover:bg-[#8DF246] text-[#070D10] text-xs font-black tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(116,224,35,0.4)] flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Chat</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16 border-b border-white/10">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/assets/brand/logo/logo.svg"
                  alt="Abraham Arts Studio Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <span className="font-extrabold text-lg tracking-wider text-white">
                ABRAHAM <span className="text-[#74E023]">ARTS STUDIO</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#859CA7] leading-relaxed max-w-sm">
              Portfolio of Olorunleke Abraham. Specializing in high-end 3D character sculpts, mechanical topology, cinematic animation and next-gen AI video synthesis.
            </p>

            <div className="pt-2 text-xs font-mono text-[#74E023]">
              OWNER / LEAD ARTIST: OLORUNLEKE ABRAHAM
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#74E023] font-bold">
              Specialties
            </p>
            <ul className="space-y-2 text-xs text-[#CBD5E1]">
              <li>
                <Link href="/services#3d-modelling" className="hover:text-[#74E023] transition-colors flex items-center gap-1.5">
                  <span className="text-white/30">&bull;</span> 3D Modelling
                </Link>
              </li>
              <li>
                <Link href="/services#3d-animation" className="hover:text-[#74E023] transition-colors flex items-center gap-1.5">
                  <span className="text-white/30">&bull;</span> 3D Animation
                </Link>
              </li>
              <li>
                <Link href="/services#ai-animation" className="hover:text-[#74E023] transition-colors flex items-center gap-1.5">
                  <span className="text-white/30">&bull;</span> AI Animation (Google Veo)
                </Link>
              </li>
              <li>
                <Link href="/portfolio/3d-models" className="hover:text-[#74E023] transition-colors flex items-center gap-1.5">
                  <span className="text-white/30">&bull;</span> Digital Sculpting & Anatomy
                </Link>
              </li>
              <li>
                <Link href="/portfolio/3d-animations" className="hover:text-[#74E023] transition-colors flex items-center gap-1.5">
                  <span className="text-white/30">&bull;</span> Commercial Product Motion
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#74E023] font-bold">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-[#CBD5E1]">
              <li>
                <Link href="/" className="hover:text-[#74E023] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#74E023] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#74E023] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#74E023] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/portfolio/3d-models" className="hover:text-[#74E023] transition-colors">
                  3D Models
                </Link>
              </li>
              <li>
                <Link href="/portfolio/3d-animations" className="hover:text-[#74E023] transition-colors">
                  3D Animations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#74E023] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect / Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#74E023] font-bold">
              Direct Communication
            </p>
            <div className="space-y-3 text-xs text-[#CBD5E1]">
              <div>
                <span className="text-[#859CA7] block text-[11px] font-mono">EMAIL</span>
                <a
                  href={`mailto:${studioInfo.email}`}
                  className="hover:text-[#74E023] transition-colors font-medium break-all"
                >
                  {studioInfo.email}
                </a>
              </div>

              <div>
                <span className="text-[#859CA7] block text-[11px] font-mono">WHATSAPP / PHONE</span>
                <a
                  href={studioInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#74E023] transition-colors font-medium"
                >
                  {studioInfo.phone}
                </a>
              </div>

              <div>
                <span className="text-[#859CA7] block text-[11px] font-mono">SOCIAL</span>
                <a
                  href={studioInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#74E023] transition-colors font-medium flex items-center gap-1.5"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#74E023]" />
                  <span>Facebook Profile</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#859CA7] gap-4 font-mono">
          <p>
            &copy; {currentYear} {studioInfo.brandName}. All 3D artworks, models & animation rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/40">Engineered for 3D Excellence</span>
            <span>&bull;</span>
            <span className="text-[#74E023]">Olorunleke Abraham</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
