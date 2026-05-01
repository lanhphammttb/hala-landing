"use client";

import VintageImage from "./VintageImage";

export default function FleurHero() {
  return (
    <section className="relative h-svh min-h-140 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <VintageImage
          src="/anh2.jpg"
          alt=""
        />
      </div>

      {/* Dark vignette overlay for readability */}
      <div className="absolute inset-0 bg-linear-to-b from-[#2A1A0E]/55 via-[#2A1A0E]/30 to-[#2A1A0E]/60" />

      {/* Social — bottom left */}
      <div className="absolute left-8 bottom-8 hidden md:flex gap-5">
        {["IG", "FB", "TT", "WEB"].map((s) => (
          <a key={s} href="#"
            className="text-[10px] tracking-[0.2em] text-white/60 hover:text-white/90 transition-colors">
            {s}
          </a>
        ))}
      </div>

      {/* Collection — bottom right */}
      <div className="absolute right-8 bottom-8 hidden md:flex items-center gap-2 text-white/65 text-[10px] tracking-[0.22em] uppercase">
        <span>Bộ sưu tập thủ công</span>
        <span>→</span>
      </div>

      {/* Center */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-white/40" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-white/60">Hala Handmade</span>
          <div className="h-px w-12 bg-white/40" />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.05] mb-5"
          style={{ textShadow: "0 2px 30px rgba(42,26,14,0.4)" }}>
          Phụ Kiện Móc Len<br />
          <em className="font-light italic">Thủ Công Độc Bản</em>
        </h1>

        <p className="text-sm md:text-base text-white/75 mb-10 tracking-widest font-light">
          Miễn phí vận chuyển cho đơn hàng trên 500.000₫
        </p>

        <a href="#popular"
          className="px-10 py-3.5 border border-white/70 text-white text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-[#2A1A0E] transition-all duration-300">
          Mua ngay
        </a>
      </div>
    </section>
  );
}
