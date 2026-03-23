"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import { CaretDown } from "@phosphor-icons/react";

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
        <h2 className="font-serif font-light text-[22px] md:text-[30px] text-ink tracking-tighter mb-8">
          Common questions
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="max-w-2xl mx-auto space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-off-white transition-colors"
              >
                <span className="text-[14px] font-medium text-ink pr-4">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <CaretDown size={16} weight="bold" className="text-gray-400" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 text-[13px] text-gray-500 leading-relaxed">
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
