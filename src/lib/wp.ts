/* ── WordPress REST API client ─────────────────────────────────── */

const WP_API = "https://getyourbucksworth.com/wp-json/wp/v2";

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  categories: number[];
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string; alt_text: string }[];
    "wp:term"?: { id: number; name: string; slug: string }[][];
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

/**
 * Fetch paginated posts from WordPress.
 * In ISR mode, revalidate every 3600s (1 hour).
 */
export async function getPosts(
  page = 1,
  perPage = 12,
  categoryId?: number
): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  let url = `${WP_API}/posts?page=${page}&per_page=${perPage}&_embed=true&_fields=id,slug,date,modified,title,excerpt,categories,featured_media,_embedded`;
  if (categoryId) url += `&categories=${categoryId}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return { posts: [], total: 0, totalPages: 0 };

  const posts: WPPost[] = await res.json();
  const total = parseInt(res.headers.get("X-WP-Total") || "0", 10);
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "0", 10);

  return { posts, total, totalPages };
}

/** Fetch a single post by slug */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const url = `${WP_API}/posts?slug=${encodeURIComponent(slug)}&_embed=true`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  const posts: WPPost[] = await res.json();
  return posts[0] || null;
}

/** Fetch all categories */
export async function getCategories(): Promise<WPCategory[]> {
  const url = `${WP_API}/categories?per_page=100&_fields=id,name,slug,count`;
  const res = await fetch(url, { next: { revalidate: 86400 } });
  if (!res.ok) return [];
  return res.json();
}

/** Fetch all post slugs (for static generation). Gets up to 5,000 slugs. */
export async function getAllPostSlugs(): Promise<string[]> {
  const slugs: string[] = [];
  let page = 1;
  const perPage = 100;

  // Fetch up to 50 pages (5,000 posts)
  while (page <= 50) {
    const url = `${WP_API}/posts?page=${page}&per_page=${perPage}&_fields=slug`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) break;
    const posts: { slug: string }[] = await res.json();
    if (posts.length === 0) break;
    slugs.push(...posts.map((p) => p.slug));
    if (posts.length < perPage) break;
    page++;
  }
  return slugs;
}

/** Strip HTML tags from string */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "").replace(/&[^;]+;/g, " ").trim();
}

/** Format date for display */
export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
