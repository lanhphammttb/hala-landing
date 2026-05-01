"use client";

import { useState } from "react";

export default function FleurNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#E8DDD0]">
      <div className="max-w-6xl mx-auto px-8 h-14 flex items-center justify-between">
        <span className="font-serif text-xl tracking-[0.3em] italic text-[#2A1F14]">Hala</span>

        <div className="hidden md:flex items-center gap-10">
          {[["Bộ sưu tập", "#services"], ["Về chúng tôi", "#gift"], ["Liên hệ", "#contact"]].map(([label, href]) => (
            <a key={label} href={href}
              className="text-[10px] tracking-[0.2em] uppercase text-[#9B7B5E] hover:text-[#2A1F14] transition-colors">
              {label}
            </a>
          ))}
          <a href="#popular"
            className="px-5 py-2 bg-[#2A1F14] text-[#FAF7F2] text-[10px] tracking-[0.2em] uppercase hover:bg-[#9B7B5E] transition-colors">
            Mua ngay
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-[#2A1F14] text-xl">
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-5 px-8 py-6 border-t border-[#E8DDD0] bg-[#FAF7F2]">
          {["Bộ sưu tập", "Về chúng tôi", "Liên hệ", "Mua ngay"].map(l => (
            <a key={l} href="#" onClick={() => setOpen(false)}
              className="text-[11px] tracking-[0.2em] uppercase text-[#2A1F14]">{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
