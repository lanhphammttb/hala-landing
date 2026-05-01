"use client";

const features = [
  { icon: "🧶", label: "Handmade", sub: "Tỉ mỉ" },
  { icon: "✨", label: "Sợi len", sub: "Chất lượng" },
  { icon: "🎨", label: "Đa dạng", sub: "Mẫu mã" },
  { icon: "🚚", label: "Giao hàng", sub: "Toàn quốc" },
];

export default function MiMiHero() {
  return (
    <section className="bg-gradient-to-b from-[#fff0f5] to-[#ffe8f0] pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Banner card */}
        <div className="relative rounded-3xl overflow-hidden bg-[#ffd6e5] border-2 border-[#f9b8cc] p-8 md:p-12 mb-8">
          {/* Decorative circles */}
          <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-[#ffb3c8]/40" />
          <div className="absolute bottom-6 right-20 w-16 h-16 rounded-full bg-[#ffc8d8]/50" />
          <div className="absolute top-10 left-[40%] w-12 h-12 rounded-full bg-white/30" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Left — text */}
            <div>
              {/* Tag */}
              <div className="inline-flex items-center gap-2 bg-[#e8547a] text-white rounded-2xl px-4 py-2 mb-5 shadow-sm">
                <span className="text-xs font-bold tracking-wide">MUA BÁN SẢN PHẨM</span>
                <span className="text-xs">TỪ LEN SỢI</span>
              </div>

              <h1
                className="text-4xl md:text-6xl mb-3 leading-tight"
                style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: "#c0304f" }}
              >
                mị mị mê len
              </h1>
              <p className="text-xs text-[#c06080] mb-6 tracking-wide">
                Móc nên yêu thương — Gửi trọn điều xinh ♥
              </p>

              <div className="flex gap-3">
                <a
                  href="#products"
                  className="px-6 py-2.5 rounded-full bg-[#e8547a] text-white text-xs font-medium hover:bg-[#d4436a] transition-colors shadow"
                >
                  Xem sản phẩm
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2.5 rounded-full border-2 border-[#e8547a] text-[#e8547a] text-xs font-medium hover:bg-[#e8547a] hover:text-white transition-all"
                >
                  Liên hệ ngay
                </a>
              </div>
            </div>

            {/* Right — rabbit illustration placeholder */}
            <div className="flex justify-center md:justify-end">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-[#ffb8cc]/40 flex items-center justify-center border-2 border-[#f9c4d0] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop"
                  alt="Len thủ công"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features row */}
        <div className="grid grid-cols-4 gap-3">
          {features.map((f) => (
            <div
              key={f.label}
              className="bg-white rounded-2xl p-4 flex flex-col items-center gap-1 border border-[#f9c4d0] shadow-sm"
            >
              <span className="text-2xl">{f.icon}</span>
              <span className="text-xs font-bold text-[#2c2420]">{f.label}</span>
              <span className="text-[10px] text-[#c06080]">{f.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
