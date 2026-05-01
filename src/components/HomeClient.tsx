"use client";

import { useState, useEffect } from "react";
import FleurTemplate from "./fleur/index";
import MiMiTemplate from "./mimimi/index";

type Theme = "fleur" | "mimimi";

const themes: { id: Theme; label: string; emoji: string; desc: string }[] = [
  { id: "fleur", label: "Vintage Fleur", emoji: "🌿", desc: "Tao nhã · Vintage" },
  { id: "mimimi", label: "Mị Mị Mê Len", emoji: "🧶", desc: "Cute · Handmade" },
];

export default function HomeClient() {
  const [theme, setTheme] = useState<Theme>("fleur");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("hala-theme") as Theme | null;
    if (saved && (saved === "fleur" || saved === "mimimi")) setTheme(saved);
  }, []);

  function changeTheme(t: Theme) {
    setTheme(t);
    localStorage.setItem("hala-theme", t);
    setOpen(false);
  }

  return (
    <>
      {theme === "fleur" ? <FleurTemplate /> : <MiMiTemplate />}

      {/* Floating theme switcher */}
      <div className="fixed bottom-6 right-6 z-[100]">
        {open && (
          <div className="mb-3 flex flex-col gap-2 items-end">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => changeTheme(t.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium shadow-lg transition-all ${
                  theme === t.id
                    ? "bg-[#2c2420] text-white scale-105"
                    : "bg-white text-[#2c2420] hover:scale-105"
                } border border-[#e0d8cc]`}
              >
                <span>{t.emoji}</span>
                <div className="text-left">
                  <div className="font-semibold">{t.label}</div>
                  <div className="text-[9px] opacity-70">{t.desc}</div>
                </div>
                {theme === t.id && <span className="ml-1">✓</span>}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="w-12 h-12 rounded-full bg-white shadow-xl border border-[#e0d8cc] flex items-center justify-center text-xl hover:scale-110 transition-all"
          title="Đổi giao diện"
        >
          {open ? "✕" : "🎨"}
        </button>
      </div>
    </>
  );
}
