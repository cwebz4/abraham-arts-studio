export type ProjectCategory = '3d-models' | '3d-animations';
export type MediaType = 'image' | 'video';
export type AspectRatioType = 'landscape' | 'portrait' | 'square' | 'ultrawide';

export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  type: MediaType;
  media: string;
  thumbnail: string;
  description: string;
  featured: boolean;
  year: string;
  software: string[];
  aspectRatio: AspectRatioType;
  client?: string;
  duration?: string;
  details?: {
    overview: string;
    techniques: string[];
    role: string;
  };
}

export interface HeroMediaItem {
  id: string;
  title: string;
  subtitle: string;
  type: MediaType;
  src: string;
  poster: string;
  category: string;
  tag: string;
  accent: string;
  perspectiveDepth: number;
}

/**
 * CONFIGURABLE HERO MEDIA SEQUENCE
 * Features Abraham's actual 3D animation videos alongside 3D sculpting renders.
 */
export const heroMedia: HeroMediaItem[] = [
  {
    id: 'hero-1',
    title: 'Cybernetic Sentinel V9',
    subtitle: 'High-Precision Character Sculpt & Anatomy',
    type: 'image',
    src: '/assets/portfolio/3d-models/images/cybernetic-sentinel-v9.svg',
    poster: '/assets/portfolio/3d-models/images/cybernetic-sentinel-v9.svg',
    category: '3D Models',
    tag: 'Character & Mechanical Sculpting',
    accent: '#74E023',
    perspectiveDepth: 120,
  },
  {
    id: 'hero-2',
    title: 'Kinetic Motion Showcase',
    subtitle: 'Cinematic Camera Dynamics & 3D Animation',
    type: 'video',
    src: '/assets/portfolio/3d-animations/videos/animation-01.mp4',
    poster: '/assets/portfolio/3d-animations/thumbnails/quantum-flux-showreel.svg',
    category: '3D Animations',
    tag: 'Cinematic Motion Production',
    accent: '#8DF246',
    perspectiveDepth: 180,
  },
  {
    id: 'hero-3',
    title: 'Orbital Colony Habitat',
    subtitle: 'Monumental Sci-Fi Environment & Scale',
    type: 'image',
    src: '/assets/portfolio/3d-models/images/orbital-colony-habitat.svg',
    poster: '/assets/portfolio/3d-models/images/orbital-colony-habitat.svg',
    category: '3D Models',
    tag: 'Environment Architecture',
    accent: '#65DC1C',
    perspectiveDepth: 140,
  },
  {
    id: 'hero-4',
    title: 'The Sentinel Awakens',
    subtitle: 'Keyframed Combat & Kinetic Dynamics',
    type: 'video',
    src: '/assets/portfolio/3d-animations/videos/animation-02.mp4',
    poster: '/assets/portfolio/3d-animations/thumbnails/the-sentinel-awakens.svg',
    category: '3D Animations',
    tag: 'Character Action Animation',
    accent: '#74E023',
    perspectiveDepth: 200,
  },
  {
    id: 'hero-5',
    title: 'Chronos Kinetic Timepiece',
    subtitle: 'Luxury Horology Precision Render',
    type: 'image',
    src: '/assets/portfolio/3d-models/images/chronos-kinetic-timepiece.svg',
    poster: '/assets/portfolio/3d-models/images/chronos-kinetic-timepiece.svg',
    category: '3D Models',
    tag: 'Product CGI & Hard Surface',
    accent: '#8AF148',
    perspectiveDepth: 110,
  },
  {
    id: 'hero-6',
    title: 'Neural Dreamscapes',
    subtitle: 'AI-Assisted Visual Direction with Google Veo',
    type: 'video',
    src: '/assets/portfolio/3d-animations/videos/animation-04.mp4',
    poster: '/assets/portfolio/3d-animations/thumbnails/neural-dreamscapes.svg',
    category: '3D Animations',
    tag: 'AI Animation & Motion',
    accent: '#74E023',
    perspectiveDepth: 240,
  },
];

/**
 * CENTRAL PORTFOLIO DATABASE
 */
