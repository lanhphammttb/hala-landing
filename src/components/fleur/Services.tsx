"use client";

import { ArrowRight } from "lucide-react";
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
      style={{ backgroundColor: "#F6F3EF" }}>

      {/* Full-bleed background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-48 top-1/4 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(205,191,172,0.2) 0%, transparent 65%)" }} />
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(142,90,68,0.06) 0%, transparent 70%)" }} />
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

        {/* Asymmetric: featured full-height, others stagger down */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 xl:gap-14 items-start">
          {services.map((s, i) => {
            const featured = i === 0;
            return (
              <FadeIn key={s.title} delay={i * 0.14}
                className={i > 0 ? "sm:mt-14 lg:mt-24" : ""}>
                <div className="group flex flex-col items-center text-center">

                  {/*
                    Frame-in-Frame arch:
                    - Outer: open-bottom border (partial frame, just top+sides)
                    - Inner image: translateY(-12px) to overflow the frame top — creates 3D depth
                  */}
                  <div className={`mb-6 mx-auto ${featured ? "w-full max-w-xs" : "w-3/4 sm:w-full max-w-52"}`}>
                    {/* Partial frame — open at bottom, corners only suggestion */}
                    <div style={{
                      position: "relative",
                      padding: "10px 10px 0 10px",
                      borderTop: "1px solid rgba(142,90,68,0.28)",
                      borderLeft: "1px solid rgba(142,90,68,0.28)",
                      borderRight: "1px solid rgba(142,90,68,0.28)",
                      borderBottom: "none",
                      borderRadius: "999px 999px 0 0",
                    }}>
                      {/* Image overflows slightly above the frame */}
                      <div style={{
                        borderRadius: "999px 999px 0.5rem 0.5rem",
                        overflow: "hidden",
                        aspectRatio: featured ? "4/5" : "3/4",
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.03), 0 8px 28px rgba(45,41,38,0.10)",
                        transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                        className="group-hover:[transform:translateY(-18px)] group-hover:[box-shadow:0_28px_50px_rgba(0,0,0,0.05),0_12px_32px_rgba(45,41,38,0.14)]"
                      >
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

                  {/* Arrow icon instead of text */}
                  <a href="#contact"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
                    style={{ transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}
                  >
                    <span className="h-px w-8 bg-current inline-block" />
                    <ArrowRight size={14} strokeWidth={1.5} />
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
