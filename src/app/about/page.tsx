import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import WhyWeExist from "@/components/about/WhyWeExist";
import Principles from "@/components/about/Principles";
import OurProcess from "@/components/about/OurProcess";
import Team from "@/components/about/Team";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About — Scale OS",
  description:
    "Meet the team behind Scale OS. Senior operators building the future of e-commerce growth with AI.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyWeExist />
      <Principles />
      <OurProcess />
      <Team />
      <AboutCTA />
    </>
  );
}
