"use client";

import { useState, useEffect } from "react";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Mẫu túi", href: "#popular" },
  { label: "Quà tặng", href: "#gift" },
  { label: "Đặt làm", href: "#contact" },
  { label: "Câu chuyện", href: "#services" },
];

export default function FleurNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
    <nav
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
        isScrolled ? "bg-[#fffaf3]/90 backdrop-blur-xl border-b border-[#2C2420]/10" : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <div className="flex shrink-0 items-center">
          <a href="#" className="flex min-w-0 items-center">
            <Image
              src="/icon_litohandmade.png"
              alt="LITO Handmade"
              width={66}
              height={44}
              sizes="66px"
              className="h-10 w-auto object-contain sm:h-11"
            />
          </a>
        </div>

        <div
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-10 text-sm font-semibold md:flex ${
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

        <div className="flex shrink-0 items-center justify-end gap-1 sm:gap-3">
          <a
            href="#popular"
            aria-label="Tìm kiếm"
            className={`hidden h-9 w-9 items-center justify-center rounded-full transition-colors sm:flex sm:h-10 sm:w-10 ${
              isScrolled
                ? "text-[#2C2420] hover:bg-[#2C2420]/5"
                : "text-white hover:bg-white/10"
            }`}
          >
            <Search size={20} />
          </a>
          <a
            href="#contact"
            aria-label="Tài khoản"
            className={`hidden h-10 w-10 items-center justify-center rounded-full transition-colors lg:flex ${
              isScrolled
                ? "text-[#2C2420] hover:bg-[#2C2420]/5"
                : "text-white hover:bg-white/10"
            }`}
          >
            <User size={18} />
          </a>
          <a
            href="#gift"
            aria-label="Yêu thích"
            className={`hidden h-10 w-10 items-center justify-center rounded-full transition-colors sm:flex ${
              isScrolled
                ? "text-[#2C2420] hover:bg-[#2C2420]/5"
                : "text-white hover:bg-white/10"
            }`}
          >
            <Heart size={18} />
          </a>
          <a
            href="#popular"
            aria-label="Giỏ hàng"
            className={`group hidden h-9 w-9 items-center justify-center rounded-full transition-all sm:flex sm:h-10 sm:w-10 ${
              isScrolled
                ? "text-[#2C2420] hover:bg-[#2C2420]/5"
                : "text-white hover:bg-white/10"
            }`}
          >
            <ShoppingBag size={17} className="transition-transform group-hover:scale-110" />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-expanded={isMenuOpen}
            style={{ position: "fixed", left: "min(calc(100vw - 56px), 344px)", top: 20, zIndex: 130 }}
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors sm:hidden ${
              isScrolled
                ? "text-[#2C2420] hover:bg-[#2C2420]/5"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-[#1f1713]/94 px-6 pb-10 pt-24 text-white backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-serif text-4xl italic leading-none text-white transition-colors hover:text-[#FFD37A]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-12 flex gap-3">
            <a href="#popular" onClick={closeMenu} className="rounded-full bg-[#FFD37A] px-6 py-3 text-sm font-bold text-[#2C2420]">
              Xem mẫu
            </a>
            <a href="#contact" onClick={closeMenu} className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white">
              Đặt làm
            </a>
          </div>
        </div>
      )}
    </>
  );
}
