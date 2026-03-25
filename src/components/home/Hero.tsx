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

        {/* Right: Dashboard mockup */}
        <FadeIn direction="right" delay={0.2} className="w-full">
          <div className="bg-surface-card shadow-ambient rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <span className="text-[13px] font-semibold text-on-surface">
                Meta Ads Dashboard
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-primary font-medium">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                Live
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="bg-primary/[0.06] rounded-xl p-3">
                <p className="text-[10px] uppercase tracking-wider text-on-surface-variant mb-1">ROAS</p>
                <p className="text-xl font-semibold text-primary">4.2x</p>
              </div>
              <div className="bg-surface-low rounded-xl p-3">
                <p className="text-[10px] uppercase tracking-wider text-on-surface-variant mb-1">CAC</p>
                <p className="text-xl font-semibold text-on-surface">$18.40</p>
              </div>
              <div className="bg-surface-low rounded-xl p-3">
                <p className="text-[10px] uppercase tracking-wider text-on-surface-variant mb-1">Spend</p>
                <p className="text-xl font-semibold text-on-surface">$12.4K</p>
              </div>
            </div>

            <div className="bg-surface-low rounded-xl p-4">
              <svg viewBox="0 0 400 120" className="w-full h-auto" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0058bc" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0058bc" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon
                  points="0,100 30,90 70,85 110,75 150,70 190,55 230,50 270,40 310,30 350,22 400,10 400,120 0,120"
                  fill="url(#chartGradient)"
                />
                <polyline
                  points="0,100 30,90 70,85 110,75 150,70 190,55 230,50 270,40 310,30 350,22 400,10"
                  fill="none"
                  stroke="#0058bc"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="text-[11px] text-on-surface-variant mt-3 text-right">
              Last 30 days &middot; Revenue &uarr; 32%
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
