// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism Design System
// Mock data for the news platform prototype
// ============================================================

export type Category = "tech" | "gaming" | "culture" | "lifestyle" | "music" | "science";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  aiSummary: string;
  content: string;
  category: Category;
  author: string;
  publishedAt: string;
  readTime: number;
  imageUrl: string;
  featured: boolean;
  tags: string[];
  views: number;
  trending: boolean;
  sourceUrl?: string;
  sourceLabel?: string;
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
  music: {
    label: "Music",
    color: "oklch(0.78 0.22 310)",
    badgeClass: "badge-music",
    description: "Sounds, beats, and the artists shaping the sonic landscape",
  },
  science: {
    label: "Science",
    color: "oklch(0.75 0.2 160)",
    badgeClass: "badge-science",
    description: "Breakthroughs, discoveries, and the frontiers of human knowledge",
  },
};

export const articles: Article[] = [
  // ===== SCIENCE VERTICAL — FIRST REAL PUBLISHED ARTICLE =====
  {
    id: "12",
    slug: "harvard-scientists-watch-memories-form-in-real-time",
    title: "Harvard Scientists Can Now Watch Memories Form in Real Time — And It Could Change Everything We Know About the Brain",
    excerpt: "A groundbreaking new tool called EPSILON lets researchers see the exact moment a memory is born at the synapse level. The implications for dementia, learning, and neuroscience are enormous.",
    aiSummary: "Harvard's new EPSILON tool tracks protein movement at synapses in living brains, revealing for the first time how memories physically form — opening doors to dementia treatments.",
    content: `Imagine being able to watch a memory being born — not as a metaphor, but as a literal, observable event happening inside a living brain. That's exactly what a team of scientists at Harvard University has achieved, and the implications could reshape our understanding of how we learn, remember, and ultimately, who we are.

Published in *Nature Neuroscience*, the research introduces a revolutionary tool called **EPSILON** (Extracellular Protein Surface Labeling in Neurons). It allows scientists to track the movement of specific proteins at synapses — the tiny junctions between neurons where all the magic of thought, learning, and memory happens — in real time, in living brains.

## Why This Matters (Especially If You've Ever Forgotten Where You Put Your Keys)

Here's the thing about memory: we've known for decades that it involves changes at synapses. When you learn something new — a friend's name, a dance move, the lyrics to that song stuck in your head — the connections between your neurons physically change. Specific proteins called **AMPARs** (yes, the full name is a mouthful: α-amino-3-hydroxy-5-methyl-4-isoxazolepropionic acid receptors) get shuttled to the surface of synapses, strengthening the connection.

But until now, scientists could only study this process in dead tissue or in artificial lab conditions. They could see the *result* of memory formation, but not the process itself. It's like trying to understand how a building was constructed by only looking at the finished product.

EPSILON changes that entirely.

## How EPSILON Actually Works

The tool uses something called **HaloTag technology** — a method of labeling proteins with specialised dyes that can be tracked over time. The clever part is the "pulse-chase" approach: researchers label proteins at one point in time with one colour, then label new proteins later with a different colour. This creates a kind of molecular time-lapse, showing which proteins were already at the synapse and which ones arrived during a specific experience.

The Harvard team, led by **Adam Cohen** and graduate student **Doyeon Kim**, applied EPSILON to mice undergoing contextual fear conditioning — a standard learning experiment where mice learn to associate a specific environment with a mild stimulus. By tracking AMPAR movement before, during, and after the learning event, they could literally see new proteins arriving at synapses in the neurons that were active during memory formation.

Even more remarkably, they found a direct correlation between AMPAR arrival at synapses and the expression of **cFos**, a gene that's considered a marker for "engram cells" — the specific neurons that store a particular memory.

## What This Means for the Future

The potential applications are genuinely exciting, and they extend far beyond the lab:

**For dementia and Alzheimer's research:** If we can see exactly how healthy memory formation works at the molecular level, we can better understand what goes wrong in conditions where memory fails. This could lead to earlier detection and more targeted treatments.

**For learning and education:** Understanding the physical basis of memory could eventually inform how we design learning experiences. If certain conditions promote stronger AMPAR trafficking (and therefore stronger memories), educational approaches could be optimised accordingly.

**For mental health:** Conditions like PTSD involve memories that are too strong or too easily triggered. Understanding the molecular mechanics of memory formation could lead to therapies that help modulate these processes.

## The Bigger Picture

What makes this research particularly compelling is its elegance. The HaloTag technology at the heart of EPSILON is based on a gene originally discovered in 1997 by Irish scientists studying a soil bacterium. Nearly three decades later, that basic science discovery is enabling us to watch memories form in living brains. It's a powerful reminder that fundamental research — the kind that often seems abstract or impractical — can lead to transformative applications.

The EPSILON tool has already been distributed to laboratories worldwide, suggesting that this is just the beginning. As more researchers apply it to different types of learning, different brain regions, and different conditions, our understanding of memory is likely to advance rapidly.

For a generation that grew up with the internet as an external memory bank, there's something beautifully ironic about science finally cracking the code of our internal one.

---

*This article is based on research published in Nature Neuroscience by Adam Cohen, Doyeon Kim, and colleagues at Harvard University and the Howard Hughes Medical Institute. The study was partially funded by the National Institutes of Health.*`,
    category: "science",
    author: "Cozmic Editorial",
    publishedAt: "2026-02-17",
    readTime: 7,
    imageUrl: "https://private-us-east-1.manuscdn.com/sessionFile/dI8iZj9h9uoUmzDnBjB9oa/sandbox/q7AWVNKK9W7BAfnXKkVtWF-img-1_1771388259000_na1fn_Y296bWljLXNjaWVuY2Utc3luYXBzZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEk4aVpqOWg5dW9VbXpEbkJqQjlvYS9zYW5kYm94L3E3QVdWTktLOVc3QkFmblhLa1Z0V0YtaW1nLTFfMTc3MTM4ODI1OTAwMF9uYTFmbl9ZMjk2YldsakxYTmphV1Z1WTJVdGMzbHVZWEJ6WlEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=V8r0CLlDBFhbsmylxDPE5Om-P-~BwxN1fDkDuygAHhVKthYR9iOz9XFXruBXXcXcQ54zQclXAL3beE1rwkP9rkjqE5hl-QsZTCkMXjtOLB~px5CRfPvqXoqa9SBAgsqgobVKehcV~cWzwncGTYE9fjMuGg~swA~TTtVHW9MCuFaDNdhXZT4WaommORT6BqncGQKWgKnfDyiBssTOuk6ErmOfd2BHRaM~r5IN9l7TdDZZuOLCy7qqDd8PqFqKI2S0LVnwDLR3JnQpd8FSIrg5aBCsS8QmVgLfvYIU1REeHGUoZF0mIBMR6UgzjJtvghGabKRDGNrivUlVIEBtxG7hbw__",
    featured: true,
    tags: ["Neuroscience", "Memory", "Harvard", "Brain Science", "Health"],
    views: 31204,
    trending: true,
    sourceUrl: "https://neurosciencenews.com/synapse-memory-learning-28870/",
    sourceLabel: "Neuroscience News / Nature Neuroscience",
  },
  {
    id: "1",
    slug: "ai-agents-reshaping-software-development",
    title: "AI Agents Are Reshaping Software Development — Here's What You Need to Know",
    excerpt: "The rise of autonomous AI agents is transforming how code is written, tested, and deployed. We explore the tools leading this revolution and what it means for developers.",
    aiSummary: "Autonomous AI agents are fundamentally changing software development by planning, coding, testing, and deploying with minimal human input.",
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
    views: 12847,
    trending: true,
  },
  {
    id: "2",
    slug: "gta-vi-launch-breaks-records",
    title: "GTA VI Launch Shatters Every Record in Gaming History",
    excerpt: "Rockstar's long-awaited sequel has arrived, and the numbers are staggering. We break down the launch, the gameplay, and what it means for the industry.",
    aiSummary: "GTA VI generated over $2 billion in 72 hours, becoming the fastest-selling entertainment product ever with groundbreaking AI-driven gameplay.",
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
    views: 24531,
    trending: true,
  },
  {
    id: "3",
    slug: "gen-z-redefining-workplace-culture",
    title: "How Gen Z Is Quietly Redefining Workplace Culture",
    excerpt: "From rejecting hustle culture to demanding transparency, the youngest generation in the workforce is reshaping what it means to work.",
    aiSummary: "Gen Z workers are driving structural workplace changes — transparent salaries, flexible arrangements, and direct leadership access are becoming the norm.",
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
    views: 8923,
    trending: true,
  },
  {
    id: "4",
    slug: "digital-minimalism-movement-2026",
    title: "The Digital Minimalism Movement Is Going Mainstream",
    excerpt: "More people are choosing to simplify their digital lives. Here's why the movement is gaining momentum and how to get started.",
    aiSummary: "Digital minimalism has gone mainstream in 2026 as people combat notification fatigue with intentional tech use and 'calm tech' products.",
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
    views: 5672,
    trending: false,
  },
  {
    id: "5",
    slug: "cloudflare-acquires-astro-framework",
    title: "Cloudflare Acquires Astro: What This Means for the Future of Web Development",
    excerpt: "The acquisition signals a major shift in the web framework landscape. We analyze the implications for developers and the broader ecosystem.",
    aiSummary: "Cloudflare's acquisition of Astro positions it as a direct competitor to Vercel, validating the content-first approach to edge-delivered web development.",
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
    views: 9341,
    trending: true,
  },
  {
    id: "6",
    slug: "indie-games-dominating-2026",
    title: "Why Indie Games Are Dominating the Charts in 2026",
    excerpt: "Small studios are producing some of the year's best games. We look at the indie titles you shouldn't miss and the trends driving their success.",
    aiSummary: "Indie games are outselling AAA titles on Steam thanks to democratized dev tools and a willingness to experiment with narrative and mechanics.",
    content: `While AAA studios continue to pour hundreds of millions into blockbuster titles, it's the indie developers who are consistently delivering the most innovative and critically acclaimed games of 2026.

The trend isn't new, but its scale is unprecedented. Indie titles now regularly appear in the top 10 best-selling games on Steam, and several have crossed the million-unit sales mark within weeks of launch. The democratization of game development tools, combined with platforms like itch.io and the indie-friendly policies of the Nintendo Switch successor, have created an environment where small teams can compete with industry giants.

What sets the current wave of indie games apart is their willingness to experiment with narrative, mechanics, and art style in ways that risk-averse AAA studios simply won't. From procedurally generated cosmic horror to meditative puzzle games set in impossible architecture, indie developers are pushing the boundaries of what games can be.`,
    category: "gaming",
    author: "Cozmic Editorial",
    publishedAt: "2026-02-04",
    readTime: 5,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    featured: false,
    tags: ["Indie Games", "Gaming Industry", "Reviews"],
    views: 7218,
    trending: false,
  },
  {
    id: "7",
    slug: "sustainable-fashion-tech-revolution",
    title: "Sustainable Fashion Meets Tech: The Brands Leading the Revolution",
    excerpt: "AI-powered design, blockchain traceability, and bio-fabricated materials are transforming the fashion industry from the inside out.",
    aiSummary: "Fashion's sustainability revolution is powered by AI design tools, blockchain supply chains, and bio-fabricated materials grown from mushroom mycelium.",
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
    views: 4102,
    trending: false,
  },
  {
    id: "8",
    slug: "sleep-optimization-science-2026",
    title: "The Science of Sleep Optimization: What Actually Works in 2026",
    excerpt: "From smart mattresses to chronotype-based scheduling, we separate the science from the hype in the booming sleep wellness industry.",
    aiSummary: "Consistent sleep schedules and morning light exposure outperform most high-tech sleep gadgets, while chronotype-based work schedules show real promise.",
    content: `The sleep wellness industry has exploded into a multi-billion dollar market, with everything from AI-powered mattresses to brainwave-entraining headbands competing for your attention (and your money). But beneath the marketing hype, what does the science actually say?

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
    views: 3891,
    trending: false,
  },
  // === MUSIC VERTICAL ARTICLES ===
  {
    id: "9",
    slug: "ai-music-production-revolution-2026",
    title: "AI Is Rewriting the Rules of Music Production — And Artists Are Divided",
    excerpt: "From Suno to Udio, AI music generators are creating radio-quality tracks in seconds. We explore the creative, legal, and ethical battleground.",
    aiSummary: "AI music tools like Suno and Udio can now produce radio-quality tracks in seconds, sparking fierce debate over creativity, copyright, and artistic identity.",
    content: `The music industry is facing its most disruptive moment since the advent of streaming. AI-powered music generation tools — led by Suno, Udio, and a growing ecosystem of open-source alternatives — can now produce full-length, radio-quality tracks in a matter of seconds, complete with vocals, instrumentation, and mastering.

For independent artists and bedroom producers, these tools represent both an opportunity and a threat. On one hand, AI dramatically lowers the barrier to entry for music creation. Anyone with an idea can now produce professional-sounding music without years of training or expensive studio time. On the other hand, the flood of AI-generated content threatens to devalue human creativity and make it harder for genuine artists to stand out.

The legal landscape is equally complex. Major labels have filed lawsuits against AI music companies for training on copyrighted material, while artists like Grimes have embraced AI by open-sourcing their voice for anyone to use. The result is a patchwork of approaches that varies by artist, label, and jurisdiction.

What's becoming clear is that AI won't replace human musicians — but it will fundamentally change what it means to be one. The artists who thrive will be those who use AI as a creative collaborator rather than viewing it as a competitor.`,
    category: "music",
    author: "Cozmic Editorial",
    publishedAt: "2026-02-09",
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    featured: false,
    tags: ["AI Music", "Production", "Industry"],
    views: 15234,
    trending: true,
  },
  {
    id: "10",
    slug: "vinyl-revival-gen-z-collectors",
    title: "The Vinyl Revival: Why Gen Z Is Driving a Record-Breaking Boom",
    excerpt: "Vinyl sales have surpassed CDs for the fifth consecutive year, and the youngest collectors are leading the charge with a fresh perspective on physical media.",
    aiSummary: "Gen Z is fueling vinyl's fifth consecutive year outselling CDs, driven by a desire for tangible cultural artifacts in an increasingly digital world.",
    content: `In an age of infinite streaming libraries and AI-generated playlists, something unexpected is happening: vinyl records are having their biggest moment in decades. For the fifth consecutive year, vinyl sales have outpaced CD sales, and the growth shows no signs of slowing.

What's particularly striking is who's buying. While nostalgia drives some purchases among older demographics, it's Gen Z collectors — many of whom grew up without ever owning a physical music format — who are fueling the boom. For them, vinyl isn't about nostalgia; it's about intentionality, aesthetics, and the desire to own a tangible piece of culture.

The vinyl experience offers something that streaming can't: ritual. The act of selecting a record, placing the needle, and listening to an album front-to-back represents a deliberate choice to slow down and engage with music as an art form rather than background noise.

Record stores have adapted to this new audience, becoming community spaces that host listening parties, artist signings, and curated discovery sessions. The most successful shops blend the physical and digital, offering QR codes that link to artist interviews, behind-the-scenes content, and exclusive digital extras.`,
    category: "music",
    author: "Cozmic Editorial",
    publishedAt: "2026-02-07",
    readTime: 5,
    imageUrl: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=800&q=80",
    featured: false,
    tags: ["Vinyl", "Gen Z", "Music Industry"],
    views: 6789,
    trending: false,
  },
  {
    id: "11",
    slug: "live-music-metaverse-concerts-2026",
    title: "Beyond the Stage: How Virtual Concerts Are Evolving Past the Hype",
    excerpt: "After the initial metaverse concert craze fizzled, a new wave of hybrid live experiences is finding real audiences and real revenue.",
    aiSummary: "Virtual concerts have matured beyond gimmicky metaverse events into hybrid experiences blending spatial audio, AR, and intimate digital venues.",
    content: `Remember when every major artist was supposed to perform in the metaverse? The initial wave of virtual concerts — from Travis Scott's Fortnite event to Ariana Grande's Rift Tour — generated massive hype but failed to establish a sustainable model. Most felt more like tech demos than genuine musical experiences.

In 2026, the virtual concert space has matured significantly. The key insight that drove this evolution was simple: people don't want to watch a concert through a clunky VR headset. They want enhanced experiences that complement, rather than replace, live music.

The most successful virtual concert platforms now focus on spatial audio, allowing remote audiences to experience music in three-dimensional soundscapes that rival (and in some ways surpass) physical venues. AR overlays let in-person concertgoers see visual effects that exist only through their phones. And intimate digital "side stages" give artists a way to connect with smaller groups of fans before and after shows.

The economics are compelling too. Artists can now monetize a single performance across physical and digital audiences simultaneously, with virtual ticket holders paying for different tiers of access and interaction.`,
    category: "music",
    author: "Cozmic Editorial",
    publishedAt: "2026-02-05",
    readTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    featured: false,
    tags: ["Virtual Concerts", "Live Music", "AR"],
    views: 5421,
    trending: false,
  },
];

// ===== Centralized Image Constants (Single Source of Truth) =====
export const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/dI8iZj9h9uoUmzDnBjB9oa/sandbox/EEtcKAjigl8JMKE348s0vR-img-1_1770641637000_na1fn_Y296bWljLWhlcm8tbmVidWxh.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEk4aVpqOWg5dW9VbXpEbkJqQjlvYS9zYW5kYm94L0VFdGNLQWppZ2w4Sk1LRTM0OHMwdlItaW1nLTFfMTc3MDY0MTYzNzAwMF9uYTFmbl9ZMjk2YldsakxXaGxjbTh0Ym1WaWRXeGguanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FoeZlNRcBPtKacb~xPYyN6NcLUQWTZHh-nRe5OkQ1BiO4moB9ccWrD6jhZ9Xb1unngkw-H9zxPx25LpCfIwH6ZfUsN0eqBp33iwoXiyoMboUQu3ws7bvxIuvHTJHPIm91Ixg8rrxUpFoEVxyqZY7SIf4tQ5hCY~lYiU9Nr5edOOnIOGxi0edLvAufxECuln~1BQiJtzEuBACdEy2mDvlhLVFLLCtSZ8vi3u7y1fiW--~Tkir-YQ-S9PbTf8z8MfvuqSVnuk8g2TsbdtX9s6IvJlnYCHN~GjZTghKTj~SbYcADStjhskFV~2C-H8RfkbcFzS8nDwvK6R1e-C4~Mi5mw__";

export const VERTICAL_IMAGES: Record<Category, string> = {
  tech: "https://private-us-east-1.manuscdn.com/sessionFile/dI8iZj9h9uoUmzDnBjB9oa/sandbox/EEtcKAjigl8JMKE348s0vR-img-2_1770641648000_na1fn_Y296bWljLXRlY2gtdmVydGljYWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEk4aVpqOWg5dW9VbXpEbkJqQjlvYS9zYW5kYm94L0VFdGNLQWppZ2w4Sk1LRTM0OHMwdlItaW1nLTJfMTc3MDY0MTY0ODAwMF9uYTFmbl9ZMjk2YldsakxYUmxZMmd0ZG1WeWRHbGpZV3cuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jNDlX-clZMYbW7qWwRjHHW7x6~M6q0v~iIgN0aLhMvGQlDzcsoPZXcaScwAqS522dGZgxJ-ZQdEzIMYN6iOgy31gI~bi5lvFXssM9Qx9-~DldXVC8OoW2PMqrzqbe34i3KD1dHNlKxSTDVNg1P-AsSMc87z~1WzWr3Qmgo2zfIvarWOyGYSrMedZpGcJ3itoPL9pcsM2~CYyqA4aufs3waFQtV9pnVFvrLV46afJ-f7QOyUKezsNgl66kbkng--nffBEoj~sZuNx4SZ2zmTS81ydCUp1OMw8aHvD8y4d22w4AyNyE9~TRO8Rq6P0EFPEjdbxRUVmhZ6Cj9iIiTNVqg__",
  gaming: "https://private-us-east-1.manuscdn.com/sessionFile/dI8iZj9h9uoUmzDnBjB9oa/sandbox/EEtcKAjigl8JMKE348s0vR-img-3_1770641645000_na1fn_Y296bWljLWdhbWluZy12ZXJ0aWNhbA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEk4aVpqOWg5dW9VbXpEbkJqQjlvYS9zYW5kYm94L0VFdGNLQWppZ2w4Sk1LRTM0OHMwdlItaW1nLTNfMTc3MDY0MTY0NTAwMF9uYTFmbl9ZMjk2YldsakxXZGhiV2x1WnkxMlpYSjBhV05oYkEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KAU94~pN3FdM4rwsjDWTW9T3vdCWzXX9VdFcpMRS9W4tp5W6TBKgNRAeXKp46iFF2kdGIXaHpNN8XapzVeHQ9emkw6jBFNA16gzUnIc-qEQjcksS~LhLpIfcaksjJ4zGAmdq9JZiQly-MOwkfE8kWLVgYijWy9H31cDjei~BSLOdcSFV3Q0ffm-gvIHbPl94nnbfmXKjp2o0xZZG-flUPz4PFxsQKYnrjDXDt2W-iTyu5G2ATtRWhHko29hvUNnaa08q5Piw0vmTOWSEknGQPiaviPO6FAcePI6-bAobcnLxQscxo558JZ6IqBZnj6XyrfmZFD-pVwY0JY7OTrFxIA__",
  culture: "https://private-us-east-1.manuscdn.com/sessionFile/dI8iZj9h9uoUmzDnBjB9oa/sandbox/EEtcKAjigl8JMKE348s0vR-img-4_1770641637000_na1fn_Y296bWljLWN1bHR1cmUtdmVydGljYWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEk4aVpqOWg5dW9VbXpEbkJqQjlvYS9zYW5kYm94L0VFdGNLQWppZ2w4Sk1LRTM0OHMwdlItaW1nLTRfMTc3MDY0MTYzNzAwMF9uYTFmbl9ZMjk2YldsakxXTjFiSFIxY21VdGRtVnlkR2xqWVd3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MMewbvsUtGHtgBBhUbwiClZZ1PbLp~nmh~GOOI3UB5W55FGc2r9YJ174TKiCE9iHuAYct-3QozrBgh1v8K5ndRp0ZPdJ26wrSWf4E7~oDeByJDZMSEhlTHMtXJCU0n6clYgh763o8hF8GjgY-~ziwTbP~gg7TNFyQYOoPj5J~qGgKApFISctnTY4qRTcaSFfRCHqxANjRb~cDPcNuXhDXkv9TX2cRXMMQEHi~3ZA0skEIYQokOVs0paj9MBTYhV73Au4QsRApExt3Zdl7j2~6gtTw2c4o0JmBcjl~A8RJ5hYs~3ZBbxxu~J9iyJ2B3mZE9~xoGG~Q5I-eXYmYgbHoQ__",
  lifestyle: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  music: "https://private-us-east-1.manuscdn.com/sessionFile/dI8iZj9h9uoUmzDnBjB9oa/sandbox/hQXJaYtxJEhIIuOdkuDB8N-img-1_1770644232000_na1fn_Y296bWljLW11c2ljLXZlcnRpY2Fs.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEk4aVpqOWg5dW9VbXpEbkJqQjlvYS9zYW5kYm94L2hRWEphWXR4SkVoSUl1T2RrdURCOE4taW1nLTFfMTc3MDY0NDIzMjAwMF9uYTFmbl9ZMjk2YldsakxXMTFjMmxqTFhabGNuUnBZMkZzLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CEYKKkpuzBjkTW81~J-mdNcVNvET1by7Wza56gXpG00jguzPVGBmHGgwiHQB4O1fHEE1p3gQ4-vtw9VhHjCJi5dRM4YdzRS6LXE-Bgl6p8JO7BQewBjcwyOpqTCDKc1jMOJ0JuzYUwaaEazWkH72VO1RJ~ZsTqkfeC8MSsMJ8SpY9CMK4vZDvAS4ZcyIsEiGyOkI6MXuSfSs8jOcrrfy3SKnjLBAcYJrJxcC5-dfy9s5RYdQAgyEzLz8Zz7aq92jGu0qngme8UbROIhW6J9d~oec~Naxet~8kglZ7lfjtjvFW09KeeRURA0HgP9k6wDKOk1KR3C358A8-OL-1-RnbQ__",
  science: "https://private-us-east-1.manuscdn.com/sessionFile/dI8iZj9h9uoUmzDnBjB9oa/sandbox/q7AWVNKK9W7BAfnXKkVtWF-img-1_1771388259000_na1fn_Y296bWljLXNjaWVuY2Utc3luYXBzZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEk4aVpqOWg5dW9VbXpEbkJqQjlvYS9zYW5kYm94L3E3QVdWTktLOVc3QkFmblhLa1Z0V0YtaW1nLTFfMTc3MTM4ODI1OTAwMF9uYTFmbl9ZMjk2YldsakxYTmphV1Z1WTJVdGMzbHVZWEJ6WlEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=V8r0CLlDBFhbsmylxDPE5Om-P-~BwxN1fDkDuygAHhVKthYR9iOz9XFXruBXXcXcQ54zQclXAL3beE1rwkP9rkjqE5hl-QsZTCkMXjtOLB~px5CRfPvqXoqa9SBAgsqgobVKehcV~cWzwncGTYE9fjMuGg~swA~TTtVHW9MCuFaDNdhXZT4WaommORT6BqncGQKWgKnfDyiBssTOuk6ErmOfd2BHRaM~r5IN9l7TdDZZuOLCy7qqDd8PqFqKI2S0LVnwDLR3JnQpd8FSIrg5aBCsS8QmVgLfvYIU1REeHGUoZF0mIBMR6UgzjJtvghGabKRDGNrivUlVIEBtxG7hbw__",
};

export const ALL_CATEGORIES: Category[] = ["tech", "gaming", "culture", "lifestyle", "music", "science"];

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

export function getTrendingArticles(count: number = 5): Article[] {
  return [...articles]
    .sort((a, b) => b.views - a.views)
    .slice(0, count);
}
