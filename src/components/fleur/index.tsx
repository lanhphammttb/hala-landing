import FleurNavbar from "./Navbar";
import FleurHero from "./Hero";
import FleurServices from "./Services";
import FleurGiftIdeas from "./GiftIdeas";
import FleurProductGrid from "./ProductGrid";
import FleurCTA from "./CTA";

export default function FleurTemplate() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2A1F14]" style={{ fontFamily: "Inter, sans-serif" }}>
      <FleurNavbar />
      <div className="pt-14">
        <FleurHero />
      </div>
      <FleurServices />
      <FleurGiftIdeas />
      <FleurProductGrid />
      <FleurCTA />
      <footer className="bg-[#2A1F14] py-8 text-center">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#9B7B5E]">
          &copy; {new Date().getFullYear()} Hala Handmade — Tất cả quyền được bảo lưu
        </p>
      </footer>
    </main>
  );
}
