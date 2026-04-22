"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollRevealText from "./ScrollRevealText";

export default function CinematicDivider({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="py-32 px-6 flex flex-col items-center justify-center text-center relative"
    >
      {/* Glow behind */}
      <div className="absolute w-[500px] h-[300px] bg-accent/8 rounded-full blur-[60px]" />

      <ScrollRevealText className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl justify-center">
        {text}
      </ScrollRevealText>

      <motion.div
        style={{ width: lineWidth }}
        className="h-px bg-gradient-to-r from-transparent via-accent-light to-transparent mt-8 max-w-md"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-6 font-mono text-xs text-accent-light uppercase tracking-[4px]"
      >
        {highlight}
      </motion.p>
    </motion.div>
  );
}
