import { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import WhyWeExist from "@/components/about/WhyWeExist";
import Principles from "@/components/about/Principles";
import Team from "@/components/about/Team";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Scale OS combines elite e-commerce strategy with AI infrastructure. Human-led, AI-executed.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyWeExist />
      <Principles />
      <Team />
      <CTASection
        heading="Want to work with us?"
        subtext="We take on a limited number of partners each quarter. Tell us about your brand and we'll see if there's a fit."
        buttonText="Apply for Partnership"
      />
    </>
  );
}
