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
    <section id="services" className="py-16 md:py-24 px-6 md:px-10"
      style={{ backgroundColor: "#F6F3EF" }}>
      <div className="max-w-360 mx-auto">

        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">Chúng tôi làm gì</p>
            <h2 className="font-serif font-semibold text-warm-900 text-4xl md:text-5xl">Dịch Vụ</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="group flex flex-col items-center text-center">

                <div className="w-full mb-5" style={{
                  borderRadius: "999px 999px 1rem 1rem",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  boxShadow: "0 8px 32px rgba(45,41,38,0.10)",
                }}>
                  <VintageImage
                    src={s.img}
                    alt={s.title}
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <h3 className="font-serif text-xl text-warm-900 font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-warm-700 leading-relaxed mb-4">{s.description}</p>
                <a href="#contact" className="text-[10px] tracking-[0.2em] uppercase text-accent hover:text-accent-hover transition-colors">
                  Xem thêm →
                </a>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
