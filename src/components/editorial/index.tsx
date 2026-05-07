"use client";

import { motion } from "framer-motion";
import { Camera, MessageSquare, Mail, MapPin, ArrowUp } from "lucide-react";
import FleurNavbar from "./Navbar";
import FleurHero from "./Hero";
import FleurServices from "./Services";
import FleurProductGrid from "./ProductGrid";
import FleurGiftIdeas from "./GiftIdeas";
import FleurCTA from "./CTA";

export default function EditorialTemplate() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <FleurNavbar />
      
      <main className="flex-grow">
        <FleurHero />
        <FleurServices />
        <FleurProductGrid />
        <FleurGiftIdeas />
        <FleurCTA />
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <img src="/icon_litohandmade.png" alt="LITO Handmade" className="h-10 object-contain mb-8" />
              <p className="text-stone/40 text-[13px] leading-relaxed mb-10 max-w-xs font-light">
                Nơi những sợi len mềm mại được dệt thành những câu chuyện riêng, mang lại sự bình yên và phong cách cho cuộc sống của bạn.
              </p>
              <div className="flex gap-6">
                <a href="#" aria-label="Instagram" className="text-stone/40 hover:text-accent transition-colors"><Camera size={20} /></a>
                <a href="#" aria-label="Zalo" className="text-stone/40 hover:text-accent transition-colors"><MessageSquare size={20} /></a>
                <a href="#" aria-label="Email" className="text-stone/40 hover:text-accent transition-colors"><Mail size={20} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-10">Khám phá</h4>
              <ul className="space-y-6">
                {["Dịch vụ", "Sản phẩm nổi bật", "Quà tặng", "Tư vấn thiết kế"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-stone/60 hover:text-white text-sm font-light transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-10">Thông tin</h4>
              <ul className="space-y-6">
                {["Chính sách bảo hành", "Vận chuyển & Đổi trả", "Câu hỏi thường gặp", "Về chúng tôi"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-stone/60 hover:text-white text-sm font-light transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-10">Bản Tin</h4>
              <p className="text-stone/40 text-[13px] font-light mb-8">Đăng ký để nhận thông tin về các bộ sưu tập mới nhất.</p>
              <div className="flex border-b border-stone/20 pb-2 group focus-within:border-accent transition-colors">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="bg-transparent border-none outline-none text-sm font-light w-full placeholder:text-stone/20"
                />
                <button className="text-stone/40 hover:text-accent transition-colors tracking-widest text-[10px] uppercase font-bold">Gửi</button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-stone/10 gap-8">
            <div className="flex items-center gap-2 text-stone/30 text-[11px] font-light tracking-wide uppercase">
              <MapPin size={14} strokeWidth={1} />
              <span>TP. Hồ Chí Minh, Việt Nam</span>
            </div>
            
            <p className="text-stone/30 text-[11px] font-light tracking-widest uppercase">
              © 2024 LITO HANDMADE. BẢN QUYỀN ĐÃ ĐƯỢC BẢO HỘ.
            </p>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-4 text-stone/30 hover:text-accent transition-colors"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Lên đầu trang</span>
              <div className="p-3 border border-stone/10 group-hover:border-accent transition-all rounded-full">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
