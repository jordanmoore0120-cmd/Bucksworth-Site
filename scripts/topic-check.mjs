#!/usr/bin/env node
// Topic / cannibalization check — run BEFORE creating any new page, post, GBP post topic or ad landing page.
//   node scripts/topic-check.mjs "scorpion control mesa"
// Shows which of OUR URLs already own this search (Search Console), which posts already target it
// (publish-log + blog titles), and whether the query is already split across 2+ of our URLs.
// Exit 1 = an existing URL already owns this search -> improve that URL instead of making a new one.
import fs from "node:fs";

const q = process.argv.slice(2).join(" ").trim().toLowerCase();
if (!q) { console.log('usage: node scripts/topic-check.mjs "<target keyword or question>"'); process.exit(2); }
const read = (f, d) => { try { return JSON.parse(fs.readFileSync(f, "utf8")); } catch { return d; } };
const STOP = new Set("a an the in of for to and or is are do does how what when why who which my your near me az arizona best top get rid with on at by can i you it from vs".split(" "));
const cities = read("seo-data/city-demand.json", {});
const CITY = new Set();
for (const c of (fs.existsSync("src/lib/cities.ts") ? fs.readFileSync("src/lib/cities.ts", "utf8").matchAll(/name:\s*"([^"]+)"/g) : [])) c[1].toLowerCase().split(/\s+/).forEach((w) => CITY.add(w));
const stem = (w) => w.replace(/(ies)$/, "y").replace(/(es|s)$/, "");
const toks = (s) => new Set(String(s).toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter((w) => w && !STOP.has(w) && !CITY.has(w)).map(stem));
const T = toks(q);
const sim = (s) => { const S = toks(s); if (!S.size || !T.size) return 0; let n = 0; for (const t of T) if (S.has(t)) n++; return n / Math.max(T.size, S.size); };

const hits = [];
const gsc = read("seo-data/gsc-ranking-map.json", {}).queries_best_page || [];
for (const r of gsc) { const s = sim(r.query); if (s >= 0.75) hits.push({ src: "Search Console", score: s, query: r.query, page: r.page, impressions: r.impressions, position: r.position }); }
const can = read("seo-data/cannibalization.json", {}).queries || [];
const split = can.filter((c) => sim(c.query) >= 0.75 && (!q.split(/\s+/).some((w) => CITY.has(w)) || q.split(/\s+/).filter((w) => CITY.has(w)).some((w) => c.query.includes(w))));
for (const p of read("seo-data/publish-log.json", [])) { const s = sim(p.target_question); if (s >= 0.6) hits.push({ src: "publish-log", score: s, query: p.target_question, page: `/blog/${p.slug}` }); }
for (const p of read("content/blog/index.json", [])) { const s = sim(p.title); if (s >= 0.6) hits.push({ src: "blog title", score: s, query: p.title, page: `/blog/${p.slug}` }); }
// Existing site pages (sitemap + indexed URLs) whose path contains every core word.
for (const p of Object.keys(read("seo-data/url-baseline.json", {}).urls || {})) {
  const P = new Set(p.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean).map(stem));
  if (T.size && [...T].every((t) => P.has(t))) hits.push({ src: "existing URL", score: 0.9, query: p, page: p });
}
// Local money searches ("scorpion control mesa") are city-specific SERPs: only same-city URLs compete.
// Informational questions are one SERP whatever the city (Jordan 2026-10-02), so no city filter for those.
const qCity = q.split(/\s+/).filter((w) => CITY.has(w));
const local = qCity.length > 0;
const keep = (h) => !local || qCity.some((c) => (h.query + " " + h.page).toLowerCase().includes(c));
for (let i = hits.length - 1; i >= 0; i--) if (!keep(hits[i])) hits.splice(i, 1);
hits.sort((a, b) => b.score - a.score || (b.impressions || 0) - (a.impressions || 0));

console.log(`TOPIC CHECK: "${q}"  (core words: ${[...T].join(", ")})`);
if (!hits.length && !split.length) { console.log("No existing URL owns this search. OK to create — still confirm search intent on the live SERP first."); process.exit(0); }
for (const h of hits.slice(0, 15)) console.log(`  [${h.src}] ${h.page}  <- "${h.query}"${h.impressions ? `  ${h.impressions} impr, pos ${h.position}` : ""}`);
for (const c of split.slice(0, 5)) console.log(`  [ALREADY SPLIT] "${c.query}": ${c.pages.map((p) => `${p.page} (${p.impressions})`).join(" | ")}`);
console.log("RESULT: an existing URL already targets this search. Improve that URL (or consolidate) instead of creating a new page.");
process.exit(1);
