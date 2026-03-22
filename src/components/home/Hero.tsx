import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";

export default function Hero() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <FadeIn className="flex-1">
          <Eyebrow>E-Commerce Growth Partner</Eyebrow>
          <h1 className="font-serif font-light text-[28px] md:text-[36px] text-ink leading-tight mb-4">
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
        <FadeIn delay={0.2} className="flex-1 w-full">
          <ImagePlaceholder
            label="HERO IMAGE"
            sublabel="Dashboard mockup, Shopify analytics, or brand collage"
            className="h-[260px] lg:h-[320px]"
          />
        </FadeIn>
      </div>
    </Section>
  );
}
