"use client";

import FadeIn from "./FadeIn";
import VintageImage from "./VintageImage";

const services = [
  {
    title: "Túi Xách",
    sub: "Móc tay theo yêu cầu — màu sắc và phong cách của bạn.",
    img: "/anh1.jpg",
  },
  {
    title: "Thú Bông",
    sub: "Quà tặng dễ thương, ý nghĩa cho mọi dịp.",
    img: "/anh3.jpg",
  },
  {
    title: "Phụ Kiện",
    sub: "Mũ, khăn, túi nhỏ — nhận order bất kỳ.",
    img: "/anh4.jpg",
  },
];

export default function FleurServices() {
  return (
    <section id="services" className="py-16 md:py-20 px-6 md:px-10"
      style={{ backgroundColor: "#F6F3EF" }}>
      <div className="max-w-360 mx-auto">

        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent mb-3 font-sans">Chúng tôi làm gì</p>
            <h2 className="font-serif font-medium text-warm-900" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>Dịch Vụ</h2>
          </div>
        </FadeIn>

        {/* Responsive: 1 col mobile → 2 col sm → 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <a href="#contact" className="group flex flex-col items-center text-center">

                {/* Arch with gold border frame */}
                <div className="w-full mb-4" style={{
                  padding: "4px",
                  borderRadius: "999px 999px 1rem 1rem",
                  border: "1px solid rgba(180,140,60,0.45)",
                }}>
                  <div style={{
                    borderRadius: "999px 999px 0.75rem 0.75rem",
                    overflow: "hidden",
                    aspectRatio: "3/4",
                    boxShadow: "0 6px 24px rgba(45,41,38,0.09)",
                  }}>
                    <VintageImage
                      src={s.img}
                      alt={s.title}
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <h3 className="font-serif text-lg text-warm-900 font-semibold mb-1">{s.title}</h3>
                <p className="text-xs text-warm-700 leading-relaxed max-w-52">{s.sub}</p>

              </a>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
