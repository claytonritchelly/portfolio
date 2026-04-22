"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const card = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="01." title="Sobre mim" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div {...card} className="space-y-5 text-muted text-[15px] leading-relaxed">
            <p>
              Sou <span className="text-foreground font-medium">Engenheiro de Dados</span> com
              experiência em diversos setores — <span className="text-foreground font-medium">bancário,
              resseguros, seguros, telecomunicações, marketing e mídia digital</span>.
              Ao longo da carreira, construí plataformas de dados end-to-end em ambientes{" "}
              <span className="text-foreground font-medium">multicloud (Azure, AWS e GCP)</span>,
              com pipelines em arquitetura medallion (Bronze &rarr; Silver &rarr; Gold) usando{" "}
              <span className="text-foreground font-medium">Databricks, Apache Spark, dbt, Apache Hop e Apache Airflow</span>.
              Implementei governança via Unity Catalog, exposição de dados com{" "}
              <span className="text-foreground font-medium">FastAPI</span> e, mais recentemente,
              projetos de{" "}
              <span className="text-foreground font-medium">IA Generativa, RAG (Retrieval-Augmented Generation)
              e agentes inteligentes</span> — integrando LLMs a pipelines de dados para
              automação, busca semântica e tomada de decisão assistida por IA.
            </p>
            <p>
              Minha relação com dados começou cedo, influenciada pelo meu pai, DBA de longa data.
              Esse contato precoce moldou minha forma de pensar arquitetura, modelagem e qualidade
              de dados desde o início da carreira. Passei por desenvolvimento Oracle, atuei como
              Engenheiro de Dados no setor bancário e também como{" "}
              <span className="text-foreground font-medium">professor de Engenharia de Dados</span>{" "}
              antes de chegar ao papel atual.
            </p>
            <p>
              Além do trabalho, produzo conteúdo educacional sobre engenharia de dados no
              YouTube (série &quot;Do Zero aos Dados&quot;) e no Instagram, com foco em ajudar
              quem está começando ou em transição na área.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                "Arquitetura Medallion",
                "Governança (Unity Catalog)",
                "APIs FastAPI + OAuth",
                "IA Generativa, RAG & Agentes",
                "Multicloud (Azure, AWS, GCP)",
                "Ingestão & CDC",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <span className="text-accent-light text-xs">&#9670;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Terminal card */}
          <motion.div {...card} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="font-mono text-[11px] text-muted ml-auto">
                  clayton.json
                </span>
              </div>
              <pre className="p-5 font-mono text-[13px] leading-7 text-muted overflow-x-auto">
                <code>{`{`}</code>
                {"\n"}
                <code>
                  {"  "}
                  <span className="text-accent-light">&quot;nome&quot;</span>:{" "}
                  <span className="text-yellow-500">&quot;Clayton Ritchelly&quot;</span>,
                </code>
                {"\n"}
                <code>
                  {"  "}
                  <span className="text-accent-light">&quot;cargo&quot;</span>:{" "}
                  <span className="text-yellow-500">&quot;Senior Data Engineer&quot;</span>,
                </code>
                {"\n"}
                <code>
                  {"  "}
                  <span className="text-accent-light">&quot;local&quot;</span>:{" "}
                  <span className="text-yellow-500">&quot;São Paulo, Brasil&quot;</span>,
                </code>
                {"\n"}
                <code>
                  {"  "}
                  <span className="text-accent-light">&quot;formação&quot;</span>:{" "}
                  <span className="text-yellow-500">&quot;ADS + MBA Eng. Dados (FIAP)&quot;</span>,
                </code>
                {"\n"}
                <code>
                  {"  "}
                  <span className="text-accent-light">&quot;idiomas&quot;</span>: [
                </code>
                {"\n"}
                <code>
                  {"    "}
                  <span className="text-yellow-500">&quot;Português&quot;</span>,{" "}
                  <span className="text-yellow-500">&quot;Inglês Avançado&quot;</span>
                </code>
                {"\n"}
                <code>{"  "}],</code>
                {"\n"}
                <code>
                  {"  "}
                  <span className="text-accent-light">&quot;hobbie&quot;</span>:{" "}
                  <span className="text-yellow-500">&quot;Multi-instrumentista&quot;</span>
                </code>
                {"\n"}
                <code>{`}`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
