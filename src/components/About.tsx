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
              Sou <span className="text-foreground font-medium">Engenheiro de Dados Sênior</span> com forte
              atuação em <span className="text-foreground font-medium">arquitetura de plataformas analíticas</span> — uma
              evolução natural de quem coloca a mão no Spark, no Terraform e no Databricks todos os dias. Vivência em setores
              regulados e de alta criticidade: <span className="text-foreground font-medium">bancário, resseguros, seguros,
              telecomunicações, governo, marketing e mídia digital</span>.
            </p>
            <p>
              No dia a dia, construo e operacionalizo pipelines em arquitetura medallion (Bronze &rarr; Silver &rarr; Gold) com{" "}
              <span className="text-foreground font-medium">Databricks, Microsoft Fabric, Spark, dbt, Apache Hop e Apache Airflow</span>{" "}
              em ambientes <span className="text-foreground font-medium">multicloud (Azure, AWS e GCP)</span> — escrevendo código,
              otimizando jobs, modelando dados e entregando valor para áreas de negócio.
            </p>
            <p>
              Como engenheiro com visão arquitetural, também desenho padrões de{" "}
              <span className="text-foreground font-medium">segurança, redes e governança</span>{" "}
              (VNets, Private Endpoints, RBAC, Managed Identities, Key Vault, Entra ID), automatizo infraestrutura via{" "}
              <span className="text-foreground font-medium">IaC (Terraform e Bicep)</span> e implemento{" "}
              <span className="text-foreground font-medium">FinOps, observabilidade e DR</span>{" "}
              com Azure Monitor e Log Analytics — sempre com a ótica de escalabilidade, performance e compliance enterprise.
            </p>
            <p>
              Tenho prazer em código: do <span className="text-foreground font-medium">deploy via Databricks Asset Bundles</span>{" "}
              à exposição segura de dados via <span className="text-foreground font-medium">FastAPI + OAuth</span>, passando por
              projetos de <span className="text-foreground font-medium">IA Generativa, RAG e Agentes Inteligentes</span>{" "}
              integrando LLMs a pipelines de dados para automação e decisão assistida.
            </p>
            <p>
              Minha relação com dados começou cedo, influenciada pelo meu pai, DBA de longa data — o que moldou
              minha forma de pensar engenharia, arquitetura e qualidade desde o início. Já atuei como desenvolvedor
              Oracle, Engenheiro de Dados Sênior e <span className="text-foreground font-medium">professor de Engenharia de Dados</span>,
              somando experiência técnica e didática.
            </p>
            <p>
              Além do trabalho, produzo conteúdo educacional sobre engenharia de dados no
              YouTube (série &quot;Do Zero aos Dados&quot;), com foco em ajudar quem está
              começando ou em transição para a área.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                "Engenharia de Pipelines (Spark, dbt, Hop)",
                "Arquitetura Lakehouse / Medallion",
                "Ingestão & CDC",
                "APIs FastAPI + OAuth",
                "Azure Networking & Security",
                "Terraform & IaC",
                "FinOps & Observabilidade",
                "Governança (Unity Catalog, RBAC)",
                "IA Generativa, RAG & Agentes",
                "Multicloud (Azure, AWS, GCP)",
                "CI/CD para Dados & Infra",
                "Modelagem & Qualidade de Dados",
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
