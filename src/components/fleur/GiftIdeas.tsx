"use client";

import FadeIn from "./FadeIn";
import VintageImage from "./VintageImage";

export default function FleurGiftIdeas() {
  return (
    <section id="gift" className="py-16 md:py-24 px-6 md:px-10 overflow-hidden"
      style={{ backgroundColor: "#EDE8E0" }}>
      <div className="max-w-360 mx-auto">

        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-0">

          {/* Text — no card box, sits directly on section background */}
          <FadeIn className="relative z-10 w-full md:w-[48%] shrink-0">
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent mb-4 font-sans">Quà tặng ý nghĩa</p>
            <h2 className="font-serif font-medium text-warm-900 leading-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              Lưu Giữ<br />Mãi Mãi
            </h2>
            <div className="h-px w-8 bg-warm-300 mb-5" />
            <p className="text-sm text-warm-700 leading-[1.75]">
              Không chỉ là phụ kiện — đó là kỷ niệm được dệt bằng tay,
              bền đẹp theo năm tháng.
            </p>
          </FadeIn>

          {/* Image — overlaps text by 100px on desktop */}
          <FadeIn delay={0.1} className="w-full md:w-[58%] md:-ml-25">
            <div style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              aspectRatio: "4/3",
              boxShadow: "0 8px 40px rgba(45,41,38,0.10)",
            }}>
              <VintageImage src="/anh4.jpg" alt="Quà tặng handmade" />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
