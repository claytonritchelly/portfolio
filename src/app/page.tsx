import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CinematicDivider from "@/components/CinematicDivider";
import MedallionFlow from "@/components/MedallionFlow";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CinematicDivider
        text="Dados brutos entram. Decisões estratégicas saem."
        highlight="Arquitetura Medallion"
      />
      <MedallionFlow />
      <CinematicDivider
        text="Mais de 20 tecnologias dominadas em ambientes multicloud."
        highlight="Stack Técnica"
      />
      <Stack />
      <CinematicDivider
        text="Cada projeto é uma história de transformação com dados."
        highlight="Projetos em Destaque"
      />
      <Projects />
      <Content />
      <Footer />
    </>
  );
}
