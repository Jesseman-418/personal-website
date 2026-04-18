"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI / Machine Learning",
    skills: [
      "PyTorch",
      "Vision Transformers",
      "Adversarial ML",
      "Reinforcement Learning",
      "Hugging Face",
      "Gradio",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Prisma",
      "SQLite",
      "REST APIs",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "React Native",
      "HTML/CSS",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git / GitHub",
      "Vercel",
      "HuggingFace Spaces",
      "Claude Code",
      "Linux",
      "Blockchain / Web3",
    ],
  },
];

export default function Skills() {
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
            What I work
            <br />
            <span className="gradient-text">with</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group glass glass-hover rounded-2xl p-8 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-6 group-hover:text-brand-300 transition-colors">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500/50 group-hover:bg-brand-400 transition-colors" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
