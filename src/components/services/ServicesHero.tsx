import Image from "next/image";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

export default function ServicesHero() {
  return (
    <Section className="!pt-32 !pb-8 lg:!pt-40 lg:!pb-12">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <FadeIn>
          <Eyebrow>WHAT WE BUILD</Eyebrow>
          <h1 className="font-display text-display-lg md:text-[4.5rem] lg:text-[5.5rem] tracking-tighter leading-[1.02] text-white mb-6">
            Two systems.<br />
            <em className="italic font-normal">One growth engine.</em>
          </h1>
          <p className="text-on-surface-variant text-xl leading-relaxed max-w-[55ch] mx-auto">
            We don&apos;t run ads and hope for the best. We build integrated growth
            systems — pairing elite paid media strategy with custom AI automation
            that gives your brand an unfair operational advantage.
          </p>
        </FadeIn>
      </div>
      <FadeIn delay={0.15}>
        <Image
          src="/images/hero-lifestyle.png"
          alt="Modern e-commerce workspace with analytics and product photography"
          width={1376}
          height={768}
          className="rounded-2xl w-full"
          priority
        />
      </FadeIn>
    </Section>
  );
}
