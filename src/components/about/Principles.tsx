"use client";

import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Margins over metrics",
    description:
      "We optimize for contribution margin and real profit — not vanity ROAS or impressions that look good in a report but don't pay your bills. Every decision we make ties back to your bottom line.",
  },
  {
    number: "02",
    title: "AI as leverage, not gimmick",
    description:
      "We deploy AI where it creates genuine operational advantage — ad creative generation, workflow automation, data analysis. If AI doesn't measurably improve an outcome, we don't use it. No chatbots for the sake of chatbots.",
  },
  {
    number: "03",
    title: "Fewer clients, deeper work",
    description:
      "We cap our client roster. Every brand we partner with gets direct access to senior strategists — not a junior account manager reading from a script. We'd rather do exceptional work for 10 brands than mediocre work for 50.",
  },
  {
    number: "04",
    title: "Speed is a strategy",
    description:
      "While other agencies spend weeks in approval cycles, we test 50 ad angles in a day. AI handles the production volume. Humans make the strategic calls. The result: faster iteration, faster learning, faster growth.",
  },
  {
    number: "05",
    title: "Radical transparency",
    description:
      "No vanity dashboards. No cherry-picked metrics. You see what we see — real numbers, real performance, real trade-offs. If something isn't working, you'll hear it from us before you notice it yourself.",
  },
];

export default function Principles() {
  return (
    <Section variant="dark">
      <FadeIn>
        <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-4">
          How we think
        </h2>
        <p className="text-white/50 text-base leading-relaxed max-w-[55ch] mb-16">
          These aren&apos;t corporate values on a poster. They&apos;re the
          operating principles that shape every decision we make for your brand.
        </p>
      </FadeIn>
      <StaggerContainer className="space-y-0">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.number}
            variants={staggerItemVariants}
            className={`grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-8 ${
              index < principles.length - 1
                ? "border-b border-white/[0.06]"
                : ""
            }`}
          >
            <span className="font-display text-display-sm text-primary">
              {principle.number}
            </span>
            <div>
              <h3 className="font-display text-xl text-white mb-3 tracking-tight">
                {principle.title}
              </h3>
              <p className="text-white/50 text-base leading-relaxed max-w-[55ch]">
                {principle.description}
              </p>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
