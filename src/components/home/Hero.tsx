"use client";

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/shared/FadeIn";
import CountUp from "@/components/ui/CountUp";

export default function Hero() {
  return (
    <Section className="min-h-[90vh] flex items-center !py-24 lg:!py-32">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_40%_40%,rgba(0,88,188,0.06),transparent)]" />

        {/* Left: Copy */}
        <FadeIn direction="left">
          <Eyebrow>FOR SHOPIFY BRANDS DOING $50K&ndash;$5M/MONTH</Eyebrow>
          <h1 className="font-display text-display-lg md:text-[4.5rem] tracking-tighter leading-[1.02] text-on-surface mb-6">
            Cut your CAC by 30%.
            <br />
            Scale with AI systems that actually work.
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-[50ch] mb-8">
            We combine senior media buying with custom AI automation to grow
            Shopify brands faster — with less overhead and more profit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Button href="/apply" arrow>Book a Strategy Audit</Button>
            <Button href="#results" variant="ghost">
              See Results
            </Button>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {[
              { value: 2.4, prefix: "$", suffix: "M+", decimals: 1, label: "Revenue Driven" },
              { value: 30, prefix: "", suffix: "%", decimals: 0, label: "Avg CAC Reduction" },
              { value: 3.2, prefix: "", suffix: "x", decimals: 1, label: "Avg ROAS" },
              { value: 40, prefix: "", suffix: "hrs", decimals: 0, label: "Saved / wk with AI" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold tabular-nums text-on-surface">
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </span>
                <span className="text-[11px] uppercase tracking-[1.5px] text-on-surface-variant mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Right: Meta Ads Dashboard Mockup */}
        <FadeIn direction="right" delay={0.2} className="w-full">
          <div className="bg-surface-card shadow-ambient rounded-2xl overflow-hidden">
            {/* Top bar */}
            <div className="bg-surface-low px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#E54D42]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C941]" />
              </div>
              <span className="text-[11px] text-on-surface-variant">ads.scaleos.com/dashboard</span>
              <div />
            </div>

            {/* Dashboard header */}
            <div className="px-6 pt-5 pb-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">Client: Premium Skincare DTC</p>
                <p className="font-display text-lg text-on-surface">Campaign Performance</p>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-primary font-medium bg-primary/[0.06] rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Live
              </div>
            </div>

            {/* Metrics row */}
            <div className="px-6 grid grid-cols-4 gap-3 mb-5">
              <div className="bg-primary/[0.04] rounded-xl p-3">
                <p className="text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">ROAS</p>
                <p className="text-xl font-bold text-primary tabular-nums">4.2x</p>
                <p className="text-[9px] text-primary/60">+18% vs last month</p>
              </div>
              <div className="bg-surface-low rounded-xl p-3">
                <p className="text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">CAC</p>
                <p className="text-xl font-bold text-on-surface tabular-nums">$18.40</p>
                <p className="text-[9px] text-green-600">-34% vs last month</p>
              </div>
              <div className="bg-surface-low rounded-xl p-3">
                <p className="text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">Revenue</p>
                <p className="text-xl font-bold text-on-surface tabular-nums">$142K</p>
                <p className="text-[9px] text-green-600">+28% vs last month</p>
              </div>
              <div className="bg-surface-low rounded-xl p-3">
                <p className="text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">Spend</p>
                <p className="text-xl font-bold text-on-surface tabular-nums">$33.8K</p>
                <p className="text-[9px] text-on-surface-variant">Budget: $35K</p>
              </div>
            </div>

            {/* Chart */}
            <div className="px-6 pb-5">
              <div className="bg-surface-low rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-on-surface-variant">Revenue — Last 30 Days</span>
                  <span className="text-[10px] text-primary font-medium">↑ 28%</span>
                </div>
                <svg viewBox="0 0 400 100" className="w-full h-auto">
                  <defs>
                    <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0058bc" stopOpacity={0.12} />
                      <stop offset="100%" stopColor="#0058bc" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <polygon points="0,85 15,82 30,78 50,80 70,72 90,68 110,65 130,58 150,62 170,55 190,48 210,52 230,45 250,40 270,38 290,30 310,28 330,22 350,18 370,15 390,12 400,8 400,100 0,100" fill="url(#heroGrad)" />
                  <polyline points="0,85 15,82 30,78 50,80 70,72 90,68 110,65 130,58 150,62 170,55 190,48 210,52 230,45 250,40 270,38 290,30 310,28 330,22 350,18 370,15 390,12 400,8" fill="none" stroke="#0058bc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Campaign rows */}
            <div className="px-6 pb-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-surface-low rounded-lg px-4 py-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-[11px] text-on-surface">TOF — Broad Interest Prospecting</span>
                  </div>
                  <div className="flex items-center gap-6 text-[11px] tabular-nums">
                    <span className="text-on-surface-variant">$14.2K spend</span>
                    <span className="text-primary font-medium">5.1x ROAS</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-surface-low rounded-lg px-4 py-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0070eb]" />
                    <span className="text-[11px] text-on-surface">MOF — Lookalike Audiences</span>
                  </div>
                  <div className="flex items-center gap-6 text-[11px] tabular-nums">
                    <span className="text-on-surface-variant">$11.6K spend</span>
                    <span className="text-primary font-medium">3.8x ROAS</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-surface-low rounded-lg px-4 py-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4090e0]" />
                    <span className="text-[11px] text-on-surface">BOF — Retargeting + DPA</span>
                  </div>
                  <div className="flex items-center gap-6 text-[11px] tabular-nums">
                    <span className="text-on-surface-variant">$8.0K spend</span>
                    <span className="text-primary font-medium">6.2x ROAS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
