"use client";

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
    <section id="popular" className="py-20 md:py-28 px-6 md:px-12 xl:px-16"
      style={{ backgroundColor: "#F0EBE4" }}>
      <div className="max-w-7xl mx-auto">

        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">Bộ sưu tập</p>
            <h2 className="font-serif font-semibold text-warm-900"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
              Sản Phẩm Nổi Bật
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5 xl:gap-6">
          {items.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.07}>
              <div className="group flex flex-col">
                <div
                  className="relative overflow-hidden mb-3"
                  style={{
                    aspectRatio: "3/4",
                    borderRadius: "1rem",
                    backgroundColor: "#E8E0D6",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.03)",
                  }}
                >
                  <VintageImage
                    src={p.img}
                    alt={p.name}
                    className="group-hover:scale-105 transition-transform duration-700"
                  />

                  {p.tag && (
                    <span
                      className="absolute top-3 left-3 text-[9px] tracking-[0.12em] uppercase px-2.5 py-1 font-medium"
                      style={{
                        backgroundColor: "#F6F3EF",
                        color: "#6B705C",
                        borderRadius: "0.3rem",
                        border: "1px solid rgba(107,112,92,0.3)",
                        boxShadow: "1px 1px 4px rgba(45,41,38,0.07)",
                      }}
                    >
                      {p.tag}
                    </span>
                  )}
                </div>

                <p className="text-sm font-light text-warm-900 leading-tight mb-0.5">{p.name}</p>
                <p className="font-serif text-sm font-medium text-accent mb-3">{p.price}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center py-2 px-5 text-[10px] tracking-[0.15em] uppercase text-white bg-accent hover:bg-accent-hover transition-all hover:shadow-[0_4px_14px_rgba(142,90,68,0.35)]"
                  style={{ borderRadius: "999px" }}
                >
                  Mua ngay
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
