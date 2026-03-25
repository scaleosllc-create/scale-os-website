"use client";

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";

const phases = [
  {
    phase: "Phase 1",
    title: "Days 1\u201330: Foundation",
    items: [
      "Deep audit of your Shopify store, ad accounts, and operations",
      "Identify quick wins and low-hanging fruit",
      "Launch first AI automation workflows",
      "Deploy initial ad campaigns with rapid creative testing",
    ],
  },
  {
    phase: "Phase 2",
    title: "Days 31\u201360: Optimization",
    items: [
      "A/B test ad creative at 10x the speed with AI generation",
      "Optimize landing pages and product pages for conversion",
      "Build custom AI workflows for your specific operations",
      "Weekly performance reviews and strategic pivots",
    ],
  },
  {
    phase: "Phase 3",
    title: "Days 61\u201390: Scale",
    items: [
      "Scale winning campaigns with confidence in unit economics",
      "Deploy advanced AI systems across your operations",
      "Reduce manual workload by 40+ hours per week",
      "Establish repeatable growth system that compounds",
    ],
  },
];

export default function Timeline() {
  return (
    <Section variant="dark">
      <FadeIn>
        <Eyebrow className="!text-forest">THE SCALE OS SYSTEM</Eyebrow>
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-none font-serif font-light text-white mb-12">
          From audit to scale in 90 days.
        </h2>
      </FadeIn>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {phases.map((phase) => (
          <motion.div
            key={phase.phase}
            variants={staggerItemVariants}
            className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-8"
          >
            <p className="text-forest text-sm font-bold mb-2">{phase.phase}</p>
            <h3 className="text-xl font-semibold text-white mb-5">
              {phase.title}
            </h3>
            <ul className="space-y-3">
              {phase.items.map((item) => (
                <li
                  key={item}
                  className="text-[13px] text-dark-body leading-relaxed flex gap-2"
                >
                  <span className="text-forest mt-0.5 flex-shrink-0">&bull;</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
