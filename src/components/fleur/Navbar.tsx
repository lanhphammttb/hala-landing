"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Search, User, Menu } from "lucide-react";

export default function FleurNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 md:top-6 inset-x-0 md:inset-x-6 z-[100] transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-lg rounded-none md:rounded-full" : "bg-transparent py-4 rounded-none md:rounded-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Left: Menu */}
        <div className="flex items-center gap-6">
          <button className="text-[#2C2420] p-2 hover:bg-[#FAF7F2] rounded-full transition-colors">
            <Menu size={20} />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex flex-col items-center">
          <span className="font-serif italic text-3xl md:text-4xl text-[#2C2420] tracking-tighter">LITO</span>
          <span className="text-[#C59D5F] text-[8px] uppercase tracking-[0.4em] font-black -mt-1">Tiệm Đồ Len</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button className="text-[#2C2420] p-2 hover:bg-[#FAF7F2] rounded-full transition-colors hidden md:flex">
            <Search size={20} />
          </button>
          <button className="flex items-center gap-2 bg-[#2C2420] text-white px-5 py-2 rounded-full hover:bg-[#A56336] transition-all shadow-md group">
             <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
             <span className="text-[10px] uppercase font-bold tracking-widest hidden sm:block">Giỏ hàng</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
