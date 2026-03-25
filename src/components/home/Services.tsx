"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import { ArrowRight } from "@phosphor-icons/react";

const revenueServices = [
  "Meta Ads",
  "Google Ads",
  "Creative Strategy",
  "Brand Strategy",
  "Advertorial / Listicle Pages",
];

const aiServices = [
  "AI Ad & Content Gen",
  "E-Commerce Workflow Automation",
  "Shopify Optimization",
  "Advertorial at Scale",
  "Operational AI Integration",
];

function MetricsMockup() {
  const metrics = [
    { label: "ROAS", value: "4.2x" },
    { label: "CAC", value: "$18.40" },
    { label: "Revenue", value: "$142K" },
    { label: "Conv", value: "3.8%" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 mt-8">
      {metrics.map((m) => (
        <div key={m.label} className="bg-surface-low rounded-lg p-4">
          <p className="text-[10px] uppercase tracking-wider text-on-surface-muted mb-1">
            {m.label}
          </p>
          <p className="text-lg font-bold tabular-nums text-white">{m.value}</p>
        </div>
      ))}
    </div>
  );
}

function WorkflowMockup() {
  const steps = [
    { num: "01", label: "Ingest product data" },
    { num: "02", label: "Generate ad variations" },
    { num: "03", label: "Route to approval queue" },
    { num: "04", label: "Deploy to ad platforms" },
  ];

  return (
    <div className="space-y-3 mt-8">
      {steps.map((step) => (
        <div
          key={step.num}
          className="flex items-center gap-4 bg-surface-low rounded-lg px-4 py-3"
        >
          <span className="text-primary font-display text-sm font-bold tabular-nums">
            {step.num}
          </span>
          <span className="text-sm text-on-surface-variant">{step.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <Section>
      <FadeIn>
        <Eyebrow>What We Do</Eyebrow>
        <h2 className="font-display text-display-sm md:text-display-md lg:text-display-lg tracking-tighter text-white mb-12">
          Two systems. One growth engine.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FadeIn>
          <div className="bg-surface-card rounded-2xl p-8 lg:p-10 h-full">
            <h3 className="font-display text-xl text-white tracking-tight mb-6">
              Revenue Engineering
            </h3>
            <ul className="space-y-3">
              {revenueServices.map((service) => (
                <li
                  key={service}
                  className="text-sm text-on-surface-variant leading-relaxed flex gap-2"
                >
                  <span className="text-primary mt-0.5 flex-shrink-0">
                    &bull;
                  </span>
                  {service}
                </li>
              ))}
            </ul>
            <MetricsMockup />
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-primary mt-8 transition-colors duration-300 hover:text-primary-container"
            >
              Learn more
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-surface-card rounded-2xl p-8 lg:p-10 h-full">
            <h3 className="font-display text-xl text-white tracking-tight mb-6">
              AI Commerce Operations
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service) => (
                <li
                  key={service}
                  className="text-sm text-on-surface-variant leading-relaxed flex gap-2"
                >
                  <span className="text-primary mt-0.5 flex-shrink-0">
                    &bull;
                  </span>
                  {service}
                </li>
              ))}
            </ul>
            <WorkflowMockup />
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-primary mt-8 transition-colors duration-300 hover:text-primary-container"
            >
              Learn more
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
