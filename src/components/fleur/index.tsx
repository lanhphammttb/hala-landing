"use client";

import { motion } from "framer-motion";
import { Camera, MessageSquare, Mail, MapPin, ArrowUp, Globe } from "lucide-react";
import FleurNavbar from "./Navbar";
import FleurHero from "./Hero";
import FleurServices from "./Services";
import FleurProductGrid from "./ProductGrid";
import FleurGiftIdeas from "./GiftIdeas";
import FleurCTA from "./CTA";

export default function FleurTemplate() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FDF9F3] selection:bg-[#C59D5F] selection:text-[#2C2420]">
      <FleurNavbar />
      
      <main className="flex-grow">
        <FleurHero />
        <FleurServices />
        <FleurProductGrid />
        <FleurGiftIdeas />
        <FleurCTA />
      </main>

      {/* Professional Sales Footer */}
      <footer className="bg-white border-t border-[#2C2420]/5 pt-24 pb-12 px-6 relative font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <span className="font-serif italic text-4xl font-bold mb-8 block text-[#2C2420]">
                LITO<span className="text-[#C59D5F]">.</span>
              </span>
              <p className="text-[#2C2420]/60 text-sm leading-relaxed mb-10 max-w-xs font-serif italic">
                “Tôn vinh nghệ thuật thủ công truyền thống qua những thiết kế len hiện đại và độc bản.”
              </p>
              <div className="flex gap-4">
                {[Globe, Camera, MessageSquare].map((Icon, i) => (
                   <a key={i} href="#" className="w-10 h-10 rounded-full border border-[#2C2420]/10 flex items-center justify-center text-[#2C2420] hover:bg-[#C59D5F] hover:text-white hover:border-[#C59D5F] transition-all">
                      <Icon size={18} strokeWidth={1.5} />
                   </a>
                ))}
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.4em] font-black text-[#C59D5F] mb-10">Cửa hàng</h4>
              <ul className="space-y-4">
                {["Tất cả sản phẩm", "Túi xách tay", "Phụ kiện len", "Thú len & Quà tặng", "Hàng mới về"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#2C2420]/60 hover:text-[#C59D5F] text-sm font-medium transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.4em] font-black text-[#C59D5F] mb-10">Hỗ trợ khách hàng</h4>
              <ul className="space-y-4">
                {["Hướng dẫn đặt hàng", "Chính sách vận chuyển", "Đổi trả & Hoàn tiền", "Chăm sóc sản phẩm len", "Liên hệ hỗ trợ"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#2C2420]/60 hover:text-[#C59D5F] text-sm font-medium transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.4em] font-black text-[#C59D5F] mb-10">Đăng ký nhận tin</h4>
              <p className="text-[#2C2420]/60 text-sm mb-8 leading-relaxed">Nhận thông báo sớm nhất về các bộ sưu tập giới hạn.</p>
              <div className="flex border-b border-[#2C2420]/10 pb-2 group focus-within:border-[#C59D5F] transition-colors">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="bg-transparent border-none outline-none text-sm w-full placeholder:text-[#2C2420]/20 text-[#2C2420]"
                />
                <button className="text-[#C59D5F] text-[10px] uppercase font-black tracking-widest">Gửi</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-[#2C2420]/5 gap-8">
            <div className="flex items-center gap-3 text-[#2C2420]/30 text-[10px] tracking-widest uppercase font-black">
               <MapPin size={14} strokeWidth={1.5} />
               <span>TP. Hồ Chí Minh, Việt Nam</span>
            </div>

            <p className="text-[#2C2420]/30 text-[10px] tracking-[0.2em] uppercase font-black">
              © 2024 LITO HANDMADE. BẢN QUYỀN ĐÃ ĐƯỢC BẢO HỘ.
            </p>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-4 text-[#2C2420]/30 hover:text-[#C59D5F] transition-colors"
            >
              <span className="text-[10px] uppercase tracking-widest font-black">Lên đầu trang</span>
              <div className="p-3 border border-[#2C2420]/5 group-hover:border-[#C59D5F] transition-all rounded-full">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
