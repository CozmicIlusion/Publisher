// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// Home: Main landing page with hero, trending, featured,
// categories (including Music), AI summaries, and ads
// ============================================================

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rss } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import StarField from "@/components/StarField";
import TrendingTicker from "@/components/TrendingTicker";
import { usePageMeta } from "@/hooks/usePageMeta";
import { articles, getFeaturedArticles, getLatestArticles, categoryMeta, HERO_IMAGE, VERTICAL_IMAGES, ALL_CATEGORIES } from "@/lib/data";



export default function Home() {
  usePageMeta({ title: "Home", description: "Cozmic is a next-generation news platform delivering tech, gaming, culture, lifestyle, music, and science stories for the connected generation." });
  const featured = getFeaturedArticles();
  const latest = getLatestArticles(8);
  const nonFeatured = latest.filter((a) => !a.featured);

  return (
    <div className="min-h-screen relative" style={{ background: "oklch(0.08 0.03 270)" }}>
      <StarField />
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
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4" style={{ color: "oklch(0.85 0.18 192)" }} />
                <span
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "oklch(0.85 0.18 192)", fontFamily: "var(--font-display)" }}
                >
                  The Future of News
                </span>
              </div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 max-w-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span style={{ color: "oklch(0.97 0.01 270)" }}>News for the </span>
                <span
                  style={{
                    background: "linear-gradient(135deg, oklch(0.85 0.18 192), oklch(0.72 0.25 350))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Connected
                </span>
                <span style={{ color: "oklch(0.97 0.01 270)" }}> Generation</span>
              </h1>
              <p
                className="text-base md:text-lg max-w-xl leading-relaxed mb-8"
                style={{ color: "oklch(0.7 0.02 270)" }}
              >
                Tech, gaming, culture, lifestyle, and music — curated by AI, verified by humans. 
                Your daily dose of what matters, delivered at the speed of light.
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
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
                  style={{
                    background: "oklch(0.2 0.04 275 / 50%)",
                    border: "1px solid oklch(0.85 0.18 192 / 20%)",
                    color: "oklch(0.85 0.18 192)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  <Rss className="w-4 h-4" /> Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container relative z-10 -mt-4 mb-8">
        <AdSlot variant="banner" />
      </div>

      {/* Trending Now — Real-time Section */}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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
        <h2
          className="text-2xl font-bold mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Latest Stories
        </h2>
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

            {/* Newsletter CTA */}
            <div
              className="rounded-xl p-6 text-center"
              style={{
                background: "linear-gradient(135deg, oklch(0.85 0.18 192 / 10%), oklch(0.72 0.25 350 / 10%))",
                border: "1px solid oklch(0.85 0.18 192 / 15%)",
              }}
            >
              <Sparkles className="w-6 h-6 mx-auto mb-3" style={{ color: "oklch(0.85 0.18 192)" }} />
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Stay in Orbit
              </h3>
              <p className="text-xs mb-4 leading-relaxed" style={{ color: "oklch(0.6 0.02 270)" }}>
                Get the best of Cozmic delivered to your inbox. No spam, just signal.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 rounded-lg text-sm bg-transparent"
                  style={{
                    border: "1px solid oklch(0.3 0.04 275 / 50%)",
                    color: "oklch(0.85 0.01 270)",
                  }}
                />
                <button
                  className="px-4 py-2 rounded-lg text-sm font-semibold shrink-0"
                  style={{
                    background: "oklch(0.85 0.18 192)",
                    color: "oklch(0.08 0.03 270)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Ad */}
      <div className="container relative z-10 mb-8">
        <AdSlot variant="banner" />
      </div>

      <Footer />
    </div>
  );
}
