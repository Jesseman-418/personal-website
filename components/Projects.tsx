const projects = [
  {
    tag: "Hackathon",
    title: "Data Cleaning AI Environment",
    description:
      "AI environment for training agents to clean messy tabular data. Built for the Scaler x Meta PyTorch OpenEnv Hackathon ($30K prize pool). Features 3 difficulty tiers with multi-dimensional grading.",
    tech: ["Python", "FastAPI", "Gradio", "PyTorch"],
    github: "https://github.com/Jesseman-418/data-cleaning-env",
    live: "https://jesse1811-data-cleaning-env.hf.space",
    featured: true,
  },
  {
    tag: "Research",
    title: "ViT Activation Function Study",
    description:
      "Capstone research comparing GELU, ReLU, SiLU, and Mish activation functions across Vision Transformer architectures (ViT, CaiT, Swin). Achieved 93.68% CIFAR-10 accuracy.",
    tech: ["Python", "PyTorch", "Vision Transformers", "CIFAR-10"],
    github: "https://github.com/Jesseman-418/vit-activation-functions-capstone",
    featured: true,
  },
  {
    tag: "Published — IEEE Xplore",
    title: "Contact Tracing with Ball-tree Algorithm",
    description:
      "Spatial indexing algorithm for contact tracing using Ball-tree data structures. Published in IEEE Xplore. Achieves sub-linear query time on 10K+ data points.",
    tech: ["Python", "Ball-tree", "Spatial Indexing", "IEEE"],
    github: "https://github.com/Jesseman-418/Contact-Tracing-using-Ball-tree-Algorithm",
    featured: true,
  },
  {
    tag: "Full-Stack",
    title: "Pollchain — Blockchain Voting",
    description:
      "Decentralized voting application built on blockchain. Features MetaMask wallet integration, poll creation, live results tracking, and a dark glassmorphism UI.",
    tech: ["TypeScript", "Blockchain", "MetaMask", "Next.js"],
    github: "https://github.com/Jesseman-418/Pollchain-frontend",
  },
  {
    tag: "Full-Stack",
    title: "TaskFlow — Kanban Board",
    description:
      "Full-stack Kanban board with drag-and-drop task management. Built with Next.js 14, Prisma ORM, and SQLite. Dark theme with smooth interactions.",
    tech: ["TypeScript", "Next.js", "Prisma", "SQLite"],
    github: "https://github.com/Jesseman-418/taskflow",
  },
  {
    tag: "ML Research",
    title: "Adversarial Attack Defense (MARL)",
    description:
      "Multi-agent reinforcement learning approach to defending against adversarial attacks. Implements PGD and FGSM attack methods with defense mechanisms on MNIST.",
    tech: ["Python", "PyTorch", "MARL", "Adversarial ML"],
    github: "https://github.com/Jesseman-418/Adversarial-Attack-defense-using-MARL-approach",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-4">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Things I&apos;ve
            <br />
            <span className="gradient-text">built</span>
          </h2>
          <p className="text-gray-400 text-lg">
            From hackathon entries to published research to production apps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`glass glass-hover rounded-2xl p-8 transition-all duration-300 flex flex-col ${
                project.featured
                  ? "md:col-span-1 lg:col-span-1 border-brand-500/10"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  {project.tag}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-100 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs text-gray-400 bg-white/[0.03] border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-400 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Jesseman-418"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
