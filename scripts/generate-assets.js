const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, '..', 'public', 'assets', 'portfolio', '3d-models', 'images');
const animThumbsDir = path.join(__dirname, '..', 'public', 'assets', 'portfolio', '3d-animations', 'thumbnails');

[modelsDir, animThumbsDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Helper to create stunning 3D studio artwork SVGs
function createArtworkSVG({
  title,
  subtitle,
  category,
  tools,
  colorAccent = '#74E023',
  polyType = 'mech',
  aspectRatio = '16/9',
  width = 1200,
  height = 800
}) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" fill="none">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#04080A" />
      <stop offset="50%" stop-color="#091317" />
      <stop offset="100%" stop-color="#050C0F" />
    </linearGradient>
    <linearGradient id="primaryGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#94FF47" />
      <stop offset="100%" stop-color="#55C912" />
    </linearGradient>
    <radialGradient id="radialCore" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${colorAccent}" stop-opacity="0.35" />
      <stop offset="60%" stop-color="${colorAccent}" stop-opacity="0.05" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" stroke-opacity="0.03" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Deep Obsidian Studio Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
  <rect width="${width}" height="${height}" fill="url(#grid)" />

  <!-- Volumetric Center Glow -->
  <circle cx="${width/2}" cy="${height/2}" r="${height * 0.48}" fill="url(#radialCore)" />

  <!-- Studio Viewport Geometry / Render Grids -->
  <g stroke="${colorAccent}" stroke-opacity="0.2" stroke-width="1.2">
    <!-- Camera Target Crosshairs -->
    <line x1="${width/2 - 50}" y1="${height/2}" x2="${width/2 + 50}" y2="${height/2}" />
    <line x1="${width/2}" y1="${height/2 - 50}" x2="${width/2}" y2="${height/2 + 50}" />
    <circle cx="${width/2}" cy="${height/2}" r="120" stroke-dasharray="4 8" />
    <circle cx="${width/2}" cy="${height/2}" r="220" stroke-opacity="0.1" stroke-dasharray="2 12" />
    <circle cx="${width/2}" cy="${height/2}" r="340" stroke-opacity="0.05" />
  </g>

  <!-- Central 3D Mesh Representation -->
  ${polyType === 'mech' ? `
    <!-- 3D Mech / Cybernetic Sculpture Mesh -->
    <g transform="translate(${width/2 - 200}, ${height/2 - 180})">
      <!-- Outer Armor Panels -->
      <polygon points="200,20 340,90 320,240 200,340 80,240 60,90" fill="#0E191E" stroke="${colorAccent}" stroke-width="3" filter="url(#glow)"/>
      <polygon points="200,60 300,120 280,220 200,300 120,220 100,120" fill="#13232A" stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1.5"/>
      <!-- Inner Glowing Core Sensor -->
      <polygon points="200,100 260,140 240,200 200,250 160,200 140,140" fill="url(#primaryGlow)" opacity="0.9" filter="url(#glow)"/>
      <!-- Complex Topology Lines -->
      <path d="M 200 20 L 200 340 M 60 90 L 340 90 M 80 240 L 320 240 M 100 120 L 300 120 M 120 220 L 280 220" stroke="#FFFFFF" stroke-opacity="0.25" stroke-width="1"/>
      <path d="M 200 60 L 60 90 M 200 60 L 340 90 M 200 300 L 80 240 M 200 300 L 320 240" stroke="${colorAccent}" stroke-opacity="0.5" stroke-width="1.5"/>
      <!-- Floating Energy Rings -->
      <ellipse cx="200" cy="180" rx="160" ry="40" stroke="${colorAccent}" stroke-width="2" stroke-dasharray="8 6" opacity="0.7"/>
      <ellipse cx="200" cy="200" rx="180" ry="45" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="4 10" opacity="0.4"/>
    </g>
  ` : polyType === 'creature' ? `
    <!-- 3D Creature / Organic Dragon Anatomy -->
    <g transform="translate(${width/2 - 200}, ${height/2 - 180})">
      <path d="M 200 40 Q 320 80 340 200 Q 350 320 200 340 Q 50 320 60 200 Q 80 80 200 40 Z" fill="#0D1A1F" stroke="${colorAccent}" stroke-width="3" filter="url(#glow)"/>
      <path d="M 200 40 Q 200 180 200 340" stroke="${colorAccent}" stroke-width="2.5"/>
      <!-- Ribcage Wireframe -->
      <path d="M 120 120 Q 200 160 280 120 M 100 170 Q 200 210 300 170 M 90 220 Q 200 260 310 220 M 110 270 Q 200 300 290 270" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="2"/>
      <!-- Horns / Crest -->
      <path d="M 160 70 L 80 10 L 140 60 L 60 -20 L 170 50" fill="none" stroke="${colorAccent}" stroke-width="3"/>
      <path d="M 240 70 L 320 10 L 260 60 L 340 -20 L 230 50" fill="none" stroke="${colorAccent}" stroke-width="3"/>
      <!-- Glowing Eyes -->
      <circle cx="160" cy="130" r="8" fill="#FFFFFF" filter="url(#glow)"/>
      <circle cx="240" cy="130" r="8" fill="#FFFFFF" filter="url(#glow)"/>
      <circle cx="160" cy="130" r="4" fill="${colorAccent}"/>
      <circle cx="240" cy="130" r="4" fill="${colorAccent}"/>
    </g>
  ` : polyType === 'environment' ? `
    <!-- 3D Environment / Sci-Fi Station Architecture -->
    <g transform="translate(${width/2 - 240}, ${height/2 - 160})">
      <!-- Ring Structure -->
      <ellipse cx="240" cy="160" rx="220" ry="90" fill="none" stroke="${colorAccent}" stroke-width="4" filter="url(#glow)"/>
      <ellipse cx="240" cy="160" rx="170" ry="70" fill="none" stroke="#FFFFFF" stroke-opacity="0.4" stroke-width="2"/>
      <ellipse cx="240" cy="160" rx="80" ry="32" fill="#11222A" stroke="${colorAccent}" stroke-width="3"/>
      <!-- Spokes and Modules -->
      <line x1="240" y1="70" x2="240" y2="250" stroke="${colorAccent}" stroke-width="3"/>
      <line x1="20" y1="160" x2="460" y2="160" stroke="${colorAccent}" stroke-width="3"/>
      <line x1="84" y1="96" x2="396" y2="224" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="2"/>
      <line x1="84" y1="224" x2="396" y2="96" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="2"/>
      <!-- Geodesic Domes -->
      <circle cx="240" cy="160" r="40" fill="url(#primaryGlow)" opacity="0.8" filter="url(#glow)"/>
      <circle cx="20" cy="160" r="14" fill="#0E191E" stroke="${colorAccent}" stroke-width="2"/>
      <circle cx="460" cy="160" r="14" fill="#0E191E" stroke="${colorAccent}" stroke-width="2"/>
      <circle cx="240" cy="70" r="14" fill="#0E191E" stroke="${colorAccent}" stroke-width="2"/>
      <circle cx="240" cy="250" r="14" fill="#0E191E" stroke="${colorAccent}" stroke-width="2"/>
    </g>
  ` : polyType === 'product' ? `
    <!-- Precision Watch Tourbillon / Product CGI -->
    <g transform="translate(${width/2 - 180}, ${height/2 - 180})">
      <circle cx="180" cy="180" r="160" fill="#0B1519" stroke="${colorAccent}" stroke-width="4" filter="url(#glow)"/>
      <circle cx="180" cy="180" r="135" fill="none" stroke="#FFFFFF" stroke-opacity="0.25" stroke-width="2"/>
      <circle cx="180" cy="180" r="100" fill="#101F26" stroke="${colorAccent}" stroke-width="2"/>
      <!-- Gear Teeth -->
      <g stroke="${colorAccent}" stroke-width="3">
        ${Array.from({length: 12}).map((_, i) => {
          const deg = i * 30;
          return `<line x1="180" y1="30" x2="180" y2="45" transform="rotate(${deg} 180 180)" />`;
        }).join('')}
      </g>
      <!-- Tourbillon Cage -->
      <polygon points="180,110 230,190 130,190" fill="none" stroke="#FFFFFF" stroke-width="3"/>
      <polygon points="180,250 230,170 130,170" fill="none" stroke="${colorAccent}" stroke-width="3"/>
      <circle cx="180" cy="180" r="28" fill="url(#primaryGlow)" filter="url(#glow)"/>
    </g>
  ` : `
    <!-- Cinematic Kinetic Motion Lines / Animation Visual -->
    <g transform="translate(${width/2 - 220}, ${height/2 - 150})">
      <path d="M 0 150 C 100 0, 340 300, 440 150" fill="none" stroke="${colorAccent}" stroke-width="6" filter="url(#glow)"/>
      <path d="M 20 180 C 120 30, 360 330, 460 180" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.8"/>
      <path d="M -20 120 C 80 -30, 320 270, 420 120" fill="none" stroke="${colorAccent}" stroke-width="3" stroke-dasharray="10 8" opacity="0.6"/>
      <!-- Dynamic Keyframe Vectors -->
      <circle cx="100" cy="90" r="12" fill="url(#primaryGlow)" filter="url(#glow)"/>
      <circle cx="220" cy="150" r="16" fill="#FFFFFF" filter="url(#glow)"/>
      <circle cx="340" cy="210" r="12" fill="url(#primaryGlow)" filter="url(#glow)"/>
    </g>
  `}

  <!-- Technical Top Bar Overlay -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="160" height="26" rx="4" fill="#0E191E" stroke="${colorAccent}" stroke-opacity="0.4" stroke-width="1"/>
    <circle cx="14" cy="13" r="5" fill="${colorAccent}"/>
    <text x="28" y="18" font-family="'Segoe UI', monospace" font-size="12" font-weight="700" fill="#FFFFFF" letter-spacing="1.5">ABRAHAM STUDIO</text>
  </g>

  <g transform="translate(${width - 240}, 60)">
    <text x="180" y="18" text-anchor="end" font-family="'Segoe UI', monospace" font-size="12" fill="${colorAccent}" letter-spacing="2">3D ASSET // ${tools.toUpperCase()}</text>
  </g>

  <!-- Technical Coordinate Metadata Box (Bottom Left) -->
  <g transform="translate(60, ${height - 110})">
    <text x="0" y="0" font-family="'Segoe UI', sans-serif" font-weight="800" font-size="28" fill="#FFFFFF" letter-spacing="0.5">${title.toUpperCase()}</text>
    <text x="0" y="24" font-family="'Segoe UI', sans-serif" font-weight="600" font-size="14" fill="${colorAccent}" letter-spacing="1">${category.toUpperCase()} — ${tools}</text>
    <text x="0" y="44" font-family="'Segoe UI', monospace" font-size="11" fill="#758B96" letter-spacing="1">VERTEX DENSITY: OPTIMIZED TOPOLOGY // 4K HIGH POLY TEXTURING</text>
  </g>

  <!-- Viewport HUD Overlay Box (Bottom Right) -->
  <g transform="translate(${width - 220}, ${height - 100})">
    <rect x="0" y="0" width="160" height="42" rx="4" fill="#0C161B" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1"/>
    <text x="16" y="20" font-family="'Segoe UI', monospace" font-size="11" fill="#FFFFFF">RENDER ENGINE</text>
    <text x="16" y="34" font-family="'Segoe UI', monospace" font-size="10" font-weight="700" fill="${colorAccent}">CYCLES / OCTANE</text>
  </g>

  <!-- Border Frame -->
  <rect x="20" y="20" width="${width - 40}" height="${height - 40}" rx="12" stroke="#FFFFFF" stroke-opacity="0.06" stroke-width="1" fill="none"/>
</svg>`;
}

// 8 Dedicated 3D Models
const models = [
  {
    filename: 'cybernetic-sentinel-v9.svg',
    title: 'Cybernetic Sentinel V9',
    category: '3D Character Model',
    tools: 'ZBrush & Blender',
    polyType: 'mech',
    colorAccent: '#74E023'
  },
  {
    filename: 'biomechanical-exoskeleton.svg',
    title: 'Biomechanical Exoskeleton',
    category: 'Hard Surface 3D Model',
    tools: 'Maya & ZBrush',
    polyType: 'mech',
    colorAccent: '#6EE023'
  },
  {
    filename: 'mythic-obsidian-dragon.svg',
    title: 'Mythic Obsidian Dragon',
    category: 'Organic Creature Sculpt',
    tools: 'ZBrush & Blender',
    polyType: 'creature',
    colorAccent: '#7BF024'
  },
  {
    filename: 'orbital-colony-habitat.svg',
    title: 'Orbital Colony Habitat',
    category: 'Sci-Fi Environment',
    tools: 'Blender 3D',
    polyType: 'environment',
    colorAccent: '#60DB1E'
  },
  {
    filename: 'chronos-kinetic-timepiece.svg',
    title: 'Chronos Kinetic Timepiece',
    category: 'Precision Product Model',
    tools: 'Blender & Maya',
    polyType: 'product',
    colorAccent: '#8AF148'
  },
  {
    filename: 'neo-tokyo-cyber-ronin.svg',
    title: 'Neo-Tokyo Cyber Ronin',
    category: 'Stylized 3D Character',
    tools: 'Blender & ZBrush',
    polyType: 'mech',
    colorAccent: '#74E023'
  },
  {
    filename: 'ethereal-coral-flora.svg',
    title: 'Ethereal Coral Flora',
    category: 'Procedural 3D World',
    tools: 'Blender Geometry Nodes',
    polyType: 'creature',
    colorAccent: '#6FE525'
  },
  {
    filename: 'hyperion-heavy-mech.svg',
    title: 'Hyperion Heavy Mech',
    category: 'Hard Surface Combat Rig',
    tools: 'Maya & Blender',
    polyType: 'mech',
    colorAccent: '#74E023'
  }
];

// 7 Dedicated 3D Animations
const animations = [
  {
    filename: 'quantum-flux-showreel.svg',
    title: 'Quantum Flux - Studio Showreel',
    category: 'Cinematic 3D Animation',
    tools: 'Blender & Maya',
    polyType: 'motion',
    colorAccent: '#74E023'
  },
  {
    filename: 'the-sentinel-awakens.svg',
    title: 'The Sentinel Awakens',
    category: 'Character & Combat Animation',
    tools: 'Maya & Blender',
    polyType: 'mech',
    colorAccent: '#68DD1F'
  },
  {
    filename: 'chrono-pulse-product-film.svg',
    title: 'Chrono Pulse Product Film',
    category: 'Commercial 3D Product Motion',
    tools: 'Blender 3D',
    polyType: 'product',
    colorAccent: '#8AF148'
  },
  {
    filename: 'neural-dreamscapes.svg',
    title: 'Neural Dreamscapes',
    category: 'AI-Assisted Generative Animation',
    tools: 'Google Veo & Blender',
    polyType: 'motion',
    colorAccent: '#74E023'
  },
  {
    filename: 'orbital-descent.svg',
    title: 'Orbital Descent',
    category: 'Space Sci-Fi Cinematic',
    tools: 'Blender & Maya',
    polyType: 'environment',
    colorAccent: '#60DB1E'
  },
  {
    filename: 'cyber-ronin-duel.svg',
    title: 'Cyber Ronin Duel',
    category: 'Dynamic Action Sequence',
    tools: 'Maya & Blender',
    polyType: 'mech',
    colorAccent: '#74E023'
  },
  {
    filename: 'metamorphosis-motion.svg',
    title: 'Metamorphosis',
    category: 'AI & Hybrid Motion Design',
    tools: 'Google Veo & Blender',
    polyType: 'motion',
    colorAccent: '#8DF246'
  }
];

// Write 3D model files
models.forEach(m => {
  const filePath = path.join(modelsDir, m.filename);
  fs.writeFileSync(filePath, createArtworkSVG(m));
  console.log(`Generated model asset: ${m.filename}`);
});

// Write Animation thumbnails
animations.forEach(a => {
  const filePath = path.join(animThumbsDir, a.filename);
  fs.writeFileSync(filePath, createArtworkSVG(a));
  console.log(`Generated animation thumbnail: ${a.filename}`);
});

console.log('Successfully generated all studio assets!');
