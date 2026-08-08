// ============================================================
// COZMIC — SEO Head Component
// Injects per-page JSON-LD structured data, OG tags, canonical URLs
// Uses document.head manipulation for SPA dynamic meta
// ============================================================
import { useEffect } from "react";
import type { Article } from "@/lib/data";

interface SEOHeadProps {
  article?: Article;
  pageType?: "home" | "article" | "vertical" | "author" | "static";
  title?: string;
  description?: string;
  canonical?: string;
  imageUrl?: string;
}

const BASE_URL = "https://cozmic.cloud";

function setMetaTag(property: string, content: string, isName = false) {
  const attr = isName ? "name" : "property";
  let el = document.querySelector(`meta[${attr}="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

function setJsonLd(id: string, data: object) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.setAttribute("type", "application/ld+json");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

export default function SEOHead({ article, pageType = "static", title, description, canonical, imageUrl }: SEOHeadProps) {
  useEffect(() => {
    const pageTitle = article
      ? `${article.title} | Cozmic`
      : title
        ? `${title} | Cozmic`
        : "Cozmic - The Future of News";

    const pageDesc = article?.excerpt || description || "Next-generation news platform for the connected generation.";
    const pageUrl = canonical || (article ? `${BASE_URL}/article/${article.slug}` : BASE_URL);
    const pageImage = imageUrl || article?.imageUrl || "";

    // Set document title
    document.title = pageTitle;

    // Set meta tags
    setMetaTag("description", pageDesc, true);
    setMetaTag("og:title", pageTitle);
    setMetaTag("og:description", pageDesc);
    setMetaTag("og:url", pageUrl);
    setMetaTag("og:type", article ? "article" : "website");
    setMetaTag("twitter:title", pageTitle);
    setMetaTag("twitter:description", pageDesc);

    if (pageImage) {
      setMetaTag("og:image", pageImage);
      setMetaTag("twitter:image", pageImage);
    }

    if (article) {
      setMetaTag("article:published_time", article.publishedAt);
      setMetaTag("article:section", article.category);
      setMetaTag("article:author", article.author);
      article.tags.forEach((tag, i) => {
        setMetaTag(`article:tag:${i}`, tag);
      });
    }

    // Set canonical URL
    setCanonical(pageUrl);

    // Set JSON-LD structured data
    if (article) {
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": article.title,
        "description": article.excerpt,
        "image": article.imageUrl || undefined,
        "datePublished": article.publishedAt,
        "dateModified": article.publishedAt,
        "author": {
          "@type": "Person",
          "name": article.author,
          "url": `${BASE_URL}/author/cozmic-editorial`,
        },
        "publisher": {
          "@type": "NewsMediaOrganization",
          "name": "Cozmic",
          "url": BASE_URL,
          "logo": {
            "@type": "ImageObject",
            "url": `${BASE_URL}/favicon.ico`,
          },
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        "url": pageUrl,
        "articleSection": article.category.charAt(0).toUpperCase() + article.category.slice(1),
        "keywords": article.tags.join(", "),
        "wordCount": article.content.split(/\s+/).length,
        "isAccessibleForFree": true,
      };

      setJsonLd("cozmic-article-jsonld", articleSchema);

      // BreadcrumbList for article pages
      const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": article.category.charAt(0).toUpperCase() + article.category.slice(1),
            "item": `${BASE_URL}/vertical/${article.category}`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": pageUrl,
          },
        ],
      };
      setJsonLd("cozmic-breadcrumb-jsonld", breadcrumb);
    } else {
      removeJsonLd("cozmic-article-jsonld");
      removeJsonLd("cozmic-breadcrumb-jsonld");
    }

    // Cleanup on unmount
    return () => {
      // Reset to defaults when navigating away
      document.title = "Cozmic - The Future of News";
      setMetaTag("og:type", "website");
      removeJsonLd("cozmic-article-jsonld");
      removeJsonLd("cozmic-breadcrumb-jsonld");
    };
  }, [article, pageType, title, description, canonical, imageUrl]);

  return null; // This component only manipulates <head>, renders nothing
}
