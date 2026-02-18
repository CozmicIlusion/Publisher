// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// About Page: Brand story and mission
// ============================================================

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { motion } from "framer-motion";
import { Zap, Globe, Cpu, Users, Rocket, Sparkles } from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We cover stories that matter across borders — from Silicon Valley to Seoul, from London to Lagos. Our lens is global, our voice is universal.",
  },
  {
    icon: Cpu,
    title: "AI-Augmented",
    description: "We harness artificial intelligence to discover, curate, and contextualize stories faster. Every article is human-verified and editorially refined.",
  },
  {
    icon: Users,
    title: "Gen Z Native",
    description: "Built by and for the connected generation. We speak your language, respect your time, and deliver information the way you consume it.",
  },
  {
    icon: Rocket,
    title: "Future-Forward",
    description: "We don't just report on the future — we build with it. Our platform runs on cutting-edge technology, from edge computing to serverless architecture.",
  },
];

export default function About() {
  const accentColor = "oklch(0.85 0.18 192)";

  return (
    <div className="min-h-screen relative" style={{ background: "oklch(0.08 0.03 270)" }}>
      <StarField />
      <Navbar />

      <div className="container relative z-10 pt-28 pb-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-6 h-6" style={{ color: accentColor }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: accentColor, fontFamily: "var(--font-display)" }}
            >
              Our Story
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            News at the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, oklch(0.85 0.18 192), oklch(0.72 0.25 350))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Speed of Light
            </span>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl"
            style={{ color: "oklch(0.65 0.02 270)" }}
          >
            Cozmic is a next-generation digital news platform that combines the rigor of traditional journalism with the speed and intelligence of AI-powered content curation.
          </p>

          {/* Mission Block */}
          <div
            className="rounded-2xl p-8 md:p-10 mb-16"
            style={{
              background: "linear-gradient(135deg, oklch(0.12 0.04 275 / 60%), oklch(0.1 0.05 280 / 40%))",
              border: "1px solid oklch(0.85 0.18 192 / 12%)",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5" style={{ color: accentColor }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: accentColor, fontFamily: "var(--font-display)" }}
              >
                Our Mission
              </span>
            </div>
            <p
              className="text-xl md:text-2xl font-medium leading-relaxed"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.93 0.01 270)" }}
            >
              To democratize quality information by making news accessible, engaging, and trustworthy for a generation that demands transparency and speed.
            </p>
          </div>

          {/* Values Grid */}
          <h2
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl p-6"
                style={{
                  background: "oklch(0.12 0.03 275 / 40%)",
                  border: "1px solid oklch(0.25 0.04 275 / 20%)",
                }}
              >
                <value.icon className="w-6 h-6 mb-4" style={{ color: accentColor }} />
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.93 0.01 270)" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.65 0.02 270)" }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* How We Work */}
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How We Work
          </h2>
          <div className="space-y-6 mb-16 text-base leading-[1.85]" style={{ color: "oklch(0.78 0.01 270)" }}>
            <p>
              At Cozmic, we believe the future of journalism lies at the intersection of human insight and artificial intelligence. Our editorial process combines AI-powered content discovery with rigorous human editorial oversight to deliver stories that are both timely and trustworthy.
            </p>
            <p>
              Our AI systems scan thousands of sources across the globe to identify breaking stories, emerging trends, and underreported narratives. Our editorial team then verifies, contextualizes, and crafts each piece to meet our quality standards. Every article published on Cozmic has been reviewed and approved by a human editor.
            </p>
            <p>
              We cover six core verticals — <strong style={{ color: "oklch(0.88 0.02 270)" }}>Tech, Gaming, Culture, Lifestyle, Music, and Science</strong> — with plans to expand into additional areas as our community grows. Our content is designed to be informative yet accessible, serious yet engaging, and always respectful of our readers' intelligence and time.
            </p>
          </div>

          {/* CTA */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, oklch(0.85 0.18 192 / 10%), oklch(0.72 0.25 350 / 10%))",
              border: "1px solid oklch(0.85 0.18 192 / 15%)",
            }}
          >
            <h3
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Want to reach us?
            </h3>
            <p className="text-sm mb-5" style={{ color: "oklch(0.6 0.02 270)" }}>
              Whether you have a story tip, partnership inquiry, or just want to say hello — we'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, oklch(0.85 0.18 192), oklch(0.7 0.2 200))",
                color: "oklch(0.08 0.03 270)",
                fontFamily: "var(--font-display)",
              }}
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
