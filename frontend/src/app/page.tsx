import Hero from "@/components/sections/Hero";
import About from "@/components/sections/about";
import Offer from "@/components/sections/offer_section/offer";
import Projects from "@/components/sections/project_section/project.section";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Offer />
    </>
  );
}
