export interface StudioService {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  software: string[];
  deliverables: string[];
  badge: string;
}

export interface SoftwareTool {
  name: string;
  category: string;
  description: string;
  proficiency: string;
  iconName: string;
}

export const studioInfo = {
  name: 'Olorunleke Abraham',
  brandName: 'Abraham Arts Studio',
  role: '3D Artist & Animator',
  experience: '5+ Years Experience',
  tagline: 'Crafting characters, worlds and motion through 3D.',
  bioShort: 'Olorunleke Abraham is a 3D artist and animator creating detailed models, cinematic animation and AI-assisted visual experiences.',
  bioFull: 'Olorunleke Abraham is a 3D artist and animator with over five years of experience transforming ideas into detailed digital models and engaging animated experiences. His work combines technical 3D craftsmanship, animation and emerging AI tools to create visuals designed to capture attention and communicate ideas.',
  email: 'abrahamjace5@gmail.com',
  phone: '+2347071682009',
  whatsappUrl: 'https://wa.me/2347071682009',
  facebookUrl: 'https://www.facebook.com/share/19Y6XKVzx4/',
  // NOTE: LinkedIn is deliberately not included per studio specification
  stats: [
    { label: 'Industry Experience', value: '5+ Years' },
    { label: 'Core Disciplines', value: '3D & Motion' },
    { label: 'Production Software', value: 'Blender / Maya' },
    { label: 'Next-Gen AI Pipeline', value: 'Google Veo' }
  ],
  softwareTools: [
    {
      name: 'Blender',
      category: 'Modeling, Shading & Animation',
      description: 'Primary workhorse for organic modeling, complex geometry nodes, lighting, and Cycles rendering.',
      proficiency: 'Advanced Master',
      badge: 'Core Tool'
    },
    {
      name: 'ZBrush',
      category: 'Digital Sculpting & Anatomy',
      description: 'Used for intricate high-poly character sculpting, creature anatomy, and micro-surface detailing.',
      proficiency: 'Expert Sculptor',
      badge: 'Sculpting'
    },
    {
      name: 'Maya',
      category: 'Hard Surface & Industry Animation',
      description: 'Industry-standard pipeline tool for mechanical rigging, complex keyframing, and camera choreography.',
      proficiency: 'Production Rigging',
      badge: 'Animation'
    },
    {
      name: 'Google Veo',
      category: 'AI-Assisted Generative Video',
      description: 'Pioneering generative motion workflows for atmospheric transitions, surreal visual effects, and conceptual ideation.',
      proficiency: 'AI Pipeline',
      badge: 'GenAI Motion'
    }
  ],
  services: [
    {
      id: '3d-modelling',
      number: '01',
      title: '3D Modelling',
      tagline: 'Precision digital assets built with structural integrity and artistic flair.',
      description: 'Detailed digital models created for characters, products, environments and creative visual projects. From high-frequency digital clay sculpting to clean, subdivision-ready topology for film and real-time engines.',
      features: [
        'Anatomical Character & Creature Sculpting',
        'Hard Surface Mechanical & Industrial Modeling',
        'Architectural & Sci-Fi Environment Design',
        'Clean Retopology & UV Unwrapping'
      ],
      software: ['ZBrush', 'Blender', 'Maya'],
      deliverables: ['High/Low-poly FBX/OBJ', '4K/8K PBR Texture Maps', 'Turntable Renders', 'Subdivision Clean Topology'],
      badge: 'Asset Creation'
    },
    {
      id: '3d-animation',
      number: '02',
      title: '3D Animation',
      tagline: 'Bringing models, scenes and ideas to life through movement and cinematic storytelling.',
      description: 'Bringing models, scenes and ideas to life through movement, storytelling and cinematic animation. Crafting emotive character performances, dynamic camera choreography, and impactful product showcases.',
      features: [
        'Dynamic Character Performance & Action',
        'Cinematic Camera Motion & Visual Rhythm',
        'Commercial Product Assembly & Exploded Views',
        'Atmospheric Lighting, Shading & Post-Compositing'
      ],
      software: ['Maya', 'Blender'],
      deliverables: ['4K Master Video (ProRes / MP4)', 'Seamless Social Media Loops', 'Shot Sequences & Camera Plates', 'Sound-Synchronized Motion'],
      badge: 'Motion Production'
    },
    {
      id: 'ai-animation',
      number: '03',
      title: 'AI Animation',
      tagline: 'Merging cutting-edge generative intelligence with directorial 3D control.',
      description: 'Combining modern generative tools and creative direction to produce innovative animated visual experiences. Harnessing advanced systems like Google Veo alongside 3D spatial foundations to unlock new aesthetic horizons.',
      features: [
        'Google Veo Generative Motion Workflows',
        'Hybrid 3D Pre-Vis & AI Video Synthesis',
        'Stylized Visual Transformations & Morphing',
        'Experimental Concept Motion & Visual Effects'
      ],
      software: ['Google Veo', 'Blender'],
      deliverables: ['High-Def Generative Clips', 'Seamless Video Morph Transitions', 'AI-Enhanced Cinematic Sequences', 'Concept Motion Treatments'],
      badge: 'Next-Gen Pipeline'
    }
  ]
};
