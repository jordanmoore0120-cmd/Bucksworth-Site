#!/usr/bin/env node
// URL guard — protects every URL Google knows about (Jordan 2026-10-07: "protect all urls").
//
//   node scripts/url-guard.mjs prepush   # run BEFORE every push. Fails if this branch removes a
//                                        # blog slug, city, service, app route or redirect without a 301.
//   node scripts/url-guard.mjs prod      # checks every URL in seo-data/url-baseline.json on the live
//                                        # site. Fails on any NEW 404/410/5xx (known_broken excluded).
//
// Baseline = live sitemap + every page with Search Console impressions in 16 months.
// It only grows. Rebuilt by Viktor's data feed. Exit 1 = do not push / fix now.
import { execSync } from "node:child_process";
import fs from "node:fs";

const HOST = process.env.GUARD_HOST || "https://www.getyourbucksworth.com";
const BASE = "seo-data/url-baseline.json";
const sh = (c) => { try { return execSync(c, { encoding: "utf8", maxBuffer: 1 << 28, stdio: ["ignore", "pipe", "ignore"] }); } catch { return ""; } };

function slugsFromTs(src, re) { return new Set([...src.matchAll(re)].map((m) => m[1])); }
function redirectSources(src) { return new Set([...src.matchAll(/source:\s*["'`]([^"'`]+)["'`]/g)].map((m) => m[1].replace(/\/$/, "") || "/")); }

function hasRedirect(path, sources) {
  const p = path.replace(/\/$/, "") || "/";
  if (sources.has(p)) return true;
  // pattern sources like /blog/:slug or /old/:path*
  for (const s of sources) {
    if (!s.includes(":") || s === "/:path*") continue; // /:path* is the host-only www rule, not a page redirect
    const re = new RegExp("^" + s.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/:[a-zA-Z]+\*/g, ".*").replace(/:[a-zA-Z]+/g, "[^/]+") + "$");
    if (re.test(p)) return true;
  }
  return false;
}

function prepush() {
  sh("git fetch -q origin main");
  const ref = "origin/main";
  const removed = [];
  // 1. blog slugs
  try {
    const before = JSON.parse(sh(`git show ${ref}:content/blog/index.json`) || "[]").map((p) => p.slug);
    const after = new Set(JSON.parse(fs.readFileSync("content/blog/index.json", "utf8")).map((p) => p.slug));
    for (const s of before) if (!after.has(s)) removed.push({ path: `/blog/${s}`, why: "blog slug removed from content/blog/index.json" });
  } catch (e) { console.log("warn: blog index compare failed:", e.message); }
  // 2. city + service slugs
  for (const [file, label] of [["src/lib/cities.ts", "city"], ["src/lib/services.ts", "service"]]) {
    const b = slugsFromTs(sh(`git show ${ref}:${file}`), /slug:\s*["']([^"']+)["']/g);
    const a = slugsFromTs(fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "", /slug:\s*["']([^"']+)["']/g);
    for (const s of b) if (!a.has(s)) removed.push({ path: label === "city" ? `/${s}` : `(service slug) ${s}`, why: `${label} slug removed from ${file} — every URL under it disappears` });
  }
  // 3. deleted / renamed app routes
  for (const line of sh(`git diff --name-status ${ref} -- src/app`).split("\n")) {
    const [st, f] = line.split("\t");
    if (st && (st.startsWith("D") || st.startsWith("R")) && /page\.(t|j)sx?$/.test(f || ""))
      removed.push({ path: "/" + f.replace(/^src\/app\/?/, "").replace(/\/?page\.(t|j)sx?$/, ""), why: `route file ${st === "D" ? "deleted" : "renamed"}: ${f}` });
  }
  // 4. redirects removed
  const srcNow = fs.readFileSync("next.config.mjs", "utf8");
  const rb = redirectSources(sh(`git show ${ref}:next.config.mjs`)), ra = redirectSources(srcNow);
  for (const s of rb) if (!ra.has(s)) removed.push({ path: s, why: "redirect removed from next.config.mjs (old URL would 404)" });

  const bad = removed.filter((r) => r.why.startsWith("redirect removed") || r.path.startsWith("(service") || !hasRedirect(r.path, ra));
  if (!bad.length) { console.log(`URL GUARD prepush: PASS (${removed.length} removals, all redirected)`); return 0; }
  console.log(`URL GUARD prepush: FAIL — ${bad.length} URL(s) would break. Add a 301 in next.config.mjs in the SAME commit, or undo the removal:`);
  for (const r of bad) console.log(`  ${r.path}  <- ${r.why}`);
  return 1;
}

async function check(path) {
  let url = HOST + path, hops = 0;
  while (hops < 5) {
    try {
      const r = await fetch(url, { redirect: "manual", headers: { "User-Agent": "Mozilla/5.0 bucksworth-url-guard" } });
      if ([301, 302, 307, 308].includes(r.status)) { const l = r.headers.get("location"); url = l.startsWith("http") ? l : HOST + l; hops++; continue; }
      return { path, status: r.status, hops, final: url.replace(HOST, "") };
    } catch (e) { return { path, status: 0, hops, final: String(e).slice(0, 80) }; }
  }
  return { path, status: "redirect-loop", hops, final: url };
}

async function prod() {
  const b = JSON.parse(fs.readFileSync(BASE, "utf8"));
  const known = new Set(Object.keys(b.known_broken_2026_10_07 || {}));
  const paths = Object.keys(b.urls);
  const out = []; let i = 0;
  const conc = Number(process.env.GUARD_CONCURRENCY || 24);
  await Promise.all(Array.from({ length: conc }, async () => { while (i < paths.length) { const p = paths[i++]; out.push(await check(p)); } }));
  const broken = out.filter((r) => r.status !== 200);
  const fresh = broken.filter((r) => !known.has(r.path));
  console.log(`URL GUARD prod: ${paths.length} URLs checked, ${broken.length} not 200 (${broken.length - fresh.length} already known broken), ${fresh.length} NEW.`);
  for (const r of fresh) console.log(`  NEW BREAK ${r.path} -> ${r.status} ${r.hops ? "(after " + r.hops + " redirect(s) to " + r.final + ")" : ""}`);
  fs.writeFileSync("url-guard-result.json", JSON.stringify({ checked: paths.length, broken, fresh }, null, 1));
  return fresh.length ? 1 : 0;
}

const mode = process.argv[2];
if (mode === "prepush") process.exit(prepush());
else if (mode === "prod") prod().then((c) => process.exit(c));
else { console.log("usage: node scripts/url-guard.mjs prepush|prod"); process.exit(2); }
