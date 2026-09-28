'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ChevronDown, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { studioInfo } from '@/data/studio';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPortfolioDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'OUR SERVICES', href: '/services' },
    {
      label: 'PORTFOLIO',
      href: '/portfolio',
      hasDropdown: true,
      subItems: [
        {
          label: '3D Models',
          href: '/portfolio/3d-models',
          description: 'Characters, Hard Surface & Environments'
        },
        {
          label: '3D Animations',
          href: '/portfolio/3d-animations',
          description: 'Cinematics, Motion Design & AI Animation'
        }
      ]
    },
    { label: 'CONTACT US', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-nav py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-[#070D10]/80 via-[#070D10]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo & Studio Name */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="Abraham Arts Studio Home"
          >
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10 group-hover:border-[#74E023]/60 transition-colors duration-300">
              <Image
                src="/assets/brand/logo/logo.svg"
                alt="Abraham Arts Studio Logo"
                fill
                priority
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-base tracking-wider text-white group-hover:text-[#74E023] transition-colors duration-300">
                  ABRAHAM
                </span>
                <span className="font-extrabold text-sm sm:text-base tracking-wider text-[#74E023]">
                  ARTS STUDIO
                </span>
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#859CA7] group-hover:text-white/80 transition-colors duration-300">
                3D Artist &bull; Animation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative group py-2"
                    onMouseEnter={() => setPortfolioDropdownOpen(true)}
                    onMouseLeave={() => setPortfolioDropdownOpen(false)}
                  >
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                          active
                            ? 'text-[#74E023] bg-[#74E023]/10 border border-[#74E023]/30'
                            : 'text-[#CBD5E1] hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.label}
                        <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                      </Link>
                    </div>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 w-64 pt-2 transition-all duration-300 ${
                        portfolioDropdownOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="glass-card rounded-xl p-2.5 shadow-2xl border border-white/10 backdrop-blur-xl bg-[#0B1519]/95">
                        <Link
                          href="/portfolio"
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-xs font-semibold text-white/90 group/all transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-[#74E023]" />
                            All Projects
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover/all:opacity-100 group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5 transition-all text-[#74E023]" />
                        </Link>
                        <div className="my-1.5 h-px bg-white/10" />
                        {link.subItems?.map((sub) => {
                          const subActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`block p-2.5 rounded-lg transition-colors group/item ${
                                subActive
                                  ? 'bg-[#74E023]/10 text-[#74E023]'
                                  : 'hover:bg-white/5 text-white/80 hover:text-white'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold tracking-wide">
                                  {sub.label}
                                </span>
                                <span className="text-[10px] text-[#74E023] opacity-0 group-hover/item:opacity-100 transition-opacity">
                                  Explore &rarr;
                                </span>
                              </div>
                              <p className="text-[11px] text-[#859CA7] mt-0.5 line-clamp-1">
                                {sub.description}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 relative group ${
                    active
                      ? 'text-[#74E023] bg-[#74E023]/10 border border-[#74E023]/30'
                      : 'text-[#CBD5E1] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#74E023] shadow-[0_0_8px_#74E023]" />
                  )}
                </Link>
              );
            })}

            {/* Quick Contact CTA */}
            <Link
              href="/contact"
              className="ml-3 px-4 py-1.5 rounded-full bg-[#74E023] hover:bg-[#8DF246] text-[#070D10] text-xs font-extrabold tracking-wider transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(116,224,35,0.4)] flex items-center gap-1.5"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#74E023] hover:border-[#74E023]/40 transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#070D10]/98 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#74E023] font-bold">
            Navigation
          </p>

          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-black tracking-tight transition-colors ${
                pathname === '/' ? 'text-[#74E023]' : 'text-white hover:text-[#74E023]'
              }`}
            >
              01 // HOME
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-black tracking-tight transition-colors ${
                pathname === '/about' ? 'text-[#74E023]' : 'text-white hover:text-[#74E023]'
              }`}
            >
              02 // ABOUT US
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-black tracking-tight transition-colors ${
                pathname === '/services' ? 'text-[#74E023]' : 'text-white hover:text-[#74E023]'
              }`}
            >
              03 // OUR SERVICES
            </Link>

            <div className="space-y-2 pt-2 pb-2 border-y border-white/10">
              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-black tracking-tight flex items-center justify-between ${
                  pathname.startsWith('/portfolio') ? 'text-[#74E023]' : 'text-white hover:text-[#74E023]'
                }`}
              >
                <span>04 // PORTFOLIO</span>
                <span className="text-xs font-mono text-[#859CA7]">ALL WORK</span>
              </Link>
              <div className="pl-6 flex flex-col space-y-2 pt-1">
                <Link
                  href="/portfolio/3d-models"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold transition-colors flex items-center gap-2 ${
                    pathname === '/portfolio/3d-models' ? 'text-[#74E023]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#74E023]" />
                  3D Models Gallery
                </Link>
                <Link
                  href="/portfolio/3d-animations"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold transition-colors flex items-center gap-2 ${
                    pathname === '/portfolio/3d-animations' ? 'text-[#74E023]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#74E023]" />
                  3D Animations Showreel
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-black tracking-tight transition-colors ${
                pathname === '/contact' ? 'text-[#74E023]' : 'text-white hover:text-[#74E023]'
              }`}
            >
              05 // CONTACT US
            </Link>
          </div>
        </div>

        {/* Mobile Menu Footer Info */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <div className="flex items-center justify-between text-xs text-[#859CA7]">
            <span>{studioInfo.name}</span>
            <span className="text-[#74E023] font-mono">{studioInfo.experience}</span>
          </div>
          <div className="flex gap-4">
            <a
              href={`mailto:${studioInfo.email}`}
              className="text-xs text-white hover:text-[#74E023] underline"
            >
              {studioInfo.email}
            </a>
            <a
              href={studioInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#74E023] hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
