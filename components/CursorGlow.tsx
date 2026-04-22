"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
      style={{ transform: "translate(-100px, -100px)" }}
    >
      <div className="w-2.5 h-2.5 rounded-full bg-neon-lime shadow-[0_0_6px_#00FF00,0_0_12px_#00FF0060]" />
    </div>
  );
}
