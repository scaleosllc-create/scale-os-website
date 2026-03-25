"use client";

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, { staggerItemVariants } from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";
import { MegaphoneSimple, MagnifyingGlass, PaintBrush, Crosshair, Article } from "@phosphor-icons/react";

const services = [
  {
    icon: MegaphoneSimple,
    title: "Meta Ads Management",
    description:
      "Full-funnel Meta campaigns from prospecting to retargeting. We build creative systems that scale — not one-off ads that burn out after two weeks. Structured testing, dynamic creative, and rigorous bid optimization.",
  },
  {
    icon: MagnifyingGlass,
    title: "Google Ads Management",
    description:
      "Search, Shopping, and Performance Max campaigns engineered for profitable customer acquisition. We think in contribution margin, not ROAS — because a 5x ROAS means nothing if your margins are underwater.",
  },
  {
    icon: PaintBrush,
    title: "Creative Strategy & Production",
    description:
      "Data-driven ad creative from concept to production. We analyze what\u2019s working, identify winning angles from competitor research, and produce thumb-stopping creative at a pace traditional teams can\u2019t match.",
  },
  {
    icon: Crosshair,
    title: "Brand Strategy & Positioning",
    description:
      "Positioning, messaging, and identity that makes your brand impossible to ignore. We define who you are, who you\u2019re for, and why you win — then make sure every ad, every landing page, every touchpoint reinforces it.",
  },
  {
    icon: Article,
    title: "Advertorial & Listicle Landing Pages",
    description:
      "High-converting advertorial and listicle pages that bridge the gap between ad click and purchase. Native-feeling content that educates, builds trust, and converts cold traffic into customers.",
  },
];

export default function PillarOne() {
  return (
    <Section variant="surface-low">
      <FadeIn>
        <Eyebrow>PILLAR ONE</Eyebrow>
        <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-on-surface mb-4">
          Revenue Engineering
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed max-w-[60ch] mb-16">
          We don&apos;t just run ads — we build profitable acquisition systems.
          Every dollar is tracked to contribution margin. Our strategists think in
          unit economics, not impressions.
        </p>
      </FadeIn>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div key={service.title} variants={staggerItemVariants}>
            <div className="bg-surface-card rounded-2xl p-8 h-full hover-kinetic">
              <service.icon size={28} weight="light" className="text-primary mb-5" />
              <h3 className="font-display text-lg text-on-surface tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
