"use client";

const categories = [
  {
    label: "Nón người lớn – trẻ em",
    img: "https://images.unsplash.com/photo-1600002415506-dd06090d3480?q=80&w=400&auto=format&fit=crop",
    emoji: "🧢",
  },
  {
    label: "Áo khoác – Áo choàng",
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=400&auto=format&fit=crop",
    emoji: "🧥",
  },
  {
    label: "Thú bông",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop",
    emoji: "🐻",
  },
  {
    label: "Hoa len",
    img: "https://images.unsplash.com/photo-1490750967868-88df5691cc28?q=80&w=400&auto=format&fit=crop",
    emoji: "🌸",
  },
  {
    label: "Và nhiều sản phẩm khác từ len sợi",
    img: "https://images.unsplash.com/photo-1562630186-b60a5e4d48c4?q=80&w=400&auto=format&fit=crop",
    emoji: "✨",
  },
];

export default function MiMiProducts() {
  return (
    <section id="products" className="bg-[#fff5f8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-pink-300">♥</span>
            <span className="text-xs tracking-widest uppercase text-[#e8547a] font-medium">
              Sản phẩm từ len sợi
            </span>
            <span className="text-pink-300">♥</span>
          </div>
          <h2
            className="text-3xl md:text-4xl text-[#c0304f]"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            Bộ Sưu Tập
          </h2>
        </div>

        {/* Grid — 5 items, last one spans if odd */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((c, i) => (
            <div
              key={c.label}
              className={`group cursor-pointer rounded-2xl overflow-hidden bg-white border-2 border-[#f9c4d0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={c.img}
                  alt={c.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 text-center">
                <span className="text-sm mb-1 block">{c.emoji}</span>
                <p className="text-[10px] font-medium text-[#c0304f] leading-tight">{c.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 bg-[#ffd6e5] rounded-full px-6 py-2 border border-[#f9b8cc]">
            <span className="text-pink-400 text-xs">✦</span>
            <span className="text-xs text-[#c0304f] font-medium">
              Mẫu mã đa dạng — Nhận order theo yêu cầu — Quà tặng ý nghĩa cho mọi dịp
            </span>
            <span className="text-pink-400 text-xs">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
