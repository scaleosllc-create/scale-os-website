# Scale OS Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 4-page premium agency website for Scale OS LLC using Next.js, Tailwind CSS, and Framer Motion.

**Architecture:** Next.js 14+ App Router with static pages. Shared layout wraps all pages with nav + footer. Reusable UI components (Button, Card, Section, ImagePlaceholder) compose each page. Form submission via API route. Framer Motion for scroll animations.

**Tech Stack:** Next.js 14+ (App Router), Tailwind CSS, Framer Motion, Inter font (Google Fonts), deployed on Vercel.

**Spec:** `docs/superpowers/specs/2026-03-21-scale-os-website-design.md`

---

## File Structure

```
src/
  app/
    layout.tsx          — Root layout: Inter font, metadata, nav + footer wrapper
    page.tsx            — Home page
    not-found.tsx       — 404 page
    sitemap.ts          — Auto-generated sitemap.xml
    services/
      page.tsx          — Services page
    about/
      page.tsx          — About page
    apply/
      page.tsx          — Apply page (client component for form)
    api/
      apply/
        route.ts        — Form submission API endpoint
    globals.css         — Tailwind directives + custom styles
  components/
    ui/
      Button.tsx        — Primary, Secondary, Accent button variants
      Card.tsx          — White bordered card component
      Section.tsx       — Section wrapper (light/dark/off-white variants)
      Eyebrow.tsx       — Uppercase label component
      ImagePlaceholder.tsx — Dashed-border placeholder for future images
      CountUp.tsx       — Animated count-up number component
    layout/
      Navbar.tsx        — Fixed nav with mobile drawer
      Footer.tsx        — Site footer
    home/
      Hero.tsx          — Homepage hero split layout
      PlatformLogos.tsx — "Platforms We Build On" bar
      Problem.tsx       — Dark "old model is broken" section
      TwoPillars.tsx    — Side-by-side pillar cards
      Stats.tsx         — Animated stats row
      HowWeWork.tsx     — 3-step process section
      Testimonial.tsx   — Quote + photo section
      FinalCTA.tsx      — Dark bottom CTA
    services/
      ServicesHero.tsx
      PillarOne.tsx     — Revenue Engineering header + service grid
      PillarTwo.tsx     — AI Commerce Operations header + service grid
      WhyBoth.tsx       — "Why this combination wins" section
    about/
      AboutHero.tsx
      WhyWeExist.tsx
      Principles.tsx
      Team.tsx
    apply/
      ApplyForm.tsx     — Full intake form with validation
    shared/
      CTASection.tsx    — Reusable dark CTA section (used on Services, About)
      FadeIn.tsx        — Framer Motion scroll-triggered fade-in wrapper
  lib/
    constants.ts        — Site-wide content strings, stats data, team data
    validation.ts       — Form validation logic
tailwind.config.ts      — Custom colors, fonts, spacing
next.config.ts          — Next.js config
public/
  logos/                — SVG platform logos (shopify.svg, meta.svg, google.svg, klaviyo.svg)
  favicon.svg           — S lettermark favicon
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `tailwind.config.ts`, `next.config.ts`, `tsconfig.json`, `src/app/globals.css`, `src/app/layout.tsx`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd "/Users/georgigeorgiev/Desktop/Claude Code/Scale OS Website"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

Select defaults when prompted. This creates the full Next.js scaffold.

- [ ] **Step 2: Verify project runs**

```bash
npm run dev
```

Expected: Dev server starts at localhost:3000, default Next.js page renders.

- [ ] **Step 3: Install Framer Motion**

```bash
npm install framer-motion
```

- [ ] **Step 4: Configure Tailwind with custom design tokens**

Replace `tailwind.config.ts` with:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        forest: "#2D6A4F",
        "forest-light": "#E8F0EC",
        "off-white": "#FAFAF8",
        surface: "#F0F0EC",
        border: "#E0E0E0",
        "dark-body": "#AAAAAA",
        "dark-muted": "#666666",
        error: "#DC2626",
        gray: {
          300: "#BBBBBB",
          400: "#999999",
          500: "#777777",
          700: "#555555",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      fontSize: {
        eyebrow: ["11px", { letterSpacing: "2px", fontWeight: "600" }],
        small: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 5: Set up globals.css**

Replace `src/app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

*:focus-visible {
  outline: 2px solid #2D6A4F;
  outline-offset: 2px;
}
```

- [ ] **Step 6: Set up root layout with metadata**

Replace `src/app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Scale OS — E-Commerce Growth Partner",
    template: "%s | Scale OS",
  },
  description:
    "We scale Shopify brands with human strategy and AI infrastructure. Lower your CAC, expand margins, and automate operations.",
  openGraph: {
    title: "Scale OS — E-Commerce Growth Partner",
    description:
      "We scale Shopify brands with human strategy and AI infrastructure.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale OS — E-Commerce Growth Partner",
    description:
      "We scale Shopify brands with human strategy and AI infrastructure.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-ink`}>{children}</body>
    </html>
  );
}
```

- [ ] **Step 7: Verify dev server still runs with custom config**

```bash
npm run dev
```

Expected: Dev server starts without errors.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind and design tokens"
```

---

### Task 2: Shared UI Components

**Files:**
- Create: `src/components/ui/Button.tsx`, `src/components/ui/Section.tsx`, `src/components/ui/Eyebrow.tsx`, `src/components/ui/Card.tsx`, `src/components/ui/ImagePlaceholder.tsx`, `src/components/ui/CountUp.tsx`, `src/components/shared/FadeIn.tsx`, `src/components/shared/CTASection.tsx`

- [ ] **Step 1: Create Button component**

Create `src/components/ui/Button.tsx`:

