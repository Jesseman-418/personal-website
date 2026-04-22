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
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none transition-opacity duration-300"
      style={{
        transform: `translate(${pos.x - 5}px, ${pos.y - 5}px)`,
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="w-2.5 h-2.5 rounded-full bg-neon-lime shadow-[0_0_6px_#00FF00,0_0_12px_#00FF0060]" />
    </div>
  );
}
