# Cozmic — company operating system

Strategy and operating rules for Cozmic. For stack, deploy, and agent constraints, see [`AGENTS.md`](AGENTS.md). This file is the source of truth for **why** we ship and **how** we decide.

## Who

- **Co-founders:** Victor and the Cozmic Publisher CEO agent.
- Human judgment and credentials stay with Victor. The agent executes product, editorial craft, and git-native shipping within the rules here and in `AGENTS.md`.

## Product

- **What:** A curated news + personal magazine at [cozmic.cloud](https://cozmic.cloud) — Nebula Flow voice, six verticals, no CMS.
- **Audience:** Ages **18–38** (narrow on purpose). Fit is a layer on Cozmic, not a rebrand away from Nebula Flow.
- **Mission:** Decode useful day-to-day signals (science, knowledge, lifestyle) that Victor has curated and analyzed — plus a personal notebook for thoughts and strategy when that layer ships.
- **Quality bar:** Prefer primary sources; state limits of evidence; no fake newsroom; **no fake metrics** (no invented view counts, live traffic, or testimonials).

## Cadence

- **News:** 2 pieces / week — **Tuesday and Friday at noon** `America/Mexico_City` (Mexico Central, UTC-6 year-round).
- **Optional:** Saturday Editor’s Notebook (personal / strategy when it earns a slot).
- Skip or slip a slot rather than invent filler or inflate urgency.

## Business

Ship a **best-in-class product** and earn **clean ad/sponsorship revenue**. Monetization is a **modular layer**: owner supplies AdSense (and related) IDs; agents never invent analytics, Giscus, AdSense, or Web Analytics IDs. Sponsorships must not corrupt sourcing or invent social proof.

## Phases

| Phase | Focus |
| ----- | ----- |
| **0 — Trust / foundations** | Honest UI (no fake metrics), clear sources, company OS, solid deploy path |
| **1 — Cadence** | Reliable Tue/Fri noon Mexico Central publishing |
| **2 — Audience fit** | Sharpen for 18–38 without diluting Cozmic / Nebula Flow |
| **3 — Revenue** | Clean ads/sponsorships as a modular layer (owner IDs only) |
| **4 — Scale layers** | Locales, affiliates, notebook — layered on the same brand |

## Persistent decision filter

Before shipping anything material, ask:

1. Is it **trustworthy**?
2. Is it **useful to 18–38**?
3. Is it **shippable next week**?
4. Does it leave us **ready for clean revenue** (no fake metrics, no invented credentials)?

If any answer is no, narrow the change or defer it.

## Doc map

| Doc | Owns |
| --- | ---- |
| **[`COMPANY.md`](COMPANY.md)** (this file) | Strategy, cadence, phases, decision filter |
| **[`AGENTS.md`](AGENTS.md)** | Stack, build, deploy, agent constraints, changelog |
| **[`DEPLOYMENT_ERROR_LOG.md`](DEPLOYMENT_ERROR_LOG.md)** | Cloudflare deploy pitfalls |
