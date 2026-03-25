"use client";

import Image from "next/image";
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

        {/* Right: Hero image with dashboard overlay */}
        <FadeIn direction="right" delay={0.2} className="w-full">
          <div className="relative">
            <Image
              src="/images/hero-lifestyle.png"
              alt="Focused work at night — hands on laptop with data on screen"
              width={1376}
              height={768}
              className="w-full h-auto rounded-2xl"
              priority
            />
            <div className="absolute bottom-3 left-3 right-3 bg-surface-card/90 backdrop-blur-xl shadow-ambient rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-on-surface">Meta Ads — Live Dashboard</span>
                <span className="flex items-center gap-1 text-[9px] text-primary font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Live
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-primary/[0.04] rounded-lg p-2">
                  <p className="text-[8px] uppercase tracking-wider text-on-surface-variant">ROAS</p>
                  <p className="text-sm font-bold text-primary tabular-nums">4.2x</p>
                </div>
                <div className="bg-surface-low rounded-lg p-2">
                  <p className="text-[8px] uppercase tracking-wider text-on-surface-variant">CAC</p>
                  <p className="text-sm font-bold text-on-surface tabular-nums">$18.40</p>
                </div>
                <div className="bg-surface-low rounded-lg p-2">
                  <p className="text-[8px] uppercase tracking-wider text-on-surface-variant">Revenue</p>
                  <p className="text-sm font-bold text-on-surface tabular-nums">$142K</p>
                </div>
                <div className="bg-surface-low rounded-lg p-2">
                  <p className="text-[8px] uppercase tracking-wider text-on-surface-variant">Conv</p>
                  <p className="text-sm font-bold text-on-surface tabular-nums">3.8%</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
