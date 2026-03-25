"use client";

import Image from "next/image";
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
    stat: "4.2x avg ROAS",
    description:
      "Full-funnel Meta campaigns from prospecting to retargeting. We build creative systems that scale — structured testing across 50+ ad angles per month, dynamic creative optimization, and rigorous bid management that targets contribution margin, not vanity metrics.",
  },
  {
    icon: MagnifyingGlass,
    title: "Google Ads Management",
    stat: "30% avg CAC reduction",
    description:
      "Search, Shopping, and Performance Max campaigns engineered for profitable customer acquisition. We think in contribution margin, not ROAS — because a 5x ROAS means nothing if your margins are underwater. Full-funnel Google strategy from brand defense to cold prospecting.",
  },
  {
    icon: PaintBrush,
    title: "Creative Strategy & Production",
    stat: "10x creative velocity",
    description:
      "Data-driven ad creative from concept to production. We analyze top-performing hooks, identify winning angles from competitor research, and produce thumb-stopping creative at a pace traditional teams cannot match. 50 ad variations tested per week, not per quarter.",
  },
  {
    icon: Crosshair,
    title: "Brand Strategy & Positioning",
    stat: "Category-defining brands",
    description:
      "Positioning, messaging, and identity that makes your brand impossible to ignore. We define who you are, who you are for, and why you win — then make sure every ad, every landing page, every touchpoint reinforces that story with precision.",
  },
  {
    icon: Article,
    title: "Advertorial & Listicle Pages",
    stat: "3.4% avg conversion rate",
    description:
      "High-converting advertorial and listicle pages that bridge the gap between ad click and purchase. Native-feeling content that educates, builds trust, and converts cold traffic into customers — at 2-3x the rate of standard product pages.",
  },
];

export default function PillarOne() {
  return (
    <Section variant="surface-low">
      <FadeIn>
        <Image
          src="/images/ecom-products.png"
          alt="Premium e-commerce product photography and brand assets"
          width={1376}
          height={600}
          className="rounded-2xl w-full mb-16"
        />
      </FadeIn>
      <FadeIn>
        <Eyebrow>PILLAR ONE</Eyebrow>
        <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-4">
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
            <div className="bg-surface-card rounded-2xl p-8 h-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-surface-high">
              <service.icon size={28} weight="light" className="text-primary mb-5" />
              <h3 className="font-display text-lg text-white tracking-tight mb-1">
                {service.title}
              </h3>
              <p className="text-primary text-xs font-medium mb-3">
                {service.stat}
              </p>
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
