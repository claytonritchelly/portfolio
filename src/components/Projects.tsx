"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    emoji: "🏢",
    type: "Arquitetura",
    title: "Arquitetura de Plataforma Corporativa em Azure Databricks",
    description:
      "Desenho e evolução de uma plataforma analítica corporativa em Azure Databricks no setor de resseguros — com foco em arquitetura de redes, identidade, governança e CI/CD.",
    highlights: [
      "Definição de padrões de workspaces, clusters, networking (VNet Injection + Private Endpoints) e identidade (Entra ID, Managed Identity, Key Vault)",
      "Table Factory: framework PySpark com tabela de controle Delta que automatiza criação de tabelas Gold em DEV/PRD",
      "FastAPI Data Layer com OAuth/Entra ID para exposição segura de dados corporativos",
      "Governança via Unity Catalog: RBAC, auditoria, padronização de permissões e segregação de ambientes",
      "CI/CD com GitLab + Databricks Asset Bundles para promoção entre ambientes",
    ],
    tags: ["Databricks", "Microsoft Fabric", "Azure", "Unity Catalog", "Entra ID", "Private Endpoint", "DABs", "GitLab CI/CD", "FastAPI", "Delta Lake"],
  },
  {
    emoji: "🏛️",
    type: "Governo",
    title: "Plataforma de Dados — Governo do Estado de São Paulo",
    description:
      "Projeto estratégico de unificação e tratamento de dados do Estado de São Paulo, fornecendo visibilidade ao governador para tomada de decisão sobre investimentos em setores públicos.",
    highlights: [
      "Unificação de dados de múltiplas fontes estaduais em uma plataforma centralizada",
      "Modelagem dimensional para análise de investimentos por setor (saúde, educação, segurança, infraestrutura)",
      "Pipelines de tratamento e qualidade com PySpark e Delta Lake — deduplicação, padronização e reconciliação",
      "Dashboards executivos que suportaram decisões de alocação orçamentária do governo",
    ],
    tags: ["PySpark", "SQL", "Delta Lake", "Modelagem Dimensional", "Governo", "Power BI"],
  },
  {
    emoji: "🔄",
    type: "Greenfield",
    title: "Arquitetura Greenfield de Data Platform em Azure",
    description:
      "Projeto greenfield de desenho e construção completa da plataforma de dados de uma empresa que não tinha área de dados estruturada — da arquitetura de referência (redes, identidade, storage, compute) até a entrega de dados consumíveis pelas áreas de negócio.",
    highlights: [
      "Arquitetura de referência: ADLS Gen2, Databricks, Data Factory, Entra ID, Key Vault, Private Endpoints e segregação por ambiente",
      "Provisionamento automatizado via Terraform: workspaces, clusters, storage, redes e RBAC",
      "Implementação completa do Lakehouse Bronze → Silver → Gold com Delta Lake",
      "Orquestração híbrida com Data Factory + Airflow e transformações em PySpark",
      "Governança, catálogo, qualidade e observabilidade definidos desde o dia zero",
    ],
    tags: ["Azure", "ADLS Gen2", "Databricks", "Microsoft Fabric", "Terraform", "Data Factory", "Airflow", "Delta Lake", "Lakehouse"],
  },
  {
    emoji: "🔁",
    type: "Integração",
    title: "Pipeline de Integração SAP → GCP",
    description:
      "Projeto de integração de dados corporativos SAP para o ecossistema Google Cloud, habilitando análises avançadas sobre dados financeiros, logísticos e de RH que antes ficavam isolados no ERP.",
    highlights: [
      "Integração de módulos críticos SAP: FI (Financeiro), MM (Materiais), SD (Vendas) e HCM (RH)",
      "Transformações distribuídas com Apache Spark sobre GCP Dataproc",
      "Ingestão incremental em modo CDC (DIU) com AecorSoft Data Integrator",
      "Dados antes inacessíveis passaram a alimentar dashboards e modelos analíticos",
    ],
    tags: ["GCP", "Dataproc", "Spark", "SAP", "CDC", "BigQuery"],
  },
  {
    emoji: "🏥",
    type: "Migração",
    title: "Migração de Cloud OCI → Azure (Setor Regulado)",
    description:
      "Liderança técnica e arquitetural na migração de toda a infraestrutura de dados de OCI para Azure em uma empresa do setor de saúde — com requisitos de compliance, alta disponibilidade e zero perda de dados.",
    highlights: [
      "Diagramas de arquitetura as-is e to-be e roadmap de migração por ondas",
      "Desenho de redes (VNet, Private Endpoints), identidade (Entra ID) e governança no destino",
      "Gap analysis entre ambientes DEV, HML e PRD para mitigar riscos regulatórios",
      "Validação e reconciliação de tabelas Gold críticas de autorização médica",
      "Cutover executado sem downtime para os sistemas de atendimento ao paciente",
    ],
    tags: ["Azure", "OCI", "Databricks", "Microsoft Fabric", "Private Endpoint", "Entra ID", "Migração Cloud", "Compliance", "Saúde"],
  },
  {
    emoji: "⏱️",
    type: "AWS",
    title: "Pipeline Inteligente de Jornadas de Trabalho",
    description:
      "Solução serverless na AWS que cruzava dados de RH com telemetria de máquinas para identificar automaticamente jornadas parciais reais vs. falhas de sistema — eliminando horas de análise manual do time de operações.",
    highlights: [
      "Arquitetura event-driven com AWS Glue, Step Functions e S3",
      "Correlação inteligente de dados de RH com Windows Event IDs (heartbeats de agente)",
      "Algoritmo de classificação que distinguiu jornadas parciais legítimas de falhas técnicas",
      "Redução drástica de falsos positivos que geravam retrabalho para o time de RH",
    ],
    tags: ["AWS Glue", "Step Functions", "S3", "Python", "Serverless"],
  },
  {
    emoji: "🏎️",
    type: "Educacional",
    title: "Formula 1 Data Pipeline — Do Zero aos Dados",
    description:
      "Projeto educacional open-source que demonstra um pipeline completo de engenharia de dados usando dados reais da Fórmula 1 — da ingestão ao insight, tudo em Databricks com arquitetura medallion.",
    highlights: [
      "Ingestão automatizada da OpenF1 API com Python e tratamento de dados em tempo real",
      "Arquitetura medallion completa (Bronze → Silver → Gold) no Databricks Free Edition",
      "Tabela analítica final com desempenho de pilotos por sessão, pronta para BI",
      "Conteúdo público no YouTube ensinando engenharia de dados na prática",
    ],
    tags: ["Databricks", "OpenF1 API", "Python", "Medallion", "Open Source"],
  },
  {
    emoji: "🛡️",
    type: "FinOps & SRE",
    title: "FinOps, Observabilidade & Evolução de Plataforma Crítica",
    description:
      "Responsável pela operação contínua e evolução arquitetural de uma plataforma de dados de alta volumetria em produção — com SLAs rigorosos, observabilidade ponta-a-ponta e disciplina de FinOps.",
    highlights: [
      "Observabilidade end-to-end com Azure Monitor, Log Analytics e CloudWatch — métricas de custo, performance e SLA",
      "Otimização de clusters Databricks, jobs Spark e queries com redução de 40% nos custos de infraestrutura",
      "Gestão de incidentes críticos com RCA estruturado e prevenção de reincidência",
      "Troubleshooting em rede, identidade, performance e escalabilidade em ambientes enterprise",
      "Expansão contínua: onboarding de novos domínios, fontes e regras de negócio",
    ],
    tags: ["Azure Monitor", "Databricks", "Spark", "FinOps", "Observabilidade", "Kafka", "AWS CloudWatch"],
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="03." title="Arquitetura & Projetos em Destaque" />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
              className="group bg-card border border-border rounded-xl p-7 flex flex-col hover:border-accent-light hover:shadow-[0_0_0_1px_var(--color-accent-light)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{p.emoji}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-light bg-accent-glow px-3 py-1 rounded-full">
                  {p.type}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-3 leading-snug group-hover:text-accent-light transition-colors">
                {p.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed mb-4">
                {p.description}
              </p>

              <ul className="space-y-2 mb-5 flex-1">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-sm text-muted pl-5 relative before:content-['>'] before:absolute before:left-0 before:text-accent-light before:font-mono before:font-bold"
                  >
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/50">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2.5 py-1 rounded bg-accent-glow text-accent-light"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
