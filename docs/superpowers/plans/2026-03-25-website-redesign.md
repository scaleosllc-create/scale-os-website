# Website Redesign — Complete Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Scale OS website from 11+6+6 sections across 3 pages down to 7+4+4, removing all non-headshot images, eliminating duplicated content, and creating a typography-driven design that communicates premium through restraint.

**Architecture:** Each page has a clear narrative arc: Hook → Credibility → Process → Convert. No content appears on multiple pages. Visual richness comes from code-built elements (CSS gradients, metric cards, SVG workflow diagrams), not stock/AI photography. Only 3 headshot images remain.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS v3, Framer Motion, @phosphor-icons/react, Space Grotesk + Geist Sans fonts.

**Design System Reference:** See `CLAUDE.md` for all design tokens, component patterns, anti-patterns, and the No-Line Rule.

---

## File Structure

### Files to DELETE (components no longer used)
- `src/components/home/ProblemGrid.tsx` — generic problem cards, removed
- `src/components/home/CreativeShowcase.tsx` — fake ad screenshots, removed
- `src/components/home/Comparison.tsx` — sales-y comparison table, removed
- `src/components/home/Founder.tsx` — self-quote section, removed
- `src/components/home/FAQ.tsx` — moved content inline or removed
- `src/components/services/ServicesHero.tsx` — replaced by simpler hero
- `src/components/services/PillarOne.tsx` — replaced by unified services grid
- `src/components/services/PillarTwo.tsx` — replaced by unified services grid
- `src/components/services/WhyBoth.tsx` — removed (duplicated homepage content)
- `src/components/services/ServicesCaseStudies.tsx` — removed (duplicated homepage results)
- `src/components/services/ServicesCTA.tsx` — replaced by shared CTASection
- `src/components/about/AboutHero.tsx` — replaced by simpler hero
- `src/components/about/WhyWeExist.tsx` — removed (filler)
- `src/components/about/OurProcess.tsx` — removed (duplicated homepage timeline)
- `src/components/about/AboutCTA.tsx` — replaced by shared CTASection
- `src/components/ui/ImagePlaceholder.tsx` — no longer needed

### Files to DELETE (images)
- `public/images/hero-lifestyle.png` — AI stock photo, was used 4 times
- `public/images/results-dashboard.png` — AI stock photo
- `public/images/creative-process.png` — AI stock photo
- `public/images/ecom-products.png` — AI stock photo
- `public/images/shopify-screen.png` — unused
- `public/images/testimonial-client.png` — unused

### Files to KEEP (images — headshots only)
- `public/images/founder-headshot.png`
- `public/images/team-head-of-growth.png`
- `public/images/team-ai-ops-lead.png`

### Files to CREATE (new components)
- `src/components/home/Platforms.tsx` — real platform logos strip (replaces PlatformLogos)
- `src/components/home/Services.tsx` — two-pillar overview (replaces TwoPillars)
- `src/components/services/ServiceGrid.tsx` — unified services grid for both pillars

### Files to MODIFY (rewrite)
- `src/app/page.tsx` — new 7-section homepage
- `src/app/services/page.tsx` — new 4-section services page
- `src/app/about/page.tsx` — new 4-section about page
- `src/components/home/Hero.tsx` — strip image, refine typography
- `src/components/home/Results.tsx` — numbered editorial layout, remove image
- `src/components/home/Timeline.tsx` — light polish, keep mostly as-is
- `src/components/home/FinalCTA.tsx` — update copy
- `src/components/about/Team.tsx` — remove hero-lifestyle.png at bottom, keep headshots
- `src/components/about/Principles.tsx` — keep as-is (strong content)
- `src/components/layout/Footer.tsx` — minor copy update

