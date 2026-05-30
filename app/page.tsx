import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Skills />
      <Process />
      <Contact />
    </>
  );
}
