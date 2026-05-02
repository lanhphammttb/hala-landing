import FleurNavbar from "./Navbar";
import FleurHero from "./Hero";
import CustomCursor from "./CustomCursor";
import FleurServices from "./Services";
import FleurProductGrid from "./ProductGrid";
import FleurGiftIdeas from "./GiftIdeas";
import FleurCTA from "./CTA";

export default function FleurTemplate() {
  return (
    <main className="min-h-screen bg-warm-50 text-[#2A1F14] relative">
      <CustomCursor />

      {/* Visual anchor line — thin spine running full page height, xl+ */}
      <div className="hidden xl:block fixed left-10 top-0 bottom-0 w-px pointer-events-none z-30"
        style={{ background: "linear-gradient(to bottom, transparent 5%, rgba(205,191,172,0.25) 20%, rgba(205,191,172,0.25) 80%, transparent 95%)" }} />

      {/* Sidebar decoration — only 2xl+ screens */}
      <div className="hidden 2xl:block fixed left-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none select-none">
        <p className="text-[9px] tracking-[0.4em] uppercase text-warm-300 font-light"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          Handmade with love
        </p>
      </div>
      <div className="hidden 2xl:block fixed right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none select-none">
        <p className="text-[9px] tracking-[0.4em] uppercase text-warm-300 font-light"
          style={{ writingMode: "vertical-rl" }}>
          Hala · Crochet Studio
        </p>
      </div>

      <FleurNavbar />
      <div className="pt-14">
        <FleurHero />
      </div>
      <FleurServices />
      <FleurProductGrid />
      <FleurGiftIdeas />
      <FleurCTA />

      <footer className="bg-[#2A1F14] px-6 md:px-12 xl:px-16 pt-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
            <div>
              <p className="font-serif text-2xl italic text-[#C4A882] mb-3">Hala</p>
              <p className="text-sm text-white/50 leading-[1.7]">
                Phụ kiện móc len thủ công độc bản.<br />
                Miễn phí giao hàng từ 500.000₫.
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-4">Khám phá</p>
              <ul className="space-y-2.5">
                {[["Dịch vụ", "#services"], ["Sản phẩm", "#popular"], ["Quà tặng", "#gift"], ["Liên hệ", "#contact"]].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-white/55 hover:text-[#C4A882] transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-4">Liên hệ</p>
              <ul className="space-y-2.5">
                <li className="text-sm text-white/55">Zalo / Messenger</li>
                <li className="text-sm text-white/55">halahandmade@gmail.com</li>
                <li>
                  <div className="flex gap-4 mt-1">
                    {["Instagram", "Facebook", "TikTok"].map((s) => (
                      <a key={s} href="#" className="text-[10px] tracking-[0.15em] text-white/35 hover:text-[#C4A882] transition-colors uppercase">{s}</a>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-[10px] tracking-[0.15em] uppercase text-white/25">
              &copy; {new Date().getFullYear()} Hala Handmade
            </p>
            <p className="text-[10px] text-white/25">Tất cả quyền được bảo lưu</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
