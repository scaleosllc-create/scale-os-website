import Hero from "@/components/home/Hero";
import PlatformLogos from "@/components/home/PlatformLogos";
import Problem from "@/components/home/Problem";
import TwoPillars from "@/components/home/TwoPillars";
import Stats from "@/components/home/Stats";
import HowWeWork from "@/components/home/HowWeWork";
import Testimonial from "@/components/home/Testimonial";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformLogos />
      <Problem />
      <TwoPillars />
      <Stats />
      <HowWeWork />
      <Testimonial />
      <FinalCTA />
    </>
  );
}
