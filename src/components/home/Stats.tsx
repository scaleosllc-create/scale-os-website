"use client";

import Section from "@/components/ui/Section";
import CountUp from "@/components/ui/CountUp";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, { staggerItemVariants } from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";
import { stats } from "@/lib/constants";

export default function Stats() {
  return (
    <Section variant="off-white" id="stats">
      <FadeIn>
        <p className="text-eyebrow text-gray-400 text-center mb-8 tracking-[2px]">
          THE NUMBERS THAT MATTER
        </p>
      </FadeIn>
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={staggerItemVariants} className="bg-white/60 rounded-xl p-6">
            <div className="text-[48px] md:text-[56px] font-bold text-ink tabular-nums tracking-tight">
              <CountUp
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            </div>
            <div className="text-[11px] text-gray-400 tracking-wider mt-1">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