```tsx
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "accent";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-white hover:bg-black",
  secondary:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-white",
  accent:
    "bg-forest text-white hover:bg-[#245A42]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "inline-block rounded-[3px] px-7 py-3.5 text-[13px] font-medium uppercase tracking-wider transition-colors duration-200";
  const styles = `${base} ${variantStyles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
```

- [ ] **Step 2: Create Section component**

Create `src/components/ui/Section.tsx`:

```tsx
interface SectionProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "off-white";
  className?: string;
  id?: string;
}

const variantStyles = {
  light: "bg-white",
  dark: "bg-ink text-white",
  "off-white": "bg-off-white",
};

export default function Section({
  children,
  variant = "light",
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-8 md:py-12 ${variantStyles[variant]} ${className}`}>
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-0">
        {children}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create Eyebrow component**

Create `src/components/ui/Eyebrow.tsx`:

```tsx
interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`text-eyebrow uppercase text-forest mb-3 ${className}`}
    >
      {children}
    </p>
  );
}
```

- [ ] **Step 4: Create Card component**

Create `src/components/ui/Card.tsx`:

```tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`bg-white border border-border rounded-lg p-6 ${
        hover ? "transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 5: Create ImagePlaceholder component**

Create `src/components/ui/ImagePlaceholder.tsx`:

```tsx
interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  className?: string;
  dark?: boolean;
  rounded?: "none" | "lg" | "full";
}

