"use client";

import { motion } from "framer-motion";

const layers = [
  {
    label: "Frontend",
    color: "brand",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    label: "API Layer",
    color: "purple",
    items: ["REST APIs", "Route Handlers", "Server Actions", "Middleware", "JWT Auth"],
  },
  {
    label: "Backend",
    color: "blue",
    items: ["Node.js", "Express", "Python", "FastAPI", "WebSockets"],
  },
  {
    label: "Data",
    color: "green",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose", "Redis"],
  },
  {
    label: "Infrastructure",
    color: "orange",
    items: ["Vercel", "Docker", "GitHub Actions", "CI/CD", "Linux"],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  brand: { bg: "bg-brand-500/10", border: "border-brand-500/20", text: "text-brand-400", glow: "shadow-brand-500/10" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400", glow: "shadow-purple-500/10" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", glow: "shadow-blue-500/10" },
  green: { bg: "bg-green-500/10", border: "border-green-500/20", text: "text-green-400", glow: "shadow-green-500/10" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400", glow: "shadow-orange-500/10" },
};

export default function ArchitectureDiagram() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-4">
            Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            How I build
            <br />
            <span className="gradient-text">full-stack apps</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Every layer of the stack, from pixel to production.
          </p>
        </motion.div>

        <div className="space-y-4">
          {layers.map((layer, i) => {
            const colors = colorMap[layer.color];
            return (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass rounded-2xl p-6 border ${colors.border} hover:shadow-lg hover:${colors.glow} transition-all duration-300 group`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3 sm:w-40 shrink-0">
                    <div className={`w-3 h-3 rounded-full ${colors.bg} border ${colors.border}`}>
                      <div className={`w-full h-full rounded-full ${colors.bg} animate-pulse`} />
                    </div>
                    <span className={`text-sm font-semibold uppercase tracking-wider ${colors.text}`}>
                      {layer.label}
                    </span>
                  </div>

                  {/* Connection line */}
                  <div className="hidden sm:block w-8 h-px bg-gradient-to-r from-white/10 to-white/5" />

                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border} transition-all group-hover:scale-[1.02]`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow connector between layers */}
                {i < layers.length - 1 && (
                  <div className="flex justify-center mt-3 -mb-3">
                    <svg className="w-4 h-4 text-gray-700" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 12l-4-4h8z" />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
