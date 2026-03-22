import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeIn from "@/components/shared/FadeIn";

const services = [
  {
    title: "Meta Ads Management",
    description:
      "Full-funnel Meta campaigns — from prospecting to retargeting. We build creative systems that scale, not one-off ads that burn out.",
  },
  {
    title: "Google Ads Management",
    description:
      "Search, Shopping, and Performance Max campaigns engineered for profitable customer acquisition across Google's ecosystem.",
  },
  {
    title: "Brand Strategy",
    description:
      "Positioning, messaging, and identity that makes your brand impossible to ignore in a crowded market. Strategy that guides every touchpoint.",
  },
  {
    title: "Creative Strategy",
    description:
      "Data-driven ad creative — from concept to production. We identify winning angles, test relentlessly, and scale what works.",
  },
];

export default function PillarOne() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-10">
        <FadeIn className="flex-1">
          <Eyebrow>Pillar One</Eyebrow>
          <h2 className="font-serif font-light text-[22px] md:text-[28px] text-ink mb-3">
            Revenue Engineering
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            We don&apos;t just run ads — we build profitable acquisition systems.
            Every dollar is tracked to contribution margin, not vanity ROAS. Our
            strategists think in unit economics, not impressions.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="flex-shrink-0 w-full lg:w-[240px]">
          <ImagePlaceholder
            label="Campaign dashboard visual"
            className="h-[160px]"
          />
        </FadeIn>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, i) => (
          <FadeIn key={service.title} delay={i * 0.1}>
            <Card hover>
              <ImagePlaceholder label="icon" className="w-10 h-10 mb-3" rounded="lg" />
              <h3 className="text-[16px] font-semibold text-ink mb-2">
                {service.title}
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
