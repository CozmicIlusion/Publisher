// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// Navbar: Frosted glass navigation with cosmic branding
// ============================================================

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Zap } from "lucide-react";
import { categoryMeta, type Category } from "@/lib/data";

const navCategories: Category[] = ["tech", "gaming", "culture", "lifestyle"];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className="backdrop-blur-xl border-b"
        style={{
          background: "oklch(0.08 0.03 270 / 80%)",
          borderColor: "oklch(0.85 0.18 192 / 8%)",
        }}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, oklch(0.85 0.18 192 / 20%), oklch(0.72 0.25 350 / 20%))",
                border: "1px solid oklch(0.85 0.18 192 / 30%)",
              }}
            >
              <Zap className="w-4 h-4" style={{ color: "oklch(0.85 0.18 192)" }} />
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                background: "linear-gradient(135deg, oklch(0.85 0.18 192), oklch(0.72 0.25 350))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              COZMIC
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navCategories.map((cat) => {
              const meta = categoryMeta[cat];
              const isActive = location === `/vertical/${cat}`;
              return (
                <Link
                  key={cat}
                  href={`/vertical/${cat}`}
                  className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: isActive ? meta.color : "oklch(0.7 0.02 270)",
                    background: isActive ? `color-mix(in oklch, ${meta.color} 10%, transparent)` : "transparent",
                  }}
                >
                  {meta.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                      style={{ background: meta.color }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
              style={{
                background: "oklch(0.2 0.04 275 / 50%)",
                color: "oklch(0.7 0.02 270)",
              }}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
              style={{
                background: "oklch(0.2 0.04 275 / 50%)",
                color: "oklch(0.7 0.02 270)",
              }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b"
            style={{
              background: "oklch(0.1 0.04 275 / 95%)",
              backdropFilter: "blur(20px)",
              borderColor: "oklch(0.85 0.18 192 / 8%)",
            }}
          >
            <div className="container py-4 flex flex-col gap-1">
              {navCategories.map((cat) => {
                const meta = categoryMeta[cat];
                return (
                  <Link
                    key={cat}
                    href={`/vertical/${cat}`}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm font-medium rounded-lg transition-colors"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: meta.color,
                    }}
                  >
                    {meta.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