export default function ImagePlaceholder({
  label,
  sublabel,
  className = "",
  dark = false,
  rounded = "lg",
}: ImagePlaceholderProps) {
  const roundedClass = {
    none: "",
    lg: "rounded-lg",
    full: "rounded-full",
  }[rounded];

  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed ${
        dark ? "bg-[#1a1a1a] border-[#333]" : "bg-surface border-[#ccc]"
      } ${roundedClass} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="text-center">
        <div className={`text-2xl mb-1 ${dark ? "text-[#555]" : "text-gray-400"}`}>
          &#128444;
        </div>
        <div className={`text-xs font-semibold ${dark ? "text-[#555]" : "text-gray-400"}`}>
          {label}
        </div>
        {sublabel && (
          <div className={`text-[10px] mt-1 ${dark ? "text-[#444]" : "text-gray-300"}`}>
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Create FadeIn animation wrapper**

Create `src/components/shared/FadeIn.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 7: Create CountUp component**

Create `src/components/ui/CountUp.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2000,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (value - start) * eased;

      setDisplay(
        decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString()
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, decimals, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
```

- [ ] **Step 8: Create CTASection component**

Create `src/components/shared/CTASection.tsx`:

```tsx
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/shared/FadeIn";

interface CTASectionProps {
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref?: string;
}

export default function CTASection({
  heading,
  subtext,
  buttonText,
  buttonHref = "/apply",
}: CTASectionProps) {
  return (
    <Section variant="dark" className="text-center">
      <FadeIn>
        <h2 className="font-serif font-light text-[22px] md:text-[28px] text-white mb-3">
          {heading}
        </h2>
        <p className="text-dark-body text-sm mb-7 max-w-md mx-auto">
          {subtext}
        </p>
        <Button href={buttonHref} variant="accent">
          {buttonText}
        </Button>
      </FadeIn>
    </Section>
  );
}
```

- [ ] **Step 9: Verify build compiles**

```bash
npm run build
```

Expected: Build succeeds with no type errors.

- [ ] **Step 10: Commit**

```bash
git add src/components/
git commit -m "feat: add shared UI components (Button, Card, Section, FadeIn, CountUp, CTA)"
```

---

### Task 3: Navigation & Footer

**Files:**
- Create: `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create Navbar component**

Create `src/components/layout/Navbar.tsx`:

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-0 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-ink font-bold tracking-[2px] text-[15px]">
          SCALE OS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] transition-colors ${
                pathname === link.href
                  ? "text-forest font-semibold"
                  : "text-gray-500 hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/apply" variant="accent" className="!py-2 !px-4 !text-[12px]">
            Apply
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-5 h-0.5 bg-ink" />
          <span className="w-5 h-0.5 bg-ink" />
          <span className="w-5 h-0.5 bg-ink" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white z-50 p-6 flex flex-col"
            >
              <button
                className="self-end text-ink text-2xl mb-8"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base ${
                      pathname === link.href
                        ? "text-forest font-semibold"
                        : "text-gray-500"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto">
                <Button href="/apply" variant="accent" className="w-full text-center">
                  Apply
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
```

- [ ] **Step 2: Create Footer component**

Create `src/components/layout/Footer.tsx`:

```tsx
import Link from "next/link";

const pageLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/apply", label: "Apply" },
];

export default function Footer() {
  return (
    <footer className="bg-off-white border-t border-border">
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-0 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left */}
          <div>
            <div className="font-bold tracking-[2px] text-ink text-sm mb-2">
              SCALE OS
            </div>
            <p className="text-small text-gray-400 mb-1">
              Human strategy. AI infrastructure.
            </p>
            <p className="text-[11px] text-gray-300">Scale OS LLC</p>
          </div>

          {/* Right */}
          <div className="flex gap-12 md:gap-16 text-small">
            <div>
              <p className="font-semibold text-ink mb-2">Pages</p>
              <div className="flex flex-col gap-1.5">
                {pageLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-500 hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-ink mb-2">Contact</p>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                1309 Coffeen Avenue STE 1200
                <br />
                Sheridan, Wyoming 82801
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-5 text-[11px] text-gray-300">
          &copy; {new Date().getFullYear()} Scale OS LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Add Navbar and Footer to root layout**

Update `src/app/layout.tsx` — add imports and wrap children:

```tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Scale OS — E-Commerce Growth Partner",
    template: "%s | Scale OS",
  },
  description:
    "We scale Shopify brands with human strategy and AI infrastructure. Lower your CAC, expand margins, and automate operations.",
  openGraph: {
    title: "Scale OS — E-Commerce Growth Partner",
    description:
      "We scale Shopify brands with human strategy and AI infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Verify nav and footer render**

```bash
npm run dev
```

Expected: Nav bar fixed at top with logo, links, and Apply button. Footer at bottom with address.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/ src/app/layout.tsx
git commit -m "feat: add Navbar with mobile drawer and Footer"
```

---

### Task 4: Homepage

**Files:**
- Create: `src/components/home/Hero.tsx`, `src/components/home/PlatformLogos.tsx`, `src/components/home/Problem.tsx`, `src/components/home/TwoPillars.tsx`, `src/components/home/Stats.tsx`, `src/components/home/HowWeWork.tsx`, `src/components/home/Testimonial.tsx`, `src/components/home/FinalCTA.tsx`, `src/lib/constants.ts`
- Modify: `src/app/page.tsx`
- Create: `public/logos/shopify.svg`, `public/logos/meta.svg`, `public/logos/google.svg`, `public/logos/klaviyo.svg`

- [ ] **Step 1: Create constants file**

Create `src/lib/constants.ts`:

```ts
export const stats = [
  { value: 32, prefix: "+", suffix: "%", label: "AVG MARGIN LIFT" },
  { value: 40, suffix: "hrs", label: "SAVED WEEKLY" },
  { value: 3.2, suffix: "x", label: "AVG MER", decimals: 1 },
  { value: 41, prefix: "-", suffix: "%", label: "CAC REDUCTION" },
];

export const pillarOneServices = [
  "Meta & Google Ads management",
  "Brand positioning & strategy",
  "Creative & ad production",
  "Social media advertising strategy",
];

export const pillarTwoServices = [
  "AI-powered ad & listicle generation",
  "E-commerce workflow automation",
  "AI-built Shopify store optimization",
  "Operational AI integration",
];

export const howWeWorkSteps = [
  {
    number: "01",
    title: "Strategy Audit",
    description:
      "We analyze your store, ads, and operations to find the biggest leverage points.",
  },
  {
    number: "02",
    title: "Custom Roadmap",
    description:
      "We build a 90-day growth plan combining paid media strategy with AI automation.",
  },
  {
    number: "03",
    title: "Execute & Scale",
    description:
      "We launch campaigns, deploy AI workflows, and optimize weekly based on real data.",
  },
];

export const teamMembers = [
  {
    name: "Founder Name",
    role: "Founder & CEO",
    bio: "Brief bio — background, expertise, what drives them.",
  },
  {
    name: "Team Member",
    role: "Head of Growth",
    bio: "Brief bio — background, expertise, what drives them.",
  },
  {
    name: "Team Member",
    role: "AI Operations Lead",
    bio: "Brief bio — background, expertise, what drives them.",
  },
];

export const revenueOptions = [
  "$50K–$100K",
  "$100K–$500K",
  "$500K–$1M",
  "$1M–$5M",
  "$5M+",
];

export const serviceOptions = [
  "Meta Ads",
  "Google Ads",
  "Brand Strategy",
  "Creative Strategy",
  "AI Automation",
  "Store Optimization",
  "Full Partnership",
];

export const referralOptions = ["Referral", "Google", "Social Media", "Other"];
```

- [ ] **Step 2: Create platform logo SVGs**

Create simple grayscale placeholder SVGs in `public/logos/`. These are simple wordmarks:

Create `public/logos/shopify.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" fill="#999"><text x="10" y="28" font-family="system-ui" font-size="16" font-weight="600">Shopify</text></svg>
```

Create `public/logos/meta.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" fill="#999"><text x="10" y="28" font-family="system-ui" font-size="16" font-weight="600">Meta Ads</text></svg>
```

Create `public/logos/google.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" fill="#999"><text x="10" y="28" font-family="system-ui" font-size="16" font-weight="600">Google Ads</text></svg>
```

Create `public/logos/klaviyo.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" fill="#999"><text x="10" y="28" font-family="system-ui" font-size="16" font-weight="600">Klaviyo</text></svg>
```

- [ ] **Step 3: Create Hero component**

Create `src/components/home/Hero.tsx`:

```tsx
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";

export default function Hero() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <FadeIn className="flex-1">
          <Eyebrow>E-Commerce Growth Partner</Eyebrow>
          <h1 className="font-serif font-light text-[28px] md:text-[36px] text-ink leading-tight mb-4">
            Human strategy. AI infrastructure.
            <br />
            Shopify brands that scale.
          </h1>
          <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-6 max-w-lg">
            We help e-commerce brands lower CAC, expand margins, and automate
            operations — so you can focus on building your brand, not managing
            your agency.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/apply">Book a Strategy Audit</Button>
            <Button href="#stats" variant="secondary">
              See Our Work →
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="flex-1 w-full">
          <ImagePlaceholder
            label="HERO IMAGE"
            sublabel="Dashboard mockup, Shopify analytics, or brand collage"
            className="h-[260px] lg:h-[320px]"
          />
        </FadeIn>
      </div>
    </Section>
  );
}
```

- [ ] **Step 4: Create PlatformLogos component**

Create `src/components/home/PlatformLogos.tsx`:

```tsx
import Section from "@/components/ui/Section";
import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";

const platforms = [
  { src: "/logos/shopify.svg", alt: "Shopify", label: "Shopify" },
  { src: "/logos/meta.svg", alt: "Meta Ads", label: "Meta Ads" },
  { src: "/logos/google.svg", alt: "Google Ads", label: "Google Ads" },
  { src: "/logos/klaviyo.svg", alt: "Klaviyo", label: "Klaviyo" },
];

export default function PlatformLogos() {
  return (
    <Section variant="off-white" className="!py-8">
      <FadeIn>
        <p className="text-eyebrow text-gray-400 text-center mb-6 tracking-[2px]">
          PLATFORMS WE BUILD ON
        </p>
        <div className="flex justify-center items-center gap-10 md:gap-16 flex-wrap">
          {platforms.map((p) => (
            <div key={p.label} className="text-center opacity-60 hover:opacity-100 transition-opacity">
              <Image src={p.src} alt={p.alt} width={100} height={32} className="grayscale" />
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
```

- [ ] **Step 5: Create Problem component**

Create `src/components/home/Problem.tsx`:

```tsx
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";

export default function Problem() {
  return (
    <Section variant="dark">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <FadeIn className="flex-1">
          <Eyebrow>The Old Model Is Broken</Eyebrow>
          <h2 className="font-serif font-light text-[22px] md:text-[28px] text-white leading-snug mb-4">
            Ad costs keep climbing. Your agency keeps hiring. Meanwhile, your
            margins keep shrinking.
          </h2>
          <p className="text-dark-body text-sm leading-relaxed">
            Most agencies throw more people at the problem. We built a different
            model — one where AI handles the repetitive work and senior
            strategists focus on what actually moves your margins. The result:
            better performance, faster execution, lower overhead.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="flex-shrink-0 w-full lg:w-[200px]">
          <ImagePlaceholder
            label="VISUAL"
            sublabel="Rising cost graph or old vs new model"
            dark
            className="h-[180px]"
          />
        </FadeIn>
      </div>
    </Section>
  );
}
```

- [ ] **Step 6: Create TwoPillars component**

Create `src/components/home/TwoPillars.tsx`:

```tsx
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";
import { pillarOneServices, pillarTwoServices } from "@/lib/constants";

export default function TwoPillars() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <FadeIn>
          <Card className="h-full">
            <ImagePlaceholder
              label="Ad dashboard / campaign visual"
              className="h-[120px] mb-4"
            />
            <Eyebrow>Pillar One</Eyebrow>
            <h3 className="text-lg font-semibold text-ink mb-2">Revenue Engineering</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
              Meta Ads. Google Ads. Brand strategy. Creative strategy. We don&apos;t
              just manage campaigns — we engineer profitable growth systems.
            </p>
            <ul className="text-small text-gray-700 space-y-1.5 list-disc pl-4">
              {pillarOneServices.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Card>
        </FadeIn>
        <FadeIn delay={0.15}>
          <Card className="h-full">
            <ImagePlaceholder
              label="AI workflow / automation visual"
              className="h-[120px] mb-4"
            />
            <Eyebrow>Pillar Two</Eyebrow>
            <h3 className="text-lg font-semibold text-ink mb-2">
              AI Commerce Operations
            </h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
              Custom AI workflows that automate your operations — from ad
              creation to store optimization. Your unfair competitive advantage.
            </p>
            <ul className="text-small text-gray-700 space-y-1.5 list-disc pl-4">
              {pillarTwoServices.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
```

- [ ] **Step 7: Create Stats component**

Create `src/components/home/Stats.tsx`:

```tsx
import Section from "@/components/ui/Section";
import CountUp from "@/components/ui/CountUp";
import FadeIn from "@/components/shared/FadeIn";
import { stats } from "@/lib/constants";

export default function Stats() {
  return (
    <Section variant="off-white" id="stats">
      <FadeIn>
        <p className="text-eyebrow text-gray-400 text-center mb-8 tracking-[2px]">
          THE NUMBERS THAT MATTER
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="border-r border-border last:border-r-0">
              <div>
                <div className="text-[36px] font-bold text-ink">
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-[11px] text-gray-400 tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
```

- [ ] **Step 8: Create HowWeWork component**

Create `src/components/home/HowWeWork.tsx`:

```tsx
import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";
import { howWeWorkSteps } from "@/lib/constants";

export default function HowWeWork() {
  return (
    <Section>
      <FadeIn>
        <h2 className="font-serif font-light text-[22px] md:text-[28px] text-ink mb-2">
          How we work
        </h2>
        <p className="text-sm text-gray-400 mb-8">
          From audit to execution in 14 days.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {howWeWorkSteps.map((step, i) => (
          <FadeIn key={step.number} delay={i * 0.1}>
            <div className="bg-off-white rounded-md p-5">
              <ImagePlaceholder
                label="Step illustration"
                className="h-[80px] mb-3"
              />
              <div className="text-[28px] font-bold text-forest mb-2">
                {step.number}
              </div>
              <h3 className="text-sm font-semibold text-ink mb-1">
                {step.title}
              </h3>
              <p className="text-small text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 9: Create Testimonial component**

Create `src/components/home/Testimonial.tsx`:

```tsx
import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";

export default function Testimonial() {
  return (
    <Section>
      <FadeIn>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <div className="flex-shrink-0">
            <ImagePlaceholder
              label="Photo"
              className="w-20 h-20"
              rounded="full"
            />
          </div>
          <div>
            <p className="font-serif italic text-[16px] text-gray-700 leading-relaxed mb-3">
              &ldquo;Scale OS completely transformed how we run our Shopify store.
              Our CAC dropped 38% in the first 60 days, and the AI workflows
              save our team 30+ hours a week.&rdquo;
            </p>
            <p className="text-[13px] text-gray-400">
              <strong className="text-ink">Client Name</strong> &middot;
              Founder, Brand Name
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
```

- [ ] **Step 10: Create FinalCTA component (homepage-specific)**

Create `src/components/home/FinalCTA.tsx`:

```tsx
import CTASection from "@/components/shared/CTASection";

export default function FinalCTA() {
  return (
    <CTASection
      heading="Ready to stop scaling the hard way?"
      subtext="We partner with a limited number of Shopify brands each quarter. Apply to see if we're a fit."
      buttonText="Apply for Partnership"
    />
  );
}
```

- [ ] **Step 11: Assemble homepage**

Replace `src/app/page.tsx`:

```tsx
import Hero from "@/components/home/Hero";
import PlatformLogos from "@/components/home/PlatformLogos";
import Problem from "@/components/home/Problem";
import TwoPillars from "@/components/home/TwoPillars";
import Stats from "@/components/home/Stats";
import HowWeWork from "@/components/home/HowWeWork";
import Testimonial from "@/components/home/Testimonial";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformLogos />
      <Problem />
      <TwoPillars />
      <Stats />
      <HowWeWork />
      <Testimonial />
      <FinalCTA />
    </>
  );
}
```

- [ ] **Step 12: Verify homepage renders**

```bash
npm run dev
```

Expected: Full homepage renders with all 8 sections, navigation, and footer. Animations trigger on scroll.

- [ ] **Step 13: Commit**

```bash
git add src/ public/logos/
git commit -m "feat: build complete homepage with all sections"
```

---

### Task 5: Services Page

**Files:**
- Create: `src/app/services/page.tsx`, `src/components/services/ServicesHero.tsx`, `src/components/services/PillarOne.tsx`, `src/components/services/PillarTwo.tsx`, `src/components/services/WhyBoth.tsx`

- [ ] **Step 1: Create ServicesHero**

Create `src/components/services/ServicesHero.tsx`:

```tsx
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

export default function ServicesHero() {
  return (
    <Section>
      <FadeIn>
        <Eyebrow>What We Do</Eyebrow>
        <h1 className="font-serif font-light text-[28px] md:text-[36px] text-ink leading-tight mb-4">
          Two systems. One growth engine.
        </h1>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg">
          We pair elite media buying with custom AI automation — so your Shopify
          brand grows faster with less overhead.
        </p>
      </FadeIn>
    </Section>
  );
}
```

- [ ] **Step 2: Create PillarOne**

Create `src/components/services/PillarOne.tsx`:

```tsx
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";

const services = [
  {
    title: "Meta Ads Management",
    description:
      "Full-funnel Meta campaigns — from prospecting to retargeting. We build creative systems that scale, not one-off ads that burn out.",
  },
  {
    title: "Google Ads Management",
    description:
      "Search, Shopping, and Performance Max campaigns engineered for profitable customer acquisition across Google's ecosystem.",
  },
  {
    title: "Brand Strategy",
    description:
      "Positioning, messaging, and identity that makes your brand impossible to ignore in a crowded market. Strategy that guides every touchpoint.",
  },
  {
    title: "Creative Strategy",
    description:
      "Data-driven ad creative — from concept to production. We identify winning angles, test relentlessly, and scale what works.",
  },
];

export default function PillarOne() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-10">
        <FadeIn className="flex-1">
          <Eyebrow>Pillar One</Eyebrow>
          <h2 className="font-serif font-light text-[22px] md:text-[28px] text-ink mb-3">
            Revenue Engineering
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            We don&apos;t just run ads — we build profitable acquisition systems.
            Every dollar is tracked to contribution margin, not vanity ROAS. Our
            strategists think in unit economics, not impressions.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="flex-shrink-0 w-full lg:w-[240px]">
          <ImagePlaceholder
            label="Campaign dashboard visual"
            className="h-[160px]"
          />
        </FadeIn>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, i) => (
          <FadeIn key={service.title} delay={i * 0.1}>
            <Card hover>
              <ImagePlaceholder label="icon" className="w-10 h-10 mb-3" rounded="lg" />
              <h3 className="text-[16px] font-semibold text-ink mb-2">
                {service.title}
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 3: Create PillarTwo**

Create `src/components/services/PillarTwo.tsx`:

```tsx
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";

const services = [
  {
    title: "AI Ad & Content Generation",
    description:
      "Generate ads, advertorials, and listicles at scale using trained AI workflows. Test more angles in a week than most teams test in a quarter.",
  },
  {
    title: "E-Commerce Workflow Automation",
    description:
      "Custom automation workflows that eliminate repetitive tasks across your operations — from inventory to customer communication to reporting.",
  },
  {
    title: "AI-Built Store Optimization",
    description:
      "We use AI tools to build, optimize, and iterate on your Shopify storefront — faster development cycles, better conversion rates.",
  },
  {
    title: "Operational AI Integration",
    description:
      "End-to-end AI integration into your daily business processes. We don't just hand you a chatbot — we embed intelligence into how your business runs.",
  },
];

export default function PillarTwo() {
  return (
    <>
      <Section variant="dark">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <FadeIn className="flex-1">
            <Eyebrow>Pillar Two</Eyebrow>
            <h2 className="font-serif font-light text-[22px] md:text-[28px] text-white mb-3">
              AI Commerce Operations
            </h2>
            <p className="text-sm text-dark-body leading-relaxed">
              This is where most agencies can&apos;t follow. We build custom AI
              workflows that plug directly into your Shopify operations —
              automating the work that used to require entire teams.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="flex-shrink-0 w-full lg:w-[240px]">
            <ImagePlaceholder
              label="AI workflow diagram"
              dark
              className="h-[160px]"
            />
          </FadeIn>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <Card hover>
                <ImagePlaceholder label="icon" className="w-10 h-10 mb-3" rounded="lg" />
                <h3 className="text-[16px] font-semibold text-ink mb-2">
                  {service.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
```

- [ ] **Step 4: Create WhyBoth**

Create `src/components/services/WhyBoth.tsx`:

```tsx
import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

const advantages = [
  { value: "10x", label: "Faster creative iteration" },
  { value: "60%", label: "Less operational overhead" },
  { value: "1", label: "Unified growth partner" },
];

export default function WhyBoth() {
  return (
    <Section variant="off-white">
      <FadeIn>
        <h2 className="font-serif font-light text-[22px] md:text-[28px] text-ink mb-3">
          Why this combination wins
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-lg">
          Most agencies do one or the other. Great creative with no operational
          leverage. Or AI tools with no marketing fundamentals. We do both —
          because that&apos;s what actually scales.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-around gap-6">
          {advantages.map((a, i) => (
            <div key={a.label} className="flex items-center gap-6">
              {i > 0 && <div className="hidden md:block w-px h-12 bg-border" />}
              <div className="text-center py-4 px-6">
                <div className="text-[32px] font-bold text-forest mb-1">
                  {a.value}
                </div>
                <div className="text-small text-gray-500">{a.label}</div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
```

- [ ] **Step 5: Assemble Services page**

Create `src/app/services/page.tsx`:

```tsx
import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import PillarOne from "@/components/services/PillarOne";
import PillarTwo from "@/components/services/PillarTwo";
import WhyBoth from "@/components/services/WhyBoth";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Revenue engineering and AI commerce operations for Shopify brands. Meta Ads, Google Ads, brand strategy, and custom AI automation workflows.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <PillarOne />
      <PillarTwo />
      <WhyBoth />
      <CTASection
        heading="See what both pillars could do for your brand."
        subtext="Book a strategy audit — we'll show you exactly where AI and paid media can unlock your next phase of growth."
        buttonText="Book a Strategy Audit"
      />
    </>
  );
}
```

- [ ] **Step 6: Verify services page renders**

```bash
npm run dev
```

Navigate to `/services`. Expected: Full services page with hero, both pillars, WhyBoth stats, and CTA.

- [ ] **Step 7: Commit**

```bash
git add src/app/services/ src/components/services/
git commit -m "feat: build Services page with both pillar sections"
```

---

### Task 6: About Page

**Files:**
- Create: `src/app/about/page.tsx`, `src/components/about/AboutHero.tsx`, `src/components/about/WhyWeExist.tsx`, `src/components/about/Principles.tsx`, `src/components/about/Team.tsx`

- [ ] **Step 1: Create AboutHero**

Create `src/components/about/AboutHero.tsx`:

```tsx
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

export default function AboutHero() {
  return (
    <Section>
      <FadeIn>
        <Eyebrow>About Scale OS</Eyebrow>
        <h1 className="font-serif font-light text-[28px] md:text-[36px] text-ink leading-tight mb-4">
          Human-led. AI-executed.
        </h1>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg">
          We started Scale OS because we saw the same problem everywhere:
          agencies were either great at marketing or great at technology — never
          both.
        </p>
      </FadeIn>
    </Section>
  );
}
```

- [ ] **Step 2: Create WhyWeExist**

Create `src/components/about/WhyWeExist.tsx`:

```tsx
import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";

export default function WhyWeExist() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <FadeIn className="flex-1">
          <h2 className="font-serif font-light text-[22px] md:text-[28px] text-ink mb-4">
            Why we exist
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            The e-commerce agency model hasn&apos;t changed in a decade. Brands
            hire an agency, the agency hires more people, costs go up, and
            margins go down. Meanwhile, AI is transforming every other industry.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            We built Scale OS to be the agency we always wished existed — one
            that combines the strategic depth of a top-tier growth team with the
            operational leverage of custom AI systems. The result is better
            performance at a fraction of the traditional overhead.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="flex-shrink-0 w-full lg:w-[220px]">
          <ImagePlaceholder
            label="Founder photo or team working visual"
            className="h-[240px]"
          />
        </FadeIn>
      </div>
    </Section>
  );
}
```

- [ ] **Step 3: Create Principles**

Create `src/components/about/Principles.tsx`:

```tsx
import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

const principles = [
  {
    number: "01",
    title: "Margins over metrics",
    description:
      "We optimize for contribution margin and real profit — not vanity ROAS or impressions that don't pay your bills.",
  },
  {
    number: "02",
    title: "AI as leverage, not gimmick",
    description:
      "We deploy AI where it creates real operational advantage — not to check a trend box. If AI doesn't help, we don't use it.",
  },
  {
    number: "03",
    title: "Fewer clients, deeper work",
    description:
      "We limit the number of brands we work with so every partnership gets senior-level attention. No junior account managers.",
  },
];

export default function Principles() {
  return (
    <Section variant="dark">
      <FadeIn>
        <h2 className="font-serif font-light text-[22px] md:text-[28px] text-white mb-8">
          How we think
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {principles.map((p, i) => (
          <FadeIn key={p.number} delay={i * 0.1}>
            <div className="bg-white/5 rounded-lg p-5">
              <div className="text-[28px] font-bold text-forest mb-3">
                {p.number}
              </div>
              <h3 className="text-[16px] font-semibold text-white mb-2">
                {p.title}
              </h3>
              <p className="text-[13px] text-dark-body leading-relaxed">
                {p.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 4: Create Team**

Create `src/components/about/Team.tsx`:

```tsx
import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";
import { teamMembers } from "@/lib/constants";

export default function Team() {
  return (
    <Section>
      <FadeIn>
        <h2 className="font-serif font-light text-[22px] md:text-[28px] text-ink mb-2">
          The team
        </h2>
        <p className="text-sm text-gray-400 mb-8">
          Senior operators, not junior executors.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, i) => (
          <FadeIn key={member.role} delay={i * 0.1}>
            <div className="text-center">
              <ImagePlaceholder
                label="Photo"
                className="w-24 h-24 mx-auto mb-3"
                rounded="full"
              />
              <h4 className="text-[15px] font-semibold text-ink mb-1">
                {member.name}
              </h4>
              <p className="text-small text-forest font-medium mb-2">
                {member.role}
              </p>
              <p className="text-small text-gray-400 leading-relaxed">
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

- [ ] **Step 5: Assemble About page**

Create `src/app/about/page.tsx`:

```tsx
import { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import WhyWeExist from "@/components/about/WhyWeExist";
import Principles from "@/components/about/Principles";
import Team from "@/components/about/Team";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Scale OS combines elite e-commerce strategy with AI infrastructure. Human-led, AI-executed.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyWeExist />
      <Principles />
      <Team />
      <CTASection
        heading="Want to work with us?"
        subtext="We take on a limited number of partners each quarter. Tell us about your brand and we'll see if there's a fit."
        buttonText="Apply for Partnership"
      />
    </>
  );
}
```

- [ ] **Step 6: Verify about page renders**

```bash
npm run dev
```

Navigate to `/about`. Expected: Full about page with hero, story, principles, team, and CTA.

- [ ] **Step 7: Commit**

```bash
git add src/app/about/ src/components/about/
git commit -m "feat: build About page with principles and team sections"
```

---

### Task 7: Apply Page & Form

**Files:**
- Create: `src/app/apply/page.tsx`, `src/components/apply/ApplyForm.tsx`, `src/lib/validation.ts`, `src/app/api/apply/route.ts`

- [ ] **Step 1: Create validation logic**

Create `src/lib/validation.ts`:

```ts
export interface FormData {
  name: string;
  email: string;
  business: string;
  shopifyUrl: string;
  revenue: string;
  services: string[];
  challenge: string;
  referral: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  business?: string;
  shopifyUrl?: string;
  revenue?: string;
  services?: string;
  challenge?: string;
}

export function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name || data.name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.business || data.business.length < 2) {
    errors.business = "Business name must be at least 2 characters.";
  }
  if (!data.shopifyUrl || !/^https?:\/\/.+\..+/.test(data.shopifyUrl)) {
    errors.shopifyUrl = "Please enter a valid URL.";
  }
  if (!data.revenue) {
    errors.revenue = "Please select your monthly revenue.";
  }
  if (!data.services || data.services.length === 0) {
    errors.services = "Please select at least one service.";
  }
  if (!data.challenge || data.challenge.length < 10) {
    errors.challenge = "Please describe your challenge (at least 10 characters).";
  }

  return errors;
}
```

- [ ] **Step 2: Create API route**

Create `src/app/api/apply/route.ts`:

```ts
import { NextRequest, NextResponse } from "next/server";
import { validateForm, FormData } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body: FormData = await request.json();
    const errors = validateForm(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    // TODO: Send email via Resend, store in DB, or forward to webhook
    // For now, just log and return success
    console.log("New application received:", body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 3: Create ApplyForm component**

Create `src/components/apply/ApplyForm.tsx`:

```tsx
"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { FormData, FormErrors, validateForm } from "@/lib/validation";
import { revenueOptions, serviceOptions, referralOptions } from "@/lib/constants";

export default function ApplyForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    business: "",
    shopifyUrl: "",
    revenue: "",
    services: [],
    challenge: "",
    referral: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <h2 className="font-serif font-light text-[28px] text-ink mb-3">
          Application received.
        </h2>
        <p className="text-gray-500 mb-6">
          We&apos;ll be in touch within 48 hours.
        </p>
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </div>
    );
  }

  const inputClass =
    "w-full border border-[#ddd] rounded px-3.5 py-3 text-sm text-ink placeholder:text-gray-300 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest-light transition-colors";

  return (
    <form onSubmit={handleSubmit} noValidate>
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-error text-sm rounded px-4 py-3 mb-6">
          Something went wrong. Please try again.
        </div>
      )}

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
            YOUR NAME *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
            EMAIL ADDRESS *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="business" className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
            BUSINESS NAME *
          </label>
          <input
            id="business"
            name="business"
            type="text"
            placeholder="Your brand name"
            value={formData.business}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.business && <p className="text-error text-xs mt-1">{errors.business}</p>}
        </div>
        <div>
          <label htmlFor="shopifyUrl" className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
            SHOPIFY STORE URL *
          </label>
          <input
            id="shopifyUrl"
            name="shopifyUrl"
            type="url"
            placeholder="https://yourstore.com"
            value={formData.shopifyUrl}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.shopifyUrl && <p className="text-error text-xs mt-1">{errors.shopifyUrl}</p>}
        </div>
      </div>

      {/* Row 3: Revenue */}
      <div className="mb-5">
        <label htmlFor="revenue" className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
          MONTHLY REVENUE *
        </label>
        <select
          id="revenue"
          name="revenue"
          value={formData.revenue}
          onChange={handleChange}
          className={`${inputClass} appearance-none bg-white`}
        >
          <option value="">Select a range</option>
          {revenueOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.revenue && <p className="text-error text-xs mt-1">{errors.revenue}</p>}
      </div>

      {/* Row 4: Services */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
          WHAT ARE YOU LOOKING FOR? *
        </label>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((service) => {
            const selected = formData.services.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`rounded-full px-4 py-2 text-[13px] border transition-colors ${
                  selected
                    ? "border-forest bg-forest-light text-forest"
                    : "border-[#ddd] bg-white text-gray-700 hover:border-gray-400"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
        {errors.services && <p className="text-error text-xs mt-1">{errors.services}</p>}
      </div>

      {/* Row 5: Challenge */}
      <div className="mb-5">
        <label htmlFor="challenge" className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
          WHAT&apos;S YOUR BIGGEST GROWTH CHALLENGE RIGHT NOW? *
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={4}
          placeholder="Tell us what's holding your brand back..."
          value={formData.challenge}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
        {errors.challenge && <p className="text-error text-xs mt-1">{errors.challenge}</p>}
      </div>

      {/* Row 6: Referral */}
      <div className="mb-8">
        <label htmlFor="referral" className="block text-xs font-semibold text-gray-700 tracking-wide mb-1.5">
          HOW DID YOU HEAR ABOUT US?
        </label>
        <select
          id="referral"
          name="referral"
          value={formData.referral}
          onChange={handleChange}
          className={`${inputClass} appearance-none bg-white`}
        >
          <option value="">Select one (optional)</option>
          {referralOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <div className="text-center">
        <Button
          type="submit"
          variant="primary"
          disabled={status === "submitting"}
          className="min-w-[200px]"
        >
          {status === "submitting" ? "SUBMITTING..." : "SUBMIT APPLICATION"}
        </Button>
        <p className="text-[11px] text-gray-300 mt-3">
          We&apos;ll review your application and respond within 48 hours.
        </p>
      </div>
    </form>
  );
}
```

- [ ] **Step 4: Assemble Apply page**

Create `src/app/apply/page.tsx`:

```tsx
import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import ApplyForm from "@/components/apply/ApplyForm";
import FadeIn from "@/components/shared/FadeIn";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to partner with Scale OS. We work with a limited number of Shopify brands each quarter.",
};

export default function ApplyPage() {
  return (
    <>
      {/* Hero */}
      <Section className="text-center">
        <FadeIn>
          <Eyebrow className="mx-auto">Apply for Partnership</Eyebrow>
          <h1 className="font-serif font-light text-[28px] md:text-[36px] text-ink leading-tight mb-4">
            Tell us about your brand.
          </h1>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-md mx-auto">
            We work with a limited number of Shopify brands each quarter. Fill
            out the form below and we&apos;ll be in touch within 48 hours if
            there&apos;s a fit.
          </p>
        </FadeIn>
      </Section>

      {/* Form */}
      <Section className="!pt-0">
        <FadeIn>
          <div className="max-w-2xl mx-auto bg-white border border-border rounded-lg p-6 md:p-10">
            <ApplyForm />
          </div>
        </FadeIn>
      </Section>

      {/* What Happens Next */}
      <Section variant="off-white">
        <FadeIn>
          <h3 className="font-serif font-light text-[18px] text-ink mb-6">
            After you apply
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                title: "We review",
                desc: "Our team reviews your application within 48 hours.",
              },
              {
                num: "2",
                title: "Strategy call",
                desc: "If there's a fit, we schedule a 30-minute strategy call to dig into your brand.",
              },
              {
                num: "3",
                title: "Custom proposal",
                desc: "You receive a tailored growth plan with clear scope, pricing, and timeline.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-3">
                <div className="text-xl font-bold text-forest flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ink mb-1">
                    {step.title}
                  </h4>
                  <p className="text-small text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
```

- [ ] **Step 5: Verify apply page and form work**

```bash
npm run dev
```

Navigate to `/apply`. Expected: Form renders with all fields, toggle pills work, validation shows on empty submit, successful submit shows success message.

- [ ] **Step 6: Commit**

```bash
git add src/app/apply/ src/app/api/ src/components/apply/ src/lib/validation.ts
git commit -m "feat: build Apply page with intake form and API route"
```

---

### Task 8: 404 Page & Favicon

**Files:**
- Create: `src/app/not-found.tsx`, `public/favicon.svg`, `src/app/sitemap.ts`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create 404 page**

Create `src/app/not-found.tsx`:

```tsx
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="text-center min-h-[60vh] flex items-center justify-center">
      <div>
        <h1 className="font-serif font-light text-[36px] text-ink mb-3">
          Page not found
        </h1>
        <p className="text-gray-500 text-[15px] mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Create favicon SVG**

Create `public/favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="1"/>
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="Georgia, serif" font-size="20" font-weight="400" fill="#111111">S</text>
</svg>
```

- [ ] **Step 3: Add favicon to layout**

Update `src/app/layout.tsx` metadata to add `icons`:

```tsx
  icons: {
    icon: "/favicon.svg",
  },
```

- [ ] **Step 4: Create sitemap.ts**

Create `src/app/sitemap.ts`:

```ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://scaleos.com";
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/apply`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
```

- [ ] **Step 5: Add LocalBusiness schema to root layout**

Add a JSON-LD script to the `<head>` in `src/app/layout.tsx`, inside the `<html>` tag before `<body>`:

```tsx
<head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Scale OS LLC",
        description: "Premium e-commerce growth agency combining human strategy with AI infrastructure for Shopify brands.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1309 Coffeen Avenue STE 1200",
          addressLocality: "Sheridan",
          addressRegion: "WY",
          postalCode: "82801",
          addressCountry: "US",
        },
        url: "https://scaleos.com",
      }),
    }}
  />
</head>
```

- [ ] **Step 6: Verify 404, favicon, and sitemap**

```bash
npm run dev
```

Navigate to `/nonexistent`. Expected: Custom 404 page. Check browser tab for favicon. Navigate to `/sitemap.xml`. Expected: XML sitemap with 4 URLs.

- [ ] **Step 7: Commit**

```bash
git add src/app/not-found.tsx src/app/sitemap.ts public/favicon.svg src/app/layout.tsx
git commit -m "feat: add 404 page, favicon, sitemap, and LocalBusiness schema"
```

---

### Task 9: Final Build Verification

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: Build succeeds with no errors. All pages pre-render.

- [ ] **Step 2: Test production build locally**

```bash
npm run start
```

Navigate through all pages: `/`, `/services`, `/about`, `/apply`, `/nonexistent`. Verify:
- All sections render correctly
- Navigation works and highlights active page
- Mobile menu opens/closes
- Scroll animations trigger
- Count-up numbers animate
- Form validation works
- 404 page shows for invalid routes

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: verify production build passes"
```
