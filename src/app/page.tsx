import Hero from "@/components/home/Hero";
import Platforms from "@/components/home/Platforms";
import Services from "@/components/home/Services";
import Results from "@/components/home/Results";
import Timeline from "@/components/home/Timeline";
import TeamStrip from "@/components/home/TeamStrip";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Platforms />
      <Services />
      <Results />
      <Timeline />
      <TeamStrip />
      <FinalCTA />
    </>
  );
}
