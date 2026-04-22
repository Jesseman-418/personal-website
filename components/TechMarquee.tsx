"use client";

import { motion } from "framer-motion";

const techStack = [
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#00FF00" },
  { name: "Node.js", color: "#339933" },
  { name: "Express", color: "#00FFFF" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Prisma", color: "#BF00FF" },
  { name: "Python", color: "#3776AB" },
  { name: "FastAPI", color: "#009688" },
  { name: "Docker", color: "#2496ED" },
  { name: "Redis", color: "#DC382D" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Git", color: "#F05032" },
  { name: "JWT", color: "#D63AFF" },
  { name: "OAuth 2.0", color: "#EB5424" },
  { name: "REST APIs", color: "#00FF00" },
  { name: "GraphQL", color: "#E10098" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "Vercel", color: "#00FF00" },
  { name: "Claude Code", color: "#BF00FF" },
  { name: "Framer Motion", color: "#00FFFF" },
];

export default function TechMarquee() {
  return (
    <section className="py-16 overflow-hidden relative">
      {/* Fade edges with neon tint */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-dark-950 via-dark-950/80 to-transparent z-10 pointer-events-none" />

      {/* Section divider lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-lime/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-neon-lime/60 text-xs font-mono tracking-[0.3em] uppercase">
          {"//"} Tech Stack
        </p>
      </motion.div>

      {/* Row 1 */}
      <div className="flex animate-marquee whitespace-nowrap mb-4">
        {[...techStack, ...techStack].map((tech, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 mx-2 px-4 py-2 rounded-lg glass hover:bg-white/[0.04] transition-all group border border-white/[0.03] hover:border-neon-lime/10"
          >
            <div
              className="w-1.5 h-1.5 rounded-full transition-all group-hover:scale-150 group-hover:shadow-[0_0_8px_currentColor]"
              style={{ backgroundColor: tech.color }}
            />
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors font-mono tracking-wider">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Row 2 — reverse */}
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 25s linear infinite reverse" }}>
        {[...techStack.slice(11), ...techStack.slice(0, 11), ...techStack.slice(11), ...techStack.slice(0, 11)].map((tech, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 mx-2 px-4 py-2 rounded-lg glass hover:bg-white/[0.04] transition-all group border border-white/[0.03] hover:border-neon-cyan/10"
          >
            <div
              className="w-1.5 h-1.5 rounded-full transition-all group-hover:scale-150"
              style={{ backgroundColor: tech.color }}
            />
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors font-mono tracking-wider">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
