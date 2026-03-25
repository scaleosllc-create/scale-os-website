"use client";

import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, { staggerItemVariants } from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";
import { teamMembers } from "@/lib/constants";

export default function Team() {
  return (
    <Section>
      <FadeIn>
        <h2 className="font-display text-display-sm md:text-display-md tracking-tighter leading-none text-on-surface mb-3">
          The team
        </h2>
        <p className="text-sm text-on-surface-variant mb-12">
          Senior operators, not junior executors.
        </p>
      </FadeIn>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.map((member) => (
          <motion.div key={member.role} variants={staggerItemVariants}>
            <div className="text-center">
              <div className="rounded-full w-24 h-24 mx-auto mb-4 overflow-hidden">
                <ImagePlaceholder
                  label="Photo"
                  className="w-24 h-24"
                  rounded="full"
                />
              </div>
              <h4 className="text-[15px] font-semibold text-on-surface mb-1">
                {member.name}
              </h4>
              <p className="text-sm text-primary font-medium mb-2">
                {member.role}
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {member.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
