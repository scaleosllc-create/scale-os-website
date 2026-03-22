import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

export default function ServicesHero() {
  return (
    <Section>
      <FadeIn>
        <Eyebrow>What We Do</Eyebrow>
        <h1 className="font-serif font-light text-[28px] md:text-[36px] text-ink leading-tight mb-4">
          Two systems. One growth engine.
        </h1>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg">
          We pair elite media buying with custom AI automation — so your Shopify
          brand grows faster with less overhead.
        </p>
      </FadeIn>
    </Section>
  );
}
