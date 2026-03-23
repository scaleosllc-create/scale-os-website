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
    title: "Premium Skincare Brand \u2014 DTC",
    metrics: [
      "Monthly Revenue: $180K \u2192 $340K",
      "CAC Reduced by 34%",
      "ROAS: 2.1x \u2192 4.8x",
    ],
    tags: ["Meta Ads", "Creative Strategy", "AI Automation"],
  },
  {
    title: "Fitness Equipment \u2014 Shopify Plus",
    metrics: [
      "Monthly Revenue: $420K \u2192 $890K",
      "40hrs/week saved with AI workflows",
      "Ad creative output: 5x increase",
    ],
    tags: ["Google Ads", "Workflow Automation", "Listicles"],
  },
  {
    title: "Home & Living Brand \u2014 DTC",
    metrics: [
      "Monthly Revenue: $95K \u2192 $210K",
      "CAC: $42 \u2192 $19",
      "Conversion Rate: 1.8% \u2192 3.4%",
    ],
    tags: ["Meta Ads", "Store Optimization", "Advertorials"],
  },
];

export default function Results() {
  return (
    <Section id="results">
      <FadeIn>
        <Eyebrow>RESULTS</Eyebrow>
        <h2 className="font-serif font-light text-[22px] md:text-[30px] text-ink tracking-tighter mb-3">
          What our system delivers
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-xl">
          Projected outcomes based on our methodology applied to typical Shopify
          brands in our target range.
        </p>
      </FadeIn>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {caseStudies.map((study) => (
          <motion.div
            key={study.title}
            variants={staggerItemVariants}
            className="bg-[#111] border border-white/10 rounded-lg p-6 shadow-card"
          >
            <h3 className="text-[14px] font-semibold text-white mb-4">
              {study.title}
            </h3>
            <ul className="space-y-2 mb-5">
              {study.metrics.map((metric) => (
                <li
                  key={metric}
                  className="text-[13px] text-forest font-medium"
                >
                  {metric}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-wider text-gray-400 border border-white/10 rounded-full px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
