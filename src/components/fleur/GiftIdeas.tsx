"use client";

import FadeIn from "./FadeIn";
import VintageImage from "./VintageImage";

export default function FleurGiftIdeas() {
  return (
    <section id="gift" className="py-16 md:py-24 px-6 md:px-10 overflow-hidden"
      style={{ backgroundColor: "#E8E0D6" }}>
      <div className="max-w-360 mx-auto">

        {/* Mobile: stacked. Desktop: flex row, text overlaps image by 100px */}
        <div className="flex flex-col md:flex-row md:items-center">

          {/* Text card — sits in front (higher z-index) */}
          <FadeIn className="relative z-10 w-full md:w-[52%] shrink-0">
            <div className="px-8 py-10 md:py-12"
              style={{
                backgroundColor: "#F6F3EF",
                borderRadius: "1.5rem",
                boxShadow: "0 12px 48px rgba(45,41,38,0.12)",
              }}>
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-4">Quà tặng ý nghĩa</p>
              <h2 className="font-serif font-semibold text-warm-900 text-4xl md:text-5xl leading-tight mb-5">
                Lưu Giữ<br />Mãi Mãi
              </h2>
              <div className="h-px w-10 bg-warm-300 mb-6" />
              <p className="text-sm text-warm-700 leading-relaxed mb-3">
                Một chiếc túi móc len hay thú bông handmade không chỉ là phụ kiện —
                đó là kỷ niệm được dệt bằng tay, bền đẹp theo năm tháng.
              </p>
              <p className="text-sm text-warm-700 leading-relaxed">
                Liên hệ để được tư vấn chọn quà phù hợp cho từng dịp đặc biệt.
              </p>
            </div>
          </FadeIn>

          {/* Image — pulls left by 100px on desktop to overlap behind text */}
          <FadeIn delay={0.1} className="w-full md:w-[56%] mt-6 md:mt-0 md:-ml-25">
            <div style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              aspectRatio: "4/3",
              boxShadow: "0 8px 32px rgba(45,41,38,0.08)",
            }}>
              <VintageImage src="/anh4.jpg" alt="Quà tặng handmade" />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
