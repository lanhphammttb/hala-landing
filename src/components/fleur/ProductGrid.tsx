"use client";

import FadeIn from "./FadeIn";
import VintageImage from "./VintageImage";

const items = [
  { id: 1, img: "/anh1.jpg", name: "Túi xách mini", price: "280.000₫" },
  { id: 2, img: "/anh2.jpg", name: "Túi tote len", price: "350.000₫" },
  { id: 3, img: "/anh3.jpg", name: "Túi dây rút", price: "320.000₫" },
  { id: 4, img: "/anh4.jpg", name: "Túi hoa crochet", price: "290.000₫" },
  { id: 5, img: "/anh5.jpg", name: "Móc chìa khóa", price: "90.000₫" },
  { id: 6, img: "/anh6.jpg", name: "Hoa len trang trí", price: "120.000₫" },
];

export default function FleurProductGrid() {
  return (
    <section id="popular" className="py-20 md:py-28 px-6 md:px-12 xl:px-16" style={{ backgroundColor: "#F5F0EA" }}>
      <div className="max-w-7xl mx-auto">

        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">Bộ sưu tập</p>
            <h2 className="font-serif font-semibold text-warm-900"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
              Sản Phẩm Nổi Bật
            </h2>
          </div>
        </FadeIn>

        {/*
          Asymmetric grid: item[0] is featured (col-span-2, square) on md+
          Grid: 2-col mobile → 3-col md → 4-col lg
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {items.map((p, i) => {
            const featured = i === 0;
            return (
              <FadeIn
                key={p.id}
                delay={i * 0.06}
                className={featured ? "col-span-2 md:col-span-2" : ""}
              >
                <div className="group flex flex-col">
                  <div
                    className="relative overflow-hidden mb-3"
                    style={{
                      aspectRatio: featured ? "4/3" : "3/4",
                      borderRadius: "1.5rem",
                      backgroundColor: "#EDE8E0",
                    }}
                  >
                    <VintageImage
                      src={p.img}
                      alt={p.name}
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Hover overlay with price */}
                    <div
                      className="absolute inset-0 flex items-end p-5 transition-all duration-500"
                      style={{
                        borderRadius: "1.5rem",
                        background: "linear-gradient(to top, rgba(42,26,14,0) 0%, rgba(42,26,14,0) 100%)",
                      }}
                    >
                      <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                        <p className="text-white font-semibold text-lg leading-none">{p.price}</p>
                        <p className="text-white/70 text-xs mt-1 tracking-wide">{p.name}</p>
                      </div>
                    </div>
                    {/* Dark gradient overlay — only on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        borderRadius: "1.5rem",
                        background: "linear-gradient(to top, rgba(42,26,14,0.65) 0%, transparent 60%)",
                      }}
                    />
                  </div>
                  <p className="text-sm text-warm-900 font-medium leading-tight mb-0.5">{p.name}</p>
                  <p className="text-sm text-accent font-semibold mb-3">{p.price}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center py-2 px-4 text-[10px] tracking-[0.15em] uppercase text-white bg-accent hover:bg-accent-hover transition-all hover:shadow-[0_4px_14px_rgba(184,92,56,0.35)]"
                    style={{ borderRadius: "0.75rem" }}
                  >
                    Sở hữu ngay
                  </a>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
