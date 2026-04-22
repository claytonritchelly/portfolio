"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3"
    >
      <span className="font-mono text-sm text-accent-light font-normal">
        {number}
      </span>
      {title}
      <span className="flex-1 h-px bg-border max-w-[200px]" />
    </motion.h2>
  );
}
