"use client";

import { MessageCircle, Send } from "lucide-react";
import FadeIn from "./FadeIn";

export default function FleurCTA() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-10"
      style={{ backgroundColor: "#F6F3EF" }}>
      <FadeIn>
        <div className="max-w-md mx-auto text-center">

          <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-4">Liên hệ</p>

          <h2 className="font-serif font-semibold text-warm-900 text-4xl md:text-5xl leading-snug mb-4">
            Nói Chuyện<br />Với Chúng Tôi
          </h2>

          <div className="h-px w-10 bg-warm-300 mx-auto mb-6" />

          <p className="text-sm text-warm-700 leading-relaxed mb-8 max-w-xs mx-auto">
            Để chúng tôi tư vấn và giúp bạn tìm chiếc phụ kiện len hoàn hảo.
          </p>

          <div className="flex justify-center gap-3">
            <a href="https://zalo.me" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-[10px] tracking-[0.2em] uppercase transition-all hover:bg-accent-hover hover:shadow-[0_4px_16px_rgba(142,90,68,0.35)]">
              <MessageCircle size={12} strokeWidth={1.5} /> Zalo
            </a>
            <a href="https://m.me" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent text-accent text-[10px] tracking-[0.2em] uppercase transition-all hover:bg-accent hover:text-white hover:shadow-[0_4px_16px_rgba(142,90,68,0.25)]">
              <Send size={12} strokeWidth={1.5} /> Messenger
            </a>
          </div>

        </div>
      </FadeIn>
    </section>
  );
}
