// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// AISummaryBadge: AI-generated one-sentence summary with
// Science Gothic thin font — futuristic, clean, cosmic
// ============================================================

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface AISummaryBadgeProps {
  summary: string;
  index?: number;
}

export default function AISummaryBadge({ summary, index = 0 }: AISummaryBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 + 0.3 }}
      className="flex items-start gap-2.5 mt-2 px-3.5 py-2.5 rounded-lg"
      style={{
        background: "linear-gradient(135deg, oklch(0.85 0.18 192 / 6%), oklch(0.72 0.25 350 / 4%))",
        border: "1px solid oklch(0.85 0.18 192 / 10%)",
      }}
    >
      <Sparkles
        className="w-3.5 h-3.5 shrink-0 mt-0.5"
        style={{ color: "oklch(0.85 0.18 192 / 70%)" }}
      />
      <p
        style={{
          fontFamily: "var(--font-summary)",
          fontWeight: 200,
          fontSize: "0.88rem",
          color: "oklch(0.75 0.08 200)",
          letterSpacing: "0.04em",
          lineHeight: "1.5",
          fontStretch: "75%",
        }}
      >
        {summary}
      </p>
    </motion.div>
  );
}
