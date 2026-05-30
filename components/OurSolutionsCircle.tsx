"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
export function OurSolutionsCircle() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  // Track entrance for the iris reveal — opens up as section enters view
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });
  // Iris/clip reveal: starts fully closed at the center, opens to full bounds
  const clipInset = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const clipPath = useTransform(
    clipInset,
    (v) => `inset(${v}% ${v}% ${v}% ${v}% round 24px)`,
  );
  // Slight scale-up entrance to feel cinematic
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);
  return (
    <section
      ref={sectionRef}
      className="w-full bg-brand-dark pb-32 px-4 md:px-10 lg:px-20 -mt-[40vh] relative z-10"
    >
      <div className="max-w-[1232px] mx-auto">
        <motion.div
          style={{
            clipPath,
            scale,
            opacity,
          }}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[100px] md:rounded-[400px] overflow-hidden group will-change-transform"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop")',
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
          >
            <div className="w-24 h-24 mb-8 flex items-center justify-center">
              {/* Abstract Logo Mark */}
              <div className="flex gap-2 h-full">
                <div className="w-4 h-full bg-white rounded-sm" />
                <div className="w-4 h-3/4 bg-white rounded-sm mt-auto" />
                <div className="w-4 h-1/2 bg-white rounded-sm mt-auto" />
              </div>
            </div>

            <h3 className="font-heading font-bold text-4xl md:text-[56px] text-white mb-4">
              {t("sol.circle.title")}
            </h3>
            <p className="font-heading font-semibold text-xl md:text-[32px] text-white max-w-3xl leading-tight">
              {t("sol.circle.sub1")} <br className="hidden md:block" />
              <span className="text-brand-teal">{t("sol.circle.sub2")}</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
