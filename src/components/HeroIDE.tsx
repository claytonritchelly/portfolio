"use client";

import { motion } from "framer-motion";

/* ── Databricks icon (reused in tab + breadcrumb) ── */
const DatabricksIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className="flex-shrink-0">
    <path d="M12 2L2 7.5V12l10 5.5L22 12V7.5L12 2z" fill="#FF3621" opacity="0.9" />
    <path d="M12 13L2 7.5 12 2l10 5.5L12 13z" fill="#FF3621" />
    <path d="M2 12l10 5.5L22 12" stroke="#FF3621" strokeWidth="1.5" fill="none" />
    <path d="M2 16.5L12 22l10-5.5" stroke="#FF3621" strokeWidth="1.5" fill="none" opacity="0.6" />
  </svg>
);

/* ── sidebar files (numbered like real Databricks project) ── */
const sidebarFiles = [
  { name: "01_people_silver.py", status: "M" },
  { name: "02_people_broker_silver.py", status: "M" },
  { name: "03_data_clayton_silver.py", status: "M", active: true },
  { name: "04_auto_category_tariff_silv...", status: "M" },
  { name: "05_auto_fuel_silver.py", status: "M" },
  { name: "06_auto_items_silver.py", status: "M" },
  { name: "07_auto_items_coverage_silv...", status: "M" },
  { name: "08_auto_region_silver.py", status: "M" },
  { name: "09_auto_type_silver.py", status: "M" },
  { name: "10_auto_usage_silver.py", status: "M" },
  { name: "11_airplane_manufacturer_sil...", status: "M" },
  { name: "12_airplane_items_silver.py", status: "M" },
  { name: "13_airplane_items_coverage_...", status: "M" },
  { name: "14_bank_silver.py", status: "M" },
  { name: "15_boat_items_silver.py", status: "M" },
  { name: "16_boat_items_coverage_silv...", status: "M" },
  { name: "17_circ_r_auto_silver.py", status: "M" },
  { name: "18_coverage_silver.py", status: "M" },
  { name: "19_broker_commission_silver...", status: "M" },
  { name: "20_bank_account_silver.py", status: "M" },
];

/* ── code lines ── */
const codeLines: { text: string; cls: string }[] = [
  { text: "# Databricks notebook source", cls: "text-[#6a9955]" },
  { text: "import re", cls: "text-[#c586c0]" },
  { text: "import json", cls: "text-[#c586c0]" },
  { text: "", cls: "" },
  { text: "def get_cluster_tags(spark):", cls: "" },
  { text: '    """', cls: "text-[#6a9955]" },
  { text: "    Retorna as tags do cluster Databricks.", cls: "text-[#6a9955]" },
  { text: "", cls: "" },
  { text: "    Parâmetros:", cls: "text-[#6a9955]" },
  { text: "        spark (SparkSession): Sessão Spark ativa.", cls: "text-[#6a9955]" },
  { text: "", cls: "" },
  { text: "    Retorno:", cls: "text-[#6a9955]" },
  { text: "        dict: Tags do cluster {key: value}.", cls: "text-[#6a9955]" },
  { text: '    """', cls: "text-[#6a9955]" },
  { text: "    try:", cls: "text-[#c586c0]" },
  { text: '        tags_str = spark.conf.get("spark.databricks', cls: "" },
  { text: "        tags_list = json.loads(tags_str)", cls: "" },
  { text: '        tags_dict = {tag["key"]: tag["value"]', cls: "" },
  { text: "        return tags_dict", cls: "text-[#c586c0]" },
  { text: "    except Exception as e:", cls: "text-[#c586c0]" },
  { text: '        print(f"Erro ao obter tags: {e}")', cls: "text-[#ce9178]" },
  { text: "        return {}", cls: "text-[#c586c0]" },
  { text: "", cls: "" },
  { text: "# Exemplo de uso:", cls: "text-[#6a9955]" },
  { text: "tags = get_cluster_tags(spark)", cls: "" },
  { text: 'env = tags.get("env")', cls: "" },
  { text: "", cls: "" },
  { text: "# COMMAND ----------", cls: "text-[#6a9955]" },
  { text: "", cls: "" },
  { text: 'df_silver = spark.sql(f"""', cls: "" },
  { text: "    WITH latest AS (", cls: "text-[#ce9178]" },
];

