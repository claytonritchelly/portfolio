"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

interface FloatingIcon {
  x: number;
  y: number;
  delay: number;
  icon: string;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
        color:
          i % 3 === 0 ? "#CD7F32" : i % 3 === 1 ? "#C0C0C0" : "#FFD700",
      }))
    );
    setIcons([
      { x: 8, y: 20, delay: 0, icon: "{ }" },
      { x: 85, y: 30, delay: 2, icon: "SQL" },
      { x: 75, y: 70, delay: 4, icon: "< />" },
      { x: 15, y: 75, delay: 3, icon: "df." },
      { x: 50, y: 15, delay: 1, icon: "ETL" },
      { x: 92, y: 55, delay: 5, icon: "API" },
    ]);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}40`,
          }}
          animate={{
            y: [0, -80, -160, -80, 0],
            x: [0, 30, -20, 40, 0],
            opacity: [0, 0.6, 0.8, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {icons.map((item) => (
        <motion.span
          key={item.icon}
          className="absolute font-mono text-[10px] text-accent-light/20"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: 8,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.span>
      ))}
    </div>
  );
}
