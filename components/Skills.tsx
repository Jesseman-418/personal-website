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
        <div className="text-center mb-16">
          <p className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-4">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            What I work
            <br />
            <span className="gradient-text">with</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass glass-hover rounded-2xl p-8 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-6">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500/50" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
