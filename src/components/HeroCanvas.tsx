"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

interface DataStream {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  alpha: number;
  color: string;
}

const COLORS_ARR = ["#CD7F32", "#C0C0C0", "#FFD700", "#8b5cf6", "#0d9488"];

const DATA_CHARS = [
  "SELECT", "FROM", "JOIN", "CREATE", "df.", "spark",
  ".read", ".write", "Delta", "Bronze", "Silver", "Gold",
  "API", "RAG", "ETL", "CDC", "dbt", "{ }", "< />", "=>",
];

// Spatial grid for O(n) neighbor lookups instead of O(n²)
class SpatialGrid {
  private cells: Map<string, number[]> = new Map();
  constructor(private cellSize: number) {}

  clear() { this.cells.clear(); }

  insert(index: number, x: number, y: number) {
    const key = `${Math.floor(x / this.cellSize)},${Math.floor(y / this.cellSize)}`;
    const cell = this.cells.get(key);
    if (cell) cell.push(index);
    else this.cells.set(key, [index]);
  }

  getNeighbors(x: number, y: number): number[] {
    const cx = Math.floor(x / this.cellSize);
    const cy = Math.floor(y / this.cellSize);
    const result: number[] = [];
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const cell = this.cells.get(`${cx + dx},${cy + dy}`);
        if (cell) result.push(...cell);
      }
    }
    return result;
  }
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const streamsRef = useRef<DataStream[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const frameRef = useRef(0);
  const gridRef = useRef(new SpatialGrid(130));
  const visibleRef = useRef(true);

  const initParticles = useCallback((w: number, h: number) => {
    // Fewer particles, still looks great
    const count = Math.min(Math.floor((w * h) / 20000), 50);
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1,
      color: COLORS_ARR[Math.floor(Math.random() * COLORS_ARR.length)],
      alpha: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  const initStreams = useCallback((w: number, h: number) => {
    const count = Math.min(Math.floor(w / 120), 10);
    streamsRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h * -1,
      speed: Math.random() * 1.2 + 0.4,
      chars: Array.from(
        { length: Math.floor(Math.random() * 4) + 3 },
        () => DATA_CHARS[Math.floor(Math.random() * DATA_CHARS.length)]
      ),
      alpha: Math.random() * 0.1 + 0.03,
      color: COLORS_ARR[Math.floor(Math.random() * COLORS_ARR.length)],
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    // Cap DPR at 2 for performance
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(w, h);
      initStreams(w, h);
    };

    // Throttled mouse tracking
    let mouseTimeout: ReturnType<typeof setTimeout> | null = null;
    const onMouse = (e: MouseEvent) => {
      if (mouseTimeout) return;
      mouseTimeout = setTimeout(() => { mouseTimeout = null; }, 16);
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // (visibility + intersection observers are set up in the animation section below)

    const grid = gridRef.current;
    const maxDist = 130;
    const maxDistSq = maxDist * maxDist;
    const mouseMaxDist = 180;
    const mouseMaxDistSq = mouseMaxDist * mouseMaxDist;

    const drawConnectionsAndParticles = () => {
      const particles = particlesRef.current;
      const frame = frameRef.current;

      // Rebuild spatial grid
      grid.clear();
      for (let i = 0; i < particles.length; i++) {
        grid.insert(i, particles[i].x, particles[i].y);
      }

      // Batch all connection lines in one path
      ctx.beginPath();
      ctx.strokeStyle = "rgba(139, 92, 246, 0.12)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const neighbors = grid.getNeighbors(p.x, p.y);
        for (const j of neighbors) {
          if (j <= i) continue;
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistSq) {
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
          }
        }
      }
      ctx.stroke();

      // Mouse connections — single path
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      if (mx > 0) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(139, 92, 246, 0.2)";
        ctx.lineWidth = 0.8;
        for (const p of particles) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const distSq = dx * dx + dy * dy;
          if (distSq < mouseMaxDistSq) {
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mx, my);
            const dist = Math.sqrt(distSq);
            p.vx += (dx / dist) * 0.015;
            p.vy += (dy / dist) * 0.015;
          }
        }
        ctx.stroke();
      }

      // Draw particles — no individual gradients (big perf win)
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.998;
        p.vy *= 0.998;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const pulse = Math.sin(frame * 0.02 + p.x * 0.01) * 0.15 + 0.85;

        ctx.globalAlpha = p.alpha * pulse;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Simple soft glow — just a bigger circle, no gradient
        ctx.globalAlpha = p.alpha * 0.15;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const drawStreams = () => {
      ctx.font = "10px monospace";
      for (const s of streamsRef.current) {
        s.y += s.speed;
        ctx.fillStyle = s.color;

        for (let i = 0; i < s.chars.length; i++) {
          const charY = s.y + i * 18;
          if (charY > -20 && charY < h + 20) {
            ctx.globalAlpha = i === 0 ? s.alpha : s.alpha * (1 - i / s.chars.length) * 0.7;
            ctx.fillText(s.chars[i], s.x, charY);
          }
        }

        if (s.y > h + 100) {
          s.y = -s.chars.length * 18 - Math.random() * 200;
          s.x = Math.random() * w;
        }
      }
      ctx.globalAlpha = 1;
    };

    const drawCentralEnergy = () => {
      const cx = w * 0.5;
      const cy = h * 0.45;
      const time = frameRef.current * 0.008;

      // Rings — simplified, 2 instead of 3, fewer segments
      for (let i = 0; i < 2; i++) {
        const radius = 180 + i * 50;
        const segments = 40;
        ctx.beginPath();
        for (let j = 0; j < segments; j++) {
          const angle = (j / segments) * Math.PI * 2 + time * (i % 2 === 0 ? 1 : -1);
          const wobble = Math.sin(angle * 3 + time * 2) * 8;
          const px = cx + Math.cos(angle) * (radius + wobble);
          const py = cy + Math.sin(angle) * (radius * 0.3 + wobble * 0.3);
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.035 - i * 0.01})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Core glow — single pre-built gradient
      const pulseSize = 250 + Math.sin(time * 1.5) * 30;
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, pulseSize);
      coreGrad.addColorStop(0, "rgba(139, 92, 246, 0.05)");
      coreGrad.addColorStop(1, "rgba(139, 92, 246, 0)");
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, pulseSize, 0, Math.PI * 2);
      ctx.fill();

      // Orbiting points — 4 instead of 5, shorter trails
      for (let i = 0; i < 4; i++) {
        const angle = time * 0.6 + (i / 4) * Math.PI * 2;
        const orbitR = 160 + Math.sin(time + i) * 20;
        const ox = cx + Math.cos(angle) * orbitR;
        const oy = cy + Math.sin(angle) * orbitR * 0.3;
        const c = COLORS_ARR[i];

        ctx.fillStyle = c;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(ox, oy, 3, 0, Math.PI * 2);
        ctx.fill();

        // Shorter trail (5 instead of 8)
        for (let t = 1; t <= 5; t++) {
          const trailAngle = angle - t * 0.05;
          const tx = cx + Math.cos(trailAngle) * orbitR;
          const ty = cy + Math.sin(trailAngle) * orbitR * 0.3;
          ctx.globalAlpha = 0.3 - t * 0.06;
          ctx.beginPath();
          ctx.arc(tx, ty, 2 - t * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    const startLoop = () => {
      if (animId) return;
      const animate = () => {
        if (!visibleRef.current) {
          animId = 0;
          return; // fully stop the loop
        }
        frameRef.current++;
        ctx.clearRect(0, 0, w, h);
        drawCentralEnergy();
        drawStreams();
        drawConnectionsAndParticles();
        animId = requestAnimationFrame(animate);
      };
      animId = requestAnimationFrame(animate);
    };

    // Pause when not visible
    const onVisibilityFull = () => {
      visibleRef.current = !document.hidden;
      if (visibleRef.current) startLoop();
    };

    // IntersectionObserver — pause when hero scrolls away
    const observerFull = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting && !document.hidden;
        if (visibleRef.current) startLoop();
      },
      { threshold: 0.1 }
    );

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityFull);
    observerFull.observe(canvas);
    startLoop();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      observerFull.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("visibilitychange", onVisibilityFull);
    };
  }, [initParticles, initStreams]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
