"use client";

import { Heart, MessageCircle } from "lucide-react";
import VintageImage from "./VintageImage";
import FadeIn from "./FadeIn";

const items = [
  { id: 1, img: "/anh1.jpg", likes: 609, comments: 120 },
  { id: 2, img: "/anh3.jpg", likes: 540, comments: 102 },
  { id: 3, img: "/anh5.jpg", likes: 462, comments: 82 },
  { id: 4, img: "/anh6.jpg", likes: 742, comments: 109 },
];

export default function FleurProductGrid() {
  return (
    <section id="popular" className="px-4 md:px-8 pt-4 pb-16 md:pb-20" style={{ backgroundColor: "#F5F0EA" }}>
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <FadeIn>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-6 bg-[#A07850]" />
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#A07850]">Bộ sưu tập móc len</p>
              <div className="h-px w-6 bg-[#A07850]" />
            </div>
            <h2 className="font-serif text-5xl text-[#2A1A0E] font-normal italic">
              Sản Phẩm Nổi Bật
            </h2>
            <div className="h-px w-16 bg-[#C4A882] mx-auto mt-4" />
          </div>
        </FadeIn>

        {/* 4-col */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {items.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <div className="group">
                <div
                  className="aspect-square overflow-hidden mb-3 relative cursor-pointer"
                  style={{ backgroundColor: "#E8E0D5" }}
                >
                  <VintageImage
                    src={p.img}
                    alt=""
                    className="group-hover:scale-106 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#2A1A0E]/0 group-hover:bg-[#2A1A0E]/12 transition-colors duration-300 pointer-events-none" />
                </div>
                <div className="flex items-center gap-3 text-[10px] text-[#8B6A50]">
                  <span className="flex items-center gap-1"><Heart size={10} /> {p.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle size={10} /> {p.comments}</span>
                  <a href="#" className="ml-auto text-[9px] tracking-[0.15em] uppercase hover:text-[#2A1A0E] transition-colors">
                    Share
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
