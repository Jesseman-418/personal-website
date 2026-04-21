import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GitHubActivity from "@/components/GitHubActivity";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <ArchitectureDiagram />
      <Projects />
      <Skills />
      <GitHubActivity />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
