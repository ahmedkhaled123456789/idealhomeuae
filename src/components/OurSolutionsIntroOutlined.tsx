import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
export function OurSolutionsIntroOutlined() {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  // Track scroll through the tall section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });
  // Scale: starts small/thin (0.5) → grows to 1.4 by 85% scroll
  const scale = useTransform(scrollYProgress, [0, 0.85], [0.5, 1.4]);
  // Opacity: fade in early, then quickly fade out near the end for seamless handoff
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.8, 0.95],
    [0, 1, 1, 0]
  );
  // Letter spacing widens slightly as it scales — cinematic feel
  const letterSpacing = useTransform(
    scrollYProgress,
    [0, 0.85],
    ['0.05em', '0.18em']
  );
  // Stroke thickens slightly as it grows
  const strokeWidth = useTransform(scrollYProgress, [0, 0.85], [1, 4]);
  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-brand-dark"
      style={{
        height: '250vh'
      }}>
      
      {/* Sticky wrapper — keeps the headline pinned while scrolling through the section */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={{
            scale,
            opacity,
            letterSpacing
          }}
          className={`flex flex-col items-center text-center will-change-transform ${lang === 'ar' ? 'space-y-[-10px] md:space-y-[-20px]' : 'space-y-[-20px] md:space-y-[-40px]'}`}>
          
          {[t('sol.out.1'), t('sol.out.2'), t('sol.out.3')].map((line, idx) => {
            const sizeClass =
            lang === 'ar' ?
            idx === 0 ?
            'text-[60px] md:text-[140px]' :
            idx === 1 ?
            'text-[80px] md:text-[180px]' :
            'text-[100px] md:text-[220px]' :
            idx === 0 ?
            'text-[80px] md:text-[200px]' :
            idx === 1 ?
            'text-[110px] md:text-[260px]' :
            'text-[130px] md:text-[300px]';
            const fontClass =
            lang === 'ar' ? 'font-arabic font-bold' : 'font-display';
            return (
              <motion.h2
                key={idx}
                style={{
                  WebkitTextStroke: useTransform(
                    strokeWidth,
                    (w) => `${w}px #FFFFFF`
                  ) as any,
                  color: 'transparent'
                }}
                className={`leading-none uppercase ${fontClass} ${sizeClass}`}>
                
                {line}
              </motion.h2>);

          })}
        </motion.div>
      </div>
    </section>);

}