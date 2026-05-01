"use client";

import { Heart, MessageCircle } from "lucide-react";
import VintageImage from "./VintageImage";

const items = [
  { id: 1, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=500&auto=format&fit=crop", likes: 609, comments: 120 },
  { id: 2, img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=500&auto=format&fit=crop", likes: 540, comments: 102 },
  { id: 3, img: "https://images.unsplash.com/photo-1490750967868-88df5691cc28?q=80&w=500&auto=format&fit=crop", likes: 462, comments: 82 },
  { id: 4, img: "https://images.unsplash.com/photo-1487530811015-780aecb71c39?q=80&w=500&auto=format&fit=crop", likes: 742, comments: 109 },
];

export default function FleurProductGrid() {
  return (
    <section id="popular" className="px-8 pb-20" style={{ backgroundColor: "#EDE4D8", paddingTop: 150 }}>
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-6 bg-[#A07850]" />
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#A07850]">Bộ sưu tập móc len</p>
            <div className="h-px w-6 bg-[#A07850]" />
          </div>
          <h2 className="font-serif text-5xl text-[#2A1A0E] font-normal italic">
            Sản Phẩm Nổi Bật
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-px w-16 bg-[#C4A882]" />
            <span className="text-[#C4A882] text-xs">✦</span>
            <div className="h-px w-16 bg-[#C4A882]" />
          </div>
        </div>

        {/* 4-col */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {items.map((p) => (
            <div key={p.id} className="group">
              <div
                className="aspect-square overflow-hidden mb-3 relative cursor-pointer"
                style={{ backgroundColor: "#C8B89A" }}
              >
                <VintageImage
                  src={p.img}
                  alt=""
                  className="group-hover:scale-106 transition-transform duration-700"
                />
                {/* Hover veil */}
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
          ))}
        </div>

      </div>
    </section>
  );
}
