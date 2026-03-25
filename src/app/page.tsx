import Hero from "@/components/home/Hero";
import Platforms from "@/components/home/Platforms";
import Services from "@/components/home/Services";
import CreativeSlider from "@/components/home/CreativeSlider";
import Results from "@/components/home/Results";
import Timeline from "@/components/home/Timeline";
import About from "@/components/home/About";
import BlogSection from "@/components/home/BlogSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Platforms />
      <Services />
      <CreativeSlider />
      <Results />
      <Timeline />
      <About />
      <BlogSection />
      <FinalCTA />
    </>
  );
}
