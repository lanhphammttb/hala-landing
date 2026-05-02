"use client";

import FadeIn from "./FadeIn";
import VintageImage from "./VintageImage";

const items = [
  { id: 1, img: "/anh1.jpg", name: "Túi xách mini", price: "280.000₫", tag: "Mới" },
  { id: 2, img: "/anh2.jpg", name: "Túi tote len", price: "350.000₫", tag: "Bán chạy" },
  { id: 3, img: "/anh3.jpg", name: "Túi dây rút", price: "320.000₫" },
  { id: 4, img: "/anh4.jpg", name: "Túi hoa crochet", price: "290.000₫", tag: "Mới" },
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
          Asymmetric: item[0] featured — col-span-2 landscape on md+
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

                    {/* Paper tag badge */}
                    {p.tag && (
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span
                          className="text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 font-medium"
                          style={{
                            backgroundColor: "#FBF9F4",
                            color: "#6B705C",
                            borderRadius: "0.35rem",
                            border: "1px solid rgba(107,112,92,0.3)",
                            boxShadow: "1px 1px 4px rgba(62,39,35,0.08)",
                          }}
                        >
                          {p.tag}
                        </span>
                      </div>
                    )}

                    {/* Dark gradient + info on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        borderRadius: "1.5rem",
                        background: "linear-gradient(to top, rgba(61,43,31,0.65) 0%, transparent 55%)",
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                      <p className="text-white font-semibold text-base leading-none">{p.price}</p>
                      <p className="text-white/70 text-xs mt-1 tracking-wide">{p.name}</p>
                    </div>
                  </div>

                  <p className="text-sm text-warm-900 font-medium leading-tight mb-0.5">{p.name}</p>
                  <p className="text-sm font-light mb-3" style={{ color: "#7A5C4A", fontFamily: "var(--font-sans)" }}>
                    {p.price}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center py-2 px-5 text-[10px] tracking-[0.15em] uppercase text-white bg-accent transition-all duration-300 hover:bg-accent-hover hover:px-6 hover:shadow-[0_6px_18px_rgba(168,93,68,0.35)]"
                    style={{ borderRadius: "999px" }}
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
