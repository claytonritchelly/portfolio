"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const channels = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    title: "YouTube",
    subtitle: "Do Zero aos Dados",
    description:
      'Série educacional sobre engenharia de dados com projetos reais. Do pipeline F1 ao Databricks, tudo explicado passo a passo.',
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
];

export default function Content() {
  return (
    <section id="conteudo" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="04." title="Conteúdo Educacional" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted max-w-2xl mb-12 leading-relaxed"
        >
          Acredito que compartilhar conhecimento é parte fundamental da
          engenharia. Produzo conteúdo educacional para ajudar quem está
          começando ou em transição para a área de dados.
        </motion.p>

        <div className="grid gap-5 max-w-lg">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-7 hover:border-accent-light hover:shadow-[0_0_0_1px_var(--color-accent-light)] transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl ${ch.bgColor} ${ch.color} flex items-center justify-center mb-5`}
              >
                {ch.icon}
              </div>
              <h3 className="font-semibold text-base mb-1">{ch.title}</h3>
              <p className="font-mono text-xs text-accent-light mb-3">
                {ch.subtitle}
              </p>
              <p className="text-sm text-muted leading-relaxed">
                {ch.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fora do código */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-card border border-border rounded-xl p-8 md:p-10"
        >
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-3">
            <span className="text-2xl">🎸</span> Fora do código
          </h3>
          <p className="text-muted leading-relaxed max-w-3xl">
            Multi-instrumentista (violão, baixo, guitarra, piano, cavaco),
            apaixonado por futebol, casado e pai de um filho. Acredito que a
            criatividade da música e a disciplina da engenharia se conversam
            mais do que parece.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
