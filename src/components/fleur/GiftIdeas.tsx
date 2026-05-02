"use client";

import FadeIn from "./FadeIn";
import VintageImage from "./VintageImage";

export default function FleurGiftIdeas() {
  return (
    <section id="gift" className="py-16 md:py-24 px-6 md:px-10"
      style={{ backgroundColor: "#E8E0D6" }}>
      <div className="max-w-360 mx-auto">

        {/* Image first, text overlaps on desktop via negative margin */}
        <FadeIn delay={0.05}>
          <div className="relative">

            {/* Image — right side */}
            <div className="md:ml-auto md:w-[60%]" style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              aspectRatio: "4/3",
              boxShadow: "0 8px 32px rgba(45,41,38,0.08)",
            }}>
              <VintageImage src="/anh4.jpg" alt="Quà tặng handmade" />
            </div>

            {/* Text card — overlaps image on desktop */}
            <div className="mt-6 md:mt-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:w-[48%]">
              <div className="px-8 py-10"
                style={{
                  backgroundColor: "#F6F3EF",
                  borderRadius: "1.5rem",
                  boxShadow: "0 12px 40px rgba(45,41,38,0.10)",
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
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
