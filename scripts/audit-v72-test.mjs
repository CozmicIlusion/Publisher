// One-shot v7.2 re-audit checks. Not part of the production build.
import { existsSync, readFileSync, readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(ROOT, "dist/public");
const results = [];

function check(id, ok, detail) {
  results.push({ id, ok, detail });
}

const data = readFileSync(resolve(ROOT, "client/src/lib/data.ts"), "utf8");
const slugs = [...data.matchAll(/^\s+slug:\s*"([^"]+)"/gm)].map((m) => m[1]);
check("content.article-count", slugs.length >= 18, `${slugs.length} article slugs`);

const categories = [...data.matchAll(/^\s+category:\s*"(tech|gaming|culture|lifestyle|music|science)"/gm)].map(
  (m) => m[1],
);
const uniqueCats = [...new Set(categories)];
check("content.six-verticals", uniqueCats.length === 6, uniqueCats.join(", "));

const distFiles = existsSync(dist) ? readdirSync(dist) : [];
const requiredAssets = [
  "index.html",
  "sitemap.xml",
  "rss.xml",
  "robots.txt",
  "ads.txt",
  "manifest.json",
  "_headers",
  "favicon.cozmic-57463484.svg",
];
for (const file of requiredAssets) {
  check(`dist.has.${file}`, distFiles.includes(file), file);
}
check("dist.no-redirects", !distFiles.includes("_redirects") && !existsSync(resolve(ROOT, "client/public/_redirects")), "no _redirects");

const builtHtml = readFileSync(resolve(dist, "index.html"), "utf8");
check("ads.no-eager-script", !builtHtml.includes("pagead2.googlesyndication.com"), "AdSense script not in HTML");
check("ads.account-meta", builtHtml.includes('name="google-adsense-account"'), "AdSense account meta present");
check(
  "analytics.no-unreplaced-env",
  !builtHtml.includes("%VITE_ANALYTICS_ENDPOINT%") && !builtHtml.includes("%VITE_ANALYTICS_WEBSITE_ID%"),
  "Umami placeholders must not ship",
);
check("build.no-manus-runtime", !builtHtml.includes("manus-runtime") && !builtHtml.includes("__MANUS_"), "Manus debug runtime must not ship");

const pagesMissingSeo = ["About.tsx", "Contact.tsx", "PrivacyPolicy.tsx", "NotFound.tsx"].filter((file) => {
  const src = readFileSync(resolve(ROOT, "client/src/pages", file), "utf8");
  return !src.includes("SEOHead") && !src.includes("usePageMeta");
});
check("seo.static-pages", pagesMissingSeo.length === 0, pagesMissingSeo.join(", ") || "About/Contact/Privacy/404 have titles");

const rss = readFileSync(resolve(dist, "rss.xml"), "utf8");
check("rss.favicon-svg", rss.includes("/favicon.cozmic-57463484.svg") && !rss.includes("/favicon.ico"), "RSS channel image");
check("rss.item-count", (rss.match(/<item>/g) || []).length === slugs.length, `${(rss.match(/<item>/g) || []).length} RSS items for ${slugs.length} articles`);

const sitemap = readFileSync(resolve(dist, "sitemap.xml"), "utf8");
const sitemapUrls = (sitemap.match(/<loc>/g) || []).length;
const staticSitemapUrlCount = 14;
check("sitemap.url-count", sitemapUrls === slugs.length + staticSitemapUrlCount, `${sitemapUrls} sitemap URLs for ${slugs.length} articles and ${staticSitemapUrlCount} static routes`);
check("sitemap.site-map", sitemap.includes("/site-map"), "/site-map");
for (const slug of slugs) {
  check(`sitemap.article.${slug}`, sitemap.includes(`/article/${slug}`), slug);
}

const notFound = readFileSync(resolve(ROOT, "client/src/pages/NotFound.tsx"), "utf8");
check("design.404-atmosphere", notFound.includes("CosmicAtmosphere"), "404 uses CosmicAtmosphere");
check("design.404-not-light", !notFound.includes("from-slate-50") && !notFound.includes("bg-white"), "404 is not the light template");

const cookie = readFileSync(resolve(ROOT, "client/src/components/CookieConsent.tsx"), "utf8");
check("consent.deferred-loader", cookie.includes("loadAdSense") && cookie.includes('consent === "accepted"'), "AdSense loads after accept");

const adSlot = readFileSync(resolve(ROOT, "client/src/components/AdSlot.tsx"), "utf8");
check("ads.slot-gated", adSlot.includes('consent !== "accepted" || !slotId'), "AdSlot requires consent and slot ID");

const giscus = readFileSync(resolve(ROOT, "client/src/components/GiscusComments.tsx"), "utf8");
check("giscus.env-gated", giscus.includes("isConfigured") && giscus.includes("being configured"), "Giscus fallback present");

const contact = readFileSync(resolve(ROOT, "client/src/pages/Contact.tsx"), "utf8");
check("contact.mailto", contact.includes("mailto:hello@cozmic.cloud") && contact.includes("email draft is ready"), "Contact uses mailto honestly");

const wrangler = readFileSync(resolve(ROOT, "wrangler.jsonc"), "utf8");
check("deploy.spa-fallback", wrangler.includes('"not_found_handling": "single-page-application"'), "Wrangler SPA fallback");
check("deploy.worker-main", wrangler.includes('"main": "workers/meta-inject.ts"'), "Worker entry for article HTML rewrite");
check("deploy.assets-binding", wrangler.includes('"binding": "ASSETS"'), "ASSETS binding for meta inject");
check("deploy.no-cli-assets-docs", !wrangler.includes("--assets"), "wrangler.jsonc does not pass CLI --assets");

const workerSrc = existsSync(resolve(ROOT, "workers/meta-inject.ts"))
  ? readFileSync(resolve(ROOT, "workers/meta-inject.ts"), "utf8")
  : "";
check("seo.meta-inject-worker", workerSrc.includes("HTMLRewriter") && workerSrc.includes("NewsArticle"), "meta-inject rewrites OG and JSON-LD");

const articleMetaPath = resolve(ROOT, "workers/article-meta.json");
check("seo.article-meta-file", existsSync(articleMetaPath), "workers/article-meta.json");
if (existsSync(articleMetaPath)) {
  const articleMeta = JSON.parse(readFileSync(articleMetaPath, "utf8"));
  const metaSlugs = Object.keys(articleMeta);
  check("seo.article-meta-count", metaSlugs.length === slugs.length, `${metaSlugs.length} meta slugs for ${slugs.length} articles`);
  for (const slug of slugs) {
    check(`seo.article-meta.${slug}`, Boolean(articleMeta[slug]?.title && articleMeta[slug]?.excerpt), slug);
  }
}

const homeSrc = readFileSync(resolve(ROOT, "client/src/pages/Home.tsx"), "utf8");
const articlePageSrc = readFileSync(resolve(ROOT, "client/src/pages/ArticlePage.tsx"), "utf8");
check(
  "trust.no-newsletter-ui",
  !homeSrc.includes("Stay in Orbit") && !articlePageSrc.includes("Stay in Orbit") && !homeSrc.includes("Subscribe") && !articlePageSrc.includes("Subscribe"),
  "Newsletter Subscribe/Stay in Orbit removed",
);
check("trust.sources-model", data.includes("sources?:") && data.includes("getArticleSources") && articlePageSrc.includes("Single-study / single-source"), "sources[] v1 on ArticlePage");
check("trust.latest-edition", homeSrc.includes("Latest edition") && data.includes("getLatestEditionLabel"), "Homepage Latest edition");

const ticker = readFileSync(resolve(ROOT, "client/src/components/TrendingTicker.tsx"), "utf8");
check("trust.no-live-views", !ticker.includes("Live") && !ticker.includes("Math.random") && ticker.includes("Editor-selected") && ticker.includes("reduceMotion"), "Ticker is editor-selected and reduced-motion aware");
check(
  "trust.no-fake-view-metrics",
  !ticker.includes("formatViews") &&
    !ticker.includes("article.views") &&
    !/\bviews:\s*number/.test(data) &&
    !/\.views\b/.test(data) &&
    data.includes("editorsPick"),
  "No views field or k-format fake metrics; ticker shelf is editorial",
);

check("consent.no-fake-analytics", !cookie.includes("analyze site traffic"), "Banner does not claim traffic analytics");
check("consent.manage-cookies", readFileSync(resolve(ROOT, "client/src/components/Footer.tsx"), "utf8").includes("Manage cookies"), "Footer can reopen consent");

const navbar = readFileSync(resolve(ROOT, "client/src/components/Navbar.tsx"), "utf8");
check("search.overlay", navbar.includes("SearchOverlay") && existsSync(resolve(ROOT, "client/src/components/SearchOverlay.tsx")), "Navbar search overlay");
check("bookmarks.local", existsSync(resolve(ROOT, "client/src/lib/bookmarks.ts")) && articlePageSrc.includes("Saved on this device"), "Device bookmarks");

const contactA11y = readFileSync(resolve(ROOT, "client/src/pages/Contact.tsx"), "utf8");
check("a11y.contact-labels", contactA11y.includes('htmlFor="contact-name"') && contactA11y.includes("focus-visible:ring-2"), "Contact labels and focus-visible");
check("a11y.reduced-motion-css", readFileSync(resolve(ROOT, "client/src/index.css"), "utf8").includes("prefers-reduced-motion: reduce"), "Global reduced-motion CSS");

const passed = results.filter((r) => r.ok).length;
const failed = results.filter((r) => !r.ok);
console.log(JSON.stringify({ passed, failed: failed.length, total: results.length, failures: failed }, null, 2));
for (const r of results) {
  console.log(`${r.ok ? "PASS" : "FAIL"}  ${r.id}  ${r.detail}`);
}
process.exit(failed.length ? 1 : 0);
