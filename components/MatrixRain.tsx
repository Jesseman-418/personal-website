"use client";

import { useEffect, useRef } from "react";

const SYMBOLS = [
  "0", "1", "{}", "[]", "<>", "=>", "//", "&&", "||", "!=",
  "++", "--", "::", "**", "~/", ">>", "<<", ";;", "%%", "##",
  "λ", "∞", "Σ", "Δ", "π", "θ", "∅", "∈", "⊂", "∀",
  "0x", "FF", "00", "1A", "DB", "C4", "A0", "E7", "B2", "3F",
];

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const cellSize = 48;
    let cols = Math.ceil(canvas.width / cellSize);
    let rows = Math.ceil(canvas.height / cellSize);

    // Pre-assign a random symbol to each cell
    let grid: string[] = [];
    const fillGrid = () => {
      cols = Math.ceil(canvas.width / cellSize);
      rows = Math.ceil(canvas.height / cellSize);
      grid = new Array(cols * rows).fill("").map(() =>
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
      );
    };
    fillGrid();

    // Slowly rotate symbols
    const rotateInterval = setInterval(() => {
      const idx = Math.floor(Math.random() * grid.length);
      grid[idx] = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
    }, 200);

    const handleResize = () => {
      resize();
      fillGrid();
    };
    window.addEventListener("resize", handleResize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    const GLOW_RADIUS = 220;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "11px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const cx = col * cellSize + cellSize / 2;
          const cy = row * cellSize + cellSize / 2;
          const dist = Math.sqrt((cx - mx) ** 2 + (cy - my) ** 2);

          if (dist < GLOW_RADIUS) {
            const intensity = 1 - dist / GLOW_RADIUS;
            const alpha = intensity * intensity * 0.35;
            ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
            ctx.fillText(grid[row * cols + col], cx, cy);
          }
        }
      }

      requestAnimationFrame(draw);
    };

    const raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(rotateInterval);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
    />
  );
}