/* ── syntax highlight helper ── */
function highlightLine(text: string, baseCls: string) {
  if (baseCls) return <span className={baseCls}>{text}</span>;

  // Simple keyword highlighting
  const keywords = /\b(def|return|try|except|as|import|from|for|in|if|else)\b/g;
  const strings = /("[^"]*"|'[^']*'|f""")/g;
  const funcs = /\b(get_cluster_tags|spark|json|print|tags|env)\b/g;

  const parts: { text: string; cls: string }[] = [];
  let last = 0;

  // Combine all matches and sort by position
  const allMatches: { index: number; length: number; cls: string }[] = [];

  let m;
  while ((m = keywords.exec(text)) !== null) allMatches.push({ index: m.index, length: m[0].length, cls: "text-[#c586c0]" });
  while ((m = strings.exec(text)) !== null) allMatches.push({ index: m.index, length: m[0].length, cls: "text-[#ce9178]" });
  while ((m = funcs.exec(text)) !== null) allMatches.push({ index: m.index, length: m[0].length, cls: "text-[#9cdcfe]" });

  allMatches.sort((a, b) => a.index - b.index);

  for (const match of allMatches) {
    if (match.index < last) continue;
    if (match.index > last) parts.push({ text: text.slice(last, match.index), cls: "text-foreground/70" });
    parts.push({ text: text.slice(match.index, match.index + match.length), cls: match.cls });
    last = match.index + match.length;
  }
  if (last < text.length) parts.push({ text: text.slice(last), cls: "text-foreground/70" });
  if (parts.length === 0) return <span className="text-foreground/70">{text}</span>;

  return <>{parts.map((p, i) => <span key={i} className={p.cls}>{p.text}</span>)}</>;
}

