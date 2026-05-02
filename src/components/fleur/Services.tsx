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
    <section id="services" className="py-20 md:py-28 px-6 md:px-12 xl:px-16 relative overflow-hidden" style={{ backgroundColor: "#FAF7F2" }}>
      {/* Background blob decoration */}
      <div className="absolute -left-32 top-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,197,176,0.25) 0%, transparent 70%)" }} />
      <div className="absolute -right-20 bottom-10 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(184,92,56,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto relative">

        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">Chúng tôi làm gì</p>
            <h2 className="font-serif font-semibold text-warm-900"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Dịch Vụ
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 xl:gap-16">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.12}>
              <div className="group flex flex-col items-center text-center">

                {/* Double-frame arch */}
                <div className="mb-7 w-full max-w-55 mx-auto">
                  {/* Outer gold frame */}
                  <div style={{
                    padding: "5px",
                    borderRadius: "999px 999px 1.25rem 1.25rem",
                    border: "1px solid rgba(180,140,60,0.45)",
                  }}>
                    {/* Inner arch */}
                    <div style={{
                      borderRadius: "999px 999px 1rem 1rem",
                      overflow: "hidden",
                      aspectRatio: "3/4",
                    }}>
                      <VintageImage
                        src={s.img}
                        alt={s.title}
                        className="group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Text on flat plane */}
                <h3 className="font-serif text-xl text-warm-900 font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-warm-700 leading-[1.7] mb-5 max-w-60">{s.description}</p>
                <a
                  href="#contact"
                  className="text-[10px] tracking-[0.2em] uppercase text-accent hover:text-accent-hover transition-colors"
                >
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
