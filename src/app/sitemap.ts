import { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { SERVICES } from "@/lib/services";

const BASE = "https://getyourbucksworth.com";
const BLOG_API = "https://getyourbucksworth.com/wp-json/wp/v2/posts";

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

  /* ── Blog posts (fetch from WP REST API at build time) ── */
  try {
    let page = 1;
    let hasMore = true;
    while (hasMore && page <= 20) {
      const res = await fetch(
        `${BLOG_API}?per_page=100&page=${page}&_fields=slug,modified`,
        { next: { revalidate: 86400 } }
      );
      if (!res.ok) break;
      const posts: { slug: string; modified: string }[] = await res.json();
      for (const post of posts) {
        entries.push({
          url: `${BASE}/blog/${post.slug}`,
          lastModified: post.modified,
          changeFrequency: "monthly",
          priority: 0.5,
        });
      }
      hasMore = posts.length === 100;
      page++;
    }
  } catch {
    /* WP API unavailable at build — skip blog entries */
  }

  return entries;
}
