import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import ServiceGrid from "@/components/services/ServiceGrid";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Services — Scale OS",
  description:
    "Revenue engineering and AI commerce operations for Shopify brands. Meta Ads, Google Ads, creative strategy, and custom AI automation.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="text-center !pb-8">
        <FadeIn>
          <Eyebrow>Services</Eyebrow>
          <h1 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-6 max-w-3xl mx-auto">
            Two systems. One growth engine.
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            We combine human-led growth strategy with AI-powered operations to
            scale Shopify brands faster.
          </p>
        </FadeIn>
      </Section>
      <ServiceGrid />
      <CTASection
        heading="See what both pillars can do for your brand."
        subtext="We take on 3 new brands per quarter."
        buttonText="Apply for Strategy Audit"
        variant="primary"
      />
    </>
  );
}
