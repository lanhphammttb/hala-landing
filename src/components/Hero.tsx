"use client";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1600&auto=format&fit=crop"
        alt="Dried flowers"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#2c2420]/30" />

      {/* Social icons — left */}
      <div className="absolute left-6 bottom-10 hidden md:flex flex-col gap-4 text-white/70 text-xs tracking-widest uppercase">
        <a href="#" className="hover:text-white transition-colors">Ig</a>
        <a href="#" className="hover:text-white transition-colors">Fb</a>
        <a href="#" className="hover:text-white transition-colors">Tt</a>
      </div>

      {/* Collection label — right */}
      <div className="absolute right-8 bottom-10 hidden md:flex items-center gap-2 text-white/80 text-xs tracking-widest uppercase">
        <span>Bộ sưu tập hoa khô</span>
        <span>→</span>
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-4">
          Hoa Khô Thủ Công Độc Bản
        </h1>
        <p className="text-base md:text-lg text-white/80 mb-8 font-light tracking-wide">
          Miễn phí vận chuyển cho đơn hàng trên 500.000₫
        </p>
        <a
          href="#popular"
          className="inline-block px-10 py-3 border border-white text-white text-xs tracking-widest uppercase hover:bg-white hover:text-[#2c2420] transition-all"
        >
          Mua ngay
        </a>
      </div>
    </section>
  );
}
