import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jhdigitalservices.com',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://jhdigitalservices.com/es',
          en: 'https://jhdigitalservices.com/en',
          fr: 'https://jhdigitalservices.com/fr',
          ca: 'https://jhdigitalservices.com/cat',
        },
      },
    },
    {
      url: 'https://jhdigitalservices.com/about',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://jhdigitalservices.com/es/about',
          en: 'https://jhdigitalservices.com/en',
          fr: 'https://jhdigitalservices.com/fr',
          ca: 'https://jhdigitalservices.com/cat',
        },
      },
    },
    {
      url: 'https://jhdigitalservices.com/blog',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://jhdigitalservices.com/es/blog',
          de: 'https://jhdigitalservices.com/de/blog',
        },
      },
    },
  ]
}