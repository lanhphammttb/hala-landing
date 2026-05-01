import MiMiNavbar from "./Navbar";
import MiMiHero from "./Hero";
import MiMiProducts from "./Products";
import MiMiRecruitment from "./Recruitment";
import MiMiCTA from "./CTA";
import { Heart } from "lucide-react";

export default function MiMiTemplate() {
  return (
    <main className="min-h-screen font-sans bg-[#FFF8FB] text-[#2c1a22]">
      <MiMiNavbar />
      <MiMiHero />
      <MiMiProducts />
      <MiMiRecruitment />
      <MiMiCTA />
      <footer className="bg-[#e8547a] py-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart size={12} className="text-white/60 fill-white/60" />
          <span className="text-white/80 text-xs tracking-wide">
            Cùng móc nên những điều xinh xắn
          </span>
          <Heart size={12} className="text-white/60 fill-white/60" />
        </div>
        <p className="text-white/50 text-[10px] tracking-wide">
          &copy; {new Date().getFullYear()} Mị Mị Mê Len — Tất cả quyền được bảo lưu
        </p>
      </footer>
    </main>
  );
}
