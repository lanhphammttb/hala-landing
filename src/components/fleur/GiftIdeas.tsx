"use client";

import FadeIn from "./FadeIn";
import VintageImage from "./VintageImage";

export default function FleurGiftIdeas() {
  return (
    <section id="gift" className="py-32 md:py-44 px-6 md:px-12 xl:px-16 relative overflow-hidden"
      style={{ backgroundColor: "#E8E0D6" }}>

      {/* Subtle bg texture blob */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-150 rounded-full opacity-40"
          style={{ background: "radial-gradient(ellipse, rgba(246,243,239,0.5) 0%, transparent 65%)" }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="relative">

          {/* Image — right side, slightly larger, bleeds to edge feel */}
          <FadeIn delay={0.1} className="md:flex md:justify-end">
            <div className="w-full md:w-[55%] lg:w-[50%]"
              style={{ borderRadius: "1.5rem", overflow: "hidden", aspectRatio: "4/3",
                boxShadow: "0 20px 40px rgba(0,0,0,0.03), 0 8px 32px rgba(45,41,38,0.10)" }}>
              <VintageImage src="/anh4.jpg" alt="Quà tặng handmade" />
            </div>
          </FadeIn>

          {/* Text block — overlaps image on desktop */}
          <FadeIn className="mt-8 md:mt-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:w-[48%] lg:w-[44%]">
            <div className="px-8 py-10 md:py-12"
              style={{
                backgroundColor: "rgba(246,243,239,0.92)",
                borderRadius: "1.5rem",
                backdropFilter: "blur(8px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.03), 0 4px 20px rgba(45,41,38,0.06)",
              }}>
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-4">Quà tặng ý nghĩa</p>
              <h2 className="font-serif text-warm-900 font-semibold leading-tight mb-5"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Lưu Giữ<br />Mãi Mãi
              </h2>
              <div className="h-px w-10 bg-warm-300 mb-6" />
              <p className="text-sm text-warm-700 leading-[1.8] mb-4">
                Một chiếc túi móc len hay thú bông handmade không chỉ là phụ kiện —
                đó là kỷ niệm được dệt bằng tay, bền đẹp theo năm tháng.
              </p>
              <p className="text-sm text-warm-700 leading-[1.8]">
                Liên hệ để được tư vấn chọn quà phù hợp cho từng dịp đặc biệt.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
