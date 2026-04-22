"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-mono text-lg font-bold tracking-tight">
          <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
            {/* Background circle */}
            <circle cx="20" cy="20" r="20" fill="url(#navAvatarBg)"/>
            {/* Neck */}
            <path d="M14.5 28.5h11v5h-11z" fill="#b07840"/>
            {/* Black t-shirt */}
            <path d="M6 40c0-7 5-11.5 14-11.5S34 33 34 40" fill="#1a1a1a"/>
            <path d="M13 29c1.5 1 4 1.5 7 1.5s5.5-.5 7-1.5" stroke="#222" strokeWidth="0.5" fill="none"/>
            {/* Head */}
            <ellipse cx="20" cy="18.5" rx="10.5" ry="12" fill="#c48a50"/>
            {/* Ears */}
            <ellipse cx="9.8" cy="19" rx="2" ry="2.5" fill="#b07840"/>
            <ellipse cx="30.2" cy="19" rx="2" ry="2.5" fill="#b07840"/>
            {/* Hair - top (short, styled) */}
            <path d="M9.5 15c0-7 4.5-11.5 10.5-11.5S30.5 8 30.5 15c0 1-0.5 2.5-1 3.5 0.5-3.5-1-9.5-9.5-9.5S10 14.5 10.5 18.5c-.5-1-1-2.5-1-3.5z" fill="#1c1410"/>
            {/* Hair - fade sides (gradient effect) */}
            <path d="M9.5 15c.2 2 .5 3.5.8 5-.2-1.5-.3-3-.1-4.5.1-.2.2-.3.3-.5z" fill="#2a1f18" opacity="0.7"/>
            <path d="M30.5 15c-.2 2-.5 3.5-.8 5 .2-1.5.3-3 .1-4.5-.1-.2-.2-.3-.3-.5z" fill="#2a1f18" opacity="0.7"/>
            {/* Hair top volume */}
            <path d="M11 11.5C12 6 15.5 3.5 20 3.5S28 6 29 11.5c-1-4-4.5-6.5-9-6.5S12 7.5 11 11.5z" fill="#0f0c09"/>
            {/* Eyebrows - thick */}
            <path d="M13.5 15.5c.5-.8 1.8-1.2 3.2-1" stroke="#1a1008" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
            <path d="M26.5 15.5c-.5-.8-1.8-1.2-3.2-1" stroke="#1a1008" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
            {/* Eyes */}
            <ellipse cx="15.5" cy="18" rx="1.6" ry="1.4" fill="#1a1008"/>
            <ellipse cx="24.5" cy="18" rx="1.6" ry="1.4" fill="#1a1008"/>
            <circle cx="15" cy="17.5" r="0.5" fill="white" opacity="0.7"/>
            <circle cx="24" cy="17.5" r="0.5" fill="white" opacity="0.7"/>
            {/* Glasses - rimless with gold frame */}
            <rect x="11.5" y="15.5" width="8" height="5.5" rx="1.2" fill="none" stroke="#c9a96e" strokeWidth="0.7"/>
            <rect x="20.5" y="15.5" width="8" height="5.5" rx="1.2" fill="none" stroke="#c9a96e" strokeWidth="0.7"/>
            {/* Blue lens tint */}
            <rect x="11.8" y="15.8" width="7.4" height="4.9" rx="1" fill="#4488ff" opacity="0.08"/>
            <rect x="20.8" y="15.8" width="7.4" height="4.9" rx="1" fill="#4488ff" opacity="0.08"/>
            {/* Bridge */}
            <path d="M19.5 17.5h1" stroke="#c9a96e" strokeWidth="0.7"/>
            {/* Temple arms */}
            <path d="M11.5 16.5L9.5 15.8" stroke="#c9a96e" strokeWidth="0.6"/>
            <path d="M28.5 16.5L30.5 15.8" stroke="#c9a96e" strokeWidth="0.6"/>
            {/* Nose */}
            <path d="M20 19.5v2.5c-.3.5-1 .8-1.2.8" stroke="#a67838" strokeWidth="0.6" strokeLinecap="round" fill="none"/>
            {/* Light mustache */}
            <path d="M16.5 24c1-.4 2.2-.6 3.5-.6s2.5.2 3.5.6" stroke="#6b4820" strokeWidth="0.5" opacity="0.5" fill="none"/>
            {/* Mouth */}
            <path d="M17 25.5c1 .5 2 .6 3 .6s2-.1 3-.6" stroke="#8b5a30" strokeWidth="0.7" strokeLinecap="round" fill="none"/>
            <defs>
              <linearGradient id="navAvatarBg" x1="0" y1="0" x2="40" y2="40">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
          </svg>
          <span>CR</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs text-muted hover:text-accent-light hover:bg-accent-glow px-4 py-2 rounded-md transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-muted transition-transform ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-muted transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-muted transition-transform ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border px-6 pb-6 flex flex-col gap-1"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-mono text-sm text-muted hover:text-accent-light py-3 px-4 rounded-md transition-all"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
