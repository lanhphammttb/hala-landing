"use client";

import { Heart, MessageCircle, Share2 } from "lucide-react";

const items = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1487530811015-780aecb71c39?q=80&w=600&auto=format&fit=crop",
    likes: 829,
    comments: 120,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1490750967868-88df5691cc28?q=80&w=600&auto=format&fit=crop",
    likes: 540,
    comments: 103,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1562630186-b60a5e4d48c4?q=80&w=600&auto=format&fit=crop",
    likes: 462,
    comments: 782,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600&auto=format&fit=crop",
    likes: 743,
    comments: 109,
  },
];

export default function ProductGrid() {
  return (
    <section id="popular" className="bg-[#f5f0e8] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs tracking-widest uppercase text-[#8b6f5e] mb-3">
          Bộ sưu tập hoa khô
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-center text-[#2c2420] mb-16">
          Sản Phẩm Nổi Bật
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="overflow-hidden bg-[#e8ddd0] aspect-square mb-3">
                <img
                  src={p.img}
                  alt="Sản phẩm"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-4 text-xs text-[#8b6f5e]">
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  {p.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" />
                  {p.comments}
                </span>
                <span className="flex items-center gap-1 ml-auto hover:text-[#2c2420] transition-colors">
                  <Share2 className="w-3 h-3" />
                  Chia sẻ
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
