"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_100%)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[128px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-600/8 rounded-full blur-[100px] pointer-events-none animate-float-delayed" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-brand-400 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Hi, I&apos;m Jesse
          <br />
          <span className="gradient-text relative">
            I Build With AI
            <span className="absolute -inset-2 bg-brand-500/15 blur-3xl rounded-full -z-10" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Software developer specializing in AI/ML and full-stack web apps.
          I turn ideas into working products &mdash; from research papers to
          production deployments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/jesse-man-devamirtham/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-lg transition-all hover:shadow-lg hover:shadow-brand-500/25 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Hire Me</span>
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass glass-hover text-gray-300 font-medium text-lg transition-all hover:border-brand-500/30"
          >
            View My Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "9+", label: "Projects Shipped" },
            { value: "IEEE", label: "Published Research" },
            { value: "$30K", label: "Hackathon Pool" },
          ].map((m) => (
            <div key={m.label} className="group">
              <div className="text-2xl font-bold text-brand-400 group-hover:text-brand-300 transition-colors">
                {m.value}
              </div>
              <div className="text-xs text-gray-500 mt-1">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-brand-500 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
