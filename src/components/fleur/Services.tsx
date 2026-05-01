"use client";

import VintageImage from "./VintageImage";

const services = [
  {
    title: "Túi Xách Móc Len",
    description: "Bạn có gu riêng? Chúng tôi tạo ra những chiếc túi móc len theo đúng màu sắc và phong cách bạn muốn.",
    img: "https://images.unsplash.com/photo-1490750967868-88df5691cc28?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Thú Bông Handmade",
    description: "Thú bông móc tay dễ thương cho mọi dịp — quà tặng ý nghĩa, trang trí tinh tế.",
    img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Phụ Kiện Theo Yêu Cầu",
    description: "Từ mũ, khăn đến vòng tay — chúng tôi nhận order bất kỳ phụ kiện len nào theo ý bạn.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
  },
];

export default function FleurServices() {
  return (
    <section id="services" className="py-20 px-8" style={{ backgroundColor: "#EDE4D8" }}>
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
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

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {services.map((s) => (
            <article key={s.title} className="flex flex-col group">

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
                style={{ backgroundColor: "#D8CCBC" }}>
                <h3 className="font-serif text-xl text-[#2A1A0E] font-normal italic mb-3">{s.title}</h3>
                <p className="text-xs text-[#5C4433] leading-relaxed flex-1 mb-5">{s.description}</p>
                <div className="h-px w-8 bg-[#C4A882] mx-auto mb-3" />
                <a href="#contact"
                  className="text-[10px] tracking-[0.22em] uppercase text-[#2A1A0E] hover:text-[#A07850] transition-colors">
                  Xem thêm →
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