export default function HeroIDE() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      className="hidden lg:block absolute right-6 xl:right-12 top-1/2 -translate-y-1/2 z-5 w-[560px] perspective-[1200px]"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Glow behind IDE */}
        <div className="absolute -inset-8 bg-accent/8 rounded-3xl blur-[60px]" />

        {/* IDE Window */}
        <div className="relative bg-[#1e1e1e] border border-[#333] rounded-xl overflow-hidden shadow-2xl shadow-black/40">

          {/* ── Top title bar (macOS style) ── */}
          <div className="flex items-center px-4 py-2 bg-[#323233] border-b border-[#252526]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="flex-1 text-center font-mono text-[10px] text-[#999] truncate px-4">
              03_data_clayton_silver.py — data-platform
            </span>
            {/* Right icons: Run + Databricks */}
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-1 text-[#ccc] cursor-default"
              >
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 2.5l9 5.5-9 5.5V2.5z" />
                </svg>
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 2.5l9 5.5-9 5.5V2.5z" />
                  <line x1="13" y1="3" x2="13" y2="13" />
                </svg>
              </motion.div>
              <DatabricksIcon size={16} />
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-[#FFD700] opacity-60" fill="currentColor">
                <circle cx="8" cy="8" r="5" />
                <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>

          {/* ── Tab bar ── */}
          <div className="flex bg-[#252526] border-b border-[#1e1e1e]">
            <div className="flex items-center gap-1.5 bg-[#1e1e1e] px-3 py-1.5 border-r border-[#252526] border-t-2 border-t-[#FF3621]">
              <DatabricksIcon size={12} />
              <span className="font-mono text-[10px] text-[#ccc]">03_data_clayton_silver.py</span>
              <span className="font-mono text-[9px] text-[#666] ml-1">2, U</span>
              <span className="text-[#666] text-[10px] ml-1 cursor-default hover:text-[#ccc]">&times;</span>
            </div>
          </div>

          {/* ── Breadcrumb ── */}
          <div className="flex items-center gap-1 px-4 py-1 bg-[#1e1e1e] border-b border-[#252526] overflow-hidden">
            {["bronze_to_silver", "src", "bronze_to_silver", "silver_job"].map((seg, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className="font-mono text-[9px] text-[#888]">{seg}</span>
                <span className="font-mono text-[9px] text-[#555]">&gt;</span>
              </span>
            ))}
            <span className="flex items-center gap-1">
              <DatabricksIcon size={10} />
              <span className="font-mono text-[9px] text-[#ccc]">03_data_clayton_silver.py</span>
            </span>
          </div>

          <div className="flex h-[430px]">

            {/* ── Sidebar ── */}
            <div className="w-[200px] bg-[#252526] border-r border-[#1e1e1e] overflow-hidden flex-shrink-0">
              {/* Explorer header */}
              <div className="flex items-center justify-between px-3 py-1.5">
                <span className="font-mono text-[10px] text-[#bbb] font-semibold uppercase tracking-wider">Explorer</span>
                <span className="text-[#888] text-[11px] cursor-default">...</span>
              </div>

              {/* Root folder */}
              <div className="px-1">
                <p className="font-mono text-[10px] text-[#ccc] px-2 py-[2px] flex items-center gap-1 font-semibold">
                  <span className="text-[9px]">▼</span> data-platform
                </p>

                {/* bronze_to_silver */}
                <p className="font-mono text-[10px] text-[#ccc] px-4 py-[2px] flex items-center gap-1">
                  <span className="text-[9px]">▼</span>
                  <span className="text-blue-400/80">bronze_to_silver</span>
                  <span className="w-2 h-2 rounded-full bg-orange-400 ml-auto flex-shrink-0" />
                </p>

                {/* Sub-folders */}
                {[
                  { name: "fixtures", open: false },
                  { name: "scratch", open: false },
                ].map((f) => (
                  <p key={f.name} className="font-mono text-[10px] text-[#888] px-7 py-[2px] flex items-center gap-1">
                    <span className="text-[9px]">▸</span> {f.name}
                    <span className="w-2 h-2 rounded-full bg-orange-400 ml-auto flex-shrink-0" />
                  </p>
                ))}

                {/* src/bronze_to_silver */}
                <p className="font-mono text-[10px] text-[#ccc] px-7 py-[2px] flex items-center gap-1">
                  <span className="text-[9px]">▼</span> src/bronze_to_silver
                  <span className="w-2 h-2 rounded-full bg-orange-400 ml-auto flex-shrink-0" />
                </p>

                {/* silver_job */}
                <p className="font-mono text-[10px] text-[#ccc] px-10 py-[2px] flex items-center gap-1">
                  <span className="text-[9px]">▼</span> silver_job
                  <span className="w-2 h-2 rounded-full bg-orange-400 ml-auto flex-shrink-0" />
                </p>

                {/* validation folder */}
                <p className="font-mono text-[10px] text-[#888] px-14 py-[2px] flex items-center gap-1">
                  <span className="text-[9px]">▸</span>
                  <span className="text-red-400/60">🧪</span> validation
                </p>

                {/* File list */}
                <div className="mt-0.5">
                  {sidebarFiles.map((file, i) => (
                    <motion.p
                      key={file.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.04 }}
                      className={`font-mono text-[10px] px-14 py-[1.5px] flex items-center gap-1 cursor-default truncate ${
                        file.active
                          ? "bg-[#37373d] text-[#fff]"
                          : "text-[#aaa] hover:bg-[#2a2d2e]"
                      }`}
                    >
                      <DatabricksIcon size={10} />
                      <span className="truncate flex-1">{file.name}</span>
                      <span className="text-[8px] text-orange-400 font-bold flex-shrink-0 ml-1">
                        {file.status}
                      </span>
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Editor ── */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e]">
              {/* Code area */}
              <div className="flex-1 overflow-hidden py-1 relative">
                {/* Active line highlight */}
                <motion.div
                  className="absolute left-0 right-0 h-[17px] bg-[#264f78]/20 border-l-2 border-[#264f78]"
                  animate={{ top: ["0px", "85px", "170px", "255px", "0px"] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    className="flex px-0 leading-[17px] h-[17px]"
                  >
                    <span className="font-mono text-[10px] text-[#858585] w-9 text-right mr-4 select-none flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="font-mono text-[10px] whitespace-pre truncate">
                      {highlightLine(line.text, line.cls)}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Terminal */}
              <div className="border-t border-[#333] bg-[#1b1b1b]">
                <div className="flex items-center gap-3 px-3 py-1 border-b border-[#333]">
                  {["PROBLEMS", "OUTPUT", "DEBUG CONSOLE", "TERMINAL"].map((tab, i) => (
                    <span
                      key={tab}
                      className={`font-mono text-[9px] ${
                        i === 3 ? "text-[#ccc] border-b border-[#ccc]" : "text-[#888]"
                      } pb-0.5 cursor-default`}
                    >
                      {tab}
                    </span>
                  ))}
                  <span className="font-mono text-[9px] text-[#888] ml-auto">bash</span>
                </div>
                <div className="px-3 py-2 space-y-[2px]">
                  {[
                    { t: "$ databricks bundle deploy --target prd", c: "text-green-400" },
                    { t: "✓ Bronze layer: 4 tables ingested", c: "text-[#CD7F32]" },
                    { t: "✓ Silver layer: 5 tables transformed", c: "text-[#C0C0C0]" },
                    { t: "✓ Gold layer: 5 aggregations ready", c: "text-[#FFD700]" },
                    { t: "✓ Delta Merge: 142,847 rows upserted", c: "text-teal" },
                    { t: "✓ Pipeline completed in 3m 42s", c: "text-green-400" },
                  ].map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.5 + i * 0.3 }}
                      className={`font-mono text-[9px] ${line.c}`}
                    >
                      {line.t}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating medallion badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 }}
          className="absolute -top-4 -right-4 flex gap-1.5"
        >
          {[
            { label: "Bronze", color: "#CD7F32" },
            { label: "Silver", color: "#C0C0C0" },
            { label: "Gold", color: "#FFD700" },
          ].map((badge, i) => (
            <motion.span
              key={badge.label}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="font-mono text-[8px] px-2 py-1 rounded-full border backdrop-blur-sm"
              style={{
                color: badge.color,
                borderColor: `${badge.color}40`,
                background: `${badge.color}15`,
              }}
            >
              {badge.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Floating tech badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5 }}
          className="absolute -bottom-3 -left-3 flex gap-1.5"
        >
          {["Spark", "Delta Lake", "Airflow", "FastAPI"].map((tech, i) => (
            <motion.span
              key={tech}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, delay: i * 0.7, repeat: Infinity, ease: "easeInOut" }}
              className="font-mono text-[8px] px-2 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent-light backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
