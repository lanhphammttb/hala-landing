"use client";

import { MessageCircle, Send } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="bg-[#faf8f5] py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-32 h-32 rounded-full bg-[#e8ddd0] mx-auto mb-10 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=300&auto=format&fit=crop"
            alt="Staff"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="font-serif text-4xl md:text-5xl text-[#2c2420] mb-4">
          Nói Chuyện Với Chúng Tôi
        </h2>
        <p className="text-sm text-[#8b6f5e] leading-relaxed mb-10 max-w-md mx-auto">
          Khó chọn bó hoa? Hãy để nhân viên thân thiện của chúng tôi giúp bạn. Chúng tôi là
          những người thợ đam mê và tin rằng mỗi người đều xứng đáng có bó hoa của riêng mình.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://zalo.me"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-[#2c2420] text-white text-xs tracking-widest uppercase hover:bg-[#8b6f5e] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Zalo
          </a>
          <a
            href="https://m.me"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3 border border-[#2c2420] text-[#2c2420] text-xs tracking-widest uppercase hover:bg-[#2c2420] hover:text-white transition-colors"
          >
            <Send className="w-4 h-4" />
            Messenger
          </a>
        </div>
      </div>
    </section>
  );
}
