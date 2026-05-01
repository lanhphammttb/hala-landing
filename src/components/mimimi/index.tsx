import MiMiNavbar from "./Navbar";
import MiMiHero from "./Hero";
import MiMiProducts from "./Products";
import MiMiRecruitment from "./Recruitment";
import MiMiCTA from "./CTA";

export default function MiMiTemplate() {
  return (
    <main className="min-h-screen font-sans bg-[#fff5f8] text-[#2c2420]">
      <MiMiNavbar />
      <MiMiHero />
      <MiMiProducts />
      <MiMiRecruitment />
      <MiMiCTA />
      <footer className="bg-[#e8547a] py-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-white/60 text-sm">♥</span>
          <span className="text-white/80 text-xs tracking-wide">
            Cùng móc nên những điều xinh xắn
          </span>
          <span className="text-white/60 text-sm">♥</span>
        </div>
        <p className="text-white/60 text-[10px]">
          &copy; {new Date().getFullYear()} Mị Mị Mê Len — Tất cả quyền được bảo lưu
        </p>
      </footer>
    </main>
  );
}
