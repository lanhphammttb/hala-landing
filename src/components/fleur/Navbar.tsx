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
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10"
      style={{ backgroundColor: "rgba(45,41,38,0.96)", backdropFilter: "blur(10px)" }}>
      <div className="max-w-360 mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="#" className="font-serif text-lg tracking-[0.3em] italic text-[#C4A882]">Hala</a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a key={label} href={href}
              className="text-[10px] tracking-[0.2em] uppercase text-white/55 hover:text-white/90 transition-colors">
              {label}
            </a>
          ))}
          <a href="#popular"
            className="px-5 py-2 rounded-full bg-accent text-white text-[10px] tracking-[0.2em] uppercase hover:bg-accent-hover transition-colors">
            Mua ngay
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 p-1">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-5 px-6 py-6 border-t border-white/10"
          style={{ backgroundColor: "rgba(45,41,38,0.98)" }}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}
              className="text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
              {label}
            </a>
          ))}
          <a href="#popular" onClick={() => setOpen(false)}
            className="self-start px-6 py-2.5 rounded-full bg-accent text-white text-[10px] tracking-[0.2em] uppercase hover:bg-accent-hover transition-colors">
            Mua ngay
          </a>
        </div>
      )}
    </nav>
  );
}
