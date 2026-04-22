"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedCounter({
  target,
  suffix = "",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(target * eased);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      <div className="flex items-baseline">
        <span className="font-mono text-3xl md:text-4xl font-bold tabular-nums">
          {count}
        </span>
        {suffix && (
          <span className="font-mono text-3xl md:text-4xl font-bold text-accent-light">
            {suffix}
          </span>
        )}
      </div>
      <span className="text-xs text-muted mt-1">{label}</span>
    </motion.div>
  );
}
