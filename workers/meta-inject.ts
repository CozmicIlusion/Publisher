// Cozmic edge Worker: rewrite article HTML <title>, canonical, OG/Twitter, and NewsArticle JSON-LD.
// Assets-only Error #4 does not apply — this Worker must bind ASSETS. Never pass CLI --assets.
import articleMeta from "./article-meta.json";

const BASE_URL = "https://cozmic.cloud";

interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  category: string;
}

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

const metaBySlug = articleMeta as Record<string, ArticleMeta>;

function matchArticleSlug(pathname: string): string | null {
  const trimmed = pathname.replace(/\/+$/, "") || "/";
  const match = trimmed.match(/^\/article\/([^/]+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

function escapeAttribute(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function absoluteUrl(maybeRelative: string): string {
  if (!maybeRelative) return "";
  if (/^https?:\/\//i.test(maybeRelative)) return maybeRelative;
  if (maybeRelative.startsWith("//")) return `https:${maybeRelative}`;
  const path = maybeRelative.startsWith("/") ? maybeRelative : `/${maybeRelative}`;
  return `${BASE_URL}${path}`;
}

function categoryLabel(category: string): string {
  if (!category) return "";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

class TextContentRewriter {
  constructor(private textValue: string) {}
  element(element: Element) {
    element.setInnerContent(this.textValue);
  }
}

class AttributeRewriter {
  constructor(
    private attribute: string,
    private value: string,
  ) {}
  element(element: Element) {
    element.setAttribute(this.attribute, this.value);
  }
}

class HeadInjector {
  constructor(private snippet: string) {}
  element(element: Element) {
    element.append(this.snippet, { html: true });
  }
}

function rewriteArticleHtml(response: Response, meta: ArticleMeta): Response {
  const pageTitle = `${meta.title} | Cozmic`;
  const pageUrl = `${BASE_URL}/article/${meta.slug}`;
  const pageImage = absoluteUrl(meta.imageUrl);
  const pageDesc = meta.excerpt;
  const section = categoryLabel(meta.category);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: meta.title,
    description: meta.excerpt,
    image: pageImage || undefined,
    datePublished: meta.publishedAt,
    dateModified: meta.publishedAt,
    author: {
      "@type": "Person",
      name: "Cozmic Editorial",
      url: `${BASE_URL}/author/cozmic-editorial`,
    },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "Cozmic",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/favicon.cozmic-57463484.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    url: pageUrl,
    articleSection: section,
    isAccessibleForFree: true,
  };

  const jsonLd = JSON.stringify(articleSchema).replace(/</g, "\\u003c");
  const extraHead = [
    pageImage ? `<meta property="og:image" content="${escapeAttribute(pageImage)}" />` : "",
    pageImage ? `<meta name="twitter:image" content="${escapeAttribute(pageImage)}" />` : "",
    `<meta property="article:published_time" content="${escapeAttribute(meta.publishedAt)}" />`,
    section ? `<meta property="article:section" content="${escapeAttribute(section)}" />` : "",
    `<script type="application/ld+json" id="cozmic-article-jsonld">${jsonLd}</script>`,
  ]
    .filter(Boolean)
    .join("");

  return new HTMLRewriter()
    .on("title", new TextContentRewriter(pageTitle))
    .on('link[rel="canonical"]', new AttributeRewriter("href", pageUrl))
    .on('meta[name="description"]', new AttributeRewriter("content", pageDesc))
    .on('meta[property="og:title"]', new AttributeRewriter("content", pageTitle))
    .on('meta[property="og:description"]', new AttributeRewriter("content", pageDesc))
    .on('meta[property="og:url"]', new AttributeRewriter("content", pageUrl))
    .on('meta[property="og:type"]', new AttributeRewriter("content", "article"))
    .on('meta[property="og:image"]', new AttributeRewriter("content", pageImage))
    .on('meta[name="twitter:title"]', new AttributeRewriter("content", pageTitle))
    .on('meta[name="twitter:description"]', new AttributeRewriter("content", pageDesc))
    .on('meta[name="twitter:image"]', new AttributeRewriter("content", pageImage))
    .on("head", new HeadInjector(extraHead))
    .transform(response);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const assetResponse = await env.ASSETS.fetch(request);
    const url = new URL(request.url);
    const slug = matchArticleSlug(url.pathname);
    if (!slug) return assetResponse;

    const meta = metaBySlug[slug];
    if (!meta) return assetResponse;

    const contentType = assetResponse.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("text/html")) return assetResponse;

    return rewriteArticleHtml(assetResponse, meta);
  },
};