export const portfolioData: PortfolioItem[] = [
  // ================= 3D MODELS =================
  {
    id: 'model-1',
    title: 'Cybernetic Sentinel V9',
    slug: 'cybernetic-sentinel-v9',
    category: '3d-models',
    type: 'image',
    media: '/assets/portfolio/3d-models/images/cybernetic-sentinel-v9.svg',
    thumbnail: '/assets/portfolio/3d-models/images/cybernetic-sentinel-v9.svg',
    description: 'A cutting-edge cybernetic humanoid sculpt blending mechanical precision with organic facial anatomy. Rendered with volumetric rim lighting and fine surface micro-details.',
    featured: true,
    year: '2026',
    software: ['ZBrush', 'Blender'],
    aspectRatio: 'landscape',
    details: {
      overview: 'Designed as a protagonist bust for high-fidelity cinematics. Crafted from base anatomical blockouts in ZBrush, retopologized for clean deformation, and textured with procedural metallic layers in Blender.',
      techniques: ['Subdivision Surface Modeling', 'PBR Material Creation', 'Anatomical Sculpting', 'Volumetric Lighting'],
      role: 'Lead 3D Modeler & Sculptor'
    }
  },
  {
    id: 'model-2',
    title: 'Biomechanical Exoskeleton',
    slug: 'biomechanical-exoskeleton',
    category: '3d-models',
    type: 'image',
    media: '/assets/portfolio/3d-models/images/biomechanical-exoskeleton.svg',
    thumbnail: '/assets/portfolio/3d-models/images/biomechanical-exoskeleton.svg',
    description: 'An intricate hard-surface spinal chassis featuring functional hydraulic linkages, articulated pivot joints, and carbon fiber structural plating.',
    featured: true,
    year: '2025',
    software: ['Maya', 'ZBrush'],
    aspectRatio: 'portrait',
    details: {
      overview: 'Focuses on functional ergonomics and industrial realism. Every piston and bolt was constructed following real-world mechanical tolerances for animation rigging readiness.',
      techniques: ['Hard Surface Polygon Modeling', 'Mechanical Rig Preparation', 'Curvature Texturing', 'UV Optimization'],
      role: '3D Hard Surface Artist'
    }
  },
  {
    id: 'model-3',
    title: 'Mythic Obsidian Dragon',
    slug: 'mythic-obsidian-dragon',
    category: '3d-models',
    type: 'image',
    media: '/assets/portfolio/3d-models/images/mythic-obsidian-dragon.svg',
    thumbnail: '/assets/portfolio/3d-models/images/mythic-obsidian-dragon.svg',
    description: 'A gargantuan fantasy creature sculpt showcasing crystalline obsidian scales, multi-layered dorsal crests, and biological muscle striations.',
    featured: false,
    year: '2025',
    software: ['ZBrush', 'Blender'],
    aspectRatio: 'landscape',
    details: {
      overview: 'High-density organic creature sculpt with custom VDM brushes for scale patterns and deep horn textures.',
      techniques: ['Digital Clay Sculpting', 'VDM Scale Displacement', 'Subsurface Scattering', 'Anatomy Study'],
      role: 'Creature Concept Artist & Modeler'
    }
  },
  {
    id: 'model-4',
    title: 'Orbital Colony Habitat',
    slug: 'orbital-colony-habitat',
    category: '3d-models',
    type: 'image',
    media: '/assets/portfolio/3d-models/images/orbital-colony-habitat.svg',
    thumbnail: '/assets/portfolio/3d-models/images/orbital-colony-habitat.svg',
    description: 'A monumental space station habitat model featuring revolving centrifugal rings, docking bays, and pressurized geodesic biosphere domes.',
    featured: true,
    year: '2026',
    software: ['Blender'],
    aspectRatio: 'ultrawide',
    details: {
      overview: 'An ambitious hard-surface architectural piece measuring thousands of virtual meters in scale, built modularly for seamless camera flythroughs.',
      techniques: ['Modular Kitbashing', 'Array & Curve Modifiers', 'Atmospheric Compositing', 'Emissive Lighting'],
      role: 'Environment 3D Artist'
    }
  },
  {
    id: 'model-5',
    title: 'Chronos Kinetic Timepiece',
    slug: 'chronos-kinetic-timepiece',
    category: '3d-models',
    type: 'image',
    media: '/assets/portfolio/3d-models/images/chronos-kinetic-timepiece.svg',
    thumbnail: '/assets/portfolio/3d-models/images/chronos-kinetic-timepiece.svg',
    description: 'Ultra-precision luxury horological model with visible tourbillon escapement, micro-gears, brushed titanium casing, and anti-reflective sapphire glass.',
    featured: false,
    year: '2025',
    software: ['Blender', 'Maya'],
    aspectRatio: 'square',
    details: {
      overview: 'Modeled with micrometer precision to capture true luxury commercial standards. Exploded assembly structure allows for seamless product rendering.',
      techniques: ['NURBS & Polygon Hybrid Modeling', 'Anisotropic Brushed Metal Shaders', 'Glass Dispersion', 'Studio Lighting'],
      role: 'Product Visualization Modeler'
    }
  },
  {
    id: 'model-6',
    title: 'Neo-Tokyo Cyber Ronin',
    slug: 'neo-tokyo-cyber-ronin',
    category: '3d-models',
    type: 'image',
    media: '/assets/portfolio/3d-models/images/neo-tokyo-cyber-ronin.svg',
    thumbnail: '/assets/portfolio/3d-models/images/neo-tokyo-cyber-ronin.svg',
    description: 'Stylized cyberpunk character model combining feudal Japanese armor aesthetics with tactical techwear and an energy-infused katana.',
    featured: true,
    year: '2026',
    software: ['Blender', 'ZBrush'],
    aspectRatio: 'portrait',
    details: {
      overview: 'Stylized character pipeline featuring custom edge loops for dynamic cloth folding and stylized NPR lighting tests.',
      techniques: ['Stylized Character Topology', 'Marvelous Cloth Integration', 'Edge Creasing', 'Color Blocking'],
      role: 'Character Modeler'
    }
  },
  {
    id: 'model-7',
    title: 'Ethereal Coral Flora',
    slug: 'ethereal-coral-flora',
    category: '3d-models',
    type: 'image',
    media: '/assets/portfolio/3d-models/images/ethereal-coral-flora.svg',
    thumbnail: '/assets/portfolio/3d-models/images/ethereal-coral-flora.svg',
    description: 'Procedural underwater botanical geometry created with complex mathematical noise patterns, bioluminescent bulbs, and organic growth spirals.',
    featured: false,
    year: '2025',
    software: ['Blender'],
    aspectRatio: 'landscape',
    details: {
      overview: 'Created using Blender Geometry Nodes to simulate organic growth algorithms and responsive branching structures.',
      techniques: ['Procedural Geometry Nodes', 'Mathematical Curves', 'Volumetric Shading', 'Instancing'],
      role: 'Procedural 3D Designer'
    }
  },
  {
    id: 'model-8',
    title: 'Hyperion Heavy Mech',
    slug: 'hyperion-heavy-mech',
    category: '3d-models',
    type: 'image',
    media: '/assets/portfolio/3d-models/images/hyperion-heavy-mech.svg',
    thumbnail: '/assets/portfolio/3d-models/images/hyperion-heavy-mech.svg',
    description: 'A heavily armored bipedal assault unit featuring reactive armor plating, dual shoulder-mounted cannons, and articulated walking suspension.',
    featured: false,
    year: '2024',
    software: ['Maya', 'Blender'],
    aspectRatio: 'landscape',
    details: {
      overview: 'Industrial scale robotics asset built for game engine kinematics and cinematic military demonstrations.',
      techniques: ['Hard Surface Bevels', 'Mechanical Joint Systems', 'Decal Masking', 'Weathering Maps'],
      role: 'Hard Surface 3D Modeler'
    }
  },

  // ================= 3D ANIMATIONS (Actual MP4 Videos from Downloads) =================
  {
    id: 'anim-1',
    title: 'Studio Animation Reel // Sequence 01',
    slug: 'studio-animation-reel-01',
    category: '3d-animations',
    type: 'video',
    media: '/assets/portfolio/3d-animations/videos/animation-01.mp4',
    thumbnail: '/assets/portfolio/3d-animations/thumbnails/quantum-flux-showreel.svg',
    description: 'Cinematic 3D animation sequence featuring dynamic camera dynamics, atmospheric illumination, and precision keyframing.',
    featured: true,
    year: '2026',
    duration: '00:30',
    software: ['Blender', 'Maya'],
    aspectRatio: 'landscape',
    details: {
      overview: 'Lighting choreography, camera movement, and character motion crafted over the past year.',
      techniques: ['Cinematic Camera Choreography', 'Volumetric Shading', 'Pacing & Rhythm Editing'],
      role: 'Director, Animator & Compositor'
    }
  },
  {
    id: 'anim-2',
    title: 'Character Performance & Action // Sequence 02',
    slug: 'character-action-sequence-02',
    category: '3d-animations',
    type: 'video',
    media: '/assets/portfolio/3d-animations/videos/animation-02.mp4',
    thumbnail: '/assets/portfolio/3d-animations/thumbnails/the-sentinel-awakens.svg',
    description: 'Dynamic character performance animation sequence demonstrating fluid secondary motion and keyframe timing.',
    featured: true,
    year: '2026',
    duration: '00:25',
    software: ['Maya', 'Blender'],
    aspectRatio: 'landscape',
    details: {
      overview: 'Focused on weight, mechanical inertia, and dynamic secondary animation.',
      techniques: ['Keyframe Mechanical Animation', 'Secondary Physics Simulation', 'Lighting FX'],
      role: 'Keyframe Animator'
    }
  },
  {
    id: 'anim-3',
    title: 'Kinetic Motion Visual // Sequence 03',
    slug: 'kinetic-motion-visual-03',
    category: '3d-animations',
    type: 'video',
    media: '/assets/portfolio/3d-animations/videos/animation-03.mp4',
    thumbnail: '/assets/portfolio/3d-animations/thumbnails/chrono-pulse-product-film.svg',
    description: 'Motion study exploring timing, camera speed ramps, and stylized 3D aesthetics.',
    featured: true,
    year: '2026',
    duration: '00:20',
    software: ['Blender'],
    aspectRatio: 'landscape',
    details: {
      overview: 'Micro-camera macro focus pulls and rhythmic animation dynamics.',
      techniques: ['Camera Ramping', 'Depth of Field Pulls', 'Lighting'],
      role: 'Commercial 3D Animator'
    }
  },
  {
    id: 'anim-4',
    title: 'Neural Dreamscapes // AI Motion 04',
    slug: 'neural-dreamscapes-04',
    category: '3d-animations',
    type: 'video',
    media: '/assets/portfolio/3d-animations/videos/animation-04.mp4',
    thumbnail: '/assets/portfolio/3d-animations/thumbnails/neural-dreamscapes.svg',
    description: 'AI-assisted generative animation sequence leveraging Google Veo and 3D camera staging.',
    featured: true,
    year: '2026',
    duration: '00:30',
    software: ['Google Veo', 'Blender'],
    aspectRatio: 'landscape',
    details: {
      overview: '3D scene pre-visualization combined with generative video transformations in Google Veo.',
      techniques: ['AI Prompt-to-Motion Pipelines', 'Google Veo Neural Synthesis', '3D Camera Projection Matching'],
      role: 'Creative AI Director & Animator'
    }
  },
  {
    id: 'anim-5',
    title: 'Atmospheric Spatial Motion // Sequence 05',
    slug: 'atmospheric-spatial-motion-05',
    category: '3d-animations',
    type: 'video',
    media: '/assets/portfolio/3d-animations/videos/animation-05.mp4',
    thumbnail: '/assets/portfolio/3d-animations/thumbnails/orbital-descent.svg',
    description: 'Atmospheric motion sequence with particle dynamics, camera shake, and volumetric lighting.',
    featured: false,
    year: '2025',
    duration: '00:35',
    software: ['Blender', 'Maya'],
    aspectRatio: 'landscape',
    details: {
      overview: 'Heavy particle simulation and atmospheric ionization glow effects layered over camera tracking.',
      techniques: ['Particle Smoke & Fire Simulation', 'Camera Shake Realism', 'Sky Atmosphere Shaders'],
      role: 'VFX & Animation Artist'
    }
  },
  {
    id: 'anim-6',
    title: 'Dynamic Combat Choreography // Sequence 06',
    slug: 'dynamic-combat-choreography-06',
    category: '3d-animations',
    type: 'video',
    media: '/assets/portfolio/3d-animations/videos/animation-06.mp4',
    thumbnail: '/assets/portfolio/3d-animations/thumbnails/cyber-ronin-duel.svg',
    description: 'Fast-paced action timing with rapid camera arcs celebrating martial arts and mechanical choreography.',
    featured: false,
    year: '2025',
    duration: '00:28',
    software: ['Maya', 'Blender'],
    aspectRatio: 'landscape',
    details: {
      overview: 'Exploration of timing with holds, smears, and rapid camera arcs.',
      techniques: ['Step-Frame Action Timing', 'Motion Blur Deformation', 'Choreographed Combat'],
      role: 'Action Choreographer & Animator'
    }
  },
  {
    id: 'anim-7',
    title: 'Metamorphosis Hybrid Motion // Sequence 07',
    slug: 'metamorphosis-hybrid-motion-07',
    category: '3d-animations',
    type: 'video',
    media: '/assets/portfolio/3d-animations/videos/animation-07.mp4',
    thumbnail: '/assets/portfolio/3d-animations/thumbnails/metamorphosis-motion.svg',
    description: 'Experimental fluid and generative motion morphing between metallic chrome and glowing organic surfaces.',
    featured: false,
    year: '2026',
    duration: '00:22',
    software: ['Google Veo', 'Blender'],
    aspectRatio: 'landscape',
    details: {
      overview: 'Hybrid simulation where fluid meshes rendered in Blender are enhanced with generative video synthesis via Google Veo.',
      techniques: ['Fluid Viscosity Simulation', 'Generative Flow Guidance', 'Iridescent Reflection Maps'],
      role: 'Experimental Motion Designer'
    }
  }
];

export function getAllProjects(): PortfolioItem[] {
  return portfolioData;
}

export function getFeaturedProjects(): PortfolioItem[] {
  return portfolioData.filter(item => item.featured);
}

export function getProjectsByCategory(category: ProjectCategory): PortfolioItem[] {
  return portfolioData.filter(item => item.category === category);
}

export function getProjectBySlug(slug: string): PortfolioItem | undefined {
  return portfolioData.find(item => item.slug === slug);
}
