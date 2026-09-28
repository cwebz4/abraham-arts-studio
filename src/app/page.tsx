'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import HomeIntro from '@/components/HomeIntro';
import FeaturedWork from '@/components/FeaturedWork';
import CategoryPortals from '@/components/CategoryPortals';
import ServicesPreview from '@/components/ServicesPreview';
import SoftwareExperience from '@/components/SoftwareExperience';
import CTASection from '@/components/CTASection';
import MediaLightbox from '@/components/MediaLightbox';
import { portfolioData, PortfolioItem } from '@/data/portfolio';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <div className="w-full bg-[#070D10]">
      {/* 1. HOMEPAGE HERO (100vh Cinematic Multi-Layer Sequence) */}
      <Hero />

      {/* 2. SHORT INTRODUCTION */}
      <HomeIntro />

      {/* 3. FEATURED WORK (Editorial Dynamic Layout) */}
      <FeaturedWork
        projects={portfolioData}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* 4. PORTFOLIO CATEGORY PORTALS (01 3D Models / 02 3D Animations) */}
      <CategoryPortals />

      {/* 5. SERVICES PREVIEW (3D Modelling / 3D Animation / AI Animation) */}
      <ServicesPreview />

      {/* 6. SOFTWARE & EXPERIENCE (5+ Years, Blender, ZBrush, Maya, Google Veo) */}
      <SoftwareExperience />

      {/* 7. FINAL CALL TO ACTION (Start a Project) */}
      <CTASection />

      {/* FULLSCREEN PROJECT VIEWER / LIGHTBOX */}
      {selectedProject && (
        <MediaLightbox
          item={selectedProject}
          items={portfolioData}
          onClose={() => setSelectedProject(null)}
          onNavigate={(item) => setSelectedProject(item)}
        />
      )}
    </div>
  );
}
