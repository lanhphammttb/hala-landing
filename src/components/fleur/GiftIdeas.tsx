"use client";

import VintageImage from "./VintageImage";

export default function FleurGiftIdeas() {
  return (
    <section id="gift" className="bg-white py-20 px-8 overflow-visible">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div className="py-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-5 bg-[#A07850]" />
            <p className="text-[9px] tracking-[0.32em] uppercase text-[#A07850]">Nhớ mãi người thân yêu</p>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-[#2A1A0E] font-normal leading-tight mb-5">
            Quà Tặng Lưu Giữ<br />
            <em className="italic">Mãi Mãi</em>
          </h2>

          <div className="flex items-center gap-2 mb-7">
            <div className="h-px w-12 bg-[#C4A882]" />
            <span className="text-[#C4A882] text-[10px]">✦</span>
            <div className="h-px w-20 bg-[#C4A882]" />
          </div>

          <p className="text-sm text-[#5C4433] leading-[1.95] mb-9 max-w-sm">
            Ai mà không yêu thích những sản phẩm thủ công ý nghĩa? Dù tặng hay nhận,
            một chiếc túi móc len hay thú bông handmade sẽ là món quà không bao giờ
            phai nhạt. Chúng tôi tạo ra những tác phẩm bền đẹp cùng bạn nhiều năm.
          </p>

          <a href="#contact"
            className="inline-block px-8 py-3 text-[10px] tracking-[0.22em] uppercase transition-colors"
            style={{ backgroundColor: "#2A1A0E", color: "#F2EAE0" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#A07850"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#2A1A0E"; }}>
            Tư vấn ngay
          </a>
        </div>

        {/* Right — circle, bleeds into next section */}
        <div className="flex justify-end items-start">
          <div
            className="rounded-full overflow-hidden shrink-0"
            style={{
              width: "min(400px, 90vw)",
              aspectRatio: "1",
              marginBottom: -110,
              boxShadow: "0 20px 60px rgba(42,26,14,0.2)",
              border: "6px solid #EDE4D8",
            }}
          >
            <VintageImage
              src="https://images.unsplash.com/photo-1490750967868-88df5691cc28?q=80&w=800&auto=format&fit=crop"
              alt="Quà tặng handmade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
