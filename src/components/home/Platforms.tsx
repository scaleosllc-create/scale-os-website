import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

const platforms = [
  "Shopify",
  "Meta Ads",
  "Google Ads",
  "Klaviyo",
  "TikTok Ads",
  "Gorgias",
];

export default function Platforms() {
  return (
    <Section variant="surface-low" className="!py-10">
      <FadeIn>
        <div className="flex flex-col items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.15em] text-on-surface-muted">
            Platforms we build on
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="text-white/25 text-sm font-medium tracking-wider uppercase"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
