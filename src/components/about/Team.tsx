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
        <h2 className="text-3xl md:text-4xl tracking-tighter leading-none font-serif font-light text-ink mb-3">
          The team
        </h2>
        <p className="text-sm text-gray-400 mb-12">
          Senior operators, not junior executors.
        </p>
      </FadeIn>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.map((member) => (
          <motion.div key={member.role} variants={staggerItemVariants}>
            <div className="text-center">
              <div className="ring-2 ring-forest/20 ring-offset-2 rounded-full w-24 h-24 mx-auto mb-4">
                <ImagePlaceholder
                  label="Photo"
                  className="w-24 h-24"
                  rounded="full"
                />
              </div>
              <h4 className="text-[15px] font-semibold text-ink mb-1">
                {member.name}
              </h4>
              <p className="text-sm text-forest font-medium mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {member.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
