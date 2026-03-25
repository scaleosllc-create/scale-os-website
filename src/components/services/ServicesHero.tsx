import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/shared/FadeIn";

export default function ServicesHero() {
  return (
    <Section>
      <FadeIn>
        <Eyebrow>What We Do</Eyebrow>
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-none font-serif font-light text-ink mb-6">
          Two systems. One growth engine.
        </h1>
        <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-[55ch]">
          Meta Ads. Google Ads. Brand strategy. Advertorial landing pages. AI
          automation. We pair elite media buying with custom AI systems — so your
          Shopify brand grows faster with less overhead.
        </p>
      </FadeIn>
    </Section>
  );
}
