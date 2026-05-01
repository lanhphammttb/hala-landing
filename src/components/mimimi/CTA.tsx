"use client";

import { MessageCircle, Send, Phone } from "lucide-react";

export default function MiMiCTA() {
  return (
    <section id="contact" className="bg-[#fff5f8] py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Heart divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-px bg-[#f9c4d0]" />
          <span className="text-pink-300 text-lg">♥</span>
          <div className="w-12 h-px bg-[#f9c4d0]" />
        </div>

        <h2
          className="text-3xl md:text-4xl text-[#c0304f] mb-3"
          style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
        >
          Liên Hệ Với Chúng Tôi
        </h2>
        <p className="text-xs text-[#c06080] mb-8 leading-relaxed">
          Có câu hỏi về sản phẩm hoặc muốn đặt hàng riêng? Chúng tôi rất vui được giúp bạn!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="https://zalo.me"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#e8547a] text-white text-xs font-medium hover:bg-[#d4436a] transition-colors shadow"
          >
            <MessageCircle className="w-4 h-4" />
            Chat Zalo ♡
          </a>
          <a
            href="https://m.me"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-full border-2 border-[#e8547a] text-[#e8547a] text-xs font-medium hover:bg-[#e8547a] hover:text-white transition-all"
          >
            <Send className="w-4 h-4" />
            Messenger
          </a>
          <a
            href="tel:0000000000"
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#ffd6e5] text-[#c0304f] text-xs font-medium hover:bg-[#ffb8cc] transition-colors border border-[#f9b8cc]"
          >
            <Phone className="w-4 h-4" />
            Gọi điện
          </a>
        </div>

        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="w-12 h-px bg-[#f9c4d0]" />
          <span className="text-pink-300 text-lg">♥</span>
          <div className="w-12 h-px bg-[#f9c4d0]" />
        </div>
      </div>
    </section>
  );
}
