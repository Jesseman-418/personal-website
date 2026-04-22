"use client";

import { useState, useEffect } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-screen transition-opacity duration-300"
        style={{
          transform: `translate(${pos.x - 6}px, ${pos.y - 6}px)`,
          opacity: visible ? 1 : 0,
        }}
      >
        <div className="w-3 h-3 rounded-full bg-neon-lime shadow-[0_0_10px_#00FF00,0_0_20px_#00FF0080]" />
      </div>
      {/* Glow trail */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-screen transition-all duration-700 ease-out"
        style={{
          transform: `translate(${pos.x - 150}px, ${pos.y - 150}px)`,
          opacity: visible ? 0.15 : 0,
        }}
      >
        <div className="w-[300px] h-[300px] rounded-full bg-neon-lime blur-[80px]" />
      </div>
    </>
  );
}
