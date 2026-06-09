import { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { SERVICES } from "@/lib/services";
import { getAllPostsMeta } from "@/lib/blog";

const BASE = "https://www.getyourbucksworth.com";

/** Ensure date string has timezone for valid sitemap lastmod */
function normalizeDate(d: string): string {
  if (!d) return new Date().toISOString();
  // Already has timezone (Z or +/- offset) → valid
  if (d.endsWith("Z") || /[+-]\d{2}:\d{2}$/.test(d)) return d;
  // Has time component but no timezone → append Z (UTC)
  if (d.includes("T")) return d + "Z";
  // Date-only (YYYY-MM-DD) → valid per W3C
  return d;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();
  const entries: MetadataRoute.Sitemap = [];

  /* ── Homepage ── */
  entries.push({
    url: BASE,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1.0,
  });

  /* ── Static pages ── */
  const staticPages = [
    { path: "/about", freq: "monthly" as const, p: 0.8 },
    { path: "/reviews", freq: "weekly" as const, p: 0.8 },
    { path: "/request-service", freq: "monthly" as const, p: 0.8 },
    { path: "/instant-estimate", freq: "monthly" as const, p: 0.8 },
    { path: "/termite-warranty", freq: "monthly" as const, p: 0.8 },
    { path: "/job-site-work", freq: "weekly" as const, p: 0.8 },
    { path: "/blog", freq: "daily" as const, p: 0.7 },
    { path: "/sitemap-page", freq: "monthly" as const, p: 0.3 },
  ];
  for (const pg of staticPages) {
    entries.push({
      url: `${BASE}${pg.path}`,
      lastModified: now,
      changeFrequency: pg.freq,
      priority: pg.p,
    });
  }

  /* ── City pages ── */
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

  /* ── Blog posts (from local static data) ── */
  const blogPosts = getAllPostsMeta();
  for (const post of blogPosts) {
    entries.push({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: normalizeDate(post.modified),
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  return entries;
}
