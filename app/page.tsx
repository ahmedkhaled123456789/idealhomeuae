import React from "react";
import "../hooks/useGsap";
import { Hero } from "@/components/Hero";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import { WhyDifficult } from "@/components/WhyDifficult";
import { DesignBeforeSpending } from "@/components/DesignBeforeSpending";
import { Gallery } from "@/components/Gallery";
import { WhyChoose } from "@/components/WhyChoose";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { OurSolutionSection } from "@/components/OurSolutionSection";
const page = () => {
  return (
    <div>
      <Hero />
      <OurSolutionSection />
      <SolutionsGrid />
      <WhyDifficult />
      <DesignBeforeSpending />
      <Gallery />
      <WhyChoose />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default page;
