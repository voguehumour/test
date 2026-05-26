import Section from "@/components/Section";
import Hero from "@/components/home/Hero";
import Positioning from "@/components/home/Positioning";
import SelectedWork from "@/components/home/SelectedWork";
import HowIWork from "@/components/home/HowIWork";
import ContactBlock from "@/components/home/ContactBlock";

export default function Home() {
  return (
    <>
      <Section mood="hero">
        <Hero />
      </Section>
      <Section mood="positioning">
        <Positioning />
      </Section>
      <Section mood="work" id="work">
        <SelectedWork />
      </Section>
      <Section mood="process">
        <HowIWork />
      </Section>
      <Section mood="contact" id="contact">
        <ContactBlock />
      </Section>
    </>
  );
}
