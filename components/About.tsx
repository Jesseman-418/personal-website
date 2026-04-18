"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-4">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Building at the intersection of
            <br />
            <span className="gradient-text">AI and software</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              I&apos;m a final-year B.Tech Computer Science student at VIT Chennai
              who builds things with code. My focus areas are{" "}
              <span className="text-gray-200 font-medium">
                AI/ML, full-stack web development, and automation
              </span>
              .
            </p>
            <p>
              I&apos;ve published research in{" "}
              <span className="text-gray-200 font-medium">IEEE Xplore</span> on
              spatial algorithms for contact tracing, built AI environments for
              hackathons backed by{" "}
              <span className="text-gray-200 font-medium">
                Meta &amp; Scaler ($30K prize pool)
              </span>
              , and shipped full-stack apps from Kanban boards to blockchain
              voting systems.
            </p>
            <p>
              I operate with speed &mdash; I use AI tools as force multipliers to
              go from idea to deployed product fast. Currently looking for
              opportunities where I can build impactful software at scale.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/5">
            {[
              { label: "University", value: "VIT Chennai" },
              { label: "Degree", value: "B.Tech CS" },
              { label: "Focus", value: "AI/ML + Web" },
              { label: "Location", value: "India" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-sm font-semibold text-gray-200">
                  {item.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
