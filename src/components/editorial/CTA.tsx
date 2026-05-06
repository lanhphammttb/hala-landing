"use client";

import { motion } from "framer-motion";
import { MessageCircle, Send, Phone, Camera } from "lucide-react";

export default function FleurCTA() {
  return (
    <section id="contact" className="py-40 px-6 bg-deep-brown relative overflow-hidden">
      {/* Decorative dots background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 inline-block"
        >
          <div className="w-24 h-24 rounded-full border-2 border-accent/30 p-2">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=300&auto=format&fit=crop"
              alt="LITO Handmade Founder"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent text-[11px] uppercase tracking-[0.6em] font-bold mb-8 block"
        >
          Get in touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif italic text-5xl md:text-7xl text-white mb-10 leading-[1.2]"
        >
          Hãy để chúng tôi <br /> lắng nghe <span className="text-accent">bạn</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-stone/60 text-lg md:text-xl font-light leading-relaxed mb-16 max-w-xl mx-auto"
        >
          Dù là một yêu cầu đặc biệt hay chỉ đơn giản là muốn tìm hiểu thêm, chúng tôi luôn sẵn sàng trò chuyện và biến ý tưởng của bạn thành hiện thực.
        </motion.p>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
          {[
            { name: "Zalo", icon: MessageCircle, href: "https://zalo.me" },
            { name: "Messenger", icon: Send, href: "https://m.me" },
            { name: "Instagram", icon: Camera, href: "#" },
            { name: "Phone", icon: Phone, href: "tel:#" },
          ].map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 group p-6 border border-white/5 hover:bg-white/5 transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent group-hover:text-white transition-all text-stone">
                <item.icon size={20} />
              </div>
              <span className="text-white/60 text-[10px] uppercase tracking-widest font-semibold group-hover:text-white">
                {item.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
