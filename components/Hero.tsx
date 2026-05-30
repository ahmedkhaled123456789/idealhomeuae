"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
export function Hero() {
  const { t, dir } = useLanguage();
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <section className="relative w-full min-h-[800px] h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Ken Burns */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop")',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-[rgba(7,7,7,0.5)] to-[rgba(40,40,40,0.7)]" />

      {/* Content */}
      <div className="relative z-20 max-w-[1440px] mx-auto w-full px-4 md:px-10 lg:px-20">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="max-w-[632px] bg-brand-black/80 backdrop-blur-md border border-brand-dark rounded-[20px] p-8 md:p-12"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-[48px] leading-[1.2] text-white mb-2 whitespace-pre-line"
            >
              {t("hero.title1")}
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-[48px] leading-[1.2] text-brand-teal mb-6"
            >
              {t("hero.title2")}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/90 leading-relaxed mb-10"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.button
              variants={itemVariants}
              className="flex items-center gap-3 bg-white hover:bg-gray-100 text-brand-dark px-8 py-4 rounded-xl font-bold text-lg transition-all group"
            >
              {t("hero.cta")}
              <ArrowUpRight
                className={`w-5 h-5 transition-transform ${dir === "rtl" ? "rotate-[-90deg] group-hover:-translate-x-1 group-hover:-translate-y-1" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
