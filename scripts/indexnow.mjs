#!/usr/bin/env node
// IndexNow submit helper (Bing/Copilot/Yandex). Task 15.
// Usage: node scripts/indexnow.mjs https://www.getyourbucksworth.com/path [more urls...]
//    or: node scripts/indexnow.mjs --changed [git-ref]   (blog posts changed since ref, default HEAD~1)
// Run AFTER the deploy is live (the key file must return 200). Does not touch tracking tags.
import { execSync } from "node:child_process";

const HOST = "www.getyourbucksworth.com";
const KEY = "9a27553239c0fc33c1afdf79c74eed04";
const args = process.argv.slice(2);
let urls = [];

if (args[0] === "--changed") {
  const ref = args[1] || "HEAD~1";
  const diff = execSync(`git diff --name-only ${ref} HEAD -- content/blog/index.json`).toString().trim();
  if (diff) {
    const prev = JSON.parse(execSync(`git show ${ref}:content/blog/index.json`).toString());
    const cur = JSON.parse(execSync("git show HEAD:content/blog/index.json").toString());
    const had = new Set(prev.map((p) => p.slug));
    urls = cur.filter((p) => !had.has(p.slug)).map((p) => `https://${HOST}/blog/${p.slug}`);
  }
} else {
  urls = args;
}

urls = [...new Set(urls)].filter((u) => u.startsWith(`https://${HOST}/`));
if (!urls.length) {
  console.log("indexnow: nothing to submit");
  process.exit(0);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log(`indexnow: submitted ${urls.length} URL(s), HTTP ${res.status}`);
process.exit(res.ok || res.status === 202 ? 0 : 1);
