// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// Home: Main landing page with hero, trending, featured,
// categories (including Music), AI summaries, and ads
// ============================================================

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import StarField from "@/components/StarField";
import CosmicAtmosphere from "@/components/CosmicAtmosphere";
import TrendingTicker from "@/components/TrendingTicker";
import { usePageMeta } from "@/hooks/usePageMeta";
import { articles, getFeaturedArticles, getLatestArticles, getEditorsPickArticles, getLatestEditionLabel, categoryMeta, HERO_IMAGE, VERTICAL_IMAGES, ALL_CATEGORIES } from "@/lib/data";
import SEOHead from "@/components/SEOHead";



export default function Home() {
  usePageMeta({ title: "Home", description: "Cozmic is a next-generation news platform delivering tech, gaming, culture, lifestyle, music, and science stories for the connected generation." });
  const featured = getFeaturedArticles();
  const latest = getLatestArticles(8);
  const nonFeatured = latest.filter((a) => !a.featured);
  const editorsPicks = getEditorsPickArticles();
  const latestEdition = getLatestEditionLabel();
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen relative" style={{ background: "oklch(0.08 0.03 270)" }}>
      <SEOHead
        pageType="home"
        title="Home"
        description="Next-generation news platform delivering tech, gaming, culture, lifestyle, music, and science stories for the connected generation. Curated by AI, verified by humans."
        canonical="https://cozmic.cloud/"
      />
      <StarField />
      <CosmicAtmosphere />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        <div className="relative h-[85vh] min-h-[600px] max-h-[900px]">
          <img
            src={HERO_IMAGE}
            alt="Cosmic nebula"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, oklch(0.08 0.03 270 / 30%) 0%, oklch(0.08 0.03 270 / 60%) 50%, oklch(0.08 0.03 270) 100%)",
            }}
          />
          <div className="relative h-full container flex flex-col justify-end pb-16">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4" style={{ color: "oklch(0.85 0.18 192)" }} />
                <span
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "oklch(0.85 0.18 192)", fontFamily: "var(--font-display)" }}
                >
                  Signals from What’s Next
                </span>
              </div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 max-w-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span style={{ color: "oklch(0.97 0.01 270)" }}>Decode the </span>
                <span
                  style={{
                    background: "linear-gradient(135deg, oklch(0.85 0.18 192), oklch(0.72 0.25 350))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Signals
                </span>
                <span style={{ color: "oklch(0.97 0.01 270)" }}> Shaping Next</span>
              </h1>
              <p
                className="text-base md:text-lg max-w-xl leading-relaxed mb-8"
                style={{ color: "oklch(0.7 0.02 270)" }}
              >
                Tech, gaming, culture, lifestyle, music, and science — decoded with evidence, context, and a human editorial point of view.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/vertical/tech"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.85 0.18 192), oklch(0.7 0.2 200))",
                    color: "oklch(0.08 0.03 270)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Explore Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container relative z-10 -mt-4 mb-8">
        <AdSlot variant="banner" />
      </div>

      <TrendingTicker />

      {/* Featured Articles with AI Summaries */}
      <section className="container relative z-10 mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-5 h-5" style={{ color: "oklch(0.78 0.22 310)" }} />
          <h2
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Featured
          </h2>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{
              background: "oklch(0.78 0.22 310 / 10%)",
              color: "oklch(0.78 0.22 310)",
              border: "1px solid oklch(0.78 0.22 310 / 20%)",
              fontFamily: "var(--font-summary)",
              fontSize: "0.8rem",
            }}
          >
            AI Summaries
          </span>
        </div>
        <div className="space-y-6">
          {featured.map((article, i) => (
            <ArticleCard key={article.id} article={article} variant="featured" index={i} showSummary={true} />
          ))}
        </div>
      </section>

      {/* Category Verticals Grid — Now with 5 including Music */}
      <section className="container relative z-10 mb-16">
        <h2
          className="text-2xl font-bold mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Explore Verticals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {ALL_CATEGORIES.map((cat, i) => {
            const meta = categoryMeta[cat];
            return (
              <motion.div
                key={cat}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : i * 0.1 }}
              >
                <Link href={`/vertical/${cat}`} className="block group">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src={VERTICAL_IMAGES[cat]}
                      alt={meta.label}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(to top, oklch(0.08 0.03 270 / 90%) 0%, oklch(0.08 0.03 270 / 30%) 100%)`,
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span
                        className="text-xs font-semibold uppercase tracking-[0.15em] mb-1 block"
                        style={{ color: meta.color, fontFamily: "var(--font-display)" }}
                      >
                        {meta.label}
                      </span>
                      <p className="text-xs leading-relaxed" style={{ color: "oklch(0.6 0.02 270)" }}>
                        {meta.description}
                      </p>
                    </div>
                    {/* Glow border on hover */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 0 1px ${meta.color}40, 0 0 20px ${meta.color}15`,
                      }}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Latest Articles + Sidebar — with AI Summaries */}
      <section className="container relative z-10 mb-16">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-8">
          <h2
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Latest Stories
          </h2>
          <p
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: "oklch(0.85 0.18 192)", fontFamily: "var(--font-display)" }}
          >
            Latest edition · {latestEdition}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {nonFeatured.slice(0, 6).map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} showSummary={true} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sidebar Ad */}
            <AdSlot variant="sidebar" />

            {/* Quick Links */}
            <div
              className="rounded-xl p-5"
              style={{
                background: "oklch(0.12 0.04 275 / 40%)",
                border: "1px solid oklch(0.85 0.18 192 / 8%)",
              }}
            >
              <h3
                className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.85 0.18 192)" }}
              >
                Recent
              </h3>
              {articles.slice(0, 4).map((article, i) => (
                <ArticleCard key={article.id} article={article} variant="compact" index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Editor's Choice Section */}
      {editorsPicks.length > 0 && (
        <section className="container relative z-10 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, oklch(0.82 0.15 80 / 20%), oklch(0.85 0.18 192 / 20%))",
                border: "1px solid oklch(0.82 0.15 80 / 30%)",
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: "oklch(0.82 0.15 80)" }} />
            </div>
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Editor's Choice
            </h2>
            <span
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{
                background: "oklch(0.82 0.15 80 / 10%)",
                color: "oklch(0.82 0.15 80)",
                border: "1px solid oklch(0.82 0.15 80 / 20%)",
                fontFamily: "var(--font-display)",
              }}
            >
              Curated by Cozmic
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {editorsPicks.map((article, i) => (
              <ArticleCard key={article.id} article={article} variant="featured" index={i} showSummary={true} />
            ))}
          </div>
        </section>
      )}

      {/* Bottom Ad */}
      <div className="container relative z-10 mb-8">
        <AdSlot variant="banner" />
      </div>

      <Footer />
    </div>
  );
}
