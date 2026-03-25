"use client";

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Premium Skincare Brand",
    subtitle: "DTC",
    metrics: [
      { label: "Monthly Revenue", value: "$180K \u2192 $340K" },
      { label: "CAC Reduced", value: "34%" },
      { label: "ROAS", value: "2.1x \u2192 4.8x" },
    ],
    tags: ["Meta Ads", "Creative Strategy", "AI Automation"],
    sparkPoints: "0,70 20,65 40,58 60,50 80,35 100,20 120,12",
  },
  {
    title: "Fitness Equipment",
    subtitle: "Shopify Plus",
    metrics: [
      { label: "Monthly Revenue", value: "$420K \u2192 $890K" },
      { label: "Time Saved", value: "40hrs/week" },
      { label: "Creative Output", value: "5x increase" },
    ],
    tags: ["Google Ads", "Workflow Automation", "Listicles"],
    sparkPoints: "0,68 20,62 40,55 60,42 80,28 100,18 120,8",
  },
  {
    title: "Home & Living Brand",
    subtitle: "DTC",
    metrics: [
      { label: "Monthly Revenue", value: "$95K \u2192 $210K" },
      { label: "CAC", value: "$42 \u2192 $19" },
      { label: "Conv Rate", value: "1.8% \u2192 3.4%" },
    ],
    tags: ["Meta Ads", "Store Optimization", "Advertorials"],
    sparkPoints: "0,72 20,68 40,60 60,48 80,32 100,22 120,10",
  },
];

export default function Results() {
  return (
    <Section id="results">
      <FadeIn>
        <Eyebrow>RESULTS</Eyebrow>
        <h2 className="font-display text-display-sm md:text-display-md lg:text-display-lg text-on-surface mb-4">
          What our system delivers
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed mb-12 max-w-[65ch]">
          Projected outcomes based on our methodology applied to typical Shopify
          brands in our target range.
        </p>
      </FadeIn>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {caseStudies.map((study, idx) => (
          <motion.div
            key={study.title}
            variants={staggerItemVariants}
          >
            <Card dark hover className="h-full">
              {/* Sparkline */}
              <div className="mb-4">
                <svg viewBox="0 0 120 80" className="w-full h-12">
                  <defs>
                    <linearGradient id={`sparkGrad${idx}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0058bc" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#0058bc" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <polygon
                    points={`${study.sparkPoints} 120,80 0,80`}
                    fill={`url(#sparkGrad${idx})`}
                  />
                  <polyline
                    points={study.sparkPoints}
                    fill="none"
                    stroke="#0058bc"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-white mb-1">
                {study.title}
              </p>
              <p className="text-xs text-white/50 mb-5">{study.subtitle}</p>
              <ul className="space-y-3 mb-6">
                {study.metrics.map((metric) => (
                  <li key={metric.label}>
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-0.5">
                      {metric.label}
                    </p>
                    <p className="text-2xl font-bold text-primary tabular-nums">
                      {metric.value}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-[10px] text-primary tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
