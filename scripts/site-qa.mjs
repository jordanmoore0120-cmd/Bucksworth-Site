#!/usr/bin/env node
/**
 * site-qa.mjs: "would a customer hit this?" QA for getyourbucksworth.com (owner: site-qa agent).
 *
 * It checks the obvious, money-losing problems a human notices in 30 seconds:
 *   A. DEAD CTAs: clicks every visible Call/Quote/Estimate/Book/Schedule/Pay button on MOBILE (390x844)
 *      and DESKTOP (1366x900). A CTA passes only if something visible happens in the viewport (navigation,
 *      tel:/sms: link, modal/overlay inside the viewport, scroll to target). A modal that renders
 *      off-screen or unstyled counts as DEAD.
 *   B. SERVICE TRUTH: menus, dropdowns, form/estimator options, titles, H1s and meta descriptions must not
 *      imply services we don't sell (knowledge/services-truth.json: no mowing, blowing, trimming,
 *      landscaping) or sell AC/plumbing in Tucson. Static mode also greps src/ and content/.
 *   C. INTERNAL LINKS (common sense): no internal link to a 404; no links to redirects (link the final URL);
 *      every /{city}/{service} page links to its /{city} hub and at least 3 other cities for the same service;
 *      every blog post links to at least 1 money page (/{city}/{service}...); Tucson pages never link to
 *      Tucson AC/plumbing.
 *
 * Usage:
 *   node scripts/site-qa.mjs                 # live: home, request-service, 12 sampled money pages, 4 blog posts
 *   node scripts/site-qa.mjs --pages 60      # bigger sample
 *   node scripts/site-qa.mjs --url /phoenix/pest-and-termite   # one page
 *   node scripts/site-qa.mjs --static        # source grep only (no browser), for prepush
 * Needs Playwright for the live mode:  npm i --no-save playwright && npx playwright install chromium
 * Output: ops/state/site-qa.json (full findings) + a summary on stdout. Exit 1 if any FAIL.
 */
import fs from "node:fs";
import path from "node:path";

const BASE = process.env.SITE_BASE || "https://www.getyourbucksworth.com";
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const STATIC_ONLY = args.includes("--static");
const N_PAGES = parseInt(opt("--pages", "12"), 10);
const ONE_URL = opt("--url", null);

const truth = JSON.parse(fs.readFileSync(path.join(ROOT, "knowledge/services-truth.json"), "utf8"));
const NEVER = truth.never_offered.map((r) => ({ re: new RegExp(r.pattern, "i"), why: r.why, pattern: r.pattern }));
const WARN = truth.ambiguous_warn.map((r) => ({ re: new RegExp(r.pattern, "i"), why: r.why }));
const TUCSON_NO = truth.markets.tucson.not_offered_service_slugs;
const TUCSON_CITIES = ["tucson", "oro-valley", "marana", "vail", "sahuarita", "green-valley", "catalina-foothills", "red-rock", "valencia"];
const isTucsonPath = (p) => TUCSON_CITIES.some((c) => p.split("/")[1]?.startsWith(c));

const findings = [];
const add = (sev, check, where, detail, fix) => findings.push({ sev, check, where, detail, fix });

/* ---------- B (static): grep source for service-truth violations ---------- */
function staticServiceTruth() {
  const dirs = ["src", "content"].map((d) => path.join(ROOT, d)).filter(fs.existsSync);
  const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(d, e.name)) : /\.(tsx?|jsx?|json|mdx?)$/.test(e.name) ? [path.join(d, e.name)] : []);
  const hits = new Map();
  for (const f of dirs.flatMap(walk)) {
    if (f.endsWith("index.json") && f.includes("content/blog")) continue; // blog index = titles only, checked live
    const lines = fs.readFileSync(f, "utf8").split("\n");
    lines.forEach((ln, i) => {
      for (const r of NEVER) {
        // check short windows so 36k-char HTML lines still give a usable snippet
        const m = ln.match(r.re);
        if (!m) continue;
        if (/bermuda|spreads|only makes it spread|don'?t (mow|trim)|not (a )?landscap/i.test(ln.slice(Math.max(0, m.index - 80), m.index + 80))) continue;
        const key = `${path.relative(ROOT, f)}:${i + 1}`;
        if (!hits.has(key)) hits.set(key, { r, snip: ln.slice(Math.max(0, m.index - 60), m.index + 60).trim() });
      }
    });
  }
  const LABEL_FILES = /src\/lib\/(services|nearest-cities)\.ts|src\/components\/(Header|Footer|InstantEstimator|CTASection)\.tsx|request-service/;
  for (const [where, { r, snip }] of hits)
    add(LABEL_FILES.test(where) ? "FAIL" : "WARN", "service-truth(src)", where, `"…${snip}…" (${r.why})`, "Labels/menus/options: reword to the real service (weed control / treatment). Body copy: OK only as homeowner advice, never as something we do. NEVER change the URL slug (page-identity Rule #1); change the visible label only.");
}

