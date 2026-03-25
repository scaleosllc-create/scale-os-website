"use client";

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";
import {
  TrendUp,
  ImageBroken,
  ClockCountdown,
  ChartLineDown,
  Users,
  Robot,
} from "@phosphor-icons/react";

const problems = [
  {
    icon: TrendUp,
    title: "Rising CAC",
    description:
      "Your cost per acquisition climbs every quarter while ROAS flatlines. Throwing more budget at the problem isn\u2019t working.",
  },
  {
    icon: ImageBroken,
    title: "Creative Fatigue",
    description:
      "Your ads stop converting after 2 weeks. Your team can\u2019t produce new angles fast enough to keep up.",
  },
  {
    icon: ClockCountdown,
    title: "Manual Operations",
    description:
      "Your team spends 40+ hours a week on tasks that should be automated. Reporting, inventory, customer comms.",
  },
  {
    icon: ChartLineDown,
    title: "Shrinking Margins",
    description:
      "Revenue grows but profit doesn\u2019t. Agency fees, tool costs, and ad spend eat everything.",
  },
  {
    icon: Users,
    title: "Agency Churn",
    description:
      "You\u2019ve been through 3 agencies in 2 years. None of them understood your unit economics.",
  },
  {
    icon: Robot,
    title: "AI Confusion",
    description:
      "Everyone says \u2018use AI\u2019 but nobody shows you how. You need implementation, not another chatbot pitch.",
  },
];

export default function ProblemGrid() {
  return (
    <Section>
      <FadeIn>
        <Eyebrow>SOUND FAMILIAR?</Eyebrow>
        <h2 className="font-display text-display-sm md:text-display-md lg:text-display-lg text-on-surface mb-10">
          The problems killing your margins
        </h2>
      </FadeIn>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {problems.map((problem) => (
          <motion.div key={problem.title} variants={staggerItemVariants}>
            <Card hover className="h-full">
              <div className="w-12 h-12 rounded-2xl bg-primary/[0.06] flex items-center justify-center mb-4">
                <problem.icon size={24} weight="light" className="text-primary" />
              </div>
              <h3 className="text-base font-semibold text-on-surface mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {problem.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
