import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, ""))
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

  const lastModified = new Date()

  return [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1.0, lastModified },
    { url: `${baseUrl}/about`, changeFrequency: "yearly", priority: 0.7, lastModified },
    { url: `${baseUrl}/services`, changeFrequency: "monthly", priority: 0.9, lastModified },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.7, lastModified },
    { url: `${baseUrl}/legal`, changeFrequency: "yearly", priority: 0.3, lastModified },
  ]
}


