"use client";

import FadeIn from "./FadeIn";
import ArchFrame from "./ArchFrame";

export default function FleurGiftIdeas() {
  return (
    <section id="gift" className="py-20 md:py-28 px-6 md:px-8" style={{ backgroundColor: "#EDE8E0" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Image — arch frame, portrait */}
          <FadeIn delay={0.1} className="order-first md:order-last">
            <div className="max-w-xs mx-auto md:max-w-none md:w-3/4 md:ml-auto">
              <ArchFrame src="/anh4.jpg" alt="Quà tặng handmade" ratio="3/4" />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-4">Quà tặng ý nghĩa</p>
            <h2 className="font-serif text-4xl md:text-5xl text-warm-900 font-semibold leading-tight mb-5">
              Lưu Giữ<br />Mãi Mãi
            </h2>
            <div className="h-px w-10 bg-warm-300 mb-6" />
            <p className="text-sm text-warm-700 leading-[1.7] mb-4">
              Một chiếc túi móc len hay thú bông handmade không chỉ là phụ kiện —
              đó là kỷ niệm được dệt bằng tay, bền đẹp theo năm tháng.
            </p>
            <p className="text-sm text-warm-700 leading-[1.7]">
              Liên hệ để được tư vấn chọn quà phù hợp cho từng dịp đặc biệt.
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