### Files to KEEP UNCHANGED
- `src/app/layout.tsx` — root layout is solid
- `src/app/apply/page.tsx` — form page works
- `src/components/layout/Navbar.tsx` — works well
- `src/components/ui/Section.tsx` — reusable, keep
- `src/components/ui/Button.tsx` — reusable, keep
- `src/components/ui/Card.tsx` — reusable, keep
- `src/components/ui/Eyebrow.tsx` — reusable, keep
- `src/components/ui/CountUp.tsx` — reusable, keep
- `src/components/shared/FadeIn.tsx` — reusable, keep
- `src/components/shared/StaggerContainer.tsx` — reusable, keep
- `src/components/shared/CTASection.tsx` — reusable, keep
- `src/components/apply/ApplyForm.tsx` — keep
- `src/app/globals.css` — keep
- `tailwind.config.ts` — keep
- `src/lib/*` — keep

---

## Task 1: Delete unused images and components

**Files:**
- Delete: `public/images/hero-lifestyle.png`
- Delete: `public/images/results-dashboard.png`
- Delete: `public/images/creative-process.png`
- Delete: `public/images/ecom-products.png`
- Delete: `public/images/shopify-screen.png`
- Delete: `public/images/testimonial-client.png`
- Delete: `src/components/home/ProblemGrid.tsx`
- Delete: `src/components/home/CreativeShowcase.tsx`
- Delete: `src/components/home/Comparison.tsx`
- Delete: `src/components/home/Founder.tsx`
- Delete: `src/components/home/FAQ.tsx`
- Delete: `src/components/services/ServicesHero.tsx`
- Delete: `src/components/services/PillarOne.tsx`
- Delete: `src/components/services/PillarTwo.tsx`
- Delete: `src/components/services/WhyBoth.tsx`
- Delete: `src/components/services/ServicesCaseStudies.tsx`
- Delete: `src/components/services/ServicesCTA.tsx`
- Delete: `src/components/about/AboutHero.tsx`
- Delete: `src/components/about/WhyWeExist.tsx`
- Delete: `src/components/about/OurProcess.tsx`
- Delete: `src/components/about/AboutCTA.tsx`
- Delete: `src/components/ui/ImagePlaceholder.tsx`

- [ ] **Step 1: Delete all non-headshot images**

```bash
cd "/Users/georgigeorgiev/Desktop/Claude Code/Scale OS Website"
rm public/images/hero-lifestyle.png public/images/results-dashboard.png public/images/creative-process.png public/images/ecom-products.png public/images/shopify-screen.png public/images/testimonial-client.png
```

- [ ] **Step 2: Delete all removed components**

```bash
rm src/components/home/ProblemGrid.tsx src/components/home/CreativeShowcase.tsx src/components/home/Comparison.tsx src/components/home/Founder.tsx src/components/home/FAQ.tsx
rm src/components/services/ServicesHero.tsx src/components/services/PillarOne.tsx src/components/services/PillarTwo.tsx src/components/services/WhyBoth.tsx src/components/services/ServicesCaseStudies.tsx src/components/services/ServicesCTA.tsx
rm src/components/about/AboutHero.tsx src/components/about/WhyWeExist.tsx src/components/about/OurProcess.tsx src/components/about/AboutCTA.tsx
rm src/components/ui/ImagePlaceholder.tsx
```

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "chore: remove unused images and components for redesign"
```

---

## Task 2: Rebuild Homepage Hero

**Files:**
- Modify: `src/components/home/Hero.tsx`

The hero should be typography-driven. No image. Full viewport height. Massive headline. Stat strip with CountUp. Single CTA.

- [ ] **Step 1: Rewrite Hero.tsx**

```tsx
"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/shared/FadeIn";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 35, prefix: "$", suffix: "M+", decimals: 0, label: "Managed Ad Spend" },
  { value: 3.5, prefix: "", suffix: "x", decimals: 1, label: "Avg Blended ROAS" },
  { value: 30, prefix: "", suffix: "%", decimals: 0, label: "Avg CAC Reduction" },
  { value: 40, prefix: "", suffix: "+", decimals: 0, label: "Hours Saved / Week" },
];

