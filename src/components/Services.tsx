"use client";

const services = [
  {
    title: "Bó Hoa Theo Yêu Cầu",
    description:
      "Bạn có khẩu vị riêng? Chúng tôi tạo ra những bó hoa khô theo đúng phong cách và màu sắc bạn muốn.",
    img: "https://images.unsplash.com/photo-1490750967868-88df5691cc28?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Hoa Dịp Đặc Biệt",
    description:
      "Hoa yêu thích cho ngày đặc biệt của bạn — trang trí hoàn hảo cho sự kiện tiếp theo.",
    img: "https://images.unsplash.com/photo-1487530811015-780aecb71c39?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Bó Hoa Làm Sẵn",
    description:
      "Những người thợ của chúng tôi tạo ra những bó hoa khô đẹp nhất từ những loài hoa được chọn lọc kỹ càng.",
    img: "https://images.unsplash.com/photo-1562630186-b60a5e4d48c4?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f5f0e8] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs tracking-widest uppercase text-[#8b6f5e] mb-3">
          Chúng tôi làm gì
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-center text-[#2c2420] mb-16">
          Dịch Vụ Của Chúng Tôi
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-[#faf8f5] flex flex-col">
              {/* Arch image */}
              <div
                className="w-full overflow-hidden"
                style={{ borderRadius: "50% 50% 0 0 / 40% 40% 0 0" }}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl text-[#2c2420] mb-3">{s.title}</h3>
                <p className="text-sm text-[#8b6f5e] leading-relaxed mb-6 flex-1">
                  {s.description}
                </p>
                <a
                  href="#contact"
                  className="text-xs tracking-widest uppercase text-[#2c2420] font-medium underline underline-offset-4 hover:text-[#8b6f5e] transition-colors w-fit"
                >
                  Xem thêm
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
