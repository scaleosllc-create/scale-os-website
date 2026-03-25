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
    detail: "6x revenue in 4 months",
    before: "$56K/mo",
    after: "$340K/mo",
  },
  {
    number: "02",
    brand: "Velta Fitness",
    category: "Shopify Plus Equipment",
    detail: "2.1x revenue, 40hrs saved weekly",
    before: "$420K/mo",
    after: "$890K/mo",
  },
  {
    number: "03",
    brand: "Maison Home",
    category: "DTC Home & Living",
    detail: "2.2x revenue, $19 CAC",
    before: "$95K/mo",
    after: "$210K/mo",
  },
];

export default function Results() {
  return (
    <Section id="results" variant="surface-low">
      <FadeIn>
        <Eyebrow>Results</Eyebrow>
        <h2 className="font-display text-display-sm md:text-display-md lg:text-display-lg tracking-tighter text-white mb-4">
          What our system delivers
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed mb-12 max-w-[65ch]">
          Projected outcomes based on our methodology applied to typical Shopify
          brands in our target range.
        </p>
      </FadeIn>

      <StaggerContainer className="space-y-0">
        {caseStudies.map((study, index) => (
          <motion.div key={study.number} variants={staggerItemVariants}>
            {index > 0 && <div className="h-px bg-white/[0.04]" />}
            <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-8 py-10">
              <span className="font-display text-display-sm text-white/20">
                {study.number}
              </span>
              <div>
                <h3 className="font-display text-xl text-white tracking-tight mb-1">
                  {study.brand}
                </h3>
                <p className="text-[10px] uppercase tracking-wider text-on-surface-muted mb-2">
                  {study.category}
                </p>
                <p className="text-sm text-on-surface-variant">
                  {study.detail}
                </p>
              </div>
              <div className="flex items-center gap-3 md:justify-end">
                <span className="text-white text-lg font-semibold tabular-nums">
                  {study.before}
                </span>
                <span className="text-on-surface-muted">&rarr;</span>
                <span className="text-primary text-lg font-semibold tabular-nums">
                  {study.after}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
