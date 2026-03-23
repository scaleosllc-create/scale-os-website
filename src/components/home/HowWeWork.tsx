"use client";

import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, { staggerItemVariants } from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";
import { howWeWorkSteps } from "@/lib/constants";

export default function HowWeWork() {
  return (
    <Section>
      <FadeIn>
        <h2 className="font-serif font-light text-[22px] md:text-[28px] text-ink mb-2">
          How we work
        </h2>
        <p className="text-sm text-gray-400 mb-8">
          From audit to execution in 14 days.
        </p>
      </FadeIn>
      <div className="relative">
        <div className="hidden md:block absolute top-[140px] left-[16.67%] right-[16.67%] h-px bg-border" />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {howWeWorkSteps.map((step) => (
            <motion.div key={step.number} variants={staggerItemVariants}>
              <div className="bg-off-white rounded-md p-5 relative">
                <ImagePlaceholder
                  label="Step illustration"
                  className="h-[80px] mb-3"
                />
                <div className="text-[28px] font-bold text-forest mb-2">
                  {step.number}
                </div>
                <h3 className="text-sm font-semibold text-ink mb-1">
                  {step.title}
                </h3>
                <p className="text-small text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
