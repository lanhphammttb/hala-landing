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
    <section id="services" className="py-20 md:py-28 px-6 md:px-12 xl:px-16 relative overflow-hidden"
      style={{ backgroundColor: "#FBF9F4" }}>

      {/* Full-bleed background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-48 top-1/4 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,197,176,0.22) 0%, transparent 65%)" }} />
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(168,93,68,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto relative">

        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">Chúng tôi làm gì</p>
            <h2 className="font-serif font-semibold text-warm-900"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Dịch Vụ
            </h2>
          </div>
        </FadeIn>

        {/* Asymmetric: featured item full-height, others stagger down */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 xl:gap-14 items-start">
          {services.map((s, i) => {
            const featured = i === 0;
            return (
              <FadeIn key={s.title} delay={i * 0.14}
                className={i > 0 ? "sm:mt-14 lg:mt-24" : ""}>
                <div className="group flex flex-col items-center text-center">

                  {/* Offset frame arch — open at bottom */}
                  <div className={`mb-8 mx-auto ${featured ? "w-full max-w-xs" : "w-3/4 sm:w-full max-w-52"}`}>
                    <div style={{
                      padding: "12px",
                      borderTop: "1px solid rgba(168,93,68,0.3)",
                      borderLeft: "1px solid rgba(168,93,68,0.3)",
                      borderRight: "1px solid rgba(168,93,68,0.3)",
                      borderBottom: "none",
                      borderRadius: "999px 999px 0 0",
                    }}>
                      <div style={{
                        borderRadius: "999px 999px 0.5rem 0.5rem",
                        overflow: "hidden",
                        aspectRatio: featured ? "4/5" : "3/4",
                        boxShadow: "0 10px 40px rgba(62,39,35,0.10)",
                      }}>
                        <VintageImage
                          src={s.img}
                          alt={s.title}
                          className="group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className={`font-serif text-warm-900 font-semibold mb-2 ${featured ? "text-2xl" : "text-lg"}`}>
                    {s.title}
                  </h3>
                  <p className="text-sm text-warm-700 leading-[1.7] mb-5 max-w-60">{s.description}</p>
                  <a href="#contact"
                    className="text-[10px] tracking-[0.2em] uppercase text-accent hover:text-accent-hover transition-colors">
                    Xem thêm →
                  </a>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
