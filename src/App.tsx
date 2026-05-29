// import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
// import { OurSolutionsIntroOutlined } from "./components/OurSolutionsIntroOutlined";
// import { OurSolutionsCircle } from "./components/OurSolutionsCircle";
import { SolutionsGrid } from "./components/SolutionsGrid";
import { WhyDifficult } from "./components/WhyDifficult";
import { DesignBeforeSpending } from "./components/DesignBeforeSpending";
import { Gallery } from "./components/Gallery";
import { WhyChoose } from "./components/WhyChoose";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingAgent } from "./components/FloatingAgent";
import { OurSolutionSection } from "./components/OurSolutionSection";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-brand-black text-white selection:bg-brand-teal selection:text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          {/* <OurSolutionsIntroOutlined /> */}
          {/* <OurSolutionsCircle /> */}
          <OurSolutionSection />
          <SolutionsGrid />
          <WhyDifficult />
          <DesignBeforeSpending />
          <Gallery />
          <WhyChoose />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingAgent />
      </div>
    </LanguageProvider>
  );
}
