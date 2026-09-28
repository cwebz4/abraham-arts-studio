# Abraham Arts Studio — Portfolio Management Guide

Welcome to the **Abraham Arts Studio** portfolio website. This website is built specifically to make adding, editing, and managing your 3D models and animation projects effortless without altering the code or design layouts.

---

## 📁 1. Asset Directory Structure

Place your original files inside the following directories in `public/assets/`:

```
public/
  assets/
    brand/
      logo/
        logo.jpg                           <-- Your original uploaded logo
        logo.svg                           <-- High-DPI Vector Logo for web & retina displays

    portfolio/
      3d-models/
        images/                            <-- Put all your 3D Model renders here (.webp, .png, .jpg)
          your-model-name.webp

      3d-animations/
        videos/                            <-- Put your animation video files here (.mp4, .webm)
          your-animation-name.mp4
        thumbnails/                        <-- Put your video preview poster images here (.webp, .png, .jpg)
          your-animation-name.webp
```

---

## 📝 2. Central Portfolio Database

All project information is centralized in:
[`src/data/portfolio.ts`](file:///C:/Users/Admin/.gemini/antigravity/scratch/abraham-arts-studio/src/data/portfolio.ts)

### How to Add a New 3D Model:
Open `src/data/portfolio.ts` and add an object to the `portfolioData` array:

```ts
{
  id: 'model-9',
  title: 'Your 3D Model Title',
  slug: 'your-3d-model-title',
  category: '3d-models',
  type: 'image',
  media: '/assets/portfolio/3d-models/images/your-model-name.webp',
  thumbnail: '/assets/portfolio/3d-models/images/your-model-name.webp',
  description: 'Detailed description of the model, silhouette, topology and lighting.',
  featured: true, // Set to true to show on Homepage featured section
  year: '2026',
  software: ['ZBrush', 'Blender'],
  aspectRatio: 'landscape', // 'landscape' | 'portrait' | 'square' | 'ultrawide'
  details: {
    overview: 'In-depth overview of the sculpture and pipeline...',
    techniques: ['Digital Clay Sculpting', 'Subdivision Topology', 'PBR Shaders'],
    role: 'Lead 3D Modeler'
  }
}
```

### How to Add a New 3D Animation (including AI Animation):
Add an object to the `portfolioData` array:

```ts
{
  id: 'anim-8',
  title: 'Your Animation Title',
  slug: 'your-animation-title',
  category: '3d-animations',
  type: 'video',
  media: '/assets/portfolio/3d-animations/videos/your-animation-name.mp4',
  thumbnail: '/assets/portfolio/3d-animations/thumbnails/your-animation-name.webp',
  description: 'Description of the camera movement, action choreography or AI workflow.',
  featured: true,
  year: '2026',
  duration: '01:15',
  software: ['Maya', 'Blender'], // Or ['Google Veo', 'Blender'] for AI animations!
  aspectRatio: 'landscape',
  details: {
    overview: 'Full overview of the motion project...',
    techniques: ['Keyframe Dynamics', 'Lighting Rigs', 'Compositing'],
    role: 'Animator & Compositor'
  }
}
```

---

## 🎬 3. Customizing the Homepage Hero Showreel

The 100vh cinematic animated hero is controlled by the `heroMedia` array in:
[`src/data/portfolio.ts`](file:///C:/Users/Admin/.gemini/antigravity/scratch/abraham-arts-studio/src/data/portfolio.ts)

You can reorder, add, or swap any scene:
```ts
export const heroMedia: HeroMediaItem[] = [
  {
    id: 'hero-1',
    title: 'Cybernetic Sentinel V9',
    subtitle: 'High-Precision Character Sculpt & Anatomy',
    type: 'image', // or 'video'
    src: '/assets/portfolio/3d-models/images/cybernetic-sentinel-v9.svg',
    poster: '/assets/portfolio/3d-models/images/cybernetic-sentinel-v9.svg',
    category: '3D Models',
    tag: 'Character & Mechanical Sculpting',
    accent: '#74E023',
    perspectiveDepth: 120,
  },
  // Add or customize scenes here...
];
```

---

## 🎨 4. Brand Color Palette

The brand palette is extracted directly from the **Abraham Arts Studio** logo and stored in:
[`src/app/globals.css`](file:///C:/Users/Admin/.gemini/antigravity/scratch/abraham-arts-studio/src/app/globals.css)

- `--color-primary`: `#74E023` (Electric Cyber Lime Green)
- `--color-secondary`: `#FFFFFF` (Crisp Studio White)
- `--color-background`: `#070D10` (Obsidian Dark Studio Slate)
- `--color-surface`: `#0E171C` (Rich Card Surface)
- `--color-muted`: `#859CA7` (Slate Gray)

---

## 🚀 5. Running the Website

- Development Server: `npm run dev` (Runs at `http://localhost:3000`)
- Production Build: `npm run build`
- Production Server: `npm run start`
