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
            <h2 className="font-serif text-5xl md:text-6xl xl:text-7xl text-warm-900 font-semibold leading-tight">
              Sản Phẩm Nổi Bật
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5 xl:gap-6">
          {items.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.06}>
              <div className="group flex flex-col">
                <div
                  className="overflow-hidden mb-3 relative"
                  style={{ aspectRatio: "3/4", borderRadius: "1.5rem", backgroundColor: "#EDE8E0" }}
                >
                  <VintageImage
                    src={p.img}
                    alt={p.name}
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-sm text-warm-900 font-medium leading-tight mb-0.5">{p.name}</p>
                <p className="text-sm text-accent font-semibold mb-3">{p.price}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center py-2 px-4 text-[10px] tracking-[0.15em] uppercase text-white bg-accent hover:bg-accent-hover transition-colors"
                  style={{ borderRadius: "0.75rem" }}
                >
                  Mua Ngay
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
