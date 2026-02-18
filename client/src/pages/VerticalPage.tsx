// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// VerticalPage: Category-specific article listing
// ============================================================

import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import StarField from "@/components/StarField";
import { usePageMeta } from "@/hooks/usePageMeta";
import { getArticlesByCategory, categoryMeta, VERTICAL_IMAGES, ALL_CATEGORIES, type Category } from "@/lib/data";


export default function VerticalPage() {
  const { vertical } = useParams<{ vertical: string }>();
  const category = vertical as Category;

  usePageMeta({ title: categoryMeta[category]?.label || "Not Found", description: categoryMeta[category]?.description });

  if (!ALL_CATEGORIES.includes(category)) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "oklch(0.08 0.03 270)" }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Vertical Not Found
          </h1>
          <Link href="/" className="text-sm" style={{ color: "oklch(0.85 0.18 192)" }}>
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const meta = categoryMeta[category];
  const categoryArticles = getArticlesByCategory(category);

  return (
    <div className="min-h-screen relative" style={{ background: "oklch(0.08 0.03 270)" }}>
      <StarField />
      <Navbar />

      {/* Vertical Hero */}
      <section className="relative pt-16">
        <div className="relative h-[40vh] min-h-[300px] max-h-[500px]">
          <img
            src={VERTICAL_IMAGES[category]}
            alt={meta.label}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, oklch(0.08 0.03 270 / 50%) 0%, oklch(0.08 0.03 270) 100%)`,
            }}
          />
          <div className="relative h-full container flex flex-col justify-end pb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-medium mb-4 transition-colors hover:text-primary"
                style={{ color: "oklch(0.6 0.02 270)", fontFamily: "var(--font-display)" }}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                All Verticals
              </Link>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: meta.color, boxShadow: `0 0 12px ${meta.color}` }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: meta.color, fontFamily: "var(--font-display)" }}
                >
                  {meta.label} Vertical
                </span>
              </div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {meta.label}
              </h1>
              <p
                className="text-base max-w-lg leading-relaxed"
                style={{ color: "oklch(0.65 0.02 270)" }}
              >
                {meta.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container relative z-10 my-8">
        <AdSlot variant="banner" />
      </div>

      {/* Articles Grid */}
      <section className="container relative z-10 mb-16">
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArticles.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} showSummary={true} />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-20 rounded-xl"
            style={{
              background: "oklch(0.12 0.04 275 / 30%)",
              border: "1px solid oklch(0.25 0.04 275 / 30%)",
            }}
          >
            <p className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>
              No articles yet
            </p>
            <p className="text-sm" style={{ color: "oklch(0.5 0.02 270)" }}>
              Check back soon for the latest {meta.label.toLowerCase()} stories.
            </p>
          </div>
        )}
      </section>

      {/* Bottom Ad */}
      <div className="container relative z-10 mb-8">
        <AdSlot variant="banner" />
      </div>

      <Footer />
    </div>
  );
}
