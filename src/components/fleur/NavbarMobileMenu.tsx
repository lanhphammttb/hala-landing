"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

type NavLink = {
  label: string;
  href: string;
};

type FleurMobileMenuProps = {
  links: NavLink[];
};

export default function FleurMobileMenu({ links }: FleurMobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <button
        aria-label="Menu"
        onClick={() => setIsMenuOpen((value) => !value)}
        aria-expanded={isMenuOpen}
        className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 [html.nav-scrolled_&]:text-[#2C2420] [html.nav-scrolled_&]:hover:bg-[#2C2420]/5 sm:hidden"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={19} />}
      </button>

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
            <a
              href="#popular"
              onClick={closeMenu}
              className="rounded-full bg-[#FFD37A] px-6 py-3 text-sm font-bold text-[#2C2420]"
            >
              Xem mẫu
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white"
            >
              Đặt làm
            </a>
          </div>
        </div>
      )}
    </>
  );
}