export default function Hero() {
  return (
    <Section className="min-h-[90vh] flex flex-col items-center justify-center text-center !pt-32 !pb-20 lg:!pt-40 lg:!pb-28">
      <FadeIn>
        <p className="text-label-sm uppercase text-primary tracking-widest mb-8">
          E-Commerce Growth Agency
        </p>
        <h1 className="font-display text-[2.75rem] md:text-[4.5rem] lg:text-[6rem] tracking-tighter leading-[0.95] text-white max-w-5xl mx-auto mb-8">
          We scale e-commerce brands with{" "}
          <em className="italic font-normal text-white/60">AI-powered</em>{" "}
          marketing.
        </h1>
        <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Revenue engineering and intelligent automation for Shopify brands
          doing $50K–$5M/month.
        </p>
        <Button href="/apply" arrow>
          Apply for Strategy Audit
        </Button>
      </FadeIn>

      {/* Stat strip */}
      <FadeIn delay={0.3}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-24 pt-12 border-t border-white/[0.06]">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="text-3xl md:text-4xl font-bold tabular-nums text-white">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </span>
              <p className="text-on-surface-muted text-[10px] uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
```

- [ ] **Step 2: Verify the component renders**

Run: `npx next build 2>&1 | head -30` or check dev server.

- [ ] **Step 3: Commit**

```bash
git add src/components/home/Hero.tsx && git commit -m "refactor: rebuild Hero as typography-driven, remove image"
```

---

## Task 3: Create Platforms strip (replaces PlatformLogos)

**Files:**
- Create: `src/components/home/Platforms.tsx` (replaces `src/components/home/PlatformLogos.tsx`)
- Delete: `src/components/home/PlatformLogos.tsx`

Replace fake client logos with real platform names: Shopify, Meta, Google Ads, Klaviyo, TikTok, Gorgias. Static horizontal row, no marquee. Label: "Platforms we build on."

- [ ] **Step 1: Create Platforms.tsx**

```tsx
import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

const platforms = [
  "Shopify",
  "Meta Ads",
  "Google Ads",
  "Klaviyo",
  "TikTok Ads",
  "Gorgias",
];

export default function Platforms() {
  return (
    <Section variant="surface-low" className="!py-10">
      <FadeIn>
        <p className="text-on-surface-muted text-[10px] text-center tracking-[0.15em] uppercase mb-6">
          Platforms we build on
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {platforms.map((platform) => (
            <span
              key={platform}
              className="text-white/25 text-sm font-medium tracking-wider uppercase"
            >
              {platform}
            </span>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
```

- [ ] **Step 2: Delete PlatformLogos.tsx**

```bash
rm src/components/home/PlatformLogos.tsx
```

- [ ] **Step 3: Commit**

```bash
git add src/components/home/Platforms.tsx && git add -A && git commit -m "refactor: replace fake client logos with real platform strip"
```

---

## Task 4: Create Services overview for homepage (replaces TwoPillars)

**Files:**
- Create: `src/components/home/Services.tsx`
- Delete: `src/components/home/TwoPillars.tsx`

Two-column layout. Each pillar gets a card with: title, description, 5 bullet services, and a code-built visual element (CSS metric card for Revenue Engineering, CSS workflow for AI Commerce). Links to services page.

- [ ] **Step 1: Create Services.tsx**

```tsx
"use client";

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

const pillars = [
  {
    label: "Pillar One",
    title: "Revenue Engineering",
    description:
      "We don't just manage campaigns — we engineer profitable growth systems built on real unit economics.",
    services: [
      "Meta Ads Management",
      "Google Ads Management",
      "Creative Strategy & Production",
      "Brand Strategy & Positioning",
      "Advertorial & Listicle Pages",
    ],
  },
  {
    label: "Pillar Two",
    title: "AI Commerce Operations",
    description:
      "Custom AI workflows that automate your operations — from ad creation to store optimization.",
    services: [
      "AI Ad & Content Generation",
      "E-Commerce Workflow Automation",
      "Shopify Store Optimization",
      "Advertorial Creation at Scale",
      "Operational AI Integration",
    ],
  },
];

function MetricsMockup() {
  return (
    <div className="bg-surface-card rounded-xl p-5 mt-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        <span className="text-[9px] uppercase tracking-wider text-on-surface-muted">
          Live Performance
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "ROAS", value: "4.2x", accent: true },
          { label: "CAC", value: "$18.40", accent: false },
          { label: "Revenue", value: "$142K", accent: false },
          { label: "Conv Rate", value: "3.8%", accent: false },
        ].map((m) => (
          <div key={m.label} className="bg-surface-low rounded-lg p-3">
            <p className="text-[8px] uppercase tracking-wider text-on-surface-muted mb-1">
              {m.label}
            </p>
            <p
              className={`text-lg font-bold tabular-nums ${
                m.accent ? "text-primary" : "text-white"
              }`}
            >
              {m.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowMockup() {
  const steps = [
    { n: "01", text: "Order received → webhook triggers" },
    { n: "02", text: "AI generates post-purchase sequence" },
    { n: "03", text: "Customer segmented → Klaviyo updated" },
    { n: "04", text: "Retargeting ad created from data" },
  ];
  return (
    <div className="bg-surface-card rounded-xl p-5 mt-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span className="text-[9px] uppercase tracking-wider text-on-surface-muted">
          Live Workflow
        </span>
      </div>
      <div className="space-y-2">
        {steps.map((s) => (
          <div key={s.n} className="flex items-center gap-3">
            <span className="text-[10px] text-primary font-bold w-5 flex-shrink-0">
              {s.n}
            </span>
            <div className="flex-1 bg-surface-low rounded-lg px-3 py-2">
              <p className="text-[11px] text-white/60">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <Section>
      <FadeIn>
        <Eyebrow>What We Do</Eyebrow>
        <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-16">
          Two systems. One growth engine.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {pillars.map((pillar, i) => (
          <FadeIn key={pillar.title} delay={i * 0.15}>
            <div className="bg-surface-card rounded-2xl p-8 lg:p-10 h-full flex flex-col">
              <p className="text-label-sm uppercase text-primary mb-4">
                {pillar.label}
              </p>
              <h3 className="font-display text-display-sm tracking-tighter text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                {pillar.description}
              </p>
              <ul className="space-y-2.5 mb-6">
                {pillar.services.map((s) => (
                  <li
                    key={s}
                    className="text-sm text-white/60 flex items-center gap-3"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              {i === 0 ? <MetricsMockup /> : <WorkflowMockup />}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-auto pt-6 hover:gap-3 transition-all duration-300"
              >
                Learn more <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Delete TwoPillars.tsx**

```bash
rm src/components/home/TwoPillars.tsx
```

- [ ] **Step 3: Commit**

```bash
git add src/components/home/Services.tsx && git add -A && git commit -m "refactor: replace TwoPillars with clean two-card Services overview"
```

---

## Task 5: Rebuild Results as numbered editorial layout

**Files:**
- Modify: `src/components/home/Results.tsx`

Strip out the image. Use numbered editorial layout (01, 02, 03). Large typography for revenue numbers. Minimal supporting detail. No image.

- [ ] **Step 1: Rewrite Results.tsx**

```tsx
"use client";

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";

const caseStudies = [
  {
    number: "01",
    brand: "Aurora Skincare",
    category: "Premium DTC Skincare",
    before: "$56K/mo",
    after: "$340K/mo",
    highlight: "6x revenue in 4 months",
    detail:
      "Scaled Meta Ads with AI-generated creative testing. 34% CAC reduction through systematic angle testing.",
  },
  {
    number: "02",
    brand: "Velta Fitness",
    category: "Shopify Plus · Equipment",
    before: "$420K/mo",
    after: "$890K/mo",
    highlight: "2.1x revenue, 40hrs saved weekly",
    detail:
      "Google Ads + AI workflow automation. Automated creative production and inventory-based ad scaling.",
  },
  {
    number: "03",
    brand: "Maison Home",
    category: "DTC Home & Living",
    before: "$95K/mo",
    after: "$210K/mo",
    highlight: "2.2x revenue, $19 CAC",
    detail:
      "Full-funnel Meta + Google strategy with AI-built advertorial landing pages and automated email flows.",
  },
];

export default function Results() {
  return (
    <Section id="results" variant="surface-low">
      <FadeIn>
        <Eyebrow>Results</Eyebrow>
        <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-4">
          What our system delivers.
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed mb-16 max-w-[55ch]">
          Projected outcomes based on our methodology applied to Shopify brands
          in our target range.
        </p>
      </FadeIn>

      <StaggerContainer className="space-y-0">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.number}
            variants={staggerItemVariants}
            className={`grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-8 py-10 ${
              index < caseStudies.length - 1
                ? "border-b border-white/[0.06]"
                : ""
            }`}
          >
            <span className="font-display text-display-sm text-white/20">
              {study.number}
            </span>
            <div>
              <h3 className="font-display text-xl text-white tracking-tight mb-1">
                {study.brand}
              </h3>
              <p className="text-[10px] uppercase tracking-wider text-on-surface-muted mb-3">
                {study.category}
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {study.detail}
              </p>
            </div>
            <div className="flex flex-col justify-center md:text-right">
              <p className="font-display text-3xl md:text-4xl tracking-tight text-white mb-1">
                {study.before}{" "}
                <span className="text-on-surface-muted mx-1">→</span>{" "}
                <span className="text-primary">{study.after}</span>
              </p>
              <p className="text-sm text-on-surface-variant">
                {study.highlight}
              </p>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/home/Results.tsx && git commit -m "refactor: rebuild Results as numbered editorial layout"
```

---

## Task 6: Polish Timeline and FinalCTA

**Files:**
- Modify: `src/components/home/Timeline.tsx` — minor copy refinement, keep structure
- Modify: `src/components/home/FinalCTA.tsx` — update copy

- [ ] **Step 1: Update FinalCTA copy**

Change `src/components/home/FinalCTA.tsx` to:

```tsx
import CTASection from "@/components/shared/CTASection";

export default function FinalCTA() {
  return (
    <CTASection
      heading="Ready to scale?"
      subtext="We take on 3 new brands per quarter. Apply to see if we're a fit."
      buttonText="Apply for Strategy Audit"
      variant="primary"
    />
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/home/FinalCTA.tsx && git commit -m "refactor: update FinalCTA copy"
```

---

## Task 7: Create Team strip for homepage

**Files:**
- Create: `src/components/home/TeamStrip.tsx`

Horizontal layout: 3 headshots + names + roles. Brief. Links to About page.

- [ ] **Step 1: Create TeamStrip.tsx**

```tsx
import Image from "next/image";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const team = [
  { name: "Alex Mercer", role: "Creative Strategist", image: "/images/founder-headshot.png" },
  { name: "Maya Johnson", role: "Head of Growth", image: "/images/team-head-of-growth.png" },
  { name: "Daniel Park", role: "AI Operations Lead", image: "/images/team-ai-ops-lead.png" },
];

export default function TeamStrip() {
  return (
    <Section variant="dark">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
          <div>
            <h2 className="font-display text-display-sm md:text-display-md tracking-tighter text-white mb-2">
              The team behind Scale OS.
            </h2>
            <p className="text-on-surface-variant text-base max-w-md">
              Three senior operators. No junior account managers, no middlemen.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-300 flex-shrink-0"
          >
            About us <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <FadeIn key={member.name} delay={index * 0.1}>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} at Scale OS`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="font-display text-lg text-white tracking-tight">
                {member.name}
              </h3>
              <p className="text-primary text-sm">{member.role}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/home/TeamStrip.tsx && git commit -m "feat: add TeamStrip for homepage"
```

---

## Task 8: Wire up homepage page.tsx

**Files:**
- Modify: `src/app/page.tsx`

New homepage: Hero → Platforms → Services → Results → Timeline → TeamStrip → FinalCTA (7 sections)

- [ ] **Step 1: Rewrite page.tsx**

```tsx
import Hero from "@/components/home/Hero";
import Platforms from "@/components/home/Platforms";
import Services from "@/components/home/Services";
import Results from "@/components/home/Results";
import Timeline from "@/components/home/Timeline";
import TeamStrip from "@/components/home/TeamStrip";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Platforms />
      <Services />
      <Results />
      <Timeline />
      <TeamStrip />
      <FinalCTA />
    </>
  );
}
```

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -20`

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx && git commit -m "refactor: wire up redesigned homepage with 7 focused sections"
```

---

## Task 9: Rebuild Services page

**Files:**
- Create: `src/components/services/ServiceGrid.tsx`
- Modify: `src/app/services/page.tsx`

4 sections: Hero (inline) → Revenue Engineering grid → AI Commerce grid → CTA (shared). Each service gets: Phosphor icon + title + 2-line description in a clean grid.

- [ ] **Step 1: Create ServiceGrid.tsx**

```tsx
"use client";

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";
import {
  ChartLineUp,
  MagnifyingGlass,
  PaintBrush,
  Compass,
  Article,
  Robot,
  Lightning,
  Storefront,
  CopySimple,
  Gear,
} from "@phosphor-icons/react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const revenueServices: ServiceItem[] = [
  {
    icon: <ChartLineUp size={24} weight="light" />,
    title: "Meta Ads Management",
    description:
      "Full-funnel Meta campaigns with systematic creative testing and AI-accelerated iteration cycles.",
  },
  {
    icon: <MagnifyingGlass size={24} weight="light" />,
    title: "Google Ads Management",
    description:
      "Search, Shopping, and Performance Max campaigns optimized for contribution margin, not vanity ROAS.",
  },
  {
    icon: <PaintBrush size={24} weight="light" />,
    title: "Creative Strategy & Production",
    description:
      "Hook-driven ad creative frameworks. We test 50 angles in the time it takes most agencies to produce 5.",
  },
  {
    icon: <Compass size={24} weight="light" />,
    title: "Brand Strategy & Positioning",
    description:
      "Market positioning, competitive analysis, and brand architecture that makes every ad dollar work harder.",
  },
  {
    icon: <Article size={24} weight="light" />,
    title: "Advertorial & Listicle Pages",
    description:
      "High-converting landing pages built for cold traffic. Editorially styled, performance-optimized.",
  },
];

const aiServices: ServiceItem[] = [
  {
    icon: <Robot size={24} weight="light" />,
    title: "AI Ad & Content Generation",
    description:
      "AI systems that generate ad copy, creative variations, and content at scale — with human quality control.",
  },
  {
    icon: <Lightning size={24} weight="light" />,
    title: "E-Commerce Workflow Automation",
    description:
      "Custom automation pipelines: order processing, email flows, inventory management, customer segmentation.",
  },
  {
    icon: <Storefront size={24} weight="light" />,
    title: "Shopify Store Optimization",
    description:
      "Theme performance, conversion rate optimization, app stack audits, and checkout flow improvements.",
  },
  {
    icon: <CopySimple size={24} weight="light" />,
    title: "Advertorial Creation at Scale",
    description:
      "AI-powered advertorial and listicle generation with human editing. Produce 10x the landing pages.",
  },
  {
    icon: <Gear size={24} weight="light" />,
    title: "Operational AI Integration",
    description:
      "Deploy AI across your business operations — customer service, reporting, analytics, and internal tools.",
  },
];

interface ServiceSectionProps {
  label: string;
  title: string;
  description: string;
  services: ServiceItem[];
  variant?: "background" | "surface-low" | "dark";
}

function ServiceSection({
  label,
  title,
  description,
  services,
  variant = "background",
}: ServiceSectionProps) {
  return (
    <Section variant={variant}>
      <FadeIn>
        <Eyebrow>{label}</Eyebrow>
        <h2 className="font-display text-display-sm md:text-display-md tracking-tighter text-white mb-4">
          {title}
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed max-w-[55ch] mb-14">
          {description}
        </p>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={staggerItemVariants}
            className="bg-surface-card rounded-2xl p-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-surface-high"
          >
            <div className="text-primary mb-5">{service.icon}</div>
            <h3 className="font-display text-lg text-white tracking-tight mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}

export default function ServiceGrid() {
  return (
    <>
      <ServiceSection
        label="Pillar One"
        title="Revenue Engineering"
        description="We don't just manage campaigns — we engineer profitable growth systems built on real unit economics."
        services={revenueServices}
      />
      <ServiceSection
        label="Pillar Two"
        title="AI Commerce Operations"
        description="Custom AI workflows that automate your operations — from ad creation to store optimization."
        services={aiServices}
        variant="surface-low"
      />
    </>
  );
}
```

- [ ] **Step 2: Rewrite services page.tsx**

```tsx
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import ServiceGrid from "@/components/services/ServiceGrid";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Services — Scale OS",
  description:
    "Revenue engineering and AI commerce operations for Shopify brands. Meta Ads, Google Ads, creative strategy, and custom AI automation.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="text-center !pb-8">
        <FadeIn>
          <Eyebrow className="mx-auto">Services</Eyebrow>
          <h1 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-6 max-w-3xl mx-auto">
            Two systems. One growth engine.
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            We combine human-led growth strategy with AI-powered operations to
            scale Shopify brands faster.
          </p>
        </FadeIn>
      </Section>

      <ServiceGrid />

      <CTASection
        heading="See what both pillars can do for your brand."
        subtext="We take on 3 new brands per quarter."
        buttonText="Apply for Strategy Audit"
        variant="primary"
      />
    </>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `npx next build 2>&1 | tail -20`

- [ ] **Step 4: Commit**

```bash
git add src/components/services/ServiceGrid.tsx src/app/services/page.tsx && git commit -m "refactor: rebuild Services page with clean icon grid, no images"
```

---

## Task 10: Rebuild About page

**Files:**
- Modify: `src/app/about/page.tsx`
- Modify: `src/components/about/Team.tsx` — remove hero-lifestyle.png at bottom

4 sections: Hero (inline) → Team → Principles → CTA (shared).

- [ ] **Step 1: Remove hero-lifestyle image from Team.tsx**

In `src/components/about/Team.tsx`, remove lines 66-75 (the "Team culture image" FadeIn block with the hero-lifestyle.png Image). Also remove the `import Image from "next/image"` if it's no longer needed... wait, it IS still needed for headshots. Keep the import but remove the bottom image block.

The Team.tsx should end after the `</div>` that closes the grid (line 64), then close with `</Section>`.

Updated Team.tsx:

```tsx
import Image from "next/image";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

const team = [
  {
    name: "Alex Mercer",
    role: "Creative Strategist",
    image: "/images/founder-headshot.png",
    bio: "Started writing direct response copy for DTC brands doing $500K–$5M/month. Moved into creative direction because he kept noticing the same thing: great products with terrible ad angles. His frameworks for advertorial and listicle creation have driven over $8M in attributable revenue.",
  },
  {
    name: "Maya Johnson",
    role: "Head of Growth",
    image: "/images/team-head-of-growth.png",
    bio: "Spent four years as performance lead at a top DTC agency managing $2M+ in monthly ad spend across Meta and Google. Believes the best media buying is part math, part creative instinct — and that most agencies over-index on the math.",
  },
  {
    name: "Daniel Park",
    role: "AI Operations Lead",
    image: "/images/team-ai-ops-lead.png",
    bio: "Full-stack engineer turned AI systems architect. Built automation pipelines for two YC-backed startups before joining Scale OS. If a human does something more than twice, he builds a system to do it instead. Has automated over 200 workflows across client operations.",
  },
];

export default function Team() {
  return (
    <Section>
      <FadeIn>
        <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-4">
          The team
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed max-w-[55ch] mb-16">
          Three senior operators who&apos;ve been in the trenches. No junior
          account managers, no offshore teams, no middlemen.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {team.map((member, index) => (
          <FadeIn key={member.name} delay={index * 0.1}>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} at Scale OS`}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="font-display text-xl text-white tracking-tight mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Rewrite about page.tsx**

```tsx
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import Team from "@/components/about/Team";
import Principles from "@/components/about/Principles";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "About — Scale OS",
  description:
    "Meet the team behind Scale OS. Senior operators building the future of e-commerce growth with AI.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="text-center !pb-8">
        <FadeIn>
          <Eyebrow className="mx-auto">About</Eyebrow>
          <h1 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-6 max-w-3xl mx-auto">
            Human strategy. Machine speed.
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            We started Scale OS because we saw two things happening at once:
            e-commerce brands drowning in manual work, and AI tools that could
            fix it — if someone knew how to deploy them.
          </p>
        </FadeIn>
      </Section>

      <Team />
      <Principles />

      <CTASection
        heading="Want to work with us?"
        subtext="We take on 3 new brands per quarter."
        buttonText="Apply for Partnership"
        variant="primary"
      />
    </>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `npx next build 2>&1 | tail -20`

- [ ] **Step 4: Commit**

```bash
git add src/app/about/page.tsx src/components/about/Team.tsx && git commit -m "refactor: rebuild About page, remove stock image, keep team + principles"
```

---

## Task 11: Final verification and cleanup

**Files:**
- Verify: all pages render
- Verify: no broken image references
- Verify: no unused imports

- [ ] **Step 1: Run build to catch all errors**

```bash
cd "/Users/georgigeorgiev/Desktop/Claude Code/Scale OS Website" && npx next build
```

- [ ] **Step 2: Grep for deleted image references**

```bash
grep -r "hero-lifestyle\|results-dashboard\|creative-process\|ecom-products\|shopify-screen\|testimonial-client" src/
```

Expected: no matches. If any remain, fix them.

- [ ] **Step 3: Grep for deleted component imports**

```bash
grep -r "ProblemGrid\|CreativeShowcase\|Comparison\|Founder\|FAQ\|ServicesHero\|PillarOne\|PillarTwo\|WhyBoth\|ServicesCaseStudies\|ServicesCTA\|AboutHero\|WhyWeExist\|OurProcess\|AboutCTA\|ImagePlaceholder" src/
```

Expected: no matches. If any remain, fix them.

- [ ] **Step 4: Verify only 3 images remain**

```bash
ls public/images/
```

Expected: `founder-headshot.png`, `team-head-of-growth.png`, `team-ai-ops-lead.png`

- [ ] **Step 5: Start dev server and verify all 4 pages load**

```bash
npx next dev
```

Visit: `/`, `/services`, `/about`, `/apply` — all should render without errors.

- [ ] **Step 6: Final commit**

```bash
git add -A && git commit -m "chore: verify clean build after redesign"
```

---

## Summary

**Before:** 11 + 6 + 6 + 3 = 26 sections, 9 images (6 AI stock, 3 headshots), massive content duplication across pages.

**After:** 7 + 4 + 4 + 3 = 18 sections, 3 images (headshots only), zero duplication. Visual richness from code-built metric cards, workflow mockups, and typography.

**Components removed:** 16
**Components created:** 3 (Platforms, Services, ServiceGrid)
**Images removed:** 6
**Total page-specific components:** 28 → 15
