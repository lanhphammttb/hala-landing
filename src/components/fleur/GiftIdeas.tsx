"use client";

import VintageImage from "./VintageImage";
import FadeIn from "./FadeIn";

export default function FleurGiftIdeas() {
  return (
    <section id="gift" className="py-16 md:py-24 px-6 md:px-8" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

          <FadeIn delay={0.1} className="flex justify-center md:justify-end order-first md:order-last">
            <div
              className="rounded-full overflow-hidden shrink-0"
              style={{
                width: "min(260px, 72vw)",
                aspectRatio: "1",
                boxShadow: "0 12px 40px rgba(42,26,14,0.13)",
                border: "5px solid #FAF7F2",
              }}
            >
              <VintageImage src="/anh4.jpg" alt="Quà tặng handmade" />
            </div>
          </FadeIn>

          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#A07850] mb-4">Quà tặng ý nghĩa</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2A1A0E] font-normal italic leading-tight mb-5">
              Lưu Giữ<br />Mãi Mãi
            </h2>
            <div className="h-px w-10 bg-[#C4A882] mb-6" />
            <p className="text-sm text-[#5C4433] leading-relaxed mb-4">
              Một chiếc túi móc len hay thú bông handmade không chỉ là phụ kiện —
              đó là kỷ niệm được dệt bằng tay, bền đẹp theo năm tháng.
            </p>
            <p className="text-sm text-[#5C4433] leading-relaxed">
              Liên hệ để được tư vấn chọn quà phù hợp cho từng dịp đặc biệt.
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