/* ---------- live helpers ---------- */
async function sitemapPaths() {
  const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}
function sample(arr, n) { const a = [...arr]; const out = []; let seed = new Date().getDate();
  while (a.length && out.length < n) { seed = (seed * 9301 + 49297) % 233280; out.push(a.splice(seed % a.length, 1)[0]); } return out; }

const statusCache = new Map();
async function status(p) {
  if (statusCache.has(p)) return statusCache.get(p);
  let s; try { const r = await fetch(BASE + p, { redirect: "manual" }); s = { code: r.status, loc: r.headers.get("location") }; }
  catch (e) { s = { code: 0, loc: String(e) }; }
  statusCache.set(p, s); return s;
}

const CTA_RE = /quote|estimate|book|schedule|call|pay|get started|free inspection|request/i;

async function checkCTAs(browser, p, vp) {
  const ctx = await browser.newContext({ viewport: vp.size, isMobile: vp.mobile, hasTouch: vp.mobile });
  const page = await ctx.newPage();
  await page.goto(BASE + p, { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(1500);
  const ctas = await page.evaluate((reSrc) => {
    const re = new RegExp(reSrc, "i"); const out = [];
    document.querySelectorAll("a,button,[role=button]").forEach((el, i) => {
      const r = el.getBoundingClientRect(); const s = getComputedStyle(el);
      if (!r.width || !r.height || s.visibility === "hidden" || s.display === "none") return;
      const t = (el.innerText || el.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ");
      if (!re.test(t) || t.length > 60) return;
      el.setAttribute("data-qa-id", String(i));
      out.push({ id: String(i), text: t, tag: el.tagName, href: el.getAttribute("href"), type: el.getAttribute("type"), inForm: !!el.closest("form") });
    });
    return out;
  }, CTA_RE.source);
  const seen = new Set();
  for (const c of ctas) {
    const key = `${c.text}|${c.href}`; if (seen.has(key)) continue; seen.add(key);
    const where = `${p} [${vp.name}] "${c.text}"`;
    if (c.href && c.href !== "#" && !c.href.startsWith("javascript")) {
      if (/^(tel|sms|mailto):/.test(c.href)) continue;
      if (c.href.startsWith("/") || c.href.startsWith(BASE)) {
        const tp = c.href.startsWith("/") ? c.href.split("#")[0] : new URL(c.href).pathname;
        const s = await status(tp.split("?")[0] || "/");
        if (s.code >= 400 || s.code === 0) add("FAIL", "dead-cta", where, `links to ${c.href} → ${s.code}`, "Point the CTA at a live page.");
      }
      continue;
    }
    if (c.type === "submit" && c.inForm) continue; // form submits are covered by form tests
    // Button with no href: click it and require a visible effect in the viewport.
    const before = await page.evaluate(() => ({ url: location.href, y: scrollY, n: document.querySelectorAll("*").length,
      big: [...document.querySelectorAll("body *")].filter((e) => { const r = e.getBoundingClientRect(); const s = getComputedStyle(e);
        return (s.position === "fixed" || s.position === "absolute") && r.width * r.height > innerWidth * innerHeight * 0.25 && r.top < innerHeight && r.bottom > 0 && s.visibility !== "hidden" && s.opacity !== "0"; }).length }));
    const popup = ctx.waitForEvent("page", { timeout: 2500 }).catch(() => null);
    try { await page.locator(`[data-qa-id="${c.id}"]`).first().click({ timeout: 5000 }); }
    catch (e) { add("FAIL", "dead-cta", where, `not clickable: ${String(e.message).slice(0, 120)}`, "Something covers the button or it is disabled."); continue; }
    await page.waitForTimeout(2000);
    const newTab = await popup;
    const after = await page.evaluate(() => ({ url: location.href, y: scrollY, n: document.querySelectorAll("*").length,
      big: [...document.querySelectorAll("body *")].filter((e) => { const r = e.getBoundingClientRect(); const s = getComputedStyle(e);
        return (s.position === "fixed" || s.position === "absolute") && r.width * r.height > innerWidth * innerHeight * 0.25 && r.top < innerHeight && r.bottom > 0 && s.visibility !== "hidden" && s.opacity !== "0"; }).length,
      offscreen: [...document.querySelectorAll("[role=dialog],[class*=modal],[class*=overlay]")].filter((e) => { const r = e.getBoundingClientRect();
        return r.height > 0 && (r.top >= innerHeight || r.bottom <= 0); }).map((e) => `${e.className}`.slice(0, 40)) }));
    const visibleEffect = newTab || after.url !== before.url || Math.abs(after.y - before.y) > 50 || after.big > before.big;
    if (!visibleEffect) {
      const why = after.n > before.n && after.offscreen.length
        ? `click adds DOM (${after.offscreen.join(", ")}) but it renders OFF-SCREEN or unstyled (missing CSS?), so the customer sees nothing`
        : "click does nothing visible";
      add("FAIL", "dead-cta", where, why, "Make the button open something visible in the viewport (fix the modal CSS/positioning) or link it to the real page.");
    }
    if (newTab) await newTab.close();
    if (after.url !== before.url) { await page.goto(BASE + p, { waitUntil: "networkidle" }).catch(() => {}); await page.waitForTimeout(1000); }
    else await page.keyboard.press("Escape").catch(() => {});
  }
  await ctx.close();
}

async function checkPage(browser, p) {
  const ctx = await browser.newContext({ viewport: { width: 1366, height: 900 } });
  const page = await ctx.newPage();
  const resp = await page.goto(BASE + p, { waitUntil: "domcontentloaded", timeout: 45000 }).catch(() => null);
  if (!resp || resp.status() >= 400) { add("FAIL", "page", p, `status ${resp?.status()}`, "Restore or 301."); await ctx.close(); return; }
  // Open every menu/dropdown (click/hover each header button) so hidden mega-menus get read too.
  const menuText = [];
  const toggles = await page.locator("header button, header [aria-haspopup], header [aria-expanded], nav button").all();
  for (const t of toggles.slice(0, 12)) {
    try { await t.hover({ timeout: 1500 }); await t.click({ timeout: 1500 }); await page.waitForTimeout(400);
      menuText.push(await page.evaluate(() => [...document.querySelectorAll("header, nav, [class*=mega], [class*=dropdown], [class*=menu]")].map((e) => e.textContent).join(" ")));
      await page.keyboard.press("Escape"); } catch {}
  }
  const d = await page.evaluate(() => ({
    title: document.title, h1: [...document.querySelectorAll("h1")].map((h) => h.innerText).join(" | "),
    meta: document.querySelector('meta[name="description"]')?.content || "",
    nav: [...document.querySelectorAll("header, nav, [class*=dropdown], [class*=menu]")].map((e) => e.textContent).join(" ").replace(/\s+/g, " "),
    options: [...document.querySelectorAll("select option, [role=option], [role=menuitem]")].map((o) => o.textContent.trim()),
    links: [...new Set([...document.querySelectorAll("main a[href], article a[href], a[href]")].map((a) => a.getAttribute("href"))
      .filter((h) => h && (h.startsWith("/") || h.startsWith(location.origin))).map((h) => (h.startsWith("/") ? h : new URL(h).pathname).split("#")[0].split("?")[0]))],
  }));
  // B. service truth on what customers read in menus/dropdowns/titles
  const surfaces = { title: d.title, h1: d.h1, meta: d.meta, "nav/dropdowns": (d.nav + " " + menuText.join(" ")).replace(/\s+/g, " "), "form options": d.options.join(" | ") };
  for (const [k, txt] of Object.entries(surfaces)) {
    for (const r of NEVER) { const m = txt.match(r.re); if (m) add("FAIL", "service-truth", `${p} (${k})`, `"…${txt.slice(Math.max(0, m.index - 50), m.index + 50)}…" ${r.why}`, "Reword; we only sell what's in knowledge/services-truth.json."); }
    if (k !== "nav/dropdowns") for (const r of WARN) { const m = txt.match(r.re); if (m && !/weed/i.test(txt.slice(Math.max(0, m.index - 60), m.index + 60))) add("WARN", "service-truth", `${p} (${k})`, `"…${txt.slice(Math.max(0, m.index - 50), m.index + 50)}…" ${r.why}`, "Qualify as weed control/treatment."); }
  }
  // C. internal links
  const links = d.links.filter((l) => l && !/^\/(_next|api)\//.test(l) && !/\.(png|jpe?g|webp|svg|pdf|xml|txt|ico)$/i.test(l));
  for (const l of links) {
    const s = await status(l);
    if (s.code >= 400 || s.code === 0) add("FAIL", "internal-link", p, `links to ${l} → ${s.code}`, "Link the closest live page (and 301 the dead URL).");
    else if (s.code >= 300) add("WARN", "internal-link", p, `links to ${l} → ${s.code} ${s.loc}`, "Link the final URL directly (no redirect hops).");
    if (isTucsonPath(p) && TUCSON_NO.some((x) => l.includes(`/${x}`)) && isTucsonPath(l)) add("FAIL", "service-truth", p, `Tucson page links to ${l} (service not sold in Tucson)`, "Remove the link.");
  }
  const seg = p.split("/").filter(Boolean);
  const isMoney = seg.length >= 2 && !["blog", "services", "locations"].includes(seg[0]) && /-/.test(seg[1] || "");
  if (isMoney && seg.length === 2) {
    const [city, svc] = seg;
    if (!links.includes(`/${city}`)) add("FAIL", "internal-link", p, `no link to its city hub /${city}`, "Add a breadcrumb/hub link.");
    const sibs = links.filter((l) => { const s = l.split("/").filter(Boolean); return s.length === 2 && s[1] === svc && s[0] !== city; });
    if (sibs.length < 3) add("WARN", "internal-link", p, `links to only ${sibs.length} other cities for ${svc}`, "Link the 3–6 nearest cities for the same service.");
  }
  if (seg[0] === "blog" && seg.length >= 2) {
    const money = links.filter((l) => { const s = l.split("/").filter(Boolean); return s.length >= 2 && !["blog", "services"].includes(s[0]) && s[1]?.includes("-"); });
    if (!money.length) add("FAIL", "internal-link", p, "blog post links to no money page", "Link the matching /{city}/{service} page with a natural anchor.");
  }
  await ctx.close();
}

async function main() {
  staticServiceTruth();
  if (!STATIC_ONLY) {
    let chromium;
    try { ({ chromium } = await import("playwright")); }
    catch { console.error("Playwright missing: npm i --no-save playwright && npx playwright install chromium"); process.exit(2); }
    const all = await sitemapPaths();
    const money = all.filter((p) => p.split("/").filter(Boolean).length === 2 && !p.startsWith("/blog"));
    const blog = all.filter((p) => p.startsWith("/blog/"));
    const pages = ONE_URL ? [ONE_URL] : ["/", "/request-service", ...sample(money, N_PAGES), ...sample(blog, Math.max(4, Math.round(N_PAGES / 3)))];
    const browser = await chromium.launch();
    const VPS = [{ name: "mobile", size: { width: 390, height: 844 }, mobile: true }, { name: "desktop", size: { width: 1366, height: 900 }, mobile: false }];
    const ctaPages = ONE_URL ? pages : pages.slice(0, 4); // sitewide CTAs (header/sticky bar) repeat; 4 templates is enough per run
    for (const p of ctaPages) for (const vp of VPS) await checkCTAs(browser, p, vp);
    for (const p of pages) await checkPage(browser, p);
    await browser.close();
  }
  // collapse duplicates (sitewide issues show once with a count)
  const map = new Map();
  for (const f of findings) { const k = `${f.sev}|${f.check}|${f.detail.replace(/^\S+ /, "")}|${f.where.replace(/^\/[^ ]*/, "")}`;
    if (map.has(k)) map.get(k).count++; else map.set(k, { ...f, count: 1 }); }
  const out = [...map.values()].sort((a, b) => (a.sev === b.sev ? 0 : a.sev === "FAIL" ? -1 : 1));
  const report = { ran_at: new Date().toISOString(), base: BASE, static_only: STATIC_ONLY, fails: out.filter((f) => f.sev === "FAIL").length, warns: out.filter((f) => f.sev === "WARN").length, findings: out };
  fs.mkdirSync(path.join(ROOT, "ops/state"), { recursive: true });
  fs.writeFileSync(path.join(ROOT, "ops/state/site-qa.json"), JSON.stringify(report, null, 2) + "\n");
  console.log(`SITE QA ${report.fails ? "FAIL" : "PASS"}: ${report.fails} fail, ${report.warns} warn`);
  for (const f of out.slice(0, 60)) console.log(`${f.sev} [${f.check}] ${f.where}${f.count > 1 ? ` (x${f.count})` : ""}: ${f.detail}\n    fix: ${f.fix}`);
  process.exit(report.fails ? 1 : 0);
}
main();
