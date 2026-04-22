"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const contacts = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "E-mail",
    value: "Claytonritchelly85@gmail.com",
    href: "mailto:Claytonritchelly85@gmail.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "LinkedIn",
    value: "Perfil profissional",
    href: "https://bit.ly/3HnFmDn",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Telefone",
    value: "(11) 9 9570-7893",
    href: "tel:+5511995707893",
  },
];

export default function Footer() {
  return (
    <>
      <section id="contato" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading number="05." title="Contato" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted max-w-2xl mb-12 text-base leading-relaxed"
          >
            Estou sempre aberto a novas oportunidades, projetos interessantes e
            conexões profissionais. Se quiser conversar sobre engenharia de
            dados, Big Data ou qualquer desafio técnico, entre em contato!
          </motion.p>

          <div className="flex flex-col gap-4 max-w-xl">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex items-center gap-4 bg-card border border-border rounded-xl px-6 py-5 hover:border-accent-light hover:translate-x-2 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-accent-glow text-accent-light flex items-center justify-center flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-0.5">
                    {c.label}
                  </span>
                  <span className="text-sm text-muted group-hover:text-accent-light transition-colors">
                    {c.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6 text-center">
        <p className="text-sm text-muted">
          <span className="font-mono text-accent-light mr-1">&lt;/&gt;</span>
          Desenvolvido por{" "}
          <span className="text-foreground font-medium">Clayton Ritchelly</span>{" "}
          &mdash; 2025
        </p>
      </footer>
    </>
  );
}
