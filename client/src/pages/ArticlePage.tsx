// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// ArticlePage: Full article view with enhanced ad slots,
// source attribution, social sharing, and Giscus comments
// ============================================================

import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, Sparkles, ExternalLink, Facebook, Twitter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import ArticleCard from "@/components/ArticleCard";
import StarField from "@/components/StarField";
import CosmicAtmosphere from "@/components/CosmicAtmosphere";
import GiscusComments from "@/components/GiscusComments";
import AISummaryBadge from "@/components/AISummaryBadge";
import { getArticleBySlug, getArticlesByCategory, getLatestArticles, getArticleSources, categoryMeta } from "@/lib/data";
import { isArticleBookmarked, toggleArticleBookmark } from "@/lib/bookmarks";
import { toast } from "sonner";
import SEOHead from "@/components/SEOHead";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");
  const reduceMotion = useReducedMotion();
  const [bookmarked, setBookmarked] = useState(() => isArticleBookmarked(slug || ""));

  useEffect(() => {
    setBookmarked(isArticleBookmarked(slug || ""));
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "oklch(0.08 0.03 270)" }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Article Not Found
          </h1>
          <Link href="/" className="text-sm" style={{ color: "oklch(0.85 0.18 192)" }}>
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const meta = categoryMeta[article.category];
  const sameCategory = getArticlesByCategory(article.category).filter((a) => a.id !== article.id);
  const related = [...sameCategory, ...getLatestArticles(8).filter((a) => a.category !== article.category && a.id !== article.id)].slice(0, 3);
  const articleUrl = typeof window !== "undefined" ? window.location.href : "";
  const sources = getArticleSources(article);

  // SEO: Per-article structured data, OG tags, canonical URL
  const shareText = encodeURIComponent(article.title + " — Cozmic");

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: article.title, text: article.excerpt, url: articleUrl });
      } catch { /* user cancelled */ }
    } else {
      navigator.clipboard.writeText(articleUrl);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleBookmark = () => {
    const saved = toggleArticleBookmark(article.slug);
    setBookmarked(saved);
    toast.success(saved ? "Saved on this device" : "Removed");
  };

  // Split content into paragraphs for mid-article ad insertion
  const paragraphs = article.content.split("\n\n").filter(Boolean);
  const midPoint = Math.floor(paragraphs.length / 2);

  return (
    <div className="min-h-screen relative" style={{ background: "oklch(0.08 0.03 270)" }}>
      <SEOHead article={article} pageType="article" />
      <StarField />
      <CosmicAtmosphere />
      <Navbar />

      {/* Hero Image */}
      <div className="relative pt-16">
        <div className="relative h-[50vh] min-h-[400px] max-h-[600px]">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, oklch(0.08 0.03 270 / 40%) 0%, oklch(0.08 0.03 270) 100%)",
            }}
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="container relative z-10 -mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 max-w-5xl mx-auto">
          {/* Main Article Column */}
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
          >
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium mb-6 transition-colors hover:text-primary"
              style={{ color: "oklch(0.6 0.02 270)", fontFamily: "var(--font-display)" }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <Link
                href={`/vertical/${article.category}`}
                className={`${meta.badgeClass} px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-opacity hover:opacity-80`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {meta.label}
              </Link>
              <span className="text-xs flex items-center gap-1" style={{ color: "oklch(0.5 0.02 270)" }}>
                <Clock className="w-3 h-3" />
                {article.readTime} min read
              </span>
              <span className="text-xs flex items-center gap-1" style={{ color: "oklch(0.5 0.02 270)" }}>
                <Calendar className="w-3 h-3" />
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {article.title}
            </h1>

            {/* AI Summary */}
            {article.aiSummary && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-3.5 h-3.5" style={{ color: "oklch(0.85 0.18 192 / 70%)" }} />
                  <span
                    className="text-xs font-medium uppercase tracking-widest"
                    style={{
                      color: "oklch(0.85 0.18 192 / 70%)",
                      fontFamily: "var(--font-summary)",
                      fontWeight: 300,
                      letterSpacing: "0.12em",
                    }}
                  >
                    AI Summary
                  </span>
                </div>
                <AISummaryBadge summary={article.aiSummary} />
              </div>
            )}

            {/* Author & Actions */}
            <div className="flex items-center justify-between mb-8 pb-6" style={{ borderBottom: "1px solid oklch(0.25 0.04 275 / 30%)" }}>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.85 0.18 192 / 20%), oklch(0.72 0.25 350 / 20%))",
                    border: "1px solid oklch(0.85 0.18 192 / 30%)",
                    fontFamily: "var(--font-display)",
                    color: "oklch(0.85 0.18 192)",
                  }}
                >
                  CE
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                    <Link href="/author/cozmic-editorial" className="hover:underline" style={{ color: "oklch(0.85 0.18 192)" }}>
                      {article.author}
                    </Link>
                  </p>
                  <p className="text-xs" style={{ color: "oklch(0.5 0.02 270)" }}>
                    Published {new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                  style={{ background: "oklch(0.2 0.04 275 / 50%)", color: "oklch(0.6 0.02 270)" }}
                  aria-label="Share"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleBookmark}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                  style={{ background: "oklch(0.2 0.04 275 / 50%)", color: bookmarked ? "oklch(0.85 0.18 192)" : "oklch(0.6 0.02 270)" }}
                  aria-label={bookmarked ? "Remove saved story" : "Save on this device"}
                  aria-pressed={bookmarked}
                >
                  <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} />
                </button>
              </div>
            </div>

            {/* Top Native Ad */}
            <div className="mb-8">
              <AdSlot variant="native" />
            </div>

            {/* Article Body with Mid-Article Ad */}
            <div className="prose prose-lg max-w-none mb-12">
              {paragraphs.map((paragraph, i) => (
                <div key={i}>
                  {paragraph.startsWith("## ") ? (
                    <h2
                      className="text-2xl font-bold mt-10 mb-4"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.93 0.01 270)" }}
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  ) : paragraph.startsWith("**") && paragraph.endsWith("**") ? (
                    <h3
                      className="text-lg font-bold mt-6 mb-2"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.88 0.05 192)" }}
                    >
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  ) : (
                    <p
                      className="text-base leading-[1.85] mb-6"
                      style={{ color: "oklch(0.78 0.01 270)" }}
                      dangerouslySetInnerHTML={{
                        __html: paragraph
                          .replace(/\*\*([^*]+)\*\*/g, '<strong style="color: oklch(0.88 0.02 270); font-weight: 600;">$1</strong>')
                          .replace(/\*([^*]+)\*/g, '<em style="color: oklch(0.75 0.08 192);">$1</em>')
                          .replace(/---/g, '<hr style="border-color: oklch(0.25 0.04 275 / 20%); margin: 2rem 0;" />')
                      }}
                    />
                  )}
                  {/* Insert mid-article ad after the midpoint */}
                  {i === midPoint && <AdSlot variant="mid-article" />}
                </div>
              ))}
            </div>

            {/* Source Attribution */}
            {sources.length > 0 && (
              <div
                className="rounded-xl p-5 mb-8"
                style={{
                  background: "linear-gradient(135deg, oklch(0.12 0.04 275 / 50%), oklch(0.1 0.03 280 / 30%))",
                  border: "1px solid oklch(0.75 0.2 160 / 15%)",
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "oklch(0.75 0.2 160)", fontFamily: "var(--font-display)" }}
                >
                  Sources
                </p>
                {sources.length === 1 && (
                  <p className="text-xs mb-3 leading-relaxed" style={{ color: "oklch(0.55 0.02 270)" }}>
                    Single-study / single-source: limitations in the piece.
                  </p>
                )}
                <ul className="space-y-3">
                  {sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-2 text-sm font-medium transition-colors hover:underline"
                        style={{ color: "oklch(0.85 0.18 192)" }}
                      >
                        <span>{source.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      </a>
                      <p className="text-xs mt-1" style={{ color: "oklch(0.5 0.02 270)" }}>
                        {source.publisher}
                        {source.published ? ` · ${source.published}` : ""}
                        {source.type ? ` · ${source.type}` : ""}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="text-xs mt-3 leading-relaxed" style={{ color: "oklch(0.5 0.02 270)" }}>
                  Named sources with outbound links. Cozmic provides editorial analysis and context; claim-level footnotes are not in the UI yet.
                </p>
              </div>
            )}

            {/* Social Share Bar — Instagramable / Facebookable */}
            <div
              className="rounded-xl p-5 mb-8"
              style={{
                background: "linear-gradient(135deg, oklch(0.14 0.04 275 / 50%), oklch(0.12 0.05 280 / 30%))",
                border: "1px solid oklch(0.85 0.18 192 / 10%)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(0.6 0.02 270)", fontFamily: "var(--font-display)" }}
              >
                Share this story
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    background: "oklch(0.35 0.15 260 / 80%)",
                    color: "oklch(0.95 0.01 270)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(articleUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    background: "oklch(0.25 0.04 275 / 60%)",
                    color: "oklch(0.95 0.01 270)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  <Twitter className="w-4 h-4" />
                  X / Twitter
                </a>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.85 0.18 192 / 15%), oklch(0.72 0.25 350 / 15%))",
                    border: "1px solid oklch(0.85 0.18 192 / 20%)",
                    color: "oklch(0.85 0.18 192)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  <Share2 className="w-4 h-4" />
                  Copy Link
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{
                    background: "oklch(0.18 0.04 275 / 60%)",
                    color: "oklch(0.7 0.02 270)",
                    border: "1px solid oklch(0.25 0.04 275 / 40%)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Bottom Banner Ad */}
            <div className="mb-12">
              <AdSlot variant="banner" />
            </div>

            {/* Giscus Comments Section */}
            <GiscusComments articleSlug={article.slug} />

            {/* Related Articles */}
            {related.length > 0 && (
              <div className="mb-12">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  More from Cozmic
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {related.map((a, i) => (
                    <ArticleCard key={a.id} article={a} index={i} showSummary={true} />
                  ))}
                </div>
              </div>
            )}
          </motion.article>

          {/* Sidebar — Sticky Ad Rail */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 space-y-6">
              <AdSlot variant="sidebar" />
              <AdSlot variant="native" label="Sponsored" />
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
