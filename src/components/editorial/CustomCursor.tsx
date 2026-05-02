"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      setExpanded(!!el.closest("a, button, img"));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        width: expanded ? 38 : 14,
        height: expanded ? 38 : 14,
        borderRadius: "50%",
        border: "1.5px solid rgba(184,92,56,0.65)",
        backgroundColor: expanded ? "rgba(184,92,56,0.08)" : "transparent",
        transition: "width 0.22s ease, height 0.22s ease, background-color 0.22s ease",
      }}
    />
  );
}
