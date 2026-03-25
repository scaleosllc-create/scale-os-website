"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import { Plus, Minus } from "@phosphor-icons/react";

const faqs = [
  {
    q: "What kind of brands do you work with?",
    a: "We work exclusively with Shopify e-commerce brands doing between $50K and $5M per month in revenue. Our system is built specifically for DTC and e-commerce unit economics \u2014 we don\u2019t work with SaaS, local businesses, or service companies.",
  },
  {
    q: "How is Scale OS different from other agencies?",
    a: "Two things. First, we combine elite media buying with custom AI automation \u2014 most agencies do one or the other. Second, we think in contribution margin and real profit, not vanity ROAS. We build systems that compound, not campaigns that burn out.",
  },
  {
    q: "Do I need to understand AI to work with you?",
    a: "Not at all. We handle all the technical implementation. You\u2019ll see the results \u2014 faster creative production, automated workflows, lower operational costs \u2014 without needing to touch any AI tools yourself.",
  },
  {
    q: "What does the first 30 days look like?",
    a: "We start with a deep audit of your store, ad accounts, and operations. Within the first two weeks, we identify quick wins and deploy initial AI workflows. By day 30, you\u2019ll have live campaigns running and your first automation systems in place.",
  },
  {
    q: "How much does it cost?",
    a: "Our partnerships start at $5,000/month. The exact investment depends on your revenue, goals, and the scope of AI integration. We\u2019ll give you a clear proposal after the strategy audit \u2014 no surprises.",
  },
  {
    q: "What if it doesn\u2019t work?",
    a: "We\u2019re selective about who we work with precisely so we can deliver results. We won\u2019t take you on if we don\u2019t believe our system will work for your business. That said, most brands see meaningful CAC improvements within the first 60 days.",
  },
  {
    q: "Can I see examples of your AI workflows?",
    a: "During the strategy audit, we\u2019ll walk you through exactly how our AI systems would integrate with your specific Shopify setup. We\u2019ll show you real workflow demos tailored to your operations \u2014 not generic slide decks.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section>
      <FadeIn>
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="font-display text-display-sm md:text-display-md lg:text-display-lg text-on-surface mb-10">
          Common questions
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={faq.q}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-base md:text-lg font-medium text-on-surface pr-4">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-on-surface/[0.04] flex items-center justify-center transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-on-surface/[0.08]"
                >
                  {openIndex === i ? (
                    <Minus size={14} weight="bold" className="text-on-surface" />
                  ) : (
                    <Plus size={14} weight="bold" className="text-on-surface" />
                  )}
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm md:text-base text-on-surface-variant leading-relaxed max-w-[65ch]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
