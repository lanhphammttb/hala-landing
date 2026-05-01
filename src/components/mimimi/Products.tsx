"use client";

import { ArrowRight } from "lucide-react";

const categories = [
  { label: "Túi xách móc len", sub: "Đa dạng mẫu mã", img: "/anh1.jpg" },
  { label: "Túi dây rút handmade", sub: "Xinh xắn, tinh tế", img: "/anh3.jpg" },
  { label: "Túi crochet hoa", sub: "Họa tiết độc đáo", img: "/anh4.jpg" },
  { label: "Phụ kiện móc chìa khóa", sub: "Quà tặng ý nghĩa", img: "/anh5.jpg" },
  { label: "Hoa len trang trí", sub: "Handmade với tình yêu", img: "/anh6.jpg" },
  { label: "Bộ sưu tập mới", sub: "Nhận order theo yêu cầu", img: "/anh2.jpg" },
];

export default function MiMiProducts() {
  return (
    <section id="products" className="bg-[#FFF8FB] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#f5c6d8]" />
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#e8547a] font-medium">Sản phẩm từ len sợi</p>
            <div className="h-px w-8 bg-[#f5c6d8]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl italic text-[#c0304f]">
            Bộ Sưu Tập
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="h-px w-12 bg-[#f5c6d8]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#f5c6d8]" />
            <div className="h-px w-12 bg-[#f5c6d8]" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {categories.map((c) => (
            <div key={c.label} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden bg-[#FFE8F0] border border-[#f5c6d8] shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#c0304f] leading-tight">{c.label}</p>
                    <p className="text-[10px] text-[#8b4460] mt-0.5">{c.sub}</p>
                  </div>
                  <ArrowRight size={14} className="text-[#e8547a] shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-2.5 border border-[#f5c6d8] shadow-sm">
            <div className="w-1 h-1 rounded-full bg-[#e8547a]" />
            <span className="text-xs text-[#c0304f] font-medium">
              Mẫu mã đa dạng — Nhận order theo yêu cầu — Quà tặng ý nghĩa
            </span>
            <div className="w-1 h-1 rounded-full bg-[#e8547a]" />
          </div>
        </div>

      </div>
    </section>
  );
}
