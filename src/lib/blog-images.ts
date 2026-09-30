/* ── Responsive delivery for images inside blog post HTML ──────────
   Blog bodies are raw HTML with full-size <img src="/images/..."> tags
   (1600px JPEGs shown at ~650px). This adds a srcset through the Next.js
   image optimizer (AVIF/WebP, resized) and lazy-loads every image after
   the first. The original src stays as the fallback, so nothing breaks
   if the optimizer is unavailable. External and already-responsive
   images are left untouched. */

const WIDTHS = [640, 750, 828, 1080];
const SIZES = "(max-width: 760px) 100vw, 700px";

const optimized = (src: string, w: number) =>
  `/_next/image?url=${encodeURIComponent(src)}&amp;w=${w}&amp;q=75 ${w}w`;

export function optimizeBlogImages(html: string): string {
  let index = 0;
  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    const i = index++;
    const src = tag.match(/\ssrc="([^"]+)"/i)?.[1];
    if (!src || !src.startsWith("/images/") || /\ssrcset=/i.test(tag)) return tag;

    const attrs: string[] = [
      `srcset="${WIDTHS.map((w) => optimized(src, w)).join(", ")}"`,
      `sizes="${SIZES}"`,
    ];
    if (!/\sdecoding=/i.test(tag)) attrs.push(`decoding="async"`);
    if (i > 0 && !/\sloading=/i.test(tag)) attrs.push(`loading="lazy"`);

    return tag.replace(/^<img\b/i, `<img ${attrs.join(" ")}`);
  });
}
