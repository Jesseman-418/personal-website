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
import CursorGlow from "@/components/CursorGlow";
import MatrixRain from "@/components/MatrixRain";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Layer 0: Matrix rain canvas */}
      <MatrixRain />

      {/* Layer 1: Noise texture */}
      <div className="fixed inset-0 noise-overlay pointer-events-none z-[2]" />

      {/* Layer 5: Global floating orbs */}
      <div className="fixed top-[10%] left-[5%] w-[500px] h-[500px] bg-neon-lime/[0.04] rounded-full blur-[150px] pointer-events-none animate-float-slow z-[1]" />
      <div className="fixed bottom-[20%] right-[10%] w-[400px] h-[400px] bg-neon-cyan/[0.03] rounded-full blur-[120px] pointer-events-none animate-float-delayed z-[1]" />
      <div className="fixed top-[60%] left-[50%] w-[300px] h-[300px] bg-neon-purple/[0.03] rounded-full blur-[100px] pointer-events-none animate-float z-[1]" />
      <div className="fixed top-[30%] right-[30%] w-[200px] h-[200px] bg-neon-pink/[0.02] rounded-full blur-[80px] pointer-events-none animate-float-delayed z-[1]" />

      {/* Layer 6: Corner decorations */}
      <div className="fixed top-0 left-0 w-32 h-32 border-l border-t border-neon-lime/10 pointer-events-none z-[3]" />
      <div className="fixed top-0 right-0 w-32 h-32 border-r border-t border-neon-cyan/10 pointer-events-none z-[3]" />
      <div className="fixed bottom-0 left-0 w-32 h-32 border-l border-b border-neon-purple/10 pointer-events-none z-[3]" />
      <div className="fixed bottom-0 right-0 w-32 h-32 border-r border-b border-neon-lime/10 pointer-events-none z-[3]" />

      {/* Layer 7: Side markers */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[3] pointer-events-none hidden xl:flex flex-col gap-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1 h-8 bg-neon-lime/10 rounded-full" style={{ opacity: 0.1 + i * 0.05 }} />
        ))}
      </div>
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[3] pointer-events-none hidden xl:flex flex-col gap-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1 h-8 bg-neon-cyan/10 rounded-full" style={{ opacity: 0.1 + i * 0.05 }} />
        ))}
      </div>

      {/* Layer 8: Horizontal accent lines */}
      <div className="fixed top-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-lime/5 to-transparent pointer-events-none z-[1]" />
      <div className="fixed top-[50%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/5 to-transparent pointer-events-none z-[1]" />
      <div className="fixed top-[75%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/5 to-transparent pointer-events-none z-[1]" />

      {/* Custom cursor */}
      <CursorGlow />

      {/* Content */}
      <div className="relative z-10">
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
      </div>
    </main>
  );
}
