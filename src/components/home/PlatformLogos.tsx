import Section from "@/components/ui/Section";
import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";

const platforms = [
  { src: "/logos/shopify.svg", alt: "Shopify" },
  { src: "/logos/meta.svg", alt: "Meta Ads" },
  { src: "/logos/google.svg", alt: "Google Ads" },
  { src: "/logos/klaviyo.svg", alt: "Klaviyo" },
];

export default function PlatformLogos() {
  const doubled = [...platforms, ...platforms];
  return (
    <Section variant="surface-low" className="!py-6 overflow-hidden">
      <FadeIn>
        <p className="text-label-sm text-on-surface-variant text-center mb-6 tracking-[2px]">
          PLATFORMS WE BUILD ON
        </p>
        <div className="relative">
          <div className="flex gap-16 animate-marquee">
            {doubled.map((p, i) => (
              <div key={`${p.alt}-${i}`} className="flex-shrink-0 opacity-40 hover:opacity-80 transition-opacity">
                <Image src={p.src} alt={p.alt} width={100} height={32} />
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
