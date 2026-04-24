"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MedallionFlow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center font-mono text-xs text-muted uppercase tracking-[4px] mb-16"
        >
          Como os dados fluem nos meus projetos
        </motion.p>

        {/* Desktop version */}
        <div className="hidden lg:block">
          <DesktopFlow inView={inView} />
        </div>

        {/* Mobile version */}
        <div className="lg:hidden">
          <MobileFlow inView={inView} />
        </div>
      </div>
    </section>
  );
}

function DesktopFlow({ inView }: { inView: boolean }) {
  return (
    <div className="relative">
      {/* Main pipeline line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-border via-accent/30 to-border origin-left -translate-y-1/2 z-0"
      />

      <div className="grid grid-cols-5 gap-4 relative z-10">
        {/* SOURCE — APIs/DBs */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="bg-card border border-border rounded-xl p-5 w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 mx-auto">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
              </div>
              <p className="font-mono text-xs text-blue-400 font-bold text-center mb-2">SOURCE</p>
              <div className="space-y-1.5">
                {["REST APIs", "SQL Server", "SAP / ERP", "Files / S3"].map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="flex items-center gap-2 text-[10px] font-mono text-muted"
                  >
                    <motion.span
                      animate={inView ? { opacity: [0.3, 1, 0.3] } : {}}
                      transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-blue-400"
                    />
                    {s}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Data packets flying out */}
          {inView && (
            <div className="relative w-full h-8 mt-2">
              {[0, 1.5, 3, 4.5].map((d, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2 h-2 rounded-sm bg-blue-400"
                  style={{ boxShadow: "0 0 8px #60a5fa" }}
                  animate={{
                    x: [0, 80, 160],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, delay: d + 1, repeat: Infinity, ease: "easeIn" }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* BRONZE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="bg-card border border-bronze/40 rounded-xl p-5 w-full relative overflow-hidden group hover:border-bronze/80 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-[#CD7F32]/8 to-transparent" />
            <motion.div
              animate={inView ? { opacity: [0.05, 0.12, 0.05] } : {}}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-[#CD7F32]"
            />
            <div className="relative">
              {/* Medallion layer icon */}
              <div className="w-10 h-10 rounded-lg bg-[#CD7F32]/15 flex items-center justify-center mb-4 mx-auto">
                <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                  <path d="M16 8L6 13l10 5 10-5L16 8z" fill="#CD7F32" opacity="0.8" />
                </svg>
              </div>
              <p className="font-mono text-xs text-[#CD7F32] font-bold text-center mb-1">BRONZE</p>
              <p className="text-[10px] text-muted text-center mb-3">Raw Data Layer</p>
              <div className="bg-black/30 rounded-lg p-2.5 font-mono text-[9px] text-muted leading-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.5 }}
                >
                  <span className="text-[#CD7F32]">ingest</span>(raw_json)
                  <br />
                  <span className="text-[#CD7F32]">save</span>(delta, <span className="text-yellow-500">&quot;bronze/&quot;</span>)
                  <br />
                  <span className="text-muted/50"># schema-on-read</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Arrow + particles bronze → silver */}
          {inView && (
            <div className="relative w-full h-8 mt-2">
              {[0.3, 1.8, 3.3].map((d, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full"
                  style={{ background: "#CD7F32", boxShadow: "0 0 10px #CD7F3280" }}
                  animate={{
                    x: [0, 60, 140],
                    opacity: [0, 1, 0],
                    background: ["#CD7F32", "#C0C0C0", "#C0C0C0"],
                  }}
                  transition={{ duration: 2.5, delay: d + 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* SILVER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col items-center"
        >
          <div className="bg-card border border-silver/30 rounded-xl p-5 w-full relative overflow-hidden group hover:border-silver/70 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-[#C0C0C0]/5 to-transparent" />
            <motion.div
              animate={inView ? { opacity: [0.03, 0.08, 0.03] } : {}}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
              className="absolute inset-0 bg-[#C0C0C0]"
            />
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-[#C0C0C0]/15 flex items-center justify-center mb-4 mx-auto">
                <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                  <path d="M16 8L6 13l10 5 10-5L16 8z" fill="#C0C0C0" opacity="0.3" />
                  <path d="M6 18l10 5 10-5" stroke="#C0C0C0" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <p className="font-mono text-xs text-[#C0C0C0] font-bold text-center mb-1">SILVER</p>
              <p className="text-[10px] text-muted text-center mb-3">Clean & Transform</p>
              <div className="bg-black/30 rounded-lg p-2.5 font-mono text-[9px] text-muted leading-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 2.2 }}
                >
                  <span className="text-[#C0C0C0]">df</span> = spark.read(<span className="text-yellow-500">&quot;bronze&quot;</span>)
                  <br />
                  .<span className="text-[#C0C0C0]">dropDuplicates</span>()
                  <br />
                  .<span className="text-[#C0C0C0]">withColumn</span>(<span className="text-yellow-500">&quot;clean&quot;</span>)
                  <br />
                  .<span className="text-[#C0C0C0]">write</span>(<span className="text-yellow-500">&quot;silver/&quot;</span>)
                </motion.div>
              </div>

              {/* Spark processing animation */}
              <motion.div
                animate={inView ? { rotate: 360 } : {}}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 w-6 h-6 opacity-30"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2" className="w-full h-full">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6m-7-9.5l5.2 3m1.6-9l5.2 3" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Arrow + particles silver → gold */}
          {inView && (
            <div className="relative w-full h-8 mt-2">
              {[0.5, 2, 3.5].map((d, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full"
                  style={{ background: "#C0C0C0", boxShadow: "0 0 10px #C0C0C080" }}
                  animate={{
                    x: [0, 60, 140],
                    opacity: [0, 1, 0],
                    background: ["#C0C0C0", "#FFD700", "#FFD700"],
                  }}
                  transition={{ duration: 2.5, delay: d + 2, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* GOLD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2 }}
          className="flex flex-col items-center"
        >
          <div className="bg-card border border-gold/30 rounded-xl p-5 w-full relative overflow-hidden group hover:border-gold/70 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/5 to-transparent" />
            <motion.div
              animate={inView ? { opacity: [0.03, 0.1, 0.03] } : {}}
              transition={{ duration: 3, delay: 1, repeat: Infinity }}
              className="absolute inset-0 bg-[#FFD700]"
            />
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-[#FFD700]/15 flex items-center justify-center mb-4 mx-auto">
                <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                  <path d="M16 6L6 11l10 5 10-5L16 6z" fill="#FFD700" opacity="0.3" />
                  <path d="M6 16l10 5 10-5" stroke="#FFD700" strokeWidth="2" fill="none" />
                  <path d="M6 21l10 5 10-5" stroke="#FFD700" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <p className="font-mono text-xs text-[#FFD700] font-bold text-center mb-1">GOLD</p>
              <p className="text-[10px] text-muted text-center mb-3">Business Ready</p>
              <div className="bg-black/30 rounded-lg p-2.5 font-mono text-[9px] text-muted leading-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 2.8 }}
                >
                  <span className="text-[#FFD700]">CREATE</span> TABLE gold.metrics
                  <br />
                  <span className="text-[#FFD700]">AS SELECT</span> agg(*)
                  <br />
                  <span className="text-muted/50"># KPIs, dims, facts</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Arrow + particles gold → dashboard */}
          {inView && (
            <div className="relative w-full h-8 mt-2">
              {[0.8, 2.3, 3.8].map((d, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2.5 h-2.5"
                  style={{
                    background: "#FFD700",
                    boxShadow: "0 0 12px #FFD70080",
                    borderRadius: "2px",
                  }}
                  animate={{
                    x: [0, 60, 140],
                    opacity: [0, 1, 0],
                    rotate: [0, 90, 180],
                  }}
                  transition={{ duration: 2, delay: d + 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* OUTPUT — Dashboard / API / AI */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.6 }}
          className="flex flex-col items-center"
        >
          <div className="bg-card border border-accent-light/30 rounded-xl p-5 w-full relative overflow-hidden group hover:border-accent-light/70 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-accent-light/5 to-transparent" />
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-accent-glow text-accent-light flex items-center justify-center mb-4 mx-auto">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <p className="font-mono text-xs text-accent-light font-bold text-center mb-2">OUTPUT</p>

              {/* Mini dashboard mockup */}
              <div className="bg-black/30 rounded-lg p-3 space-y-2">
                {/* Bar chart */}
                <div className="flex items-end gap-1 h-8 justify-center">
                  {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-2.5 rounded-t"
                      style={{ background: i === 5 ? "#FFD700" : "#8b5cf680" }}
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${h}%` } : {}}
                      transition={{ duration: 0.8, delay: 3 + i * 0.1 }}
                    />
                  ))}
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-2 gap-1.5">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 3.5 }}
                    className="bg-accent-light/10 rounded px-2 py-1"
                  >
                    <p className="text-[8px] text-muted">Revenue</p>
                    <p className="text-[10px] font-mono text-accent-light font-bold">$2.4M</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 3.7 }}
                    className="bg-[#FFD700]/10 rounded px-2 py-1"
                  >
                    <p className="text-[8px] text-muted">Growth</p>
                    <p className="text-[10px] font-mono text-[#FFD700] font-bold">+34%</p>
                  </motion.div>
                </div>

                {/* Output targets */}
                <div className="flex justify-center gap-3 pt-1">
                  {["Power BI", "Fabric", "FastAPI", "RAG / AI"].map((label, i) => (
                    <motion.span
                      key={label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 3.9 + i * 0.15 }}
                      className="text-[8px] font-mono text-muted bg-border/50 px-1.5 py-0.5 rounded"
                    >
                      {label}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CI/CD Orchestration bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 4.2, duration: 0.6 }}
        className="mt-8 relative"
      >
        <div className="border border-orange-500/20 rounded-xl p-4 bg-gradient-to-r from-orange-500/[0.03] via-accent/[0.03] to-teal/[0.03] relative overflow-hidden">
          {/* Animated pipeline pulse */}
          <motion.div
            animate={inView ? { x: ["-100%", "200%"] } : {}}
            transition={{ duration: 3, delay: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"
          />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* GitLab icon */}
              <div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="#f97316">
                  <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-[10px] text-orange-400 font-bold tracking-wider">CI/CD & ORQUESTRAÇÃO</p>
                <p className="text-[9px] text-muted/60">Deploy automatizado em cada camada</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {[
                { label: "GitLab CI", color: "#f97316" },
                { label: "Azure DevOps", color: "#3b82f6" },
                { label: "GitHub Actions", color: "#8b5cf6" },
                { label: "Airflow", color: "#0d9488" },
                { label: "DABs", color: "#FFD700" },
              ].map((tool, i) => (
                <motion.span
                  key={tool.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 4.5 + i * 0.12 }}
                  className="text-[8px] font-mono px-2 py-1 rounded-md border"
                  style={{
                    color: tool.color,
                    borderColor: `${tool.color}30`,
                    background: `${tool.color}08`,
                  }}
                >
                  {tool.label}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Mini pipeline visualization */}
          <div className="flex items-center gap-1.5 mt-3">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 2, delay: 4.8 }}
              className="h-px bg-gradient-to-r from-orange-500/40 via-accent/30 to-teal/40 rounded-full"
            />
          </div>
          <div className="flex justify-between mt-1.5">
            {["commit", "build", "test", "deploy staging", "deploy prod"].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 5 + i * 0.15 }}
                className="flex items-center gap-1"
              >
                <motion.div
                  animate={inView ? { opacity: [0.4, 1, 0.4] } : {}}
                  transition={{ duration: 2, delay: 5.2 + i * 0.3, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-green-400"
                />
                <span className="text-[8px] font-mono text-muted/50">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Flow labels below */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 4 }}
        className="grid grid-cols-5 gap-4 mt-6"
      >
        {[
          { label: "Ingestão", sub: "APIs, DBs, Files, SAP" },
          { label: "Armazenamento", sub: "Delta Lake, Schema-on-read" },
          { label: "Transformação", sub: "PySpark, dbt, Quality" },
          { label: "Agregação", sub: "KPIs, Dims, Facts" },
          { label: "Consumo", sub: "BI, Fabric, APIs, AI, RAG" },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-mono text-[10px] text-foreground/70 font-medium">{item.label}</p>
            <p className="text-[9px] text-muted/50">{item.sub}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function MobileFlow({ inView }: { inView: boolean }) {
  const steps = [
    {
      color: "#60a5fa",
      label: "SOURCE",
      sub: "APIs, SQL Server, SAP, Files",
      code: null,
    },
    {
      color: "#CD7F32",
      label: "BRONZE",
      sub: "Raw Data Layer",
      code: 'ingest(raw) → save("bronze/")',
    },
    {
      color: "#C0C0C0",
      label: "SILVER",
      sub: "Clean & Transform",
      code: "df.dropDuplicates().clean()",
    },
    {
      color: "#FFD700",
      label: "GOLD",
      sub: "Business Ready",
      code: "CREATE TABLE gold.metrics",
    },
    {
      color: "#8b5cf6",
      label: "OUTPUT",
      sub: "Power BI, FastAPI, RAG / AI",
      code: null,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-3 max-w-xs mx-auto">
      {steps.map((step, i) => (
        <div key={step.label} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.25 }}
            className="rounded-xl p-4 border text-center"
            style={{
              borderColor: `${step.color}40`,
              background: `${step.color}08`,
            }}
          >
            <p className="font-mono text-xs font-bold" style={{ color: step.color }}>
              {step.label}
            </p>
            <p className="text-[11px] text-muted">{step.sub}</p>
            {step.code && (
              <p className="font-mono text-[9px] text-muted/60 mt-1 bg-black/20 rounded px-2 py-1 inline-block">
                {step.code}
              </p>
            )}
          </motion.div>

          {i < steps.length - 1 && (
            <div className="flex justify-center py-1.5 relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 0.4 } : {}}
                transition={{ delay: i * 0.25 + 0.3 }}
              >
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <path d="M8 0v16M3 12l5 5 5-5" stroke={step.color} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </motion.div>
              {inView && (
                <motion.div
                  className="absolute w-2 h-2 rounded-full"
                  style={{ background: step.color, boxShadow: `0 0 8px ${step.color}80` }}
                  animate={{ y: [0, 16], opacity: [0, 1, 0] }}
                  transition={{ duration: 1, delay: i * 0.5 + 1, repeat: Infinity }}
                />
              )}
            </div>
          )}
        </div>
      ))}

      {/* CI/CD bar mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="w-full mt-2 border border-orange-500/20 rounded-xl p-3 bg-orange-500/[0.03]"
      >
        <div className="flex items-center gap-2 mb-2">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#f97316">
            <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z" />
          </svg>
          <p className="font-mono text-[10px] text-orange-400 font-bold">CI/CD & ORQUESTRAÇÃO</p>
        </div>
        <div className="flex flex-wrap gap-1.5 justify-center">
          {["GitLab CI", "Azure DevOps", "GitHub Actions", "Airflow", "DABs"].map((tool) => (
            <span
              key={tool}
              className="text-[8px] font-mono text-orange-400/80 px-1.5 py-0.5 rounded border border-orange-500/20 bg-orange-500/5"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
