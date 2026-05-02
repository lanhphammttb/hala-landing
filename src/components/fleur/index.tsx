import FleurNavbar from "./Navbar";
import FleurHero from "./Hero";
import CustomCursor from "./CustomCursor";
import FleurServices from "./Services";
import FleurProductGrid from "./ProductGrid";
import FleurGiftIdeas from "./GiftIdeas";
import FleurCTA from "./CTA";

/* Minimal SVG social icons */
function IconIG() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconFB() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconTT() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export default function FleurTemplate() {
  return (
    <main className="min-h-screen bg-warm-50 text-warm-900">
      <CustomCursor />
      <FleurNavbar />
      <div className="pt-14">
        <FleurHero />
      </div>
      <FleurServices />
      <FleurProductGrid />
      <FleurGiftIdeas />
      <FleurCTA />

      <footer className="px-6 md:px-10 pt-12 pb-8" style={{ backgroundColor: "#2D2926" }}>
        <div className="max-w-360 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">

            <div>
              <p className="font-serif text-xl italic text-[#C4A882] mb-3">Hala</p>
              <p className="text-sm text-white/50 leading-relaxed">
                Phụ kiện móc len thủ công độc bản.<br />
                Miễn phí giao hàng từ 500.000₫.
              </p>
              {/* Social icon buttons */}
              <div className="flex gap-3 mt-5">
                {[
                  { label: "Instagram", icon: <IconIG /> },
                  { label: "Facebook", icon: <IconFB /> },
                  { label: "TikTok", icon: <IconTT /> },
                ].map(({ label, icon }) => (
                  <a key={label} href="#" aria-label={label}
                    className="w-8 h-8 flex items-center justify-center rounded-full text-white/40 hover:text-[#C4A882] transition-colors"
                    style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
                    {icon}
                  </a>
                ))}
              </div>
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
              </ul>
            </div>

          </div>
          <div className="pt-6 flex items-center justify-between">
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
