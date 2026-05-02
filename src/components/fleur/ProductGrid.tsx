"use client";


import VintageImage from "./VintageImage";
import FadeIn from "./FadeIn";

const items = [
  { id: 1, img: "/anh1.jpg", name: "Túi xách mini", price: "280.000₫" },
  { id: 2, img: "/anh3.jpg", name: "Túi dây rút", price: "320.000₫" },
  { id: 3, img: "/anh5.jpg", name: "Móc chìa khóa", price: "90.000₫" },
  { id: 4, img: "/anh6.jpg", name: "Hoa len trang trí", price: "120.000₫" },
];

export default function FleurProductGrid() {
  return (
    <section id="popular" className="py-16 md:py-20 px-6 md:px-8" style={{ backgroundColor: "#F5F0EA" }}>
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#A07850] mb-3">Bộ sưu tập</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2A1A0E] font-semibold">
              Sản Phẩm Nổi Bật
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {items.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.08}>
              <div className="group">
                <div
                  className="aspect-square overflow-hidden mb-2.5 relative cursor-pointer"
                  style={{ backgroundColor: "#E8E0D5" }}
                >
                  <VintageImage
                    src={p.img}
                    alt=""
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#2A1A0E]/0 group-hover:bg-[#2A1A0E]/10 transition-colors duration-300 pointer-events-none" />
                </div>
                <div className="mt-2.5">
                  <p className="text-xs text-[#2A1A0E] font-medium leading-tight">{p.name}</p>
                  <p className="text-[11px] text-[#A07850] mt-0.5">{p.price}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
