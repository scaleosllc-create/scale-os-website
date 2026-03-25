"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/shared/FadeIn";
import CountUp from "@/components/ui/CountUp";

export default function Hero() {
  return (
    <Section className="min-h-[90vh] flex flex-col items-center justify-center text-center !py-32 lg:!py-40">
      <FadeIn>
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-6">
          E-Commerce Growth Agency
        </p>
        <h1 className="font-display text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] tracking-tighter leading-[1.02] text-white max-w-5xl mx-auto mb-6">
          Your <em className="italic font-normal">e-commerce growth partner</em> — powered by AI.
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          We combine senior media buying with custom AI automation to scale Shopify brands faster — with less overhead and more profit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button href="/apply" arrow>Book a Strategy Session</Button>
          <Button href="#results" variant="ghost">See Results</Button>
        </div>

        {/* Big stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-16">
          {[
            { value: 35, prefix: "$", suffix: "M+", decimals: 0, label: "Managed Ad Spend" },
            { value: 3.5, prefix: "", suffix: "x", decimals: 1, label: "Avg Blended ROAS" },
            { value: 30, prefix: "", suffix: "%+", decimals: 0, label: "Avg CAC Reduction" },
            { value: 40, prefix: "", suffix: "+", decimals: 0, label: "Hours Saved / Week" },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="text-3xl md:text-4xl font-bold tabular-nums text-white">
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
              </span>
              <p className="text-on-surface-muted text-xs uppercase tracking-wider mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Hero lifestyle image */}
      <FadeIn delay={0.2}>
        <Image
          src="/images/hero-lifestyle.png"
          alt="Modern e-commerce workspace with analytics and product photography"
          width={1376}
          height={768}
          className="rounded-2xl w-full"
          priority
        />
      </FadeIn>
    </Section>
  );
}
