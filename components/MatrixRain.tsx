"use client";

import { useEffect, useRef } from "react";

const SYMBOLS = [
  "0", "1", "{}", "[]", "<>", "=>", "//", "&&", "||", "!=",
  "++", "--", "::", "**", ">>", "<<", ";;",
  "λ", "∞", "Σ", "Δ", "π", "θ", "∅",
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

    const cellSize = 56;
    let cols = 0;
    let rows = 0;
    let grid: string[] = [];

    const fillGrid = () => {
      cols = Math.ceil(canvas.width / cellSize);
      rows = Math.ceil(canvas.height / cellSize);
      grid = new Array(cols * rows).fill("").map(() =>
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
      );
    };
    fillGrid();

    // Slowly rotate a few symbols
    const rotateInterval = setInterval(() => {
      const idx = Math.floor(Math.random() * grid.length);
      grid[idx] = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
    }, 300);

    const handleResize = () => { resize(); fillGrid(); };
    window.addEventListener("resize", handleResize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    const GLOW_RADIUS = 200;
    const GLOW_R_SQ = GLOW_RADIUS * GLOW_RADIUS;
    let lastDraw = 0;

    const draw = (time: number) => {
      // Throttle to ~24fps
      if (time - lastDraw < 42) {
        raf = requestAnimationFrame(draw);
        return;
      }
      lastDraw = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "11px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Only check cells in the bounding box around cursor
      const minCol = Math.max(0, Math.floor((mx - GLOW_RADIUS) / cellSize));
      const maxCol = Math.min(cols - 1, Math.ceil((mx + GLOW_RADIUS) / cellSize));
      const minRow = Math.max(0, Math.floor((my - GLOW_RADIUS) / cellSize));
      const maxRow = Math.min(rows - 1, Math.ceil((my + GLOW_RADIUS) / cellSize));

      for (let row = minRow; row <= maxRow; row++) {
        for (let col = minCol; col <= maxCol; col++) {
          const cx = col * cellSize + cellSize / 2;
          const cy = row * cellSize + cellSize / 2;
          const dx = cx - mx;
          const dy = cy - my;
          const distSq = dx * dx + dy * dy;

          if (distSq < GLOW_R_SQ) {
            const dist = Math.sqrt(distSq);
            const intensity = 1 - dist / GLOW_RADIUS;
            const alpha = intensity * intensity * 0.3;
            ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
            ctx.fillText(grid[row * cols + col], cx, cy);
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    let raf = requestAnimationFrame(draw);

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
