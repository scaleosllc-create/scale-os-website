"use client";

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, { staggerItemVariants } from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";

const phases = [
  {
    number: "01",
    phase: "Phase 1",
    timeline: "Days 1-30",
    title: "Audit & Quick Wins",
    description:
      "We tear apart your current setup — ad accounts, creative library, Shopify store, operational workflows. No assumptions. Within the first two weeks, we identify and implement quick wins that start moving numbers immediately.",
    deliverables: [
      "Full account audit across Meta, Google, and Shopify",
      "Competitive creative analysis with winning angle identification",
      "3-5 quick-win optimizations implemented within first 14 days",
      "Custom AI workflow roadmap for your operations",
      "90-day growth strategy with projected milestones",
    ],
  },
  {
    number: "02",
    phase: "Phase 2",
    timeline: "Days 31-60",
    title: "Testing & Optimization",
    description:
      "With the audit complete and quick wins live, we shift into aggressive testing mode. AI-powered creative generation, new campaign structures, advertorial landing pages, and the first automation workflows go live.",
    deliverables: [
      "50+ ad creative variations tested across proven angles",
      "New campaign architecture built for scale",
      "2-4 high-converting advertorial landing pages launched",
      "First AI automation workflows deployed (reporting, alerts, comms)",
      "Weekly optimization cadence with real-time performance data",
    ],
  },
  {
    number: "03",
    phase: "Phase 3",
    timeline: "Days 61-90",
    title: "Scale & Automate",
    description:
      "Winners identified. Systems proven. Now we pour fuel on what works and automate everything else. This is where the compounding effect kicks in — AI handles the volume, humans make the strategic calls, and your growth accelerates.",
    deliverables: [
      "Winning campaigns scaled with increased spend allocation",
      "Full AI automation suite live across operations",
      "Dynamic creative pipeline producing winning ads on autopilot",
      "Comprehensive reporting dashboard with AI-flagged opportunities",
      "Ongoing optimization playbook for sustained growth",
    ],
  },
];

export default function OurProcess() {
  return (
    <Section variant="surface-low">
      <FadeIn>
        <Eyebrow>HOW WE WORK</Eyebrow>
        <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-4">
          The 90-day engagement
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed max-w-[60ch] mb-16">
          Every engagement follows the same proven structure. Audit, test, scale.
          No wasted months of &quot;learning your brand.&quot; We move fast because the
          systems we have built allow us to.
        </p>
      </FadeIn>
      <StaggerContainer className="space-y-6">
        {phases.map((phase) => (
          <motion.div key={phase.number} variants={staggerItemVariants}>
            <div className="bg-surface-card rounded-2xl p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-12">
                <div>
                  <span className="font-display text-display-lg text-primary leading-none">
                    {phase.number}
                  </span>
                  <p className="font-display text-sm text-white mt-2">{phase.phase}</p>
                  <p className="text-primary text-xs font-medium">{phase.timeline}</p>
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-white tracking-tight mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-on-surface-variant text-base leading-relaxed mb-6 max-w-[55ch]">
                    {phase.description}
                  </p>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-on-surface-muted mb-3">Deliverables</p>
                    <ul className="space-y-2">
                      {phase.deliverables.map((item, idx) => (
                        <li key={idx} className="text-sm text-on-surface-variant leading-relaxed flex gap-3">
                          <span className="text-primary mt-0.5 shrink-0">+</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
