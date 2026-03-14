// ============================================================
// COZMIC — Data Layer (Single Source of Truth)
// All articles, categories, images, and helper functions
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
  editorsPick?: boolean;
  sourceUrl?: string;
  sourceName?: string;
}

export const categoryMeta: Record<Category, { label: string; color: string; description: string; badgeClass: string }> = {
  tech: { label: "Tech", color: "oklch(0.85 0.18 192)", description: "AI, code, platforms, and the tools shaping tomorrow.", badgeClass: "badge-tech" },
  gaming: { label: "Gaming", color: "oklch(0.75 0.2 145)", description: "Reviews, industry shifts, and the culture of play.", badgeClass: "badge-gaming" },
  culture: { label: "Culture", color: "oklch(0.78 0.22 310)", description: "Trends, identity, and the conversations that define us.", badgeClass: "badge-culture" },
  lifestyle: { label: "Lifestyle", color: "oklch(0.82 0.15 80)", description: "Wellness, productivity, and living with intention.", badgeClass: "badge-lifestyle" },
  music: { label: "Music", color: "oklch(0.75 0.2 0)", description: "Sound, artists, and the rhythms driving culture.", badgeClass: "badge-music" },
  science: { label: "Science", color: "oklch(0.8 0.15 250)", description: "Breakthroughs, discoveries, and the frontiers of knowledge.", badgeClass: "badge-science" },
};

