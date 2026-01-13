import Hero from "@/components/layout/hero/hero";
import About from "@/components/layout/about/about";
import Offer from "@/components/layout/services/offer";
import Projects from "@/components/layout/projects/project";

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
