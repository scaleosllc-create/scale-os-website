import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";

export default function Hero() {
  return (
    <Section>
      <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_40%_40%,rgba(45,106,79,0.06),transparent)]" />
        <FadeIn direction="left" className="flex-1">
          <Eyebrow>E-Commerce Growth Partner</Eyebrow>
          <h1 className="font-serif font-light text-[28px] md:text-[36px] text-ink leading-tight tracking-tighter mb-4">
            Human strategy. AI infrastructure.
            <br />
            Shopify brands that scale.
          </h1>
          <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-6 max-w-lg">
            We help e-commerce brands lower CAC, expand margins, and automate
            operations — so you can focus on building your brand, not managing
            your agency.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/apply">Book a Strategy Audit</Button>
            <Button href="#stats" variant="secondary">
              See Our Work →
            </Button>
          </div>
        </FadeIn>
        <FadeIn direction="right" delay={0.2} className="flex-1 w-full">
          <ImagePlaceholder
            label="HERO IMAGE"
            sublabel="Dashboard mockup, Shopify analytics, or brand collage"
            className="h-[260px] lg:h-[380px]"
          />
        </FadeIn>
      </div>
    </Section>
  );
}
