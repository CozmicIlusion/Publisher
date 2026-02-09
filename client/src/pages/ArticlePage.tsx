// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// ArticlePage: Full article view with Giscus comments
// ============================================================

import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import ArticleCard from "@/components/ArticleCard";
import StarField from "@/components/StarField";
import GiscusComments from "@/components/GiscusComments";
import AISummaryBadge from "@/components/AISummaryBadge";
import { getArticleBySlug, getLatestArticles, categoryMeta } from "@/lib/data";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");

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
  const related = getLatestArticles(3).filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="min-h-screen relative" style={{ background: "oklch(0.08 0.03 270)" }}>
      <StarField />
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
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
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
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`${meta.badgeClass} px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {meta.label}
            </span>
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
                <Sparkles className="w-3.5 h-3.5" style={{ color: "oklch(0.78 0.22 310)" }} />
                <span
                  className="text-xs font-medium"
                  style={{
                    color: "oklch(0.78 0.22 310)",
                    fontFamily: "var(--font-display)",
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
                  {article.author}
                </p>
                <p className="text-xs" style={{ color: "oklch(0.5 0.02 270)" }}>
                  Published {new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: "oklch(0.2 0.04 275 / 50%)", color: "oklch(0.6 0.02 270)" }}
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: "oklch(0.2 0.04 275 / 50%)", color: "oklch(0.6 0.02 270)" }}
                aria-label="Bookmark"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Inline Ad */}
          <div className="mb-8">
            <AdSlot variant="inline" />
          </div>

          {/* Article Body */}
          <div
            className="prose prose-lg max-w-none mb-12"
            style={{ color: "oklch(0.8 0.01 270)" }}
          >
            {article.content.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-[1.85] mb-6"
                style={{ color: "oklch(0.78 0.01 270)" }}
              >
                {paragraph}
              </p>
            ))}
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

          {/* Bottom Ad */}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((a, i) => (
                  <ArticleCard key={a.id} article={a} index={i} showSummary={true} />
                ))}
              </div>
            </div>
          )}
        </motion.article>
      </div>

      <Footer />
    </div>
  );
}
