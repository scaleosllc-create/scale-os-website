"use client";

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";
import {
  ChartLineUp,
  MagnifyingGlass,
  PaintBrush,
  Compass,
  Article,
  Robot,
  Lightning,
  Storefront,
  CopySimple,
  Gear,
} from "@phosphor-icons/react";

const revenueServices = [
  {
    icon: ChartLineUp,
    title: "Meta Ads",
    description:
      "Full-funnel Meta campaigns with systematic creative testing and AI-accelerated iteration cycles.",
  },
  {
    icon: MagnifyingGlass,
    title: "Google Ads",
    description:
      "Search, Shopping, and Performance Max campaigns optimized for contribution margin, not vanity ROAS.",
  },
  {
    icon: PaintBrush,
    title: "Creative Strategy",
    description:
      "Hook-driven ad creative frameworks. We test 50 angles in the time it takes most agencies to produce 5.",
  },
  {
    icon: Compass,
    title: "Brand Strategy",
    description:
      "Market positioning, competitive analysis, and brand architecture that makes every ad dollar work harder.",
  },
  {
    icon: Article,
    title: "Advertorial / Listicle Pages",
    description:
      "High-converting landing pages built for cold traffic. Editorially styled, performance-optimized.",
  },
];

const aiServices = [
  {
    icon: Robot,
    title: "AI Ad & Content Gen",
    description:
      "AI systems that generate ad copy, creative variations, and content at scale — with human quality control.",
  },
  {
    icon: Lightning,
    title: "Workflow Automation",
    description:
      "Custom automation pipelines: order processing, email flows, inventory management, customer segmentation.",
  },
  {
    icon: Storefront,
    title: "Shopify Optimization",
    description:
      "Theme performance, conversion rate optimization, app stack audits, and checkout flow improvements.",
  },
  {
    icon: CopySimple,
    title: "Advertorial at Scale",
    description:
      "AI-powered advertorial and listicle generation with human editing. Produce 10x the landing pages.",
  },
  {
    icon: Gear,
    title: "Operational AI Integration",
    description:
      "Deploy AI across your business operations — customer service, reporting, analytics, and internal tools.",
  },
];

interface ServiceSectionProps {
  eyebrow: string;
  heading: string;
  description: string;
  services: typeof revenueServices;
  variant: "background" | "surface-low";
}

function ServiceSection({
  eyebrow,
  heading,
  description,
  services,
  variant,
}: ServiceSectionProps) {
  return (
    <Section variant={variant}>
      <FadeIn>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-display-sm md:text-display-md tracking-tighter text-white mb-4">
          {heading}
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed mb-12 max-w-[55ch]">
          {description}
        </p>
      </FadeIn>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={staggerItemVariants}
              className="bg-surface-card rounded-2xl p-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-surface-high"
            >
              <Icon
                size={28}
                weight="light"
                className="text-primary mb-5"
              />
              <h3 className="font-display text-lg text-white tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}

export default function ServiceGrid() {
  return (
    <>
      <ServiceSection
        eyebrow="Pillar One"
        heading="Revenue Engineering"
        description="Human-led performance marketing that drives real profit. We manage your ad accounts like they're our own."
        services={revenueServices}
        variant="background"
      />
      <ServiceSection
        eyebrow="Pillar Two"
        heading="AI Commerce Operations"
        description="Custom AI systems that automate the repetitive work and multiply your team's output."
        services={aiServices}
        variant="surface-low"
      />
    </>
  );
}
