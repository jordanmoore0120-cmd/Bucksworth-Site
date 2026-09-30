// Regenerates the AVIF/WebP hero images used by src/app/lp/[slug]/optimize.ts.
// Run after adding or replacing an LP hero JPG:  node scripts/lp-hero-images.mjs
// - every hero JPG referenced in the LP hero CSS gets same-size .avif + .webp siblings
// - heroes listed in MOBILE_CROP (optimize.ts) also get a "-m" phone crop: full height,
//   cropped around the 70% background-position so a <=480px screen paints the same region
import fs from "node:fs";
import sharp from "sharp";

const pages = fs.readFileSync("src/app/lp/[slug]/pages.ts", "utf8");
const optimize = fs.readFileSync("src/app/lp/[slug]/optimize.ts", "utf8");
const heroes = new Set([...pages.matchAll(/url\(\\?'?(\/images\/lp\/[^)'\\]+?)\.jpg/g)].map((m) => m[1]));
const crops = new Set([...optimize.matchAll(/"(\/images\/lp\/[^"]+)",/g)].map((m) => m[1]));

for (const base of heroes) {
  const src = `public${base}.jpg`;
  await sharp(src).avif({ quality: 55, effort: 6 }).toFile(`public${base}.avif`);
  await sharp(src).webp({ quality: 76, effort: 6 }).toFile(`public${base}.webp`);
  if (crops.has(base)) {
    const { width, height } = await sharp(src).metadata();
    const w = Math.min(width, Math.round(height * 0.9));
    const crop = () => sharp(src).extract({ left: Math.round(0.7 * (width - w)), top: 0, width: w, height });
    await crop().avif({ quality: 50, effort: 6 }).toFile(`public${base}-m.avif`);
    await crop().webp({ quality: 74, effort: 6 }).toFile(`public${base}-m.webp`);
  }
  console.log(base);
}
