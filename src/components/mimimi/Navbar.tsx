"use client";

export default function MiMiNavbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-[#f9c4d0] shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="text-lg" style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: "#e8547a" }}>
            mị mị mê len
          </span>
          <span className="text-pink-400 text-sm">♥</span>
        </div>

        {/* Nav */}
        <div className="hidden md:flex gap-8 text-xs font-medium text-[#c06080]">
          <a href="#products" className="hover:text-[#e8547a] transition-colors">Sản phẩm</a>
          <a href="#about" className="hover:text-[#e8547a] transition-colors">Về chúng tôi</a>
          <a href="#recruit" className="hover:text-[#e8547a] transition-colors">Tuyển dụng</a>
          <a href="#contact" className="hover:text-[#e8547a] transition-colors">Liên hệ</a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="px-5 py-2 rounded-full bg-[#e8547a] text-white text-xs font-medium hover:bg-[#d4436a] transition-colors shadow-sm"
        >
          Đặt hàng ♡
        </a>
      </div>
    </nav>
  );
}
