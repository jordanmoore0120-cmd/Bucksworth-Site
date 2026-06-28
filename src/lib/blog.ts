/* ── Static Blog Data Reader ──────────────────────────────────── */
/* Reads blog content from local JSON files instead of WordPress API. */

import fs from "fs";
import path from "path";

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  modified: string;
  categories: string[];
  categorySlugs: string[];
  tags: string[];
  featuredMedia: number;
}

export interface BlogCategory {
  name: string;
  slug: string;
  count: number;
}

export interface BlogIndex {
  slug: string;
  title: string;
  date: string;
  modified: string;
  excerpt: string;
  categories: string[];
  categorySlugs: string[];
  canonicalTarget?: string;
  relatedSlugs?: string[];
}

/* ── Cache (loaded once per build / serverless cold start) ── */
let _index: BlogIndex[] | null = null;
let _data: Record<string, BlogPost> | null = null;
let _categories: BlogCategory[] | null = null;

function getContentDir(): string {
  return path.join(process.cwd(), "content", "blog");
}

function loadIndex(): BlogIndex[] {
  if (_index) return _index;
  const raw = fs.readFileSync(path.join(getContentDir(), "index.json"), "utf-8");
  _index = JSON.parse(raw);
  return _index!;
}

function loadData(): Record<string, BlogPost> {
  if (_data) return _data;
  const dir = getContentDir();
  _data = {};

  // Load all data-*.json split files (monthly chunks + legacy)
  const files = fs.readdirSync(dir).filter(
    (f) => f.startsWith("data-") && f.endsWith(".json")
  );
  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const chunk: Record<string, BlogPost> = JSON.parse(raw);
    Object.assign(_data, chunk);
  }

  // Fallback: monolithic data.json (pre-split)
  const mono = path.join(dir, "data.json");
  if (files.length === 0 && fs.existsSync(mono)) {
    const raw = fs.readFileSync(mono, "utf-8");
    _data = JSON.parse(raw);
  }

  return _data!;
}

function loadCategories(): BlogCategory[] {
  if (_categories) return _categories;
  const raw = fs.readFileSync(path.join(getContentDir(), "categories.json"), "utf-8");
  _categories = JSON.parse(raw);
  return _categories!;
}

/**
 * Fetch paginated posts. Matches the old WP API interface.
 */
export function getPosts(
  page = 1,
  perPage = 12,
  categorySlug?: string
): { posts: BlogIndex[]; total: number; totalPages: number } {
  let all = loadIndex();

  if (categorySlug) {
    all = all.filter((p) => p.categorySlugs.includes(categorySlug));
  }

  // Sort newest-first so the blog listing always shows latest posts on page 1
  all = [...all].sort((a, b) => b.date.localeCompare(a.date));

  const total = all.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const posts = all.slice(start, start + perPage);

  return { posts, total, totalPages };
}

/** Fetch a single post by slug */
export function getPostBySlug(slug: string): BlogPost | null {
  const data = loadData();
  return data[slug] || null;
}

/** Fetch all categories */
export function getCategories(): BlogCategory[] {
  return loadCategories();
}

/** Get all post slugs (for static generation / sitemap) */
export function getAllPostSlugs(): string[] {
  return loadIndex().map((p) => p.slug);
}

/** Get all posts metadata (for sitemap) — excludes noindexed posts with canonical targets */
export function getAllPostsMeta(): { slug: string; modified: string }[] {
  return loadIndex()
    .filter((p) => !p.canonicalTarget)
    .map((p) => ({ slug: p.slug, modified: p.modified }));
}

/** Get canonical target for a blog post (if it should point to a service page) */
export function getCanonicalTarget(slug: string): string | null {
  const idx = loadIndex();
  const item = idx.find((p) => p.slug === slug);
  return item?.canonicalTarget || null;
}

