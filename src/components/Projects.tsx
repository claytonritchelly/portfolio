"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    emoji: "🏢",
    type: "Corporativo",
    title: "Plataforma Corporativa de Dados",
    description:
      "Construção e manutenção de plataforma corporativa sobre Databricks/Azure no setor de resseguros.",
    highlights: [
      "Table Factory: notebook PySpark com tabela de controle Delta que automatiza a criação de tabelas Gold em dev/prd",
      "FastAPI Data Layer: camada de exposição autenticada via Azure Entra ID para times internos",
      "Unity Catalog Governance: padronização de permissões, auditoria de grupos e migração via AD",
      "Pipelines de Resseguro: ingestão e transformação Bronze → Silver com pipeline GitLab CI/CD",
    ],
    tags: ["Databricks", "Microsoft Fabric", "FastAPI", "Unity Catalog", "Azure", "GitLab CI/CD", "Delta Lake"],
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
    type: "Estruturação",
    title: "Construção de Plataforma de Dados do Zero",
    description:
      "Projeto greenfield de criação completa da plataforma de dados de uma empresa que não possuía área de dados estruturada — desde a definição da arquitetura até a entrega de dados prontos para consumo por áreas de negócio.",
    highlights: [
      "Desenho da arquitetura e migração de SQL Server, APIs REST e DW legado para Azure Data Lake",
      "Implementação completa das camadas Bronze, Silver e Gold no Databricks com Delta Lake",
      "Orquestração de pipelines com Data Factory, Apache Airflow e transformações em PySpark",
      "Criação de governança, catálogo de dados e padrões de qualidade desde o dia zero",
    ],
    tags: ["Azure Data Lake", "Databricks", "Microsoft Fabric", "Delta Lake", "Airflow", "Data Factory", "PySpark", "Medallion"],
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
    title: "Migração de Cloud — Setor de Saúde",
    description:
      "Liderança técnica na migração de toda a infraestrutura de dados de OCI para Azure em uma empresa do setor de saúde, garantindo continuidade operacional e zero perda de dados durante a transição.",
    highlights: [
      "Mapeamento sistêmico completo com diagramas de arquitetura as-is e to-be",
      "Gap analysis detalhado entre ambientes DEV, HML e PRD para mitigar riscos",
      "Validação e reconciliação de tabelas Gold críticas de autorização médica",
      "Transição executada sem downtime para os sistemas de atendimento ao paciente",
    ],
    tags: ["OCI", "Azure", "Databricks", "Microsoft Fabric", "Migração Cloud", "Arquitetura", "Saúde"],
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
    type: "Sustentação",
    title: "Sustentação & Evolução de Plataforma Crítica",
    description:
      "Responsável pela operação contínua e evolução de uma plataforma de dados de alta volumetria em produção, garantindo disponibilidade 24/7, SLAs rigorosos e redução consistente de custos operacionais.",
    highlights: [
      "Implementação de observabilidade completa com CloudWatch, alertas e runbooks automatizados",
      "Otimização de jobs Spark e queries que resultou em redução de 40% nos custos de infraestrutura",
      "Gestão de incidentes críticos com RCA (Root Cause Analysis) e prevenção de reincidência",
      "Expansão contínua: onboarding de novos domínios, fontes de dados e regras de negócio",
    ],
    tags: ["Spark", "AWS", "CloudWatch", "Kafka", "Python", "Observabilidade"],
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="03." title="Projetos em Destaque" />

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
