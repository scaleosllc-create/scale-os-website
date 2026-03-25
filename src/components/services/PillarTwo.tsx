"use client";

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import StaggerContainer, { staggerItemVariants } from "@/components/shared/StaggerContainer";
import { motion } from "framer-motion";
import { Lightning, Gear, ShoppingCart, Article, Cpu } from "@phosphor-icons/react";

const services = [
  {
    icon: Article,
    title: "AI Ad & Content Generation",
    description:
      "Generate ads, advertorials, and listicles at scale using trained AI workflows. Test 50 ad angles in a week instead of 5 in a month. More creative velocity means faster learning and lower CAC.",
  },
  {
    icon: Gear,
    title: "E-Commerce Workflow Automation",
    description:
      "Custom automation workflows that eliminate 40+ hours of manual work per week. Inventory alerts, customer communication, reporting, order processing — if it\u2019s repetitive, we automate it.",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Store Optimization with AI",
    description:
      "We use AI tools to build, test, and iterate on your Shopify storefront faster than any development team. Product page optimization, checkout flow improvements, and conversion rate testing at machine speed.",
  },
  {
    icon: Lightning,
    title: "Advertorial & Listicle Creation at Scale",
    description:
      "AI-powered production of high-converting advertorial and listicle content. We generate, test, and iterate on landing pages that turn cold traffic into buyers — with a volume and speed that manual teams can\u2019t touch.",
  },
  {
    icon: Cpu,
    title: "Operational AI Integration",
    description:
      "End-to-end AI integration into your daily business operations. We don\u2019t hand you a chatbot — we embed intelligence into how your business actually runs. Inventory prediction, dynamic pricing, automated customer service.",
  },
];

export default function PillarTwo() {
  return (
    <Section variant="dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
        <FadeIn direction="left">
          {/* Mock Automation Workflow */}
          <div className="bg-white/[0.04] rounded-2xl p-5">
            <p className="text-[10px] uppercase tracking-wider text-on-surface-muted mb-4">Live Workflow</p>
            <div className="space-y-3">
              {[
                { step: "1", text: "New order received \u2192 Shopify webhook", status: "Active" },
                { step: "2", text: "AI generates post-purchase email sequence", status: "Active" },
                { step: "3", text: "Customer tagged \u2192 Klaviyo segment updated", status: "Active" },
                { step: "4", text: "AI creates retargeting ad from purchase data", status: "Processing" },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-[10px] text-primary font-bold">{item.step}</div>
                  <div className="flex-1 bg-white/[0.04] rounded-lg px-3 py-2">
                    <p className="text-[11px] text-white/70">{item.text}</p>
                  </div>
                  <span className={`text-[9px] ${item.status === "Active" ? "text-green-400" : "text-yellow-400"}`}>{item.status}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-[10px] text-white/30">Last run: 2 min ago</span>
              <span className="text-[10px] text-primary">847 automations this week</span>
            </div>
          </div>
        </FadeIn>
        <FadeIn direction="right" delay={0.15}>
          <Eyebrow>PILLAR TWO</Eyebrow>
          <h2 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-4">
            AI Commerce Operations
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-[55ch]">
            This is where most agencies can&apos;t follow. We build custom AI
            workflows that plug directly into your Shopify operations — automating
            the work that used to require entire teams. Your unfair competitive
            advantage.
          </p>
        </FadeIn>
      </div>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div key={service.title} variants={staggerItemVariants}>
            <div className="bg-white/[0.04] rounded-2xl p-8 h-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.07]">
              <service.icon size={28} weight="light" className="text-primary mb-5" />
              <h3 className="font-display text-lg text-white tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
