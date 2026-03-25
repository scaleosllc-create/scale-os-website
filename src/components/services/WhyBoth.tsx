"use client";

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, { staggerItemVariants } from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";

const comparison = [
  {
    category: "Creative Testing",
    without: "5 ad variations per month",
    with: "50+ ad variations per week",
  },
  {
    category: "Campaign Reporting",
    without: "Weekly PDF report, 3-day delay",
    with: "Real-time dashboards, AI-flagged anomalies",
  },
  {
    category: "Landing Pages",
    without: "1 new page every 3 weeks",
    with: "New advertorial live in 48 hours",
  },
  {
    category: "Operational Work",
    without: "40+ hours/week manual tasks",
    with: "Fully automated workflows",
  },
  {
    category: "Team Access",
    without: "Junior account manager",
    with: "Direct access to senior strategists",
  },
];

export default function WhyBoth() {
  return (
    <Section variant="surface-low">
      <FadeIn>
        <Eyebrow>THE ADVANTAGE</Eyebrow>
        <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-6 max-w-3xl">
          Why the combination wins
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-[60ch] mb-16">
          Great creative with no operational leverage. Or AI tools with no marketing
          fundamentals. Most agencies give you one or the other. The combination is
          what creates escape velocity.
        </p>
      </FadeIn>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            stat: "10x",
            label: "Creative velocity",
            description:
              "AI generates and tests ad creative at 10x the speed of traditional teams. More tests, faster learning, lower CAC.",
          },
          {
            stat: "40+",
            label: "Hours saved weekly",
            description:
              "Custom automation workflows eliminate repetitive manual tasks across your operations — freeing your team to focus on growth.",
          },
          {
            stat: "1",
            label: "Unified partner",
            description:
              "One team that owns both your paid media strategy and your AI infrastructure. No finger-pointing between vendors.",
          },
        ].map((item) => (
          <FadeIn key={item.label}>
            <div className="text-center md:text-left">
              <span className="font-display text-display-lg text-primary">
                {item.stat}
              </span>
              <h3 className="font-display text-lg text-white tracking-tight mt-2 mb-3">
                {item.label}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Comparison table */}
      <FadeIn>
        <h3 className="font-display text-display-sm tracking-tighter text-white mb-8">
          Traditional agency vs. Scale OS
        </h3>
      </FadeIn>
      <StaggerContainer className="space-y-0">
        {/* Header */}
        <motion.div variants={staggerItemVariants} className="grid grid-cols-[1fr_1fr_1fr] gap-4 md:gap-8 pb-4 mb-2">
          <span className="text-[10px] uppercase tracking-wider text-on-surface-muted" />
          <span className="text-[10px] uppercase tracking-wider text-on-surface-muted">Without AI</span>
          <span className="text-[10px] uppercase tracking-wider text-primary">With Scale OS</span>
        </motion.div>
        {comparison.map((row, index) => (
          <motion.div
            key={row.category}
            variants={staggerItemVariants}
            className={`grid grid-cols-[1fr_1fr_1fr] gap-4 md:gap-8 py-5 ${
              index < comparison.length - 1 ? "border-b border-white/[0.06]" : ""
            }`}
          >
            <span className="font-display text-sm text-white">{row.category}</span>
            <span className="text-sm text-on-surface-variant">{row.without}</span>
            <span className="text-sm text-white font-medium">{row.with}</span>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
