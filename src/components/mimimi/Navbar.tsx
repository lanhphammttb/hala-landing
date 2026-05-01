"use client";

import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#products", label: "Sản phẩm" },
  { href: "#recruit", label: "Tuyển dụng" },
  { href: "#contact", label: "Liên hệ" },
];

export default function MiMiNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/96 backdrop-blur-sm border-b border-[#f5c6d8]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Heart size={16} className="text-[#e8547a] fill-[#e8547a]" />
          <span className="text-lg font-serif italic text-[#c0304f]">Mị Mị Mê Len</span>
        </a>

        <div className="hidden md:flex gap-8 text-xs font-medium tracking-wide text-[#8b4460]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#e8547a] transition-colors uppercase tracking-[0.12em]">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#e8547a] text-white text-[10px] font-medium tracking-[0.15em] uppercase hover:bg-[#d4436a] transition-colors"
        >
          Đặt hàng
        </a>

        <button className="md:hidden text-[#e8547a]" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#f5c6d8] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm text-[#8b4460] hover:text-[#e8547a] transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="self-start px-5 py-2 rounded-full bg-[#e8547a] text-white text-xs">
            Đặt hàng
          </a>
        </div>
      )}
    </nav>
  );
}
