"use client";

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, { staggerItemVariants } from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";

const creatives = [
  {
    type: "Facebook Ad",
    headline: "Your skincare routine is costing you 3x more than it should",
    body: "We analyzed 200+ DTC skincare brands. The ones scaling fastest all have one thing in common...",
    cta: "Learn More",
    metrics: { ctr: "3.2%", cpc: "$0.84", conv: "4.1%" },
  },
  {
    type: "Advertorial",
    headline: "I Tried 12 Fitness Supplements. Only 1 Actually Worked.",
    body: "A deep-dive review that reads like editorial content, not an ad. Drives 3x higher engagement than standard landing pages.",
    cta: "Read Article",
    metrics: { ctr: "4.8%", cpc: "$0.62", conv: "6.3%" },
  },
  {
    type: "Google Ad",
    headline: "Premium Home Decor | Free Shipping Over $75 | New Arrivals",
    body: "Shop curated collections from independent designers. 4.9 rated. Easy returns. Handpicked pieces you won't find anywhere else.",
    cta: "Shop Now",
    metrics: { ctr: "5.1%", cpc: "$1.20", conv: "3.8%" },
  },
];

export default function CreativeShowcase() {
  return (
    <Section variant="surface-low">
      <FadeIn>
        <Eyebrow>OUR WORK</Eyebrow>
        <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-on-surface mb-4">
          Creatives that convert
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed max-w-[55ch] mb-16">
          Real ad formats we build for clients. AI-generated at scale, human-refined for performance.
        </p>
      </FadeIn>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {creatives.map((creative) => (
          <motion.div key={creative.headline} variants={staggerItemVariants}>
            <div className="bg-surface-card rounded-2xl overflow-hidden hover-kinetic h-full flex flex-col">
              {/* Ad type badge */}
              <div className="px-5 pt-5 pb-3">
                <span className="text-[10px] uppercase tracking-wider text-primary font-medium bg-primary/[0.06] rounded-full px-3 py-1">
                  {creative.type}
                </span>
              </div>

              {/* Creative content */}
              <div className="px-5 pb-4 flex-1">
                <h3 className="font-display text-base text-on-surface tracking-tight mb-2 leading-snug">
                  {creative.headline}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  {creative.body}
                </p>
                <div className="inline-block bg-primary text-white text-[11px] font-medium px-4 py-2 rounded">
                  {creative.cta}
                </div>
              </div>

              {/* Performance metrics */}
              <div className="bg-surface-low px-5 py-3 grid grid-cols-3 gap-2">
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-on-surface-variant">CTR</p>
                  <p className="text-sm font-bold text-on-surface tabular-nums">{creative.metrics.ctr}</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-on-surface-variant">CPC</p>
                  <p className="text-sm font-bold text-on-surface tabular-nums">{creative.metrics.cpc}</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-on-surface-variant">Conv</p>
                  <p className="text-sm font-bold text-primary tabular-nums">{creative.metrics.conv}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
