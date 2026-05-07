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
              Atuo como <span className="text-foreground font-medium">Arquiteto e Engenheiro de Dados</span>{" "}
              com vivência em setores regulados e de alta criticidade — <span className="text-foreground font-medium">bancário,
              resseguros, seguros, telecomunicações, governo, marketing e mídia digital</span>.
              Desenho e operacionalizo plataformas analíticas corporativas em{" "}
              <span className="text-foreground font-medium">Azure, AWS e GCP</span>, com foco em{" "}
              <span className="text-foreground font-medium">Lakehouse, Databricks, Microsoft Fabric, Spark e arquitetura medallion</span>{" "}
              (Bronze &rarr; Silver &rarr; Gold).
            </p>
            <p>
              Minha atuação vai além da operação: defino padrões de{" "}
              <span className="text-foreground font-medium">segurança, redes e governança</span>{" "}
              (VNets, Private Endpoints, RBAC, Managed Identities, Key Vault, Entra ID), automatizo provisionamento via{" "}
              <span className="text-foreground font-medium">IaC (Terraform e Bicep)</span> e implemento práticas de{" "}
              <span className="text-foreground font-medium">FinOps, observabilidade e DR</span>{" "}
              com Azure Monitor, Log Analytics e métricas de custo/performance — pensando arquitetura sob a ótica de escalabilidade,
              resiliência e compliance enterprise.
            </p>
            <p>
              Combino visão arquitetural com postura hands-on: do desenho de redes e identidade no Azure ao{" "}
              <span className="text-foreground font-medium">deploy via Databricks Asset Bundles</span>, exposição segura de dados via{" "}
              <span className="text-foreground font-medium">FastAPI + OAuth</span> e projetos de{" "}
              <span className="text-foreground font-medium">IA Generativa, RAG e Agentes Inteligentes</span>{" "}
              integrando LLMs a pipelines de dados para automação e tomada de decisão assistida.
            </p>
            <p>
              Minha relação com dados começou cedo, influenciada pelo meu pai, DBA de longa data — o que moldou
              minha forma de pensar arquitetura, modelagem e qualidade desde o início. Já atuei como desenvolvedor
              Oracle, Engenheiro de Dados Sênior e <span className="text-foreground font-medium">professor de Engenharia de Dados</span>,
              somando experiência técnica e didática.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                "Arquitetura Lakehouse / Medallion",
                "Azure Networking & Security",
                "Terraform & IaC",
                "FinOps & Observabilidade",
                "Governança (Unity Catalog, RBAC)",
                "IA Generativa, RAG & Agentes",
                "Multicloud (Azure, AWS, GCP)",
                "CI/CD para Dados & Infra",
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
                  <span className="text-yellow-500">&quot;Data Architect &amp; Senior Data Engineer&quot;</span>,
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
