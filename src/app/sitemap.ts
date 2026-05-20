import { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { SERVICES } from "@/lib/services";

const BASE = "https://bucksworth-site.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const entries: MetadataRoute.Sitemap = [];

  /* Homepage */
  entries.push({
    url: BASE,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1.0,
  });

  /* Static pages */
  entries.push({
    url: `${BASE}/termite-warranty`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  });

  /* City pages */
  for (const city of CITIES) {
    entries.push({
      url: `${BASE}/${city.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    /* Service hub pages per city */
    const verticals =
      city.branch === "phoenix"
        ? SERVICES
        : SERVICES.filter(
            (s) =>
              s.slug === "pest-and-termite" || s.slug === "weed-and-lawn-care"
          );

    for (const svc of verticals) {
      entries.push({
        url: `${BASE}/${city.slug}/${svc.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });

      /* Sub-service pages */
      for (const sub of svc.subServices) {
        entries.push({
          url: `${BASE}/${city.slug}/${svc.slug}/${sub.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }
  }

  return entries;
}
