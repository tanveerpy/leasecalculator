import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://commercial-lease-calc.com', // Placeholder domain
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ]
}
