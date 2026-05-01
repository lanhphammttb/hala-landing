"use client";

import { MessageCircle, Send, Phone } from "lucide-react";

export default function MiMiCTA() {
  return (
    <section id="contact" className="bg-[#FFF8FB] py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">

        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-[#f5c6d8]" />
          <div className="w-2 h-2 rounded-full bg-[#f5c6d8]" />
          <div className="h-px w-12 bg-[#f5c6d8]" />
        </div>

        <p className="text-[9px] tracking-[0.35em] uppercase text-[#e8547a] mb-3">Liên hệ với chúng tôi</p>
        <h2 className="font-serif text-4xl md:text-5xl italic text-[#c0304f] mb-4">
          Nói Chuyện Với Mị
        </h2>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-10 bg-[#f5c6d8]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#f5c6d8]" />
          <div className="h-px w-10 bg-[#f5c6d8]" />
        </div>
        <p className="text-sm text-[#8b4460] mb-10 leading-relaxed max-w-sm mx-auto">
          Có câu hỏi về sản phẩm hoặc muốn đặt hàng riêng? Chúng tôi rất vui được giúp bạn tìm chiếc phụ kiện len ưng ý.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a href="https://zalo.me" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#e8547a] text-white text-[10px] tracking-[0.15em] uppercase hover:bg-[#d4436a] transition-colors shadow-md">
            <MessageCircle size={13} /> Zalo
          </a>
          <a href="https://m.me" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-[#e8547a] text-[#e8547a] text-[10px] tracking-[0.15em] uppercase hover:bg-[#e8547a] hover:text-white transition-all">
            <Send size={13} /> Messenger
          </a>
          <a href="tel:0000000000"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#FFE8F0] text-[#c0304f] text-[10px] tracking-[0.15em] uppercase hover:bg-[#f5c6d8] transition-colors border border-[#f5c6d8]">
            <Phone size={13} /> Gọi điện
          </a>
        </div>

        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="h-px w-12 bg-[#f5c6d8]" />
          <div className="w-2 h-2 rounded-full bg-[#f5c6d8]" />
          <div className="h-px w-12 bg-[#f5c6d8]" />
        </div>

      </div>
    </section>
  );
}
