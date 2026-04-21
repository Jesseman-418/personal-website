"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const codeLines = [
  { text: "const", color: "text-purple-400" },
  { text: " app", color: "text-blue-300" },
  { text: " = ", color: "text-gray-400" },
  { text: "createFullStackApp", color: "text-yellow-300" },
  { text: "({", color: "text-gray-400" },
  { text: "\n  frontend", color: "text-blue-300" },
  { text: ": ", color: "text-gray-400" },
  { text: "'Next.js + React'", color: "text-green-400" },
  { text: ",", color: "text-gray-400" },
  { text: "\n  backend", color: "text-blue-300" },
  { text: ": ", color: "text-gray-400" },
  { text: "'Node.js + Express'", color: "text-green-400" },
  { text: ",", color: "text-gray-400" },
  { text: "\n  database", color: "text-blue-300" },
  { text: ": ", color: "text-gray-400" },
  { text: "'PostgreSQL + MongoDB'", color: "text-green-400" },
  { text: ",", color: "text-gray-400" },
  { text: "\n  auth", color: "text-blue-300" },
  { text: ": ", color: "text-gray-400" },
  { text: "'JWT + OAuth 2.0'", color: "text-green-400" },
  { text: ",", color: "text-gray-400" },
  { text: "\n  deploy", color: "text-blue-300" },
  { text: ": ", color: "text-gray-400" },
  { text: "'Vercel'", color: "text-green-400" },
  { text: "\n});", color: "text-gray-400" },
];

function TypedCode() {
  const [visibleChars, setVisibleChars] = useState(0);
  const fullText = codeLines.map((l) => l.text).join("");

  useEffect(() => {
    if (visibleChars < fullText.length) {
      const timeout = setTimeout(() => setVisibleChars((v) => v + 1), 30);
      return () => clearTimeout(timeout);
    }
  }, [visibleChars, fullText.length]);

  let charCount = 0;
  return (
    <pre className="code-block text-sm leading-relaxed">
      {codeLines.map((line, i) => {
        const start = charCount;
        charCount += line.text.length;
        const visible = Math.min(line.text.length, Math.max(0, visibleChars - start));
        return (
          <span key={i} className={line.color}>
            {line.text.slice(0, visible)}
          </span>
        );
      })}
      <span className="animate-blink text-brand-400">|</span>
    </pre>
  );
}

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const num = parseInt(value);
  const isNum = !isNaN(num);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isNum || !started) return;
    const duration = 1500;
    const steps = 30;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [num, isNum, started]);

  return (
    <motion.div
      className="group text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setStarted(true)}
    >
      <div className="text-3xl font-bold text-brand-400 group-hover:text-brand-300 group-hover:text-glow transition-all">
        {isNum ? count : value}
        {isNum && value.includes("+") ? "+" : ""}
      </div>
      <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_100%)]" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-32 bg-gradient-to-b from-transparent via-brand-500/[0.02] to-transparent animate-scan" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[128px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-600/8 rounded-full blur-[100px] pointer-events-none animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none animate-float" />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-brand-400 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
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
              <span className="gradient-text relative text-glow">
                Full-Stack Engineer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
            >
              I build production web apps end-to-end &mdash; from database
              design and REST APIs to responsive React UIs. TypeScript,
              Next.js, Node.js, PostgreSQL, MongoDB.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href="https://www.linkedin.com/in/jesse-man-devamirtham/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-lg transition-all hover:shadow-lg hover:shadow-brand-500/25 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  Hire Me
                </span>
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass glass-hover text-gray-300 font-medium text-lg transition-all hover:border-brand-500/30 gradient-border"
              >
                View My Work
              </a>
            </motion.div>
          </div>

          {/* Right - Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-2xl overflow-hidden box-glow animate-gradient-border gradient-border">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-gray-500 ml-2 font-mono">~/projects/jesse-portfolio</span>
              </div>
              {/* Terminal body */}
              <div className="p-6 bg-gray-950/50">
                <div className="text-xs text-gray-500 mb-3 font-mono flex items-center gap-2">
                  <span className="text-green-400">$</span> cat skills.ts
                </div>
                <TypedCode />
              </div>
              {/* Terminal footer */}
              <div className="px-4 py-2 border-t border-white/5 bg-white/[0.01] flex items-center justify-between">
                <span className="text-[10px] text-gray-600 font-mono">TypeScript</span>
                <span className="text-[10px] text-gray-600 font-mono">UTF-8 | LF</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto lg:mx-0"
        >
          <AnimatedCounter value="12+" label="Projects Shipped" />
          <AnimatedCounter value="5+" label="Full-Stack Apps" />
          <AnimatedCounter value="IEEE" label="Published Research" />
          <AnimatedCounter value="$30K" label="Hackathon Pool" />
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
