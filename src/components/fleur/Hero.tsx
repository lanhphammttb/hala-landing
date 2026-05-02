"use client";

import VintageImage from "./VintageImage";

export default function FleurHero() {
  return (
    <section className="relative h-svh min-h-140 overflow-hidden">
      <div className="absolute inset-0">
        <VintageImage src="/anh2.jpg" alt="" />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-warm-900/50 via-warm-900/25 to-warm-900/55" />

      <div className="absolute left-8 bottom-8 hidden md:flex gap-6">
        {["IG", "FB", "TT"].map((s) => (
          <a key={s} href="#"
            className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white/80 transition-colors">
            {s}
          </a>
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-8">Hala Handmade</p>

        <h1 className="font-serif font-medium text-white leading-[1.1] mb-5"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", textShadow: "0 2px 30px rgba(42,26,14,0.35)" }}>
          Phụ Kiện Móc Len<br />
          <em className="italic font-normal">Thủ Công Độc Bản</em>
        </h1>

        <p className="text-sm text-white/60 mb-10">
          Miễn phí vận chuyển từ 500.000₫
        </p>

        <a href="#popular"
          className="px-8 py-3 rounded-full bg-accent text-white text-[10px] tracking-[0.25em] uppercase hover:bg-accent-hover transition-colors">
          Khám phá
        </a>
      </div>
    </section>
  );
}
