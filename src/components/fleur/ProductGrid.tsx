"use client";

import FadeIn from "./FadeIn";
import ArchFrame from "./ArchFrame";

const items = [
  { id: 1, img: "/anh1.jpg", name: "Túi xách mini", price: "280.000₫" },
  { id: 2, img: "/anh3.jpg", name: "Túi dây rút", price: "320.000₫" },
  { id: 3, img: "/anh5.jpg", name: "Móc chìa khóa", price: "90.000₫" },
  { id: 4, img: "/anh6.jpg", name: "Hoa len trang trí", price: "120.000₫" },
];

export default function FleurProductGrid() {
  return (
    <section id="popular" className="py-20 md:py-28 px-6 md:px-12 xl:px-16" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-7xl mx-auto">

        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">Bộ sưu tập</p>
            <h2 className="font-serif text-4xl md:text-5xl text-warm-900 font-semibold">
              Sản Phẩm Nổi Bật
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 xl:gap-10">
          {items.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.08}>
              <div className="group cursor-pointer">
                <ArchFrame src={p.img} alt={p.name} ratio="1/1" hoverScale />
                <div className="pt-3 pb-1">
                  <p className="text-sm text-warm-900 font-medium leading-tight">{p.name}</p>
                  <p className="text-sm text-accent font-medium mt-0.5">{p.price}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
