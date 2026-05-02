"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links: [string, string][] = [
  ["Dịch vụ", "#services"],
  ["Sản phẩm", "#popular"],
  ["Quà tặng", "#gift"],
  ["Liên hệ", "#contact"],
];

export default function FleurNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(246,243,239,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(205,191,172,0.35)" : "1px solid transparent",
      }}
    >
      <div className="max-w-360 mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="#"
          className="font-serif text-lg tracking-[0.3em] italic transition-colors duration-500"
          style={{ color: scrolled ? "#8E5A44" : "#C4A882" }}>
          Hala
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a key={label} href={href}
              className="text-[10px] tracking-[0.2em] uppercase transition-colors duration-500"
              style={{ color: scrolled ? "rgba(45,41,38,0.6)" : "rgba(255,255,255,0.7)" }}>
              {label}
            </a>
          ))}
          <a href="#popular"
            className="px-5 py-2 rounded-full bg-accent text-white text-[10px] tracking-[0.2em] uppercase hover:bg-accent-hover transition-colors">
            Mua ngay
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-1 transition-colors duration-500"
          style={{ color: scrolled ? "#2D2926" : "rgba(255,255,255,0.85)" }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-5 px-6 py-6"
          style={{ backgroundColor: "rgba(246,243,239,0.97)", borderTop: "1px solid rgba(205,191,172,0.3)" }}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}
              className="text-[11px] tracking-[0.2em] uppercase text-warm-900 hover:text-accent transition-colors">
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