// ===== ARTICLES =====
export const articles: Article[] = [
  // === ARTICLE 1: SCIENCE — Brain Clock ===
  {
    id: "101",
    slug: "your-brain-has-a-secret-clock-that-decides-when-you-learn",
    title: "Your Brain Has a Secret Clock — And It Decides When You Actually Learn",
    excerpt: "A Tohoku University study reveals that your brain's capacity for learning fluctuates throughout the day, governed by adenosine and circadian rhythms. Everything you know about 'morning productivity' might be wrong.",
    aiSummary: "Your brain is most adaptable when you're tired — circadian rhythms and adenosine levels create hidden windows of peak neuroplasticity that defy productivity culture.",
    content: `There is a quiet revolution happening in neuroscience, and it has the potential to upend everything we think we know about when and how we learn best. A new study from Tohoku University, published in Neuroscience Research, has revealed that the brain's capacity for learning and adaptation is not constant — it fluctuates dramatically throughout the day, governed by our internal circadian clock and a molecule called adenosine.

For a generation raised on "5 AM Club" productivity culture and the gospel of morning routines, the findings are counterintuitive, even uncomfortable. The research suggests that the brain's potential for metaplasticity — its ability to adjust how easily neural networks change — peaks not during alert, caffeinated mornings, but during periods of high sleep pressure, when fatigue is at its maximum.

## The Experiment

Researchers used optogenetics to stimulate neurons in the visual cortex of nocturnal rats and measured how the brain responded at different times of day. The results were striking: identical stimuli produced fundamentally different neural responses at sunrise versus sunset. Neural activity was suppressed at sunrise (when the rats were preparing to sleep) and enhanced at sunset (as they became active).

> "Neural excitability is not constant; it depends on the brain's internal state," explains Professor Ko Matsui of Tohoku University. "Our results show that even identical neurons can respond differently depending on the time of day, governed by molecules like adenosine that link metabolism, sleep, and neuronal signaling."

## The Adenosine Connection

Adenosine — the same molecule that caffeine blocks to keep you awake — accumulates during wakefulness and promotes sleep. But the Tohoku team discovered it does something else: it modulates the brain's plasticity window. By blocking adenosine, researchers were able to increase neural activity at sunrise, demonstrating its direct role in dampening and enhancing brain responses.

This means that the drowsy, unfocused state you experience before bed might actually be when your brain is most primed for deep learning and neural reorganization.

## What This Means for You

For humans, who are diurnal (active during the day), the optimal window for neuroplasticity may occur in the evening, before bedtime. This has profound implications:

**For students:** Late-night study sessions might not be the desperate last resort we've been told they are. The brain may actually be more receptive to encoding new information during these periods.

**For therapy and rehabilitation:** Brain-stimulation therapies and cognitive rehabilitation could be significantly more effective if timed to align with the brain's natural plasticity windows.

**For productivity culture:** The entire framework of "peak morning performance" may need to be reconsidered. The brain's capacity for change and adaptation follows its own schedule, not your alarm clock.

> "These results imply that our brains have temporal windows that favor adaptability," explains lead investigator Yuki Donen. "Knowing when the brain is most receptive to changing could help optimize training, rehabilitation, and stimulation-based therapies."

## The Bigger Picture

This research adds to a growing body of evidence that our cognitive abilities are far more dynamic than we assumed. The brain is not a machine that performs consistently when given the right inputs — it is a living organ with rhythms, cycles, and preferences that we are only beginning to understand.

The takeaway is not that you should abandon morning routines. It is that the relationship between time, fatigue, and learning is far more nuanced than any productivity influencer has told you. Your brain has its own clock. Perhaps it is time we started listening to it.

*Source: Tohoku University, published in Neuroscience Research, November 2025.*`,
    category: "science",
    author: "Cozmic Editorial",
    publishedAt: "2026-03-14",
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80",
    featured: true,
    tags: ["Neuroscience", "Circadian Rhythm", "Learning", "Productivity"],
    views: 18742,
    trending: true,
    editorsPick: true,
    sourceUrl: "https://neurosciencenews.com/synaptic-plasticity-learning-circadian-29929/",
    sourceName: "Neuroscience News",
  },

  // === ARTICLE 2: TECH — Prozac Rewires Brain ===
  {
    id: "102",
    slug: "prozac-doesnt-just-fix-your-mood-it-rewires-your-brain",
    title: "Prozac Doesn't Just Fix Your Mood — It Literally Rewires Your Brain",
    excerpt: "A University of Eastern Finland study reveals that fluoxetine works by loosening rigid neural circuits, not just boosting serotonin. The 'chemical imbalance' theory of depression may be fundamentally incomplete.",
    aiSummary: "Prozac works by dismantling rigid neural circuits and boosting brain plasticity — not just by increasing serotonin, challenging decades of psychiatric orthodoxy.",
    content: `For decades, the story of antidepressants has been simple: depression is caused by a chemical imbalance in the brain, and drugs like Prozac fix it by boosting serotonin levels. It is a clean narrative, easy to understand, and it has shaped how millions of people think about mental health. There is just one problem — it may be fundamentally incomplete.

A new study from the University of Eastern Finland, published in Neuropharmacology, has revealed that fluoxetine (the generic name for Prozac) does something far more profound than simply adjusting neurotransmitter levels. It literally rewires the brain by loosening rigid neural circuits and creating space for new connections to form.

## Beyond the Chemical Imbalance

The research focused on parvalbumin interneurons — a specific type of brain cell in the prefrontal cortex that acts as a kind of neural traffic controller. These cells are surrounded by protective structures called perineuronal nets, which stabilize neural circuits but also restrict their flexibility.

After two weeks of fluoxetine treatment, the researchers observed something remarkable: the perineuronal nets around these neurons had weakened significantly. At the same time, the expression of mitochondrial energy genes decreased while plasticity-related genes increased. In plain language, the drug was shifting the brain from a rigid, energy-intensive state to a more flexible, adaptable one.

> "The findings point to a new understanding of how antidepressants may help people recover: not only by lifting mood, but by giving the brain room to rewire its circuits by altering its energy systems," says Senior Researcher Juzoh Umemori.

## Why This Matters

This discovery has implications that extend far beyond pharmacology. If depression is not simply a chemical imbalance but a state of neural rigidity — where the brain becomes locked into maladaptive patterns — then treatment is not just about adding more serotonin. It is about creating the conditions for the brain to reorganize itself.

This reframing could explain several longstanding puzzles in psychiatry:

**Why SSRIs take weeks to work:** If the primary mechanism is structural reorganization rather than chemical adjustment, the delay makes sense. Rewiring neural circuits takes time.

**Why therapy and medication work better together:** Therapy provides the new patterns and perspectives, while the medication creates the neural flexibility needed to adopt them.

**Why some people respond and others do not:** Individual differences in neural rigidity and perineuronal net density could determine who benefits most from SSRIs.

## The Controversy

This research challenges a narrative that has been central to psychiatric practice for over 30 years. The chemical imbalance theory, while useful as a simplification, has been criticized by researchers for years. But it persists in public consciousness because it is easy to understand and reduces stigma.

The new findings do not invalidate serotonin's role entirely — they suggest it is part of a more complex picture. Fluoxetine does increase serotonin availability, but the therapeutic benefit may come primarily from the downstream effects on neural plasticity.

For the millions of people taking SSRIs, this is both reassuring and thought-provoking. The medication is not just patching a chemical leak — it is actively helping the brain become more adaptable and resilient.

*Source: University of Eastern Finland, published in Neuropharmacology, September 2025.*`,
    category: "tech",
    author: "Cozmic Editorial",
    publishedAt: "2026-03-13",
    readTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    featured: true,
    tags: ["Neuroscience", "Mental Health", "Antidepressants", "Brain Plasticity"],
    views: 24531,
    trending: true,
    sourceUrl: "https://neurosciencenews.com/prozac-neuroplasticity-29739/",
    sourceName: "Neuroscience News",
  },

  // === ARTICLE 3: LIFESTYLE — Screen Time ===
  {
    id: "103",
    slug: "screen-time-before-age-2-is-reshaping-your-generations-brain",
    title: "Screen Time Before Age 2 Is Silently Reshaping Your Generation's Brain",
    excerpt: "A decade-long study links infant screen exposure to accelerated brain maturation, slower decision-making, and teen anxiety. Gen Z was the first generation raised on screens — and the data is finally in.",
    aiSummary: "A 13-year study reveals that screen time before age 2 accelerates brain maturation but reduces cognitive flexibility, creating a 'sleeper effect' that manifests as anxiety in adolescence.",
    content: `If you are reading this on your phone, you are part of a generation that has never known a world without screens. Gen Z grew up swiping before they could speak, and for years, the long-term consequences of that unprecedented experiment in human development remained unknown. Now, a landmark study has delivered some of the first definitive answers — and they are sobering.

Research published in eBioMedicine, following children for over a decade, has established a direct neurological pathway from infant screen exposure to adolescent anxiety. The findings reveal that high screen time before the age of two accelerates brain maturation in ways that initially appear beneficial but ultimately reduce cognitive flexibility and increase vulnerability to mental health challenges.

## The Sleeper Effect

The most unsettling aspect of the findings is what researchers call the "sleeper effect." The consequences of early screen exposure do not appear immediately. Infants who spent more time in front of screens showed no obvious developmental delays in their early years. But brain scans conducted at ages 4.5, 6, and 7.5 told a different story.

> "Accelerated maturation happens when certain brain networks develop too fast, often in response to adversity or other stimuli," explains Dr. Huang Pei, the study's first author. "In children with high screen exposure, the networks controlling vision and cognition specialised faster, before they had developed the efficient connections needed for complex thinking."

By age 8.5, these children demonstrated measurably slower decision-making in cognitive tasks. By age 13, those with slower decision-making were significantly more likely to report higher levels of anxiety.

## Why Infancy Matters

The study found that screen time at ages three and four did not produce the same effects. This is not a blanket indictment of screens — it is a precise finding about a specific developmental window. The first two years of life represent a period of extraordinary neural plasticity, when the brain is building its foundational architecture. During this window, the type of stimulation a child receives shapes the trajectory of their cognitive development.

Screens provide intense, rapid visual stimulation that the developing brain interprets as a signal to mature faster. But this premature specialization comes at a cost: the neural networks that develop too quickly lack the rich, interconnected pathways that come from slower, more organic development driven by physical exploration, social interaction, and unstructured play.

## The Generational Question

For Gen Z and the generation that follows, these findings raise uncomfortable questions. You were the first cohort raised with ubiquitous screen access from birth. The iPads in cribs, the YouTube videos during meals, the smartphones used as pacifiers — these were not malicious choices. They were the natural result of a society that adopted transformative technology faster than science could study its effects.

The data suggests that some of the anxiety, attention difficulties, and cognitive challenges that characterize your generation may have roots in those earliest years of screen exposure. This is not about blame — it is about understanding.

## The Countermeasure

There is a hopeful finding buried in the research. A related study by the same team found that parent-child reading at age three can partially mitigate the negative brain changes associated with infant screen time. The interactive, engaging nature of shared reading appears to provide the kind of rich developmental stimulation that screens cannot.

> "This research gives us a biological explanation for why limiting screen time in the first two years is crucial. But it also highlights the importance of parental engagement," says Asst Prof Tan Ai Peng, the study's senior author.

The message is not that screens are inherently evil. It is that timing matters, and the developing brain has needs that no app can fulfill.

*Source: Published in eBioMedicine, December 2025. Research by Huang Pei et al.*`,
    category: "lifestyle",
    author: "Cozmic Editorial",
    publishedAt: "2026-03-12",
    readTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80",
    featured: false,
    tags: ["Screen Time", "Brain Development", "Gen Z", "Mental Health"],
    views: 31205,
    trending: true,
    sourceUrl: "https://neurosciencenews.com/anxiety-neurodevelopment-screen-time-30079/",
    sourceName: "Neuroscience News",
  },

  // === ARTICLE 4: MUSIC — Jazz Brain Rewiring ===
  {
    id: "104",
    slug: "jazz-musicians-are-literally-rewiring-their-brains-in-real-time",
    title: "Jazz Musicians Are Literally Rewiring Their Brains in Real Time",
    excerpt: "A study on jazz pianists reveals that musical improvisation dynamically reconfigures brain networks. Creativity is not a trait — it is a process of continuous neural reorganization.",
    aiSummary: "Jazz improvisation dynamically reconfigures brain networks in real time — freer creativity activates pleasure and motor circuits while structured playing engages executive control.",
    content: `There is a moment in every jazz performance when the musician steps off the edge of the known and into pure creation. No sheet music, no predetermined path — just the brain, the instrument, and the infinite space between notes. Scientists have long wondered what happens inside the brain during these moments of spontaneous creativity. Now, a groundbreaking study has provided an answer that is as beautiful as the music itself.

Research published in the Annals of the New York Academy of Sciences has revealed that musical improvisation does not simply activate the brain — it dynamically reconfigures entire neural networks in real time. The brain literally rewires itself as the musician plays, shifting between different configurations depending on the level of creative freedom.

## The Study

Researchers observed the brain activity of 16 skilled jazz pianists using functional magnetic resonance imaging (fMRI) as they performed three tasks: playing a familiar melody, improvising on that melody, and freely improvising over chord changes.

The results revealed a fascinating pattern. When pianists engaged in structured improvisation — staying close to the original melody — their brains showed increased activity in executive and evaluative networks, the regions responsible for planning, monitoring, and self-correction. But when they moved into free improvisation, something different happened entirely.

> "Increasing improvisational freedom corresponds to a shift in brain network engagement, from greater involvement of executive and evaluative networks in constrained improvisation to intensified activity in auditory-motor and salience networks during freer forms of creative expression," explains the project coordinator.

## The Neural Dance of Creativity

In free improvisation, the brain's auditory-motor networks — responsible for hearing and physical movement — became intensely active, along with the salience network, which is associated with emotional significance and pleasure. Meanwhile, the executive networks that govern self-monitoring and judgment quieted down.

This is the neural signature of creative flow: the brain simultaneously amplifies its connection to sound and movement while reducing the inner critic. It is not that the brain turns off during creativity — it reorganizes, prioritizing sensation and intuition over analysis and control.

> "These results expand existing models of improvisation by emphasising the dynamic reconfiguration of specific and general networks, also highlighting the importance of interaction between networks over time rather than isolated static activation," notes researcher Henrique Fernandes.

## Creativity as Neural Exercise

The implications extend far beyond music. If improvisation can dynamically reconfigure brain networks, then creative expression may be one of the most powerful forms of neural exercise available. Unlike repetitive cognitive tasks that strengthen existing pathways, improvisation forces the brain to build new connections in real time.

This could explain why musicians consistently show enhanced cognitive flexibility, better working memory, and greater resistance to age-related cognitive decline. Playing music — especially improvising — is not just a hobby. It is a workout for the brain's capacity to adapt and reorganize.

## What This Means for Everyone

You do not need to be a jazz pianist to benefit from these findings. Any form of creative improvisation — whether it is freestyle rapping, improvisational comedy, spontaneous drawing, or even cooking without a recipe — likely engages similar neural mechanisms.

The key ingredient is creative freedom: the willingness to step beyond the known and into the uncertain. That is where the brain does its most remarkable work.

*Source: Published in Annals of the New York Academy of Sciences, December 2025.*`,
    category: "music",
    author: "Cozmic Editorial",
    publishedAt: "2026-03-11",
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
    featured: false,
    tags: ["Jazz", "Neuroplasticity", "Creativity", "Brain Science"],
    views: 14892,
    trending: true,
    editorsPick: true,
    sourceUrl: "https://neurosciencenews.com/music-improvisation-neuroplasticity-30061/",
    sourceName: "Neuroscience News",
  },

  // === ARTICLE 5: CULTURE — Gen Z Going Analog ===
  {
    id: "105",
    slug: "gen-z-is-going-analog-but-doing-it-wrong",
    title: "Gen Z Is Going Analog — But They're Doing It Wrong",
    excerpt: "The generation that grew up online is desperately trying to log off. But posting about being offline on Instagram defeats the purpose. A look at the irony, the science, and the real path forward.",
    aiSummary: "Gen Z's analog revival is real but paradoxical — the generation posting about digital detoxes on Instagram reveals a deeper crisis of identity in the attention economy.",
    content: `There is a peculiar irony unfolding across social media right now. Scroll through Instagram or TikTok and you will find a generation of digital natives enthusiastically documenting their rejection of digital life. Film cameras. Journaling. Vinyl records. Flip phones. The aesthetic of disconnection, curated and shared on the very platforms they claim to be escaping.

Gen Z's analog revival is real, and it is driven by genuine distress. But the way it is being practiced reveals something deeper about the generation's relationship with technology — and the difficulty of escaping systems that are designed, at a fundamental level, to be inescapable.

## The Paradox

The numbers tell a compelling story. Vinyl sales have outpaced CDs for five consecutive years, with Gen Z collectors driving the boom. Film camera sales have surged. Journaling and analog planners are a billion-dollar market. Dumb phone sales are up 30 percent year over year.

But here is the contradiction: the analog trend is primarily discovered, discussed, and displayed on digital platforms. The teenager who buys a film camera posts the developed photos on Instagram. The young professional who switches to a flip phone documents the experience in a TikTok series. The act of going offline has become content.

This is not hypocrisy — it is the logical consequence of growing up in an attention economy. When your social identity is constructed and maintained through digital platforms, even the rejection of those platforms must be performed within them to be socially legible.

## The Science Behind the Urge

The desire to disconnect is not just aesthetic — it is neurological. Research published in eBioMedicine has shown that early screen exposure can accelerate brain maturation in ways that reduce cognitive flexibility and increase anxiety. Gen Z, the first generation raised with ubiquitous screen access from infancy, is experiencing the downstream effects of that unprecedented experiment.

Meanwhile, a BBC-commissioned trial on Instagram addiction found that participants who reduced their social media use reported significant improvements in mood, sleep quality, and self-esteem within two weeks. The benefits were measurable and consistent.

The brain, it turns out, was not designed for the constant stimulation that digital platforms provide. The desire to go analog is not nostalgia — it is the nervous system asking for relief.

## Doing It Right

The problem with the current analog trend is that it treats disconnection as an aesthetic rather than a practice. Buying a film camera is not the same as reducing screen time. Owning a vinyl collection does not address the compulsive checking of notifications.

Genuine digital minimalism — the kind that produces measurable cognitive and emotional benefits — requires structural changes, not symbolic ones:

**Time-based boundaries:** Setting specific hours for phone-free activity, not just occasionally leaving the phone in another room.

**Notification architecture:** Disabling all non-essential notifications so the phone serves you rather than interrupting you.

**Intentional consumption:** Choosing what to read, watch, and listen to before opening any app, rather than letting algorithms decide.

**Social accountability:** Building offline relationships and communities that do not require digital documentation to feel real.

## The Deeper Question

The analog revival points to something more fundamental than a preference for vintage aesthetics. It reflects a generation grappling with a question that no previous generation has had to answer: Who am I when I am not performing for an audience?

For Gen Z, the boundary between authentic experience and content creation has been blurred since childhood. The analog trend, at its best, is an attempt to redraw that boundary — to reclaim experiences that exist for their own sake, not for their shareability.

The irony of posting about it online does not invalidate the impulse. It just reveals how difficult the work of genuine disconnection actually is.

*Sources: eBioMedicine (2025), BBC Instagram Addiction Trial, Pew Research Center.*`,
    category: "culture",
    author: "Cozmic Editorial",
    publishedAt: "2026-03-10",
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
    featured: false,
    tags: ["Gen Z", "Digital Minimalism", "Social Media", "Culture"],
    views: 22103,
    trending: true,
    sourceUrl: "https://neurosciencenews.com/anxiety-neurodevelopment-screen-time-30079/",
    sourceName: "Multiple Sources",
  },

  // === ARTICLE 6: GAMING — Executives Aren't Gamers ===
  {
    id: "106",
    slug: "gaming-executives-arent-gamers-anymore-and-its-killing-the-industry",
    title: "Gaming Executives Aren't Gamers Anymore — And It's Killing the Industry",
    excerpt: "From Xbox's leadership shakeup to the decline of live-service games, the gaming industry is being run by people who do not play games. The consequences are becoming impossible to ignore.",
    aiSummary: "The gaming industry's creative crisis stems from a leadership class that prioritizes engagement metrics over gameplay — and players are voting with their wallets.",
    content: `Something is broken in the gaming industry, and it is not the technology. The hardware has never been more powerful. The tools have never been more accessible. The audience has never been larger. And yet, the games being produced by major studios are increasingly formulaic, bloated, and disconnected from what players actually want.

The problem is not creative — it is structural. The people making the decisions at the top of the gaming industry are, increasingly, not gamers. They are business executives who view games as engagement platforms, content delivery systems, and recurring revenue generators. And the results speak for themselves.

## The Leadership Disconnect

The gaming industry has undergone a generational shift in leadership over the past five years. The founders and early executives who built the industry — people who grew up making and playing games — have been replaced by MBA-holding executives recruited from tech, media, and finance.

This is not inherently problematic. Every maturing industry professionalizes its management. But gaming is different from most industries in a crucial way: the product is an experience, and understanding that experience requires actually having it.

When a streaming executive does not watch TV, the content still gets made by showrunners who do. But in gaming, executive decisions directly shape the product — from monetization models to development timelines to creative direction. When those decisions are made by people whose primary reference point is a spreadsheet rather than a controller, the results are predictable.

## The Live-Service Graveyard

The most visible symptom of this disconnect is the live-service graveyard. Over the past three years, major publishers have launched and shuttered dozens of live-service games, each one built on the assumption that players want an endless engagement loop rather than a complete, satisfying experience.

The data tells a different story. The best-selling games of the past year have been predominantly single-player or co-op experiences with clear beginnings, middles, and ends. Players are not rejecting online games — they are rejecting games that treat their time as a resource to be extracted rather than an experience to be valued.

## The Indie Counter-Revolution

While AAA studios chase engagement metrics, indie developers are producing some of the most innovative and critically acclaimed games in the medium's history. Small teams with limited budgets but deep understanding of what makes games compelling are consistently outperforming hundred-million-dollar productions.

The reason is simple: indie developers are gamers. They make the games they want to play, and it turns out that authenticity resonates with audiences far more than market research.

Indie titles now regularly appear in the top 10 best-selling games on Steam, and several have crossed the million-unit sales mark within weeks of launch. The democratization of game development tools, combined with platforms like itch.io, has created an environment where passion and creativity can compete with corporate budgets.

## The Path Forward

The gaming industry is not dying — it is being reborn. The current period of corporate excess and creative stagnation is a natural consequence of rapid growth and professionalization. But the correction is already underway.

Players are increasingly sophisticated consumers who can distinguish between a game made with passion and one designed by committee. The studios that will thrive in the next decade are those that put gamers — real gamers — back in positions of creative authority.

The technology is ready. The audience is ready. The industry just needs leaders who remember why they fell in love with games in the first place.

*Sources: Industry analysis, Steam sales data, The Ringer.*`,
    category: "gaming",
    author: "Cozmic Editorial",
    publishedAt: "2026-03-09",
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    featured: false,
    tags: ["Gaming Industry", "Leadership", "Indie Games", "Live Service"],
    views: 19847,
    trending: true,
    sourceUrl: "https://www.theringer.com",
    sourceName: "Industry Analysis",
  },

  // === ARTICLE 7: SCIENCE — 10-Minute Walk (Editor's Choice) ===
  {
    id: "107",
    slug: "a-10-minute-walk-can-rewire-your-memory",
    title: "A 10-Minute Walk Can Rewire Your Memory — Here's the Neuroscience",
    excerpt: "You do not need a gym membership to upgrade your brain. A University of Tsukuba study reveals that even light exercise triggers a dopamine and noradrenaline surge in the hippocampus, directly enhancing memory formation.",
    aiSummary: "Light exercise triggers a dopamine and noradrenaline surge in the hippocampus — a 10-minute walk may be the most accessible brain upgrade available.",
    content: `In a world obsessed with optimization — biohacking supplements, nootropic stacks, cold plunge protocols — the most powerful cognitive enhancer might be the simplest one imaginable: a 10-minute walk.

A study published in the FASEB Journal by researchers at the University of Tsukuba has demonstrated that even light physical exercise triggers a significant release of dopamine and noradrenaline in the hippocampus, the brain region most critical for memory formation. The findings suggest that the barrier to meaningful cognitive enhancement through exercise is far lower than anyone expected.

## The Mechanism

The research team used a rat model that mimics human light exercise — the equivalent of a gentle walk or easy yoga session. They found that even a single bout of light activity activated two key brainstem regions: the ventral tegmental area (VTA), which produces dopamine, and the locus coeruleus, which produces noradrenaline.

Both neurotransmitters flooded the hippocampus during and immediately after exercise, creating an optimal neurochemical environment for memory encoding and consolidation.

The correlation was direct and measurable: the more active the brainstem regions became during exercise, the more hippocampal neurons fired. This is not a vague "exercise is good for you" finding — it is a specific, mechanistic explanation for how physical movement enhances cognitive function.

## Why Light Exercise Matters

The most surprising aspect of the study is the intensity threshold. Previous research on exercise and cognition focused primarily on moderate-to-vigorous activity — running, cycling, high-intensity interval training. The assumption was that significant physiological stress was required to produce neurological benefits.

This study demolishes that assumption. Light exercise — the kind that does not make you sweat, does not require special equipment, and does not leave you exhausted — is sufficient to trigger the dopaminergic and noradrenergic pathways that enhance memory.

This has enormous implications for accessibility. Not everyone can run a 5K or sustain a HIIT workout. But almost everyone can take a 10-minute walk. The cognitive benefits of exercise are not locked behind a fitness paywall — they are available to anyone who can move.

## Practical Applications

The findings suggest several immediately actionable strategies:

**Before studying or learning:** A 10-minute walk before a study session, lecture, or meeting could prime the hippocampus for better information encoding.

**During work breaks:** Short walking breaks between focused work sessions may enhance memory consolidation of the material just reviewed.

**For older adults:** Light exercise could be a powerful, accessible intervention for maintaining cognitive function and potentially slowing memory decline.

**For mental health:** The dopamine release associated with light exercise may also contribute to mood improvement, creating a positive feedback loop between physical activity and emotional wellbeing.

## The Bigger Picture

This research is part of a broader revolution in our understanding of the brain-body connection. The old model — which treated the brain as a computer that happens to sit on top of a body — is giving way to a more integrated view in which physical movement is not just beneficial for the brain but essential to its optimal function.

The hippocampus did not evolve to encode memories while sitting at a desk. It evolved in organisms that were constantly moving through their environment, and it still functions best when the body is in motion.

The most sophisticated brain hack available is not a supplement, an app, or a device. It is a walk around the block.

*Source: University of Tsukuba, published in FASEB Journal, 2024.*`,
    category: "science",
    author: "Cozmic Editorial",
    publishedAt: "2026-03-08",
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    featured: true,
    tags: ["Exercise", "Memory", "Dopamine", "Brain Health"],
    views: 28934,
    trending: true,
    editorsPick: true,
    sourceUrl: "https://neurosciencenews.com/light-exercise-memory-dopamine-28966/",
    sourceName: "Neuroscience News / FASEB Journal",
  },

  // === ARTICLE 8: SCIENCE — Original Synapse Article (kept) ===
  {
    id: "108",
    slug: "how-memories-take-shape-at-the-synapse-level",
    title: "How Memories Take Shape at the Synapse Level — Harvard's Breakthrough",
    excerpt: "Harvard researchers have developed EPSILON, a revolutionary technique that maps memory formation at the molecular level. The implications for Alzheimer's treatment could be transformative.",
    aiSummary: "Harvard's EPSILON technique maps memory formation at the synapse level for the first time, revealing how AMPAR proteins create the physical architecture of memory.",
    content: `What if you could watch a memory being built? Not metaphorically — literally observe the molecular machinery that transforms an experience into a lasting neural trace? Harvard researchers have made this possible with a groundbreaking technique called EPSILON, and what they have found could reshape our understanding of memory itself.

The study, published in Nature Neuroscience, introduces EPSILON (Extracellular Protein Surface Labeling in Neurons), a method that tracks the movement of AMPA receptors — proteins that regulate the strength of connections between neurons — during memory formation in living brains.

## The Science of Remembering

Memory formation is not abstract. It is a physical process that involves specific proteins being delivered to specific locations on specific neurons. AMPA receptors (AMPARs) are among the most important players in this process. When a synapse needs to be strengthened — when a memory needs to be encoded — AMPARs are trafficked to the synaptic surface, increasing the connection's sensitivity.

EPSILON allows researchers to label these proteins with specialized dyes and track their movement over time, creating a high-resolution map of synaptic plasticity in action.

> "This technique provides a lens into the synaptic architecture of memory, something previously unattainable in such detail," says Adam Cohen, professor of chemistry and chemical biology at Harvard.

## The Experiment

The team applied EPSILON to mice undergoing contextual fear conditioning — a standard memory paradigm in which animals learn to associate a specific environment with an aversive stimulus. By tracking AMPAR movement before, during, and after the conditioning, they could observe the synaptic changes that correspond to memory formation.

The results revealed a striking correlation between AMPAR exocytosis (the delivery of receptors to the synaptic surface) and the expression of cFos, a gene that marks neurons actively involved in memory encoding. This suggests that AMPAR trafficking is not just correlated with memory — it is a fundamental component of the engram, the physical trace of a memory in the brain.

> "Our most important breakthrough is our method that can map the past history of the synaptic plasticity in the living brain," says Doyeon Kim, a Harvard Griffin GSAS student.

## Implications for Alzheimer's

The potential applications are profound. Alzheimer's disease is characterized by the progressive loss of synaptic connections and the degradation of memory. If EPSILON can map the synaptic architecture of healthy memory formation, it could also reveal exactly how that architecture breaks down in neurodegenerative disease.

This could lead to earlier diagnosis — detecting synaptic dysfunction before clinical symptoms appear — and more targeted treatments that address the specific molecular mechanisms of memory loss rather than the broad neurochemical disruptions that current drugs target.

## The Origin Story

In a detail that underscores the unpredictable nature of scientific progress, the HaloTag technology that makes EPSILON possible was derived from a gene discovered in 1997 by Irish scientists studying a soil bacterium. Nearly three decades later, that fundamental discovery is enabling some of the most sophisticated neuroscience research ever conducted.

The tool has already been distributed to laboratories worldwide, and the Harvard team expects it to accelerate research into synaptic plasticity, learning, and memory across multiple fields.

*Source: Harvard University, published in Nature Neuroscience, May 2025.*`,
    category: "science",
    author: "Cozmic Editorial",
    publishedAt: "2026-03-07",
    readTime: 8,
    imageUrl: "https://private-us-east-1.manuscdn.com/sessionFile/dI8iZj9h9uoUmzDnBjB9oa/sandbox/q7AWVNKK9W7BAfnXKkVtWF-img-1_1771388259000_na1fn_Y296bWljLXNjaWVuY2Utc3luYXBzZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEk4aVpqOWg5dW9VbXpEbkJqQjlvYS9zYW5kYm94L3E3QVdWTktLOVc3QkFmblhLa1Z0V0YtaW1nLTFfMTc3MTM4ODI1OTAwMF9uYTFmbl9ZMjk2YldsakxYTmphV1Z1WTJVdGMzbHVZWEJ6WlEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=V8r0CLlDBFhbsmylxDPE5Om-P-~BwxN1fDkDuygAHhVKthYR9iOz9XFXruBXXcXcQ54zQclXAL3beE1rwkP9rkjqE5hl-QsZTCkMXjtOLB~px5CRfPvqXoqa9SBAgsqgobVKehcV~cWzwncGTYE9fjMuGg~swA~TTtVHW9MCuFaDNdhXZT4WaommORT6BqncGQKWgKnfDyiBssTOuk6ErmOfd2BHRaM~r5IN9l7TdDZZuOLCy7qqDd8PqFqKI2S0LVnwDLR3JnQpd8FSIrg5aBCsS8QmVgLfvYIU1REeHGUoZF0mIBMR6UgzjJtvghGabKRDGNrivUlVIEBtxG7hbw__",
    featured: false,
    tags: ["Memory", "Synapses", "Harvard", "Alzheimer's"],
    views: 16234,
    trending: false,
    sourceUrl: "https://neurosciencenews.com/synapse-memory-learning-28870/",
    sourceName: "Neuroscience News",
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

// ===== Helper Functions =====
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Category): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getLatestArticles(count: number = 8): Article[] {
  return [...articles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, count);
}

export function getTrendingArticles(count: number = 5): Article[] {
  return [...articles]
    .sort((a, b) => b.views - a.views)
    .slice(0, count);
}

export function getEditorsPickArticles(): Article[] {
  return articles.filter((a) => a.editorsPick);
}
