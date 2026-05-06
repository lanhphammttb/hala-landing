"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";

const links = [
  { name: "Dịch vụ", href: "#services" },
  { name: "Bộ sưu tập", href: "#popular" },
  { name: "Quà tặng", href: "#gift" },
  { name: "Liên hệ", href: "#contact" },
];

export default function FleurNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 px-6 py-4 md:px-12 ${
          isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-stone/50 py-3" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#">
            <img src="/icon_logo.svg" alt="Lito Handmade" className="h-10 object-contain" />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] uppercase tracking-[0.3em] font-semibold transition-all hover:text-accent ${
                  isScrolled ? "text-primary/70" : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            <button
              className={`hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
                isScrolled ? "text-primary hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              <ShoppingBag size={16} />
              <span className="hidden lg:inline">Giỏ hàng (0)</span>
            </button>
            
            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden transition-colors ${isScrolled ? "text-primary" : "text-white"}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-deep-brown flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="font-serif italic text-3xl text-white">Lito<span className="text-accent">.</span></span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-10">
              {links.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif text-stone hover:text-accent transition-colors italic"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/10 flex flex-col gap-4">
              <span className="text-white/40 text-[10px] uppercase tracking-widest">Liên hệ qua</span>
              <div className="flex gap-6">
                <a href="#" className="text-white hover:text-accent transition-colors">Instagram</a>
                <a href="#" className="text-white hover:text-accent transition-colors">Facebook</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
