import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clayton Ritchelly | Senior Data Engineer",
  description:
    "Portfolio de Clayton Ritchelly — Data Engineer especializado em Databricks, Azure, PySpark, arquitetura medallion, governança de dados e pipelines escaláveis.",
  keywords: [
    "Data Engineer",
    "Engenheiro de Dados",
    "Databricks",
    "Azure",
    "PySpark",
    "Delta Lake",
    "Medallion Architecture",
    "Data Governance",
    "FastAPI",
    "Pipeline de Dados",
  ],
  authors: [{ name: "Clayton Ritchelly" }],
  openGraph: {
    title: "Clayton Ritchelly | Senior Data Engineer",
    description:
      "Construo plataformas de dados robustas em arquitetura medallion, com foco em governança, performance e exposição de dados via APIs.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
