"use client";

import { Heart, ShoppingBag } from "lucide-react";
import FadeIn from "./FadeIn";
import VintageImage from "./VintageImage";

const items = [
  { id: 1, img: "/anh1.jpg", name: "Túi xách mini", price: "280.000₫", tag: "Mới" },
  { id: 2, img: "/anh2.jpg", name: "Túi tote len", price: "350.000₫" },
  { id: 3, img: "/anh3.jpg", name: "Túi dây rút", price: "320.000₫" },
  { id: 4, img: "/anh4.jpg", name: "Túi hoa crochet", price: "290.000₫", tag: "Mới" },
  { id: 5, img: "/anh5.jpg", name: "Móc chìa khóa", price: "90.000₫" },
  { id: 6, img: "/anh6.jpg", name: "Hoa len trang trí", price: "120.000₫" },
];

export default function FleurProductGrid() {
  return (
    <section id="popular" className="py-16 md:py-24 px-6 md:px-10"
      style={{ backgroundColor: "#F0EBE4" }}>
      <div className="max-w-360 mx-auto">

        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">Bộ sưu tập</p>
            <h2 className="font-serif font-semibold text-warm-900 text-4xl md:text-5xl">
              Sản Phẩm Nổi Bật
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 xl:gap-6">
          {items.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.06}>
              <div className="group flex flex-col">

                <div className="relative overflow-hidden mb-3"
                  style={{ aspectRatio: "3/4", borderRadius: "1.25rem", backgroundColor: "#E8E0D6" }}>
                  <VintageImage
                    src={p.img}
                    alt={p.name}
                    className="group-hover:scale-105 transition-transform duration-700"
                  />

                  {p.tag && (
                    <span className="absolute top-3 left-3 text-[9px] tracking-widest uppercase px-2 py-1 font-medium"
                      style={{
                        backgroundColor: "#F6F3EF",
                        color: "#6B705C",
                        borderRadius: "0.3rem",
                        border: "1px solid rgba(107,112,92,0.25)",
                      }}>
                      {p.tag}
                    </span>
                  )}

                  {/* Heart wishlist — fade in on hover */}
                  <button
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ backgroundColor: "rgba(246,243,239,0.9)", boxShadow: "0 2px 8px rgba(45,41,38,0.12)" }}>
                    <Heart size={13} strokeWidth={1.5} className="text-accent" />
                  </button>

                  {/* Dark gradient overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                    style={{ borderRadius: "1.25rem", background: "linear-gradient(to top, rgba(45,41,38,0.70) 0%, transparent 50%)" }} />

                  {/* "Sở hữu ngay" slides up from bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <a href="#contact" className="inline-flex items-center gap-2 text-white text-[10px] tracking-[0.18em] uppercase">
                      <ShoppingBag size={12} strokeWidth={1.5} />
                      Sở hữu ngay
                    </a>
                  </div>
                </div>

                <p className="text-sm text-warm-900 font-medium leading-tight mb-1">{p.name}</p>
                <p className="font-serif text-sm text-accent font-semibold">{p.price}</p>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
