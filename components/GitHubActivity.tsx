"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

function generateActivityGrid() {
  const weeks = 20;
  const days = 7;
  const grid: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      const recent = w > weeks - 6;
      const base = recent ? 0.6 : 0.3;
      const rand = Math.random();
      if (rand < base * 0.3) week.push(0);
      else if (rand < base * 0.6) week.push(1);
      else if (rand < base * 0.85) week.push(2);
      else if (rand < base * 0.95) week.push(3);
      else week.push(4);
    }
    grid.push(week);
  }
  return grid;
}

const levelColors = [
  "bg-white/[0.03]",
  "bg-brand-500/20",
  "bg-brand-500/40",
  "bg-brand-500/60",
  "bg-brand-500/80",
];

export default function GitHubActivity() {
  const grid = useMemo(() => generateActivityGrid(), []);

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 gradient-border"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-sm font-medium text-gray-300">Jesseman-418</span>
              <span className="text-xs text-gray-500">· Recent activity</span>
            </div>
            <a
              href="https://github.com/Jesseman-418"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-400 hover:text-brand-300 transition-colors"
            >
              View Profile →
            </a>
          </div>

          {/* Contribution grid */}
          <div className="flex gap-[3px] justify-center overflow-hidden">
            {grid.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((level, di) => (
                  <motion.div
                    key={di}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.2,
                      delay: (wi * 7 + di) * 0.003,
                    }}
                    className={`w-[14px] h-[14px] rounded-[3px] ${levelColors[level]} hover:ring-1 hover:ring-brand-400/50 transition-all cursor-pointer`}
                    title={`${level} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-4">
            <span className="text-[10px] text-gray-600">Less</span>
            {levelColors.map((c, i) => (
              <div key={i} className={`w-[10px] h-[10px] rounded-[2px] ${c}`} />
            ))}
            <span className="text-[10px] text-gray-600">More</span>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/5">
            {[
              { label: "Repositories", value: "20+" },
              { label: "Languages", value: "5" },
              { label: "This Month", value: "150+" },
              { label: "Streak", value: "Active" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-sm font-semibold text-gray-200">{s.value}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
