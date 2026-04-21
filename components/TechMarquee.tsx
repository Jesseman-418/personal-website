"use client";

import { motion } from "framer-motion";

const techStack = [
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Node.js", color: "#339933" },
  { name: "Express", color: "#ffffff" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Prisma", color: "#2D3748" },
  { name: "Python", color: "#3776AB" },
  { name: "FastAPI", color: "#009688" },
  { name: "Docker", color: "#2496ED" },
  { name: "Redis", color: "#DC382D" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Git", color: "#F05032" },
  { name: "JWT", color: "#D63AFF" },
  { name: "OAuth 2.0", color: "#EB5424" },
  { name: "REST APIs", color: "#6366F1" },
  { name: "GraphQL", color: "#E10098" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "Vercel", color: "#ffffff" },
];

export default function TechMarquee() {
  return (
    <section className="py-16 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-brand-400 text-sm font-medium tracking-wider uppercase">
          Tech Stack
        </p>
      </motion.div>

      {/* Row 1 */}
      <div className="flex animate-marquee whitespace-nowrap mb-4">
        {[...techStack, ...techStack].map((tech, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 mx-3 px-5 py-2.5 rounded-xl glass hover:bg-white/[0.06] transition-all cursor-default group"
          >
            <div
              className="w-2 h-2 rounded-full transition-all group-hover:scale-150"
              style={{ backgroundColor: tech.color, boxShadow: `0 0 8px ${tech.color}40` }}
            />
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Row 2 — reverse */}
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite reverse" }}>
        {[...techStack.slice(10), ...techStack.slice(0, 10), ...techStack.slice(10), ...techStack.slice(0, 10)].map((tech, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 mx-3 px-5 py-2.5 rounded-xl glass hover:bg-white/[0.06] transition-all cursor-default group"
          >
            <div
              className="w-2 h-2 rounded-full transition-all group-hover:scale-150"
              style={{ backgroundColor: tech.color, boxShadow: `0 0 8px ${tech.color}40` }}
            />
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