/** Get related posts for a blog post (pre-computed by city + category matching) */
export function getRelatedPosts(slug: string): BlogIndex[] {
  const idx = loadIndex();
  const item = idx.find((p) => p.slug === slug);
  if (!item?.relatedSlugs?.length) return [];

  const slugSet = new Set(item.relatedSlugs);
  return idx.filter((p) => slugSet.has(p.slug));
}

/** Extract first image URL and alt text from post content for schema */
export function extractFirstImage(content: string): { url: string; alt: string } | null {
  const match = content.match(/<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"[^>]*>/i)
    || content.match(/<img[^>]+alt="([^"]*)"[^>]*src="([^"]+)"[^>]*>/i);
  if (!match) return null;
  // First pattern: src is group 1, alt is group 2
  // Second pattern: alt is group 1, src is group 2
  const src = match[0].match(/src="([^"]+)"/)?.[1] || "";
  const alt = match[0].match(/alt="([^"]+)"/)?.[1] || "";
  if (!src) return null;
  // Normalize URL
  const url = src.startsWith("http") ? src : `https://www.getyourbucksworth.com${src}`;
  return { url, alt };
}

/** Extract FAQ Q&A pairs from post content for FAQ schema */
export function extractFaqPairs(content: string): { question: string; answer: string }[] {
  const pairs: { question: string; answer: string }[] = [];
  const stripTags = (s: string) => s.replace(/<[^>]+>/g, "").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim();

  // Pattern 1: <h3>Question</h3> <p>Answer</p>
  const h3Pattern = /<h3[^>]*>(.*?)<\/h3>\s*<p>([\s\S]*?)(?=<h[23]|<\/div|$)/gi;
  let match;
  while ((match = h3Pattern.exec(content)) !== null) {
    const q = stripTags(match[1]);
    const a = stripTags(match[2]);
    if (q.length > 10 && a.length > 20 && (q.includes("?") || q.toLowerCase().startsWith("how") || q.toLowerCase().startsWith("what") || q.toLowerCase().startsWith("why") || q.toLowerCase().startsWith("do") || q.toLowerCase().startsWith("can") || q.toLowerCase().startsWith("is") || q.toLowerCase().startsWith("will") || q.toLowerCase().startsWith("are"))) {
      pairs.push({ question: q, answer: a.slice(0, 500) });
    }
  }

  // Pattern 2: <strong>Q: Question</strong> ... A: Answer
  if (pairs.length === 0) {
    const qPattern = /<strong>Q:\s*(.*?)<\/strong>[\s\S]*?A:\s*([\s\S]*?)(?=<strong>Q:|<h[23]|<\/div|$)/gi;
    while ((match = qPattern.exec(content)) !== null) {
      const q = stripTags(match[1]);
      const a = stripTags(match[2]);
      if (q.length > 10 && a.length > 20) {
        pairs.push({ question: q, answer: a.slice(0, 500) });
      }
    }
  }

  // Pattern 3: FAQ section with <strong>Question?</strong><br />Answer inside <p> tags
  // Common in older Marblism/WP posts where FAQs use bold questions instead of h3 headings
  if (pairs.length === 0) {
    const faqSectionMatch = content.match(/Frequently\s+Asked\s+Questions[^<]*<\/h2>([\s\S]*?)(?=<h2|<\/div class|$)/i);
    if (faqSectionMatch) {
      const faqSection = faqSectionMatch[1];
      const strongQPattern = /<p>\s*<strong>(.*?)<\/strong>\s*(?:<br\s*\/?>)?\s*([\s\S]*?)<\/p>/gi;
      while ((match = strongQPattern.exec(faqSection)) !== null) {
        const q = stripTags(match[1]);
        const a = stripTags(match[2]);
        if (q.length > 10 && a.length > 20 && q.includes("?")) {
          pairs.push({ question: q, answer: a.slice(0, 500) });
        }
      }
    }
  }

  return pairs.slice(0, 10); // Max 10 FAQ items
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
