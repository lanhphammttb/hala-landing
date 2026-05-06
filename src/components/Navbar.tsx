"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#e8ddd0]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-serif text-xl tracking-widest text-[#2c2420] uppercase">
          Lito
        </span>

        <div className="hidden md:flex gap-10 text-xs font-medium tracking-widest uppercase text-[#8b6f5e]">
          <a href="#services" className="hover:text-[#2c2420] transition-colors">Dịch vụ</a>
          <a href="#gift" className="hover:text-[#2c2420] transition-colors">Quà tặng</a>
          <a href="#popular" className="hover:text-[#2c2420] transition-colors">Nổi bật</a>
          <a href="#contact" className="hover:text-[#2c2420] transition-colors">Liên hệ</a>
        </div>

        <a
          href="#popular"
          className="px-5 py-2 bg-[#2c2420] text-white text-xs font-medium tracking-widest uppercase hover:bg-[#8b6f5e] transition-colors"
        >
          Mua ngay
        </a>
      </div>
    </nav>
  );
}
