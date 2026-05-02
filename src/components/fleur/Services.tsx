"use client";

import VintageImage from "./VintageImage";
import FadeIn from "./FadeIn";

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
    <section id="services" className="pt-16 pb-12 px-6 md:px-8" style={{ backgroundColor: "#F5F0EA" }}>
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#A07850] mb-3">Chúng tôi làm gì</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2A1A0E] font-semibold">
              Dịch Vụ
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1} className="flex flex-col">
              <article className="flex flex-col flex-1 group">
                <div
                  className="w-full overflow-hidden"
                  style={{ aspectRatio: "3 / 4", borderRadius: "999px 999px 0 0" }}
                >
                  <VintageImage src={s.img} alt={s.title}
                    className="group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div
                  className="px-6 pt-5 pb-7 flex flex-col flex-1 text-center border-x border-b border-[#C4A882]/30"
                  style={{ backgroundColor: "#EDE8E0" }}
                >
                  <h3 className="font-serif text-xl text-[#2A1A0E] font-normal italic mb-2">{s.title}</h3>
                  <p className="text-sm text-[#5C4433] leading-relaxed flex-1 mb-5">{s.description}</p>
                  <a href="#contact"
                    className="text-[10px] tracking-[0.2em] uppercase text-[#A07850] hover:text-[#2A1A0E] transition-colors">
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
