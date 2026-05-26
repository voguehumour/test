"use client";

import { useEffect } from "react";
import Section from "@/components/Section";
import Hero from "@/components/home/Hero";
import Positioning from "@/components/home/Positioning";
import SelectedWork from "@/components/home/SelectedWork";
import HowIWork from "@/components/home/HowIWork";
import ContactBlock from "@/components/home/ContactBlock";

// QA route: forces the reduced-motion baseline regardless of OS setting, so the
// reduced experience can be reviewed directly. The network freezes to a static
// composition with one slowly-breathing node; reveals collapse to opacity.
export default function ReducedMotionPreview() {
  useEffect(() => {
    document.documentElement.setAttribute("data-reduced", "");
    return () => document.documentElement.removeAttribute("data-reduced");
  }, []);

  return (
    <>
      <div className="px-[var(--gutter)] pt-24">
        <p className="font-mono text-step--1 text-accent">
          reduced-motion preview — forced via data-reduced
        </p>
      </div>
      <Section mood="hero">
        <Hero />
      </Section>
      <Section mood="positioning">
        <Positioning />
      </Section>
      <Section mood="work">
        <SelectedWork />
      </Section>
      <Section mood="process">
        <HowIWork />
      </Section>
      <Section mood="contact">
        <ContactBlock />
      </Section>
    </>
  );
}
