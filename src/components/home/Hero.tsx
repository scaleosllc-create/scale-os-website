"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/shared/FadeIn";
import CountUp from "@/components/ui/CountUp";

export default function Hero() {
  return (
    <Section className="min-h-[90vh] flex flex-col items-center justify-center text-center !py-32 lg:!py-40">
      <FadeIn>
        <p className="text-label-sm uppercase text-primary tracking-widest mb-8">
          E-Commerce Growth Agency
        </p>
        <h1 className="font-display text-[2.75rem] md:text-[4.5rem] lg:text-[6rem] tracking-tighter leading-[0.95] text-white max-w-5xl mx-auto mb-6">
          We scale e-commerce brands with{" "}
          <em className="italic font-normal text-white/60">AI-powered</em>{" "}
          marketing.
        </h1>
        <p className="text-on-surface-variant text-base md:text-lg max-w-xl mx-auto mb-10">
          Revenue engineering and intelligent automation for Shopify brands
          doing $50K&ndash;$5M/month.
        </p>
        <div className="flex justify-center mb-24">
          <Button href="/apply" arrow>
            Apply for Strategy Audit
          </Button>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="h-px bg-white/[0.04] mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 35, prefix: "$", suffix: "M+", decimals: 0, label: "Managed Ad Spend" },
              { value: 3.5, prefix: "", suffix: "x", decimals: 1, label: "Avg Blended ROAS" },
              { value: 30, prefix: "", suffix: "%", decimals: 0, label: "Avg CAC Reduction" },
              { value: 40, prefix: "", suffix: "+", decimals: 0, label: "Hours Saved / Week" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="text-3xl md:text-4xl font-bold tabular-nums text-white">
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </span>
                <p className="text-on-surface-muted text-xs uppercase tracking-wider mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
