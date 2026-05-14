"use client";

import { useState, useEffect } from "react";
import { Menu, Search, ShoppingBag } from "lucide-react";

const links = [
  { label: "Dịch vụ", href: "#services" },
  { label: "Mẫu túi", href: "#popular" },
  { label: "Quà tặng", href: "#gift" },
  { label: "Liên hệ", href: "#contact" },
];

export default function FleurNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-[#fffaf3]/92 backdrop-blur-xl border-b border-[#2C2420]/10 shadow-sm"
          : "bg-gradient-to-b from-[#1c1511]/45 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <button
            aria-label="Menu"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden ${
              isScrolled
                ? "border-[#2C2420]/10 text-[#2C2420] hover:bg-[#2C2420]/5"
                : "border-white/25 text-white hover:bg-white/10"
            }`}
          >
            <Menu size={19} />
          </button>

          <a href="#" className="flex min-w-0 items-center gap-3">
            <img src="/icon_litohandmade.png" alt="LITO Handmade" className="h-11 w-auto object-contain" />
            <span
              className={`hidden text-sm font-bold sm:block ${
                isScrolled ? "text-[#2C2420]" : "text-white"
              }`}
            >
              Lito Handmade
            </span>
          </a>
        </div>

        <div
          className={`hidden items-center gap-8 text-sm font-semibold lg:flex ${
            isScrolled ? "text-[#2C2420]/70" : "text-white/78"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isScrolled ? "hover:text-[#A56336]" : "hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            aria-label="Tìm kiếm"
            className={`hidden h-10 w-10 items-center justify-center rounded-full transition-colors md:flex ${
              isScrolled
                ? "text-[#2C2420] hover:bg-[#2C2420]/5"
                : "text-white hover:bg-white/10"
            }`}
          >
            <Search size={20} />
          </button>
          <button
            className={`group flex items-center gap-2 rounded-full px-4 py-2.5 shadow-sm transition-all sm:px-5 ${
              isScrolled
                ? "bg-[#2C2420] text-white hover:bg-[#A56336]"
                : "bg-white text-[#2C2420] hover:bg-[#C59D5F] hover:text-white"
            }`}
          >
            <ShoppingBag size={17} className="transition-transform group-hover:scale-110" />
            <span className="hidden text-sm font-bold sm:block">Giỏ hàng</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
