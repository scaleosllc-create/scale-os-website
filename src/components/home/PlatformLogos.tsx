import Section from "@/components/ui/Section";
import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";

const platforms = [
  { src: "/logos/shopify.svg", alt: "Shopify", label: "Shopify" },
  { src: "/logos/meta.svg", alt: "Meta Ads", label: "Meta Ads" },
  { src: "/logos/google.svg", alt: "Google Ads", label: "Google Ads" },
  { src: "/logos/klaviyo.svg", alt: "Klaviyo", label: "Klaviyo" },
];

export default function PlatformLogos() {
  return (
    <Section variant="off-white" className="!py-8">
      <FadeIn>
        <p className="text-eyebrow text-gray-400 text-center mb-6 tracking-[2px]">
          PLATFORMS WE BUILD ON
        </p>
        <div className="flex justify-center items-center gap-10 md:gap-16 flex-wrap">
          {platforms.map((p) => (
            <div key={p.label} className="text-center opacity-60 hover:opacity-100 transition-opacity">
              <Image src={p.src} alt={p.alt} width={100} height={32} className="grayscale" />
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
