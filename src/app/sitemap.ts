import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://abrahamartsstudio.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/portfolio/3d-models',
    '/portfolio/3d-animations',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route.startsWith('/portfolio') ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/portfolio') ? 0.9 : 0.8,
  }));
}
