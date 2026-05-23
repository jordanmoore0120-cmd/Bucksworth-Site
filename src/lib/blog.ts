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
  const raw = fs.readFileSync(path.join(getContentDir(), "data.json"), "utf-8");
  _data = JSON.parse(raw);
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

/** Get all posts metadata (for sitemap) */
export function getAllPostsMeta(): { slug: string; modified: string }[] {
  return loadIndex().map((p) => ({ slug: p.slug, modified: p.modified }));
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
