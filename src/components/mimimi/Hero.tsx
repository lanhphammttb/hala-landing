"use client";

import { Scissors, Star, Palette, Truck } from "lucide-react";

const features = [
  { icon: Scissors, label: "Handmade", sub: "Tỉ mỉ từng mũi" },
  { icon: Star, label: "Chất lượng", sub: "Sợi len cao cấp" },
  { icon: Palette, label: "Đa dạng", sub: "Mẫu mã phong phú" },
  { icon: Truck, label: "Giao toàn quốc", sub: "Đóng gói cẩn thận" },
];

export default function MiMiHero() {
  return (
    <section className="pt-16 bg-[#FFF8FB]">
      {/* Main banner */}
      <div className="relative overflow-hidden" style={{ minHeight: 480 }}>
        {/* Background image */}
        <img
          src="/anh2.jpg"
          alt="Hala Handmade"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.55)" }}
        />

        {/* Overlay tint */}
        <div className="absolute inset-0" style={{ background: "rgba(192,48,79,0.25)" }} />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center h-full py-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-white/50" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-white/70">Thủ công — Len sợi — Handmade</span>
            <div className="h-px w-10 bg-white/50" />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl italic text-white leading-tight mb-4"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.3)" }}>
            Mị Mị Mê Len
          </h1>

          <p className="text-sm text-white/80 mb-10 tracking-widest font-light">
            Móc nên yêu thương — Gửi trọn điều xinh xắn
          </p>

          <div className="flex gap-4">
            <a href="#products"
              className="px-8 py-3 rounded-full bg-[#e8547a] text-white text-[10px] tracking-[0.2em] uppercase hover:bg-[#d4436a] transition-colors shadow-lg">
              Xem sản phẩm
            </a>
            <a href="#contact"
              className="px-8 py-3 rounded-full border border-white/70 text-white text-[10px] tracking-[0.2em] uppercase hover:bg-white/15 transition-colors">
              Liên hệ ngay
            </a>
          </div>
        </div>
      </div>

      {/* Features bar */}
      <div className="max-w-6xl mx-auto px-6 -mt-6 relative z-10 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {features.map(({ icon: Icon, label, sub }) => (
            <div key={label}
              className="bg-white rounded-2xl px-4 py-5 flex flex-col items-center gap-2 border border-[#f5c6d8] shadow-sm">
              <div className="w-9 h-9 rounded-full bg-[#FFE8F0] flex items-center justify-center">
                <Icon size={16} className="text-[#e8547a]" />
              </div>
              <span className="text-xs font-semibold text-[#2c1a22]">{label}</span>
              <span className="text-[10px] text-[#8b4460] text-center leading-tight">{sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
