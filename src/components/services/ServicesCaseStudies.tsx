"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, { staggerItemVariants } from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";

const engagements = [
  {
    category: "PREMIUM SKINCARE BRAND",
    timeline: "90-Day Engagement",
    before: {
      revenue: "$56K/mo",
      roas: "1.8x",
      cac: "$62",
      creativeTests: "4/month",
    },
    after: {
      revenue: "$340K/mo",
      roas: "4.8x",
      cac: "$41",
      creativeTests: "50+/week",
    },
    work: [
      "Rebuilt Meta account structure from scratch — consolidated 14 campaigns into 3",
      "Deployed AI creative pipeline: 50+ ad variations tested weekly vs. 4/month previously",
      "Built automated post-purchase email flows that drove 22% of total revenue",
      "Created 8 high-converting advertorial pages targeting different customer segments",
    ],
  },
  {
    category: "FITNESS EQUIPMENT — SHOPIFY PLUS",
    timeline: "120-Day Engagement",
    before: {
      revenue: "$420K/mo",
      roas: "2.1x",
      cac: "$89",
      creativeTests: "8/month",
    },
    after: {
      revenue: "$890K/mo",
      roas: "3.9x",
      cac: "$54",
      creativeTests: "40+/week",
    },
    work: [
      "Launched Google Performance Max + Shopping campaigns alongside existing Meta spend",
      "Built 12 custom AI automation workflows — inventory, reporting, customer service",
      "Eliminated 40+ hours/week of manual operational work across the team",
      "AI-generated product descriptions and landing pages for 200+ SKUs in 2 weeks",
    ],
  },
  {
    category: "HOME & LIVING — DTC",
    timeline: "60-Day Engagement",
    before: {
      revenue: "$95K/mo",
      roas: "1.5x",
      cac: "$47",
      creativeTests: "6/month",
    },
    after: {
      revenue: "$210K/mo",
      roas: "3.4x",
      cac: "$19",
      creativeTests: "35+/week",
    },
    work: [
      "Full-funnel Meta + Google strategy replacing fragmented single-channel approach",
      "Built AI-powered advertorial landing pages that converted at 3.4% (vs 1.2% on product pages)",
      "Automated customer segmentation and retargeting — right message, right audience, right time",
      "Creative testing velocity increase drove 60% drop in CAC within first 30 days",
    ],
  },
];

export default function ServicesCaseStudies() {
  return (
    <Section variant="dark">
      <FadeIn>
        <Eyebrow>WHAT AN ENGAGEMENT LOOKS LIKE</Eyebrow>
        <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-4">
          Real work. Real numbers.
        </h2>
        <p className="text-white/50 text-base leading-relaxed max-w-[60ch] mb-8">
          Projected outcomes based on our methodology applied to typical Shopify
          brands in our target range. Here is exactly what a Scale OS engagement
          delivers.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Image
          src="/images/creative-process.png"
          alt="Creative strategy session with ad mockups and performance data"
          width={1376}
          height={500}
          className="rounded-2xl w-full mb-16"
        />
      </FadeIn>

      <StaggerContainer className="space-y-8">
        {engagements.map((engagement) => (
          <motion.div key={engagement.category} variants={staggerItemVariants}>
            <div className="bg-white/[0.04] rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-on-surface-muted mb-2">
                    {engagement.category}
                  </p>
                  <p className="text-sm text-primary font-medium">{engagement.timeline}</p>
                </div>
              </div>

              {/* Before / After metrics */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-on-surface-muted mb-4">Before</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">Revenue</p>
                      <p className="text-lg font-bold text-white/50 tabular-nums">{engagement.before.revenue}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">ROAS</p>
                      <p className="text-lg font-bold text-white/50 tabular-nums">{engagement.before.roas}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">CAC</p>
                      <p className="text-lg font-bold text-white/50 tabular-nums">{engagement.before.cac}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">Creative Tests</p>
                      <p className="text-lg font-bold text-white/50 tabular-nums">{engagement.before.creativeTests}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-primary mb-4">After</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">Revenue</p>
                      <p className="text-lg font-bold text-white tabular-nums">{engagement.after.revenue}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">ROAS</p>
                      <p className="text-lg font-bold text-white tabular-nums">{engagement.after.roas}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">CAC</p>
                      <p className="text-lg font-bold text-green-400 tabular-nums">{engagement.after.cac}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-on-surface-muted mb-1">Creative Tests</p>
                      <p className="text-lg font-bold text-primary tabular-nums">{engagement.after.creativeTests}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work performed */}
              <div>
                <p className="text-[10px] uppercase tracking-wider text-on-surface-muted mb-3">What we did</p>
                <ul className="space-y-2">
                  {engagement.work.map((item, idx) => (
                    <li key={idx} className="text-sm text-white/70 leading-relaxed flex gap-3">
                      <span className="text-primary mt-0.5 shrink-0">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
