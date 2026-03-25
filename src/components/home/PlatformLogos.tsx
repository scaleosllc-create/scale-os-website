import Section from "@/components/ui/Section";
import FadeIn from "@/components/shared/FadeIn";

const clients = [
  "AURORA SKINCARE", "VELTA FITNESS", "MAISON HOME", "DRIFT APPAREL",
  "NOVA BEAUTY", "KINETIC SUPPLY", "MERIDIAN GOODS", "SOLACE LIVING",
  "AURORA SKINCARE", "VELTA FITNESS", "MAISON HOME", "DRIFT APPAREL",
  "NOVA BEAUTY", "KINETIC SUPPLY", "MERIDIAN GOODS", "SOLACE LIVING",
];

export default function PlatformLogos() {
  return (
    <Section variant="surface-low" className="!py-8 overflow-hidden">
      <FadeIn>
        <p className="text-on-surface-muted text-xs text-center mb-6 tracking-widest uppercase">
          TRUSTED BY 40+ SHOPIFY BRANDS
        </p>
        <div className="relative">
          <div className="flex gap-12 animate-marquee">
            {clients.map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="text-white/20 text-sm font-medium tracking-widest uppercase whitespace-nowrap"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
