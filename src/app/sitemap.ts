import { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bucksworth-site.vercel.app";

  const cityPages = CITIES.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...cityPages,
  ];
}
