"use client";

import FadeIn from "./FadeIn";
import VintageImage from "./VintageImage";

const services = [
  {
    title: "Túi Xách",
    description: "Chúng tôi tạo ra những chiếc túi móc len theo đúng màu sắc và phong cách bạn muốn.",
    img: "/anh1.jpg",
  },
  {
    title: "Thú Bông",
    description: "Thú bông móc tay dễ thương cho mọi dịp — quà tặng ý nghĩa, trang trí tinh tế.",
    img: "/anh3.jpg",
  },
  {
    title: "Phụ Kiện",
    description: "Nhận order bất kỳ phụ kiện len nào — từ mũ, khăn đến túi nhỏ theo yêu cầu.",
    img: "/anh4.jpg",
  },
];

export default function FleurServices() {
  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-12 xl:px-16" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-7xl mx-auto">

        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">Chúng tôi làm gì</p>
            <h2 className="font-serif text-4xl md:text-5xl text-warm-900 font-semibold">Dịch Vụ</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 xl:gap-8">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1} className="flex flex-col">
              <article
                className="flex flex-col flex-1 group overflow-hidden"
                style={{ borderRadius: "1.5rem", border: "1px solid #D4C5B0", backgroundColor: "#EDE8E0" }}
              >
                <div className="aspect-4/3 overflow-hidden shrink-0">
                  <VintageImage
                    src={s.img}
                    alt={s.title}
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-6 pt-5 pb-7 flex flex-col flex-1">
                  <h3 className="font-serif text-xl text-warm-900 font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-warm-700 leading-[1.7] flex-1 mb-5">{s.description}</p>
                  <a
                    href="#contact"
                    className="self-start text-[10px] tracking-[0.2em] uppercase text-accent hover:text-accent-hover transition-colors"
                  >
                    Xem thêm →
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
