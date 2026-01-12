
import Hero from "@/components/layout/hero/hero";
import About from "@/components/layout/about/about";
import Offer from "@/components/sections/offer_section/offer";
import Projects from "@/components/sections/project_section/project.section";

export default function Home() {
  return (
    <>
      <Hero/>
      <About />
      <Projects />
      <Offer />
    </>
  );
}
