"use client";

import FadeIn from "./FadeIn";
import VintageImage from "./VintageImage";

export default function FleurGiftIdeas() {
  return (
    <section id="gift" className="py-20 md:py-28 px-6 md:px-12 xl:px-16"
      style={{ backgroundColor: "#E8E0D6" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Text card */}
          <FadeIn>
            <div className="px-8 py-10"
              style={{
                backgroundColor: "#F6F3EF",
                borderRadius: "1.5rem",
                boxShadow: "0 20px 40px rgba(0,0,0,0.03), 0 4px 16px rgba(45,41,38,0.06)",
              }}>
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-4">Quà tặng ý nghĩa</p>
              <h2 className="font-serif text-warm-900 font-semibold leading-tight mb-5"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Lưu Giữ<br />Mãi Mãi
              </h2>
              <div className="h-px w-10 bg-warm-300 mb-6" />
              <p className="text-sm text-warm-700 leading-[1.8] mb-3">
                Một chiếc túi móc len hay thú bông handmade không chỉ là phụ kiện —
                đó là kỷ niệm được dệt bằng tay, bền đẹp theo năm tháng.
              </p>
              <p className="text-sm text-warm-700 leading-[1.8]">
                Liên hệ để được tư vấn chọn quà phù hợp cho từng dịp đặc biệt.
              </p>
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn delay={0.1}>
            <div style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              aspectRatio: "4/3",
              boxShadow: "0 20px 40px rgba(0,0,0,0.03), 0 6px 24px rgba(45,41,38,0.08)",
            }}>
              <VintageImage src="/anh4.jpg" alt="Quà tặng handmade" />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
