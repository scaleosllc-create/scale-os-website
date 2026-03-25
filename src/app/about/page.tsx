import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";
import Team from "@/components/about/Team";
import Principles from "@/components/about/Principles";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "About — Scale OS",
  description:
    "Meet the team behind Scale OS. Senior operators building the future of e-commerce growth with AI.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="text-center !pb-8">
        <FadeIn>
          <Eyebrow>About</Eyebrow>
          <h1 className="font-display text-display-md md:text-display-lg tracking-tighter text-white mb-6 max-w-3xl mx-auto">
            Human strategy. Machine speed.
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            We started Scale OS because we saw two things happening at once:
            e-commerce brands drowning in manual work, and AI tools that could
            fix it — if someone knew how to deploy them.
          </p>
        </FadeIn>
      </Section>
      <Team />
      <Principles />
      <CTASection
        heading="Want to work with us?"
        subtext="We take on 3 new brands per quarter."
        buttonText="Apply for Partnership"
        variant="primary"
      />
    </>
  );
}
