/* ── Speakable schema (AEO / voice answers) ───────────────────────
   Google Assistant and AI answer engines read the elements matched by
   these selectors aloud. They must point at the answer-first intro and
   the FAQ answers, so every page that emits this schema must put
   `speakable-intro` on its intro paragraph and `speakable-answer` on
   each FAQ answer (FAQAccordion does the latter automatically). */

export const SPEAKABLE_SELECTORS = [".speakable-intro", ".speakable-answer"];

export function speakableWebPageSchema(url: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: SPEAKABLE_SELECTORS,
    },
  };
}

/** Add `className` to an opening <p> tag, merging with any existing class. */
function addClass(openTag: string, className: string): string {
  if (/\sclass="/i.test(openTag)) {
    return openTag.replace(/\sclass="([^"]*)"/i, (_m, c) => ` class="${c} ${className}"`);
  }
  return openTag.replace(/^<p/i, `<p class="${className}"`);
}

const P_OPEN = /<p(?:\s[^>]*)?>/gi;
const stripTags = (s: string) => s.replace(/<[^>]+>/g, "").trim();

/**
 * Mark blog HTML for speakable:
 * - the first text paragraph (the answer-first intro) → `speakable-intro`
 * - each paragraph directly after an <h3> inside the FAQ section → `speakable-answer`
 * Only class attributes are added; the visible content is unchanged.
 */
export function markBlogSpeakable(html: string): string {
  let out = html;

  // 1. Answer-first intro: first <p> with real text (skips image-only paragraphs)
  P_OPEN.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = P_OPEN.exec(out)) !== null) {
    const close = out.indexOf("</p>", m.index);
    if (close === -1) break;
    if (stripTags(out.slice(m.index + m[0].length, close)).length >= 40) {
      out = out.slice(0, m.index) + addClass(m[0], "speakable-intro") + out.slice(m.index + m[0].length);
      break;
    }
  }

  // 2. FAQ answers: <h3>…</h3><p> pairs after the FAQ <h2>
  const faqStart = out.search(/<h2[^>]*>(?:(?!<\/h2>)[\s\S])*(?:FAQ|Frequently\s+Asked)/i);
  if (faqStart !== -1) {
    const head = out.slice(0, faqStart);
    const faq = out.slice(faqStart).replace(
      /(<\/h3>\s*)(<p(?:\s[^>]*)?>)/gi,
      (_m, h3Close, pOpen) => h3Close + addClass(pOpen, "speakable-answer")
    );
    out = head + faq;
  }

  return out;
}
