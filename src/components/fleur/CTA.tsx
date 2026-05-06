"use client";

import { motion } from "framer-motion";
import { MessageCircle, Send, Phone } from "lucide-react";

export default function FleurCTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#2C2420] text-white text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif italic text-6xl md:text-[8rem] leading-none mb-12 tracking-tighter"
        >
          Liên hệ với <span className="text-[#C59D5F]">Lito</span>
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {[
            { name: "Messenger", icon: Send, href: "https://m.me" },
            { name: "Zalo", icon: MessageCircle, href: "https://zalo.me" },
            { name: "Gọi điện", icon: Phone, href: "tel:#" },
          ].map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-[#C59D5F] group-hover:bg-[#C59D5F] group-hover:text-[#2C2420] transition-all">
                <item.icon size={20} />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-white transition-colors">{item.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
