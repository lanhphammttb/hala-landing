"use client";

import FadeIn from "./FadeIn";
import ArchFrame from "./ArchFrame";

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
    <section id="services" className="py-20 md:py-28 px-6 md:px-8" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">Chúng tôi làm gì</p>
            <h2 className="font-serif text-4xl md:text-5xl text-warm-900 font-semibold">
              Dịch Vụ
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1} className="flex flex-col">
              <article className="flex flex-col flex-1 group">

                <ArchFrame src={s.img} alt={s.title} ratio="3/4" hoverScale />

                <div
                  className="px-6 pt-5 pb-7 flex flex-col flex-1 text-center"
                  style={{
                    backgroundColor: "#EDE8E0",
                    borderRadius: "0 0 16px 16px",
                    border: "1px solid #D4C5B0",
                    borderTop: "none",
                  }}
                >
                  <h3 className="font-serif text-xl text-warm-900 font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-warm-700 leading-[1.7] flex-1 mb-5">{s.description}</p>
                  <a
                    href="#contact"
                    className="text-[10px] tracking-[0.2em] uppercase text-accent hover:text-accent-hover transition-colors"
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
