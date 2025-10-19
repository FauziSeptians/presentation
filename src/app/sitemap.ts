import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
      return [
            {
                  url: 'https://fauziseptians.com/',
                  lastModified: new Date(),
                  changeFrequency: 'yearly',
                  priority: 1,
            },
            {
                  url: 'https://fauziseptians.com/#social',
                  lastModified: new Date(),
                  changeFrequency: 'yearly',
                  priority: 0.8,
            },
            {
                  url: 'https://fauziseptians.com/#profile',
                  lastModified: new Date(),
                  changeFrequency: 'yearly',
                  priority: 0.7,
            },
            {
                  url: 'https://fauziseptians.com/#project',
                  lastModified: new Date(),
                  changeFrequency: 'yearly',
                  priority: 0.6,
            },
            {
                  url: 'https://fauziseptians.com/#skill',
                  lastModified: new Date(),
                  changeFrequency: 'yearly',
                  priority: 0.5,
            },
            {
                  url: 'https://fauziseptians.com/#certification',
                  lastModified: new Date(),
                  changeFrequency: 'yearly',
                  priority: 0.4,
            },
      ]
}