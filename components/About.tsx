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
            Full-stack engineer who
            <br />
            <span className="gradient-text">ships end-to-end</span>
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
              who builds{" "}
              <span className="text-gray-200 font-medium">
                production web applications from database to deployment
              </span>
              . My stack centers on TypeScript, Next.js, Node.js, and both SQL
              and NoSQL databases.
            </p>
            <p>
              I&apos;ve built{" "}
              <span className="text-gray-200 font-medium">
                full-stack apps with auth systems, REST APIs, payment tracking,
                and real-time dashboards
              </span>
              . On the backend, I&apos;ve implemented JWT auth from scratch,
              OAuth 2.0 servers, API gateways with rate limiting, and database
              schemas with Prisma and Mongoose.
            </p>
            <p>
              Beyond web dev, I&apos;ve published research in{" "}
              <span className="text-gray-200 font-medium">IEEE Xplore</span>,
              built AI environments for{" "}
              <span className="text-gray-200 font-medium">
                Meta &amp; Scaler ($30K prize pool)
              </span>
              , and work with PyTorch for ML research. I operate fast and ship
              working software.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/5">
            {[
              { label: "University", value: "VIT Chennai" },
              { label: "Degree", value: "B.Tech CSE" },
              { label: "Focus", value: "Full-Stack + AI" },
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
