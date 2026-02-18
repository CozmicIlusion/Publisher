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
import { getArticlesByCategory, categoryMeta, type Category } from "@/lib/data";

const VERTICAL_IMAGES: Record<Category, string> = {
  tech: "https://private-us-east-1.manuscdn.com/sessionFile/dI8iZj9h9uoUmzDnBjB9oa/sandbox/EEtcKAjigl8JMKE348s0vR-img-2_1770641648000_na1fn_Y296bWljLXRlY2gtdmVydGljYWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEk4aVpqOWg5dW9VbXpEbkJqQjlvYS9zYW5kYm94L0VFdGNLQWppZ2w4Sk1LRTM0OHMwdlItaW1nLTJfMTc3MDY0MTY0ODAwMF9uYTFmbl9ZMjk2YldsakxYUmxZMmd0ZG1WeWRHbGpZV3cuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jNDlX-clZMYbW7qWwRjHHW7x6~M6q0v~iIgN0aLhMvGQlDzcsoPZXcaScwAqS522dGZgxJ-ZQdEzIMYN6iOgy31gI~bi5lvFXssM9Qx9-~DldXVC8OoW2PMqrzqbe34i3KD1dHNlKxSTDVNg1P-AsSMc87z~1WzWr3Qmgo2zfIvarWOyGYSrMedZpGcJ3itoPL9pcsM2~CYyqA4aufs3waFQtV9pnVFvrLV46afJ-f7QOyUKezsNgl66kbkng--nffBEoj~sZuNx4SZ2zmTS81ydCUp1OMw8aHvD8y4d22w4AyNyE9~TRO8Rq6P0EFPEjdbxRUVmhZ6Cj9iIiTNVqg__",
  gaming: "https://private-us-east-1.manuscdn.com/sessionFile/dI8iZj9h9uoUmzDnBjB9oa/sandbox/EEtcKAjigl8JMKE348s0vR-img-3_1770641645000_na1fn_Y296bWljLWdhbWluZy12ZXJ0aWNhbA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEk4aVpqOWg5dW9VbXpEbkJqQjlvYS9zYW5kYm94L0VFdGNLQWppZ2w4Sk1LRTM0OHMwdlItaW1nLTNfMTc3MDY0MTY0NTAwMF9uYTFmbl9ZMjk2YldsakxXZGhiV2x1WnkxMlpYSjBhV05oYkEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KAU94~pN3FdM4rwsjDWTW9T3vdCWzXX9VdFcpMRS9W4tp5W6TBKgNRAeXKp46iFF2kdGIXaHpNN8XapzVeHQ9emkw6jBFNA16gzUnIc-qEQjcksS~LhLpIfcaksjJ4zGAmdq9JZiQly-MOwkfE8kWLVgYijWy9H31cDjei~BSLOdcSFV3Q0ffm-gvIHbPl94nnbfmXKjp2o0xZZG-flUPz4PFxsQKYnrjDXDt2W-iTyu5G2ATtRWhHko29hvUNnaa08q5Piw0vmTOWSEknGQPiaviPO6FAcePI6-bAobcnLxQscxo558JZ6IqBZnj6XyrfmZFD-pVwY0JY7OTrFxIA__",
  culture: "https://private-us-east-1.manuscdn.com/sessionFile/dI8iZj9h9uoUmzDnBjB9oa/sandbox/EEtcKAjigl8JMKE348s0vR-img-4_1770641637000_na1fn_Y296bWljLWN1bHR1cmUtdmVydGljYWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEk4aVpqOWg5dW9VbXpEbkJqQjlvYS9zYW5kYm94L0VFdGNLQWppZ2w4Sk1LRTM0OHMwdlItaW1nLTRfMTc3MDY0MTYzNzAwMF9uYTFmbl9ZMjk2YldsakxXTjFiSFIxY21VdGRtVnlkR2xqWVd3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MMewbvsUtGHtgBBhUbwiClZZ1PbLp~nmh~GOOI3UB5W55FGc2r9YJ174TKiCE9iHuAYct-3QozrBgh1v8K5ndRp0ZPdJ26wrSWf4E7~oDeByJDZMSEhlTHMtXJCU0n6clYgh763o8hF8GjgY-~ziwTbP~gg7TNFyQYOoPj5J~qGgKApFISctnTY4qRTcaSFfRCHqxANjRb~cDPcNuXhDXkv9TX2cRXMMQEHi~3ZA0skEIYQokOVs0paj9MBTYhV73Au4QsRApExt3Zdl7j2~6gtTw2c4o0JmBcjl~A8RJ5hYs~3ZBbxxu~J9iyJ2B3mZE9~xoGG~Q5I-eXYmYgbHoQ__",
  lifestyle: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  music: "https://private-us-east-1.manuscdn.com/sessionFile/dI8iZj9h9uoUmzDnBjB9oa/sandbox/hQXJaYtxJEhIIuOdkuDB8N-img-1_1770644232000_na1fn_Y296bWljLW11c2ljLXZlcnRpY2Fs.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEk4aVpqOWg5dW9VbXpEbkJqQjlvYS9zYW5kYm94L2hRWEphWXR4SkVoSUl1T2RrdURCOE4taW1nLTFfMTc3MDY0NDIzMjAwMF9uYTFmbl9ZMjk2YldsakxXMTFjMmxqTFhabGNuUnBZMkZzLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CEYKKkpuzBjkTW81~J-mdNcVNvET1by7Wza56gXpG00jguzPVGBmHGgwiHQB4O1fHEE1p3gQ4-vtw9VhHjCJi5dRM4YdzRS6LXE-Bgl6p8JO7BQewBjcwyOpqTCDKc1jMOJ0JuzYUwaaEazWkH72VO1RJ~ZsTqkfeC8MSsMJ8SpY9CMK4vZDvAS4ZcyIsEiGyOkI6MXuSfSs8jOcrrfy3SKnjLBAcYJrJxcC5-dfy9s5RYdQAgyEzLz8Zz7aq92jGu0qngme8UbROIhW6J9d~oec~Naxet~8kglZ7lfjtjvFW09KeeRURA0HgP9k6wDKOk1KR3C358A8-OL-1-RnbQ__",
  science: "https://private-us-east-1.manuscdn.com/sessionFile/dI8iZj9h9uoUmzDnBjB9oa/sandbox/q7AWVNKK9W7BAfnXKkVtWF-img-1_1771388259000_na1fn_Y296bWljLXNjaWVuY2Utc3luYXBzZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEk4aVpqOWg5dW9VbXpEbkJqQjlvYS9zYW5kYm94L3E3QVdWTktLOVc3QkFmblhLa1Z0V0YtaW1nLTFfMTc3MTM4ODI1OTAwMF9uYTFmbl9ZMjk2YldsakxYTmphV1Z1WTJVdGMzbHVZWEJ6WlEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=V8r0CLlDBFhbsmylxDPE5Om-P-~BwxN1fDkDuygAHhVKthYR9iOz9XFXruBXXcXcQ54zQclXAL3beE1rwkP9rkjqE5hl-QsZTCkMXjtOLB~px5CRfPvqXoqa9SBAgsqgobVKehcV~cWzwncGTYE9fjMuGg~swA~TTtVHW9MCuFaDNdhXZT4WaommORT6BqncGQKWgKnfDyiBssTOuk6ErmOfd2BHRaM~r5IN9l7TdDZZuOLCy7qqDd8PqFqKI2S0LVnwDLR3JnQpd8FSIrg5aBCsS8QmVgLfvYIU1REeHGUoZF0mIBMR6UgzjJtvghGabKRDGNrivUlVIEBtxG7hbw__",
};

const validCategories: Category[] = ["tech", "gaming", "culture", "lifestyle", "music", "science"];

export default function VerticalPage() {
  const { vertical } = useParams<{ vertical: string }>();
  const category = vertical as Category;

  if (!validCategories.includes(category)) {
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
