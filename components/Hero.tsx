export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-brand-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse-slow" />
          Open to opportunities
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Hi, I&apos;m Jesse
          <br />
          <span className="gradient-text">I Build With AI</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Software developer specializing in AI/ML and full-stack web apps.
          I turn ideas into working products &mdash; from research papers to
          production deployments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/jesse-man-devamirtham/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-lg transition-all hover:shadow-lg hover:shadow-brand-500/25"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass glass-hover text-gray-300 font-medium text-lg transition-all"
          >
            View My Work
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <div className="text-2xl font-bold text-brand-400">6+</div>
            <div className="text-xs text-gray-500 mt-1">Projects Shipped</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-brand-400">IEEE</div>
            <div className="text-xs text-gray-500 mt-1">Published Research</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-brand-400">$30K</div>
            <div className="text-xs text-gray-500 mt-1">Hackathon Pool</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-gray-600">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-brand-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
