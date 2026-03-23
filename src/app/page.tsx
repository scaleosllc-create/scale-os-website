import Hero from "@/components/home/Hero";
import PlatformLogos from "@/components/home/PlatformLogos";
import ProblemGrid from "@/components/home/ProblemGrid";
import TwoPillars from "@/components/home/TwoPillars";
import Timeline from "@/components/home/Timeline";
import Results from "@/components/home/Results";
import Comparison from "@/components/home/Comparison";
import Founder from "@/components/home/Founder";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformLogos />
      <ProblemGrid />
      <TwoPillars />
      <Timeline />
      <Results />
      <Comparison />
      <Founder />
      <FAQ />
      <FinalCTA />
    </>
  );
}
