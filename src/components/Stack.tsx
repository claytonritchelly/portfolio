"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Linguagens & Frameworks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: ["Python", "PySpark", "SQL", "Scala", "FastAPI", "PL/SQL"],
  },
  {
    title: "Plataformas de Dados",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    items: [
      "Databricks",
      "Microsoft Fabric",
      "Delta Lake",
      "Unity Catalog",
      "Apache Spark",
      "Apache Airflow",
      "Spark on Dataproc",
      "dbt",
      "Apache Hop",
      "Kafka",
    ],
  },
  {
    title: "Cloud",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    items: [
      "Azure (App Service, Entra ID, DevOps)",
      "GCP (Dataproc, BigQuery)",
      "AWS (Glue, Step Functions, S3, Redshift, Athena)",
      "OCI",
    ],
  },
  {
    title: "Bancos de Dados",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    items: [
      "SQL Server",
      "PostgreSQL",
      "Oracle 11g/12c",
      "MongoDB",
      "Cosmos DB",
      "MySQL",
    ],
  },
  {
    title: "Integração & CI/CD",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6m-7-9.5l5.2 3m1.6-9l5.2 3M4.5 16.5l5.2-3m1.6 9l5.2-3" />
      </svg>
    ),
    items: [
      "GitLab CI/CD",
      "Azure DevOps",
      "GitHub Actions",
      "Databricks Asset Bundles",
      "JDBC",
      "CDC",
      "Jenkins",
    ],
  },
  {
    title: "BI & IA",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    items: [
      "Power BI (Direct Query / Import)",
      "Tableau",
      "RAG (Retrieval-Augmented Generation)",
      "GenAI / LLMs",
      "AecorSoft Data Integrator (SAP)",
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="02." title="Stack Técnica" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-card border border-border rounded-xl p-6 hover:border-accent-light hover:shadow-[0_0_0_1px_var(--color-accent-light)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent-glow text-accent-light flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11px] px-3 py-1.5 rounded-full border border-accent-light/15 bg-accent-glow/50 text-muted group-hover:text-foreground group-hover:border-accent-light/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
