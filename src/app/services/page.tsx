import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import PillarOne from "@/components/services/PillarOne";
import PillarTwo from "@/components/services/PillarTwo";
import WhyBoth from "@/components/services/WhyBoth";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Revenue engineering and AI commerce operations for Shopify brands. Meta Ads, Google Ads, brand strategy, and custom AI automation workflows.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <PillarOne />
      <PillarTwo />
      <WhyBoth />
      <CTASection
        heading="See what both pillars could do for your brand."
        subtext="Book a strategy audit — we'll show you exactly where AI and paid media can unlock your next phase of growth."
        buttonText="Book a Strategy Audit"
        variant="dark"
      />
    </>
  );
}
