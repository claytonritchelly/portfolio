"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroIDE from "./HeroIDE";
import AnimatedCounter from "./AnimatedCounter";
import TypeWriter from "./TypeWriter";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-28 pb-20 overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-accent rounded-full blur-[80px] opacity-10 animate-[glow_8s_ease-in-out_infinite]"
        style={{ willChange: "opacity" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal rounded-full blur-[80px] opacity-10 animate-[glow_10s_ease-in-out_infinite_reverse]"
        style={{ willChange: "opacity" }}
      />

      {/* Floating IDE (desktop only) */}
      <HeroIDE />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
        className="max-w-6xl mx-auto w-full relative z-10"
      >
        <motion.p
          {...fade(0.1)}
          className="font-mono text-accent-light text-sm mb-4"
        >
          <span className="animate-pulse">&#9654;</span> Olá, eu sou
        </motion.p>

        <motion.h1
          {...fade(0.3)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-4"
        >
          <span className="bg-gradient-to-r from-accent-light via-accent to-teal bg-clip-text text-transparent">
            Clayton
          </span>
          <br />
          <span className="text-foreground">Ritchelly</span>
        </motion.h1>

        <motion.div
          {...fade(0.5)}
          className="font-mono text-muted text-sm md:text-base mb-6 h-6"
        >
          <TypeWriter />
        </motion.div>

        <motion.p
          {...fade(0.7)}
          className="text-muted max-w-xl text-base md:text-lg leading-relaxed mb-10"
        >
          Construo plataformas de dados end-to-end em{" "}
          <span className="text-foreground font-medium">
            ambientes multicloud
          </span>
          , com arquitetura medallion, pipelines em{" "}
          <span className="text-foreground font-medium">
            Databricks, Microsoft Fabric, Spark, dbt e Apache Hop
          </span>
          , governança, exposição via APIs e projetos de{" "}
          <span className="text-foreground font-medium">
            IA Generativa, RAG e Agentes Inteligentes
          </span>
          .
        </motion.p>

        <motion.div {...fade(0.9)} className="flex flex-wrap gap-4 mb-16">
          <a
            href="#contato"
            className="group relative font-mono text-sm px-7 py-3.5 rounded-lg bg-accent hover:bg-accent-light text-white font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(109,40,217,0.4)] overflow-hidden"
          >
            <span className="relative z-10">Entre em contato</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-accent-light to-teal"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
          <a
            href="#projetos"
            className="font-mono text-sm px-7 py-3.5 rounded-lg border border-accent text-accent-light hover:bg-accent-glow transition-all hover:-translate-y-0.5"
          >
            Ver projetos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex gap-10 md:gap-14"
        >
          <AnimatedCounter target={6} suffix="+" label="Anos de experiência" />
          <AnimatedCounter target={3} suffix="+" label="Clouds dominadas" />
          <AnimatedCounter target={4} label="Certificações" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-muted tracking-[3px] uppercase [writing-mode:vertical-rl]">
          scroll
        </span>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3], height: [40, 56, 40] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px bg-gradient-to-b from-accent-light to-transparent"
        />
      </div>
    </section>
  );
}
