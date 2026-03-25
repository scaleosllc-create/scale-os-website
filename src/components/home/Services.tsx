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
import type { Icon } from "@phosphor-icons/react";

interface Service {
  icon: Icon;
  title: string;
  description: string;
}

const revenueServices: Service[] = [
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
      "Search, Shopping, and Performance Max optimized for contribution margin, not vanity ROAS.",
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

const aiServices: Service[] = [
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
    title: "Operational AI",
    description:
      "Deploy AI across your business operations — customer service, reporting, analytics, and internal tools.",
  },
];

function ServicePillar({
  label,
  title,
  description,
  services,
}: {
  label: string;
  title: string;
  description: string;
  services: Service[];
}) {
  return (
    <div>
      <FadeIn>
        <p className="text-label-sm uppercase text-primary mb-4">{label}</p>
        <h3 className="font-display text-display-sm tracking-tighter text-white mb-3">
          {title}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-10 max-w-[50ch]">
          {description}
        </p>
      </FadeIn>
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={staggerItemVariants}
              className="bg-surface-card rounded-2xl p-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-surface-high"
            >
              <Icon size={24} weight="light" className="text-primary mb-4" />
              <h4 className="font-display text-base text-white tracking-tight mb-2">
                {service.title}
              </h4>
              <p className="text-[13px] text-on-surface-variant leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </StaggerContainer>
    </div>
  );
}

export default function Services() {
  return (
    <Section id="services">
      <FadeIn>
        <Eyebrow>Services</Eyebrow>
        <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-6">
          Two systems. One growth engine.
        </h2>
        <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-xl mb-20">
          We combine human-led growth strategy with AI-powered operations to
          scale Shopify brands faster.
        </p>
      </FadeIn>

      <div className="space-y-20">
        <ServicePillar
          label="Pillar One"
          title="Revenue Engineering"
          description="Human-led performance marketing that drives real profit. We manage your ad accounts like they're our own."
          services={revenueServices}
        />
        <ServicePillar
          label="Pillar Two"
          title="AI Commerce Operations"
          description="Custom AI systems that automate the repetitive work and multiply your team's output."
          services={aiServices}
        />
      </div>
    </Section>
  );
}
