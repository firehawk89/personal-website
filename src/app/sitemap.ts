import { MetadataRoute } from 'next'

import { SITE_URL } from '@/utils'
import { getProjectsMetadata } from '@/utils/projects'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectsMetadata = await getProjectsMetadata()

  const sitemapData: MetadataRoute.Sitemap = [
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 1,
      url: SITE_URL,
    },
  ]

  for (const project of projectsMetadata) {
    sitemapData.push({
      changeFrequency: 'weekly',
      lastModified: project.lastModified,
      priority: 0.8,
      url: `${SITE_URL}/${project.slug}`,
    })
  }

  return sitemapData
}
