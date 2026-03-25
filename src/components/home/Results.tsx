"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";

const caseStudies = [
  {
    category: "PREMIUM SKINCARE \u2014 DTC",
    headline: "$56K/mo \u2192 $340K/mo",
    description: "Scaled Meta Ads with AI-generated creative testing. 34% CAC reduction in 60 days.",
    metrics: [
      { label: "Revenue Growth", value: "6x" },
      { label: "ROAS", value: "4.8x" },
      { label: "CAC Reduction", value: "34%" },
    ],
  },
  {
    category: "FITNESS EQUIPMENT \u2014 SHOPIFY PLUS",
    headline: "$420K/mo \u2192 $890K/mo",
    description: "Google Ads + AI workflow automation. 40 hours/week saved on operations.",
    metrics: [
      { label: "Revenue Growth", value: "2.1x" },
      { label: "Hours Saved", value: "40/wk" },
      { label: "Creative Output", value: "5x" },
    ],
  },
  {
    category: "HOME & LIVING \u2014 DTC",
    headline: "$95K/mo \u2192 $210K/mo",
    description: "Full-funnel Meta + Google strategy with AI-built advertorial landing pages.",
    metrics: [
      { label: "Revenue Growth", value: "2.2x" },
      { label: "Conv Rate", value: "3.4%" },
      { label: "CAC", value: "$19" },
    ],
  },
];

export default function Results() {
  return (
    <Section id="results">
      <FadeIn>
        <Eyebrow>RESULTS</Eyebrow>
        <h2 className="font-display text-display-sm md:text-display-md lg:text-display-lg text-white mb-4">
          What our system delivers
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed mb-12 max-w-[65ch]">
          Projected outcomes based on our methodology applied to typical Shopify
          brands in our target range.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Image
          src="/images/results-dashboard.png"
          alt="Performance analytics dashboard showing campaign metrics and revenue growth"
          width={1376}
          height={600}
          className="rounded-2xl w-full mb-12"
        />
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <motion.div
            key={study.headline}
            variants={staggerItemVariants}
          >
            <div className="bg-surface-card rounded-2xl p-8 h-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-surface-high">
              <p className="text-[10px] uppercase tracking-wider text-on-surface-muted mb-4">
                {study.category}
              </p>
              <h3 className="font-display text-3xl md:text-4xl tracking-tight text-white mb-3">
                {study.headline}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
                {study.description}
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.06]">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">
                      {metric.label}
                    </p>
                    <p className="text-xl font-bold text-primary tabular-nums">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
