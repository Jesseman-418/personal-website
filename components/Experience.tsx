"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2026",
    title: "AI Agent Olympics — Milan AI Week",
    description: "Building ShadowOS: autonomous multi-agent business system. Solo entry, international hackathon.",
    tech: ["Next.js", "Python", "FastAPI", "Gemini API"],
    type: "hackathon",
  },
  {
    year: "2026",
    title: "Full-Stack Apps Portfolio",
    description: "Shipped SplitPay, QuickInvoice, DevHub — production apps with auth, databases, REST APIs, dashboards.",
    tech: ["Next.js", "Prisma", "MongoDB", "JWT", "OAuth"],
    type: "project",
  },
  {
    year: "2025",
    title: "Security Infrastructure",
    description: "Built OAuth 2.0 Authorization Server (PKCE + RS256) and Zero-Trust API Gateway (RBAC + ABAC + rate limiting).",
    tech: ["TypeScript", "Node.js", "JWT", "OIDC"],
    type: "project",
  },
  {
    year: "2025",
    title: "Scaler x Meta Hackathon ($30K Pool)",
    description: "Built AI training environment for data cleaning agents. 3 difficulty tiers, multi-dimensional grading. Live on HuggingFace.",
    tech: ["Python", "FastAPI", "Gradio", "PyTorch"],
    type: "hackathon",
  },
  {
    year: "2024",
    title: "IEEE Xplore Publication",
    description: "Published research on Ball-tree spatial indexing for contact tracing. Sub-linear query time at scale.",
    tech: ["Python", "Spatial Indexing", "Algorithms"],
    type: "research",
  },
  {
    year: "2024",
    title: "ViT Activation Function Study",
    description: "Capstone: 30 experiments comparing activation functions across Vision Transformers. 93.68% CIFAR-10 accuracy.",
    tech: ["PyTorch", "ViT", "CaiT", "Swin"],
    type: "research",
  },
  {
    year: "2022",
    title: "Started B.Tech CSE at VIT Chennai",
    description: "Computer Science & Engineering. Focus on AI/ML and full-stack development.",
    tech: [],
    type: "education",
  },
];

const typeColors: Record<string, string> = {
  hackathon: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  project: "bg-brand-500/10 text-brand-400 border-brand-500/20",
  research: "bg-green-500/10 text-green-400 border-green-500/20",
  education: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

const typeDotColors: Record<string, string> = {
  hackathon: "bg-yellow-400",
  project: "bg-brand-400",
  research: "bg-green-400",
  education: "bg-blue-400",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-4">
            Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            What I&apos;ve been
            <br />
            <span className="gradient-text">building</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative flex items-start gap-6 mb-10 md:mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-2 z-10">
                <div className="relative">
                  <div className={`w-3 h-3 rounded-full ${typeDotColors[item.type]}`} />
                  <div className={`absolute inset-0 w-3 h-3 rounded-full ${typeDotColors[item.type]} opacity-50 animate-pulse-ring`} />
                </div>
              </div>

              {/* Content card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div className="glass rounded-xl p-6 box-glow-hover transition-all duration-300 hover:bg-white/[0.04] group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-gray-500">{item.year}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${typeColors[item.type]}`}>
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-100 mb-2 group-hover:text-brand-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] text-gray-500 bg-white/[0.03] border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
