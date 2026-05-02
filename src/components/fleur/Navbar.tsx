"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links: [string, string][] = [
  ["Dịch vụ", "#services"],
  ["Sản phẩm", "#popular"],
  ["Quà tặng", "#gift"],
  ["Liên hệ", "#contact"],
];

export default function FleurNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
        <a href="#" className="font-serif text-xl tracking-[0.3em] italic text-[#2A1F14]">Hala</a>

        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map(([label, href]) => (
            <a key={label} href={href}
              className="text-[10px] tracking-[0.2em] uppercase text-[#9B7B5E] hover:text-[#2A1F14] transition-colors">
              {label}
            </a>
          ))}
          <a href="#popular"
            className="px-5 py-2 rounded-2xl bg-accent text-white text-[10px] tracking-[0.2em] uppercase hover:bg-accent-hover transition-colors">
            Mua ngay
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-[#2A1F14] p-1">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-5 px-6 py-6 border-t border-[#E8DDD0] bg-[#FAF7F2]">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}
              className="text-[11px] tracking-[0.2em] uppercase text-[#2A1F14] hover:text-[#9B7B5E] transition-colors">
              {label}
            </a>
          ))}
          <a href="#popular" onClick={() => setOpen(false)}
            className="self-start px-6 py-2.5 rounded-2xl bg-accent text-white text-[10px] tracking-[0.2em] uppercase hover:bg-accent-hover transition-colors">
            Mua ngay
          </a>
        </div>
      )}
    </nav>
  );
}
