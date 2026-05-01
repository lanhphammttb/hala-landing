"use client";

import VintageImage from "./VintageImage";
import FadeIn from "./FadeIn";

const services = [
  {
    title: "Túi Xách Móc Len",
    description: "Bạn có gu riêng? Chúng tôi tạo ra những chiếc túi móc len theo đúng màu sắc và phong cách bạn muốn.",
    img: "/anh1.jpg",
  },
  {
    title: "Thú Bông Handmade",
    description: "Thú bông móc tay dễ thương cho mọi dịp — quà tặng ý nghĩa, trang trí tinh tế.",
    img: "/anh3.jpg",
  },
  {
    title: "Phụ Kiện Theo Yêu Cầu",
    description: "Từ mũ, khăn đến vòng tay — chúng tôi nhận order bất kỳ phụ kiện len nào theo ý bạn.",
    img: "/anh4.jpg",
  },
];

export default function FleurServices() {
  return (
    <section id="services" className="py-20 px-8" style={{ backgroundColor: "#F5F0EA" }}>
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <FadeIn>
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-6 bg-[#A07850]" />
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#A07850]">Chúng tôi làm gì</p>
            <div className="h-px w-6 bg-[#A07850]" />
          </div>
          <h2 className="font-serif text-5xl text-[#2A1A0E] font-normal italic">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-px w-16 bg-[#C4A882]" />
            <span className="text-[#C4A882] text-xs">✦</span>
            <div className="h-px w-16 bg-[#C4A882]" />
          </div>
        </div>
        </FadeIn>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.12} className="flex flex-col">
            <article className="flex flex-col flex-1 group">

              {/* Arch — transparent so corners show section bg */}
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: "3 / 3.6", borderRadius: "999px 999px 0 0" }}
              >
                <VintageImage src={s.img} alt={s.title}
                  className="group-hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Text */}
              <div className="px-7 pt-6 pb-8 flex flex-col flex-1 text-center border-x border-b border-[#C4A882]/40"
                style={{ backgroundColor: "#EDE8E0" }}>
                <h3 className="font-serif text-xl text-[#2A1A0E] font-normal italic mb-3">{s.title}</h3>
                <p className="text-xs text-[#5C4433] leading-relaxed flex-1 mb-5">{s.description}</p>
                <div className="h-px w-8 bg-[#C4A882] mx-auto mb-3" />
                <a href="#contact"
                  className="text-[10px] tracking-[0.22em] uppercase text-[#2A1A0E] hover:text-[#A07850] transition-colors">
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
