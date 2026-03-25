import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import PillarOne from "@/components/services/PillarOne";
import PillarTwo from "@/components/services/PillarTwo";
import WhyBoth from "@/components/services/WhyBoth";
import ServicesCaseStudies from "@/components/services/ServicesCaseStudies";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Services — Scale OS",
  description:
    "Revenue engineering and AI commerce operations for Shopify brands. Meta Ads, Google Ads, creative strategy, and custom AI automation.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <PillarOne />
      <PillarTwo />
      <WhyBoth />
      <ServicesCaseStudies />
      <ServicesCTA />
    </>
  );
}
