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
    <section id="popular" className="py-20 md:py-28 px-6 md:px-10"
      style={{ backgroundColor: "#F0EBE4" }}>
      <div className="max-w-360 mx-auto">

        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">Bộ sưu tập</p>
            <h2 className="font-serif font-semibold text-warm-900 text-4xl md:text-5xl">
              Sản Phẩm Nổi Bật
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {items.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.06}>
              <div className="group flex flex-col">

                {/* Image */}
                <div className="relative overflow-hidden mb-4"
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
                </div>

                {/* Info */}
                <p className="text-sm text-warm-900 font-medium mb-1 leading-tight">{p.name}</p>
                <p className="font-serif text-sm text-accent font-semibold mb-3">{p.price}</p>
                <a href="#contact"
                  className="inline-flex items-center justify-center py-2 px-4 text-[10px] tracking-[0.15em] uppercase text-white bg-accent hover:bg-accent-hover transition-colors"
                  style={{ borderRadius: "999px" }}>
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
