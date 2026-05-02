"use client";

import FadeIn from "./FadeIn";
import VintageImage from "./VintageImage";

const services = [
  { title: "Túi Xách", img: "/anh1.jpg" },
  { title: "Thú Bông", img: "/anh3.jpg" },
  { title: "Phụ Kiện", img: "/anh4.jpg" },
];

export default function FleurServices() {
  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-10"
      style={{ backgroundColor: "#F6F3EF" }}>
      <div className="max-w-360 mx-auto">

        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">Chúng tôi làm gì</p>
            <h2 className="font-serif font-semibold text-warm-900 text-4xl md:text-5xl">Dịch Vụ</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-3 gap-6 md:gap-8 xl:gap-12">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <a href="#contact" className="group flex flex-col items-center text-center cursor-pointer">

                <div className="w-full mb-4" style={{
                  borderRadius: "999px 999px 1rem 1rem",
                  overflow: "hidden",
                  aspectRatio: "4/7",
                  boxShadow: "0 8px 32px rgba(45,41,38,0.10)",
                }}>
                  <VintageImage
                    src={s.img}
                    alt={s.title}
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <h3 className="font-serif text-lg text-warm-900 font-semibold">{s.title}</h3>

              </a>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
