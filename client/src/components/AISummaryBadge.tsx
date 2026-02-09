// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// AISummaryBadge: AI-generated one-sentence summary with
// special Caveat handwriting font and soft aurora glow
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
      className="flex items-start gap-2 mt-2 px-3 py-2 rounded-lg"
      style={{
        background: "linear-gradient(135deg, oklch(0.85 0.18 192 / 5%), oklch(0.78 0.22 310 / 5%))",
        border: "1px solid oklch(0.85 0.18 192 / 10%)",
      }}
    >
      <Sparkles
        className="w-3.5 h-3.5 shrink-0 mt-0.5"
        style={{ color: "oklch(0.78 0.22 310)" }}
      />
      <p
        className="text-sm leading-relaxed"
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: "0.95rem",
          color: "oklch(0.72 0.12 280)",
          letterSpacing: "0.01em",
          lineHeight: "1.4",
        }}
      >
        {summary}
      </p>
    </motion.div>
  );
}
