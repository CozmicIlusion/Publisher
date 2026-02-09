// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism Design System
// Mock data for the news platform prototype
// ============================================================

export type Category = "tech" | "gaming" | "culture" | "lifestyle";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  author: string;
  publishedAt: string;
  readTime: number;
  imageUrl: string;
  featured: boolean;
  tags: string[];
}

export const categoryMeta: Record<Category, { label: string; color: string; badgeClass: string; description: string }> = {
  tech: {
    label: "Tech",
    color: "oklch(0.85 0.18 192)",
    badgeClass: "badge-tech",
    description: "The latest in technology, AI, and the digital frontier",
  },
  gaming: {
    label: "Gaming",
    color: "oklch(0.72 0.25 350)",
    badgeClass: "badge-gaming",
    description: "Level up with the latest gaming news and reviews",
  },
  culture: {
    label: "Culture",
    color: "oklch(0.85 0.15 85)",
    badgeClass: "badge-culture",
    description: "Trends, movements, and the pulse of modern culture",
  },
  lifestyle: {
    label: "Lifestyle",
    color: "oklch(0.7 0.2 280)",
    badgeClass: "badge-lifestyle",
    description: "Living well in the age of information",
  },
};

export const articles: Article[] = [
  {
    id: "1",
    slug: "ai-agents-reshaping-software-development",
    title: "AI Agents Are Reshaping Software Development — Here's What You Need to Know",
    excerpt: "The rise of autonomous AI agents is transforming how code is written, tested, and deployed. We explore the tools leading this revolution and what it means for developers.",
    content: `The software development landscape is undergoing a seismic shift. Autonomous AI agents — systems that can plan, execute, and iterate on complex tasks with minimal human intervention — are no longer a futuristic concept. They're here, and they're changing everything.

From GitHub Copilot's evolution into a full-fledged coding agent to open-source frameworks like AutoGen and CrewAI, the tools available to developers in 2026 are fundamentally different from what existed even two years ago. These agents don't just autocomplete code; they understand context, break down problems, write tests, debug issues, and even deploy applications.

The implications are profound. Junior developers are becoming more productive, senior developers are focusing on architecture and strategy, and entire categories of repetitive work are being automated. But this shift also raises important questions about code quality, security, and the future role of human developers in the software creation process.

What's clear is that the developers who learn to work alongside these AI agents — treating them as collaborative partners rather than replacement threats — will be the ones who thrive in this new era.`,
    category: "tech",
    author: "Cozmic Editorial",
    publishedAt: "2026-02-09",
    readTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    featured: true,
    tags: ["AI", "Development", "Automation"],
  },
  {
    id: "2",
    slug: "gta-vi-launch-breaks-records",
    title: "GTA VI Launch Shatters Every Record in Gaming History",
    excerpt: "Rockstar's long-awaited sequel has arrived, and the numbers are staggering. We break down the launch, the gameplay, and what it means for the industry.",
    content: `After years of anticipation, Grand Theft Auto VI has finally arrived — and it has exceeded even the most optimistic projections. Within its first 72 hours, the game generated over $2 billion in revenue, making it the fastest-selling entertainment product in history.

Set in the fictional state of Leonida (a reimagining of Florida), GTA VI introduces a dual-protagonist system featuring Lucia and Jason, whose intertwined stories explore themes of ambition, loyalty, and the American Dream in the social media age.

The technical achievements are equally impressive. Running on Rockstar's proprietary RAGE engine, the game delivers photorealistic environments, dynamic weather systems, and an AI-driven NPC ecosystem that makes the world feel genuinely alive.

But beyond the spectacle, GTA VI represents a maturation of the open-world genre. The storytelling is more nuanced, the satire is sharper, and the gameplay systems are deeper than anything Rockstar has produced before.`,
    category: "gaming",
    author: "Cozmic Editorial",
    publishedAt: "2026-02-08",
    readTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    featured: true,
    tags: ["GTA VI", "Rockstar", "Open World"],
  },
  {
    id: "3",
    slug: "gen-z-redefining-workplace-culture",
    title: "How Gen Z Is Quietly Redefining Workplace Culture",
    excerpt: "From rejecting hustle culture to demanding transparency, the youngest generation in the workforce is reshaping what it means to work.",
    content: `The conversation about Gen Z in the workplace has evolved beyond avocado toast jokes and quiet quitting memes. In 2026, this generation — now the fastest-growing segment of the global workforce — is actively reshaping organizational culture in ways that benefit everyone.

The changes are structural, not superficial. Gen Z workers are demanding (and getting) transparent salary bands, flexible work arrangements, and mental health support as standard benefits rather than perks. Companies that resist these changes are finding it increasingly difficult to attract and retain talent.

Perhaps most significantly, Gen Z is challenging the traditional hierarchy of corporate communication. They expect direct access to leadership, real-time feedback, and the ability to contribute ideas regardless of their position in the org chart.

The result is a workplace that's more human, more honest, and — contrary to what skeptics predicted — more productive.`,
    category: "culture",
    author: "Cozmic Editorial",
    publishedAt: "2026-02-07",
    readTime: 5,
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    featured: false,
    tags: ["Gen Z", "Work Culture", "Trends"],
  },
  {
    id: "4",
    slug: "digital-minimalism-movement-2026",
    title: "The Digital Minimalism Movement Is Going Mainstream",
    excerpt: "More people are choosing to simplify their digital lives. Here's why the movement is gaining momentum and how to get started.",
    content: `In an era of infinite scrolling and notification overload, a growing number of people are choosing to step back. The digital minimalism movement — once a niche philosophy championed by Cal Newport and a handful of tech critics — has gone mainstream in 2026.

The catalyst? A combination of factors: rising awareness of social media's impact on mental health, the fatigue of managing dozens of apps and subscriptions, and a generational shift toward valuing experiences over digital consumption.

Practical digital minimalism doesn't mean abandoning technology. Instead, it's about being intentional with the tools you use. This might mean consolidating your apps, setting strict screen time boundaries, or replacing social media scrolling with focused creative time.

The movement is also influencing product design. A new wave of "calm tech" apps and devices prioritize simplicity and mindfulness over engagement metrics.`,
    category: "lifestyle",
    author: "Cozmic Editorial",
    publishedAt: "2026-02-06",
    readTime: 4,
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    featured: false,
    tags: ["Minimalism", "Digital Wellness", "Lifestyle"],
  },
  {
    id: "5",
    slug: "cloudflare-acquires-astro-framework",
    title: "Cloudflare Acquires Astro: What This Means for the Future of Web Development",
    excerpt: "The acquisition signals a major shift in the web framework landscape. We analyze the implications for developers and the broader ecosystem.",
    content: `In January 2026, Cloudflare announced the acquisition of Astro, the popular open-source web framework designed for content-driven websites. The entire Astro team has joined Cloudflare, and the framework will remain MIT-licensed and open-source.

This move positions Cloudflare as a direct competitor to Vercel (which owns Next.js) in the full-stack web development platform space. With Astro's edge-first architecture and Cloudflare's global network, the combination creates a compelling proposition for developers building content-heavy sites.

For the developer community, the key question is whether Cloudflare will prioritize its own platform features at the expense of other deployment targets. Cloudflare has promised that Astro will remain platform-agnostic, but only time will tell.

What's undeniable is that this acquisition validates the content-first approach to web development that Astro pioneered. In a world increasingly dominated by AI-generated content, frameworks that can efficiently deliver that content to users at the edge have a significant advantage.`,
    category: "tech",
    author: "Cozmic Editorial",
    publishedAt: "2026-02-05",
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    featured: false,
    tags: ["Cloudflare", "Astro", "Web Dev"],
  },
  {
    id: "6",
    slug: "indie-games-dominating-2026",
    title: "Why Indie Games Are Dominating the Charts in 2026",
    excerpt: "Small studios are producing some of the year's best games. We look at the indie titles you shouldn't miss and the trends driving their success.",
    content: `While AAA studios continue to pour hundreds of millions into blockbuster titles, it's the indie developers who are consistently delivering the most innovative and critically acclaimed games of 2026.

The trend isn't new, but its scale is unprecedented. Indie titles now regularly appear in the top 10 best-selling games on Steam, and several have crossed the million-unit sales mark within weeks of launch. The democratization of game development tools, combined with platforms like itch.io and the indie-friendly policies of the Nintendo Switch successor, have created an environment where small teams can compete with industry giants.

What sets the current wave of indie games apart is their willingness to experiment with narrative, mechanics, and art style in ways that risk-averse AAA studios simply won't. From procedurally generated cosmic horror to meditative puzzle games set in impossible architecture, indie developers are pushing the boundaries of what games can be.`,
    category: "gaming",
    author: "Cozmic Editorial",
    publishedAt: "2026-02-04",
    readTime: 5,
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    featured: false,
    tags: ["Indie Games", "Gaming Industry", "Reviews"],
  },
  {
    id: "7",
    slug: "sustainable-fashion-tech-revolution",
    title: "Sustainable Fashion Meets Tech: The Brands Leading the Revolution",
    excerpt: "AI-powered design, blockchain traceability, and bio-fabricated materials are transforming the fashion industry from the inside out.",
    content: `The intersection of technology and sustainable fashion has reached a tipping point. In 2026, the brands leading the charge aren't just using eco-friendly materials — they're leveraging cutting-edge technology to fundamentally reimagine how clothes are designed, manufactured, and distributed.

AI-powered design tools are enabling brands to predict trends with greater accuracy, reducing overproduction — one of the fashion industry's biggest environmental challenges. Blockchain-based supply chain tracking is giving consumers unprecedented visibility into where their clothes come from and how they're made.

Perhaps most exciting is the emergence of bio-fabricated materials. Companies are growing leather alternatives from mushroom mycelium, creating silk-like fabrics from engineered proteins, and developing dyes from bacteria that require no water or toxic chemicals.

These innovations aren't confined to luxury brands. Fast-fashion companies are under increasing pressure from both consumers and regulators to adopt sustainable practices, and technology is making it economically viable to do so.`,
    category: "culture",
    author: "Cozmic Editorial",
    publishedAt: "2026-02-03",
    readTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
    featured: false,
    tags: ["Fashion", "Sustainability", "Innovation"],
  },
  {
    id: "8",
    slug: "sleep-optimization-science-2026",
    title: "The Science of Sleep Optimization: What Actually Works in 2026",
    excerpt: "From smart mattresses to chronotype-based scheduling, we separate the science from the hype in the booming sleep wellness industry.",
    content: `Sleep has become the ultimate wellness frontier. In 2026, the global sleep economy is worth over $500 billion, encompassing everything from smart mattresses and wearable sleep trackers to prescription digital therapeutics and AI-powered sleep coaching.

But what actually works? The science is clearer than ever. Consistent sleep and wake times matter more than total hours. Temperature regulation (keeping your bedroom between 65-68°F) has a measurable impact on sleep quality. And exposure to natural light in the morning is one of the most effective — and free — interventions available.

The technology that's proving most useful isn't the flashiest. Simple sleep tracking through wearables helps people identify patterns they might otherwise miss. White noise machines and blackout curtains remain more effective than most high-tech alternatives.

Where the real innovation is happening is in understanding individual chronotypes — your body's natural preference for when to sleep and wake. Companies are beginning to offer chronotype-based work schedules, and the early results suggest significant improvements in both productivity and wellbeing.`,
    category: "lifestyle",
    author: "Cozmic Editorial",
    publishedAt: "2026-02-02",
    readTime: 5,
    imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80",
    featured: false,
    tags: ["Sleep", "Wellness", "Science"],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Category): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getLatestArticles(count: number = 6): Article[] {
  return [...articles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, count);
}
