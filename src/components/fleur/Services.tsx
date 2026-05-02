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
    <section id="services" className="py-20 md:py-28 px-6 md:px-12 xl:px-16"
      style={{ backgroundColor: "#F6F3EF" }}>
      <div className="max-w-7xl mx-auto">

        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="font-serif font-semibold text-warm-900"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Dịch Vụ
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 xl:gap-14">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.12}>
              <div className="group flex flex-col items-center text-center">

                {/* Arch image */}
                <div className="mb-6 w-full max-w-52 mx-auto">
                  <div style={{
                    borderRadius: "999px 999px 1rem 1rem",
                    overflow: "hidden",
                    aspectRatio: "3/4",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.03), 0 6px 20px rgba(45,41,38,0.08)",
                  }}>
                    <VintageImage
                      src={s.img}
                      alt={s.title}
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <h3 className="font-serif text-xl text-warm-900 font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-warm-700 leading-[1.7] mb-4 max-w-60">{s.description}</p>
                <div className="h-px w-6 bg-warm-300" />

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
