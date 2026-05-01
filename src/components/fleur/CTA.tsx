"use client";

import { MessageCircle, Send } from "lucide-react";
import FadeIn from "./FadeIn";

export default function FleurCTA() {
  return (
    <section id="contact" style={{ backgroundColor: "#F5F0EA", paddingBottom: 0 }}>
      {/* Wide flat dome */}
      <div
        className="w-full text-center px-6"
        style={{
          backgroundColor: "#D4B896",
          borderRadius: "50% 50% 0 0 / 12% 12% 0 0",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <FadeIn>
        <div className="max-w-lg mx-auto">
          <p className="text-[9px] tracking-[0.35em] uppercase text-[#2A1A0E]/50 mb-5">Liên hệ với chúng tôi</p>

          <h2 className="font-serif text-4xl md:text-5xl text-[#2A1A0E] font-normal italic mb-5">
            Nói Chuyện Với Chúng Tôi
          </h2>

          <div className="h-px w-16 bg-[#2A1A0E]/20 mx-auto mb-7" />

          <p className="text-sm text-[#3D2B1F] leading-relaxed mb-9 max-w-sm mx-auto">
            Khó chọn sản phẩm? Để nhân viên thân thiện của chúng tôi giúp bạn
            tìm chiếc phụ kiện len hoàn hảo cho mọi dịp.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="https://zalo.me" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-[10px] tracking-[0.2em] uppercase transition-colors"
              style={{ backgroundColor: "#2A1A0E", color: "#F2EAE0" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#7A5535"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#2A1A0E"; }}>
              <MessageCircle size={13} /> Zalo
            </a>
            <a href="https://m.me" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-[10px] tracking-[0.2em] uppercase border transition-colors"
              style={{ borderColor: "#2A1A0E", color: "#2A1A0E" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "#2A1A0E";
                el.style.color = "#F2EAE0";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "transparent";
                el.style.color = "#2A1A0E";
              }}>
              <Send size={13} /> Messenger
            </a>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
