"use client";

import VintageImage from "./VintageImage";
import FadeIn from "./FadeIn";

export default function FleurGiftIdeas() {
  return (
    <section id="gift" className="bg-white py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Image */}
          <FadeIn delay={0.1} className="order-first md:order-last flex justify-center">
            <div
              className="rounded-full overflow-hidden shrink-0"
              style={{
                width: "min(280px, 80vw)",
                aspectRatio: "1",
                boxShadow: "0 12px 40px rgba(42,26,14,0.14)",
                border: "5px solid #F5F0EA",
              }}
            >
              <VintageImage src="/anh4.jpg" alt="Quà tặng handmade" />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn>
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#A07850] mb-4">Quà tặng ý nghĩa</p>

            <h2 className="font-serif text-4xl md:text-5xl text-[#2A1A0E] font-normal leading-tight mb-5">
              Lưu Giữ<br />
              <em className="italic">Mãi Mãi</em>
            </h2>

            <div className="h-px w-12 bg-[#C4A882] mb-6" />

            <p className="text-sm text-[#5C4433] leading-[1.9] mb-4">
              Một chiếc túi móc len hay thú bông handmade không chỉ là phụ kiện —
              đó là kỷ niệm được dệt bằng tay, bền đẹp theo năm tháng.
            </p>

            <p className="text-sm text-[#5C4433] leading-[1.9]">
              Liên hệ để được tư vấn chọn quà phù hợp cho từng dịp đặc biệt.
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
