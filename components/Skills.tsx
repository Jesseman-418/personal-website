"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    skills: [
      { name: "TypeScript", level: 92 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 93 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Python", level: 87 },
      { name: "FastAPI", level: 82 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    title: "Databases & Auth",
    icon: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 83 },
      { name: "Prisma ORM", level: 88 },
      { name: "Mongoose", level: 82 },
      { name: "JWT / OAuth 2.0", level: 90 },
      { name: "NextAuth.js", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1h12.77",
    skills: [
      { name: "Git / GitHub", level: 93 },
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 90 },
      { name: "Linux", level: 80 },
      { name: "CI/CD", level: 78 },
      { name: "Redis", level: 72 },
    ],
  },
  {
    title: "AI / Machine Learning",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    skills: [
      { name: "PyTorch", level: 85 },
      { name: "Vision Transformers", level: 80 },
      { name: "Hugging Face", level: 78 },
      { name: "Reinforcement Learning", level: 72 },
      { name: "Gradio", level: 80 },
      { name: "LLM APIs", level: 88 },
    ],
  },
  {
    title: "Architecture",
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21",
    skills: [
      { name: "Microservices", level: 78 },
      { name: "Rate Limiting", level: 85 },
      { name: "API Gateway Design", level: 82 },
      { name: "RBAC / ABAC", level: 80 },
      { name: "System Design", level: 78 },
      { name: "Agile / Scrum", level: 75 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{name}</span>
        <span className="text-xs text-gray-500 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400 relative"
        >
          <div className="absolute inset-0 animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-4">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Full-stack
            <br />
            <span className="gradient-text">toolkit</span>
          </h2>
        </motion.div>

        {/* Tab navigation — mobile scrollable */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === i
                  ? "bg-brand-500/10 text-brand-400 border border-brand-500/20 box-glow"
                  : "text-gray-500 hover:text-gray-300 glass"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
              </svg>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active category - skill bars */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-2xl p-8 md:p-10 max-w-2xl mx-auto gradient-border"
        >
          <div className="space-y-5">
            {skillCategories[activeTab].skills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} />
            ))}
          </div>
        </motion.div>

        {/* All skills grid — compact view */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group glass glass-hover rounded-xl p-5 transition-all duration-300 cursor-pointer"
              onClick={() => setActiveTab(i)}
            >
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                </svg>
                <h3 className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span key={s.name} className="text-[11px] text-gray-500 group-hover:text-gray-400 transition-colors">
                    {s.name}{cat.skills.indexOf(s) < cat.skills.length - 1 ? " ·" : ""}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
