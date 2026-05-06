"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

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
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 max-w-4xl mx-auto">
          {[
            { name: "Messenger", href: "https://m.me/litohandmade", customIcon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.903 1.446 5.49 3.713 7.194V21l2.538-1.394A10.62 10.62 0 0012 19.486c5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.007 12.435l-2.548-2.72-4.97 2.72 5.467-5.802 2.61 2.72 4.908-2.72-5.467 5.802z"/></svg> },
            { name: "Zalo", href: "https://zalo.me/0886251629", customIcon: <svg viewBox="0 0 48 48" fill="currentColor" className="w-5 h-5"><path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm-3.5 27.5H16v-15h4.5v15zm6 0h-4.5v-15H26c2.485 0 4.5 2.015 4.5 4.5v6c0 2.485-2.015 4.5-4.5 4.5zm0-4.5v-6c0-.277-.223-.5-.5-.5H26v7h-.5c-.277 0-.5-.223-.5-.5z"/></svg> },
            { name: "Facebook", href: "https://www.facebook.com/litohandmade", customIcon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
            { name: "TikTok", href: "https://www.tiktok.com/@lito_handmade", customIcon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.26 8.26 0 004.83 1.55V6.89a4.85 4.85 0 01-1.06-.2z"/></svg> },
            { name: "Gọi điện", href: "tel:+84886251629", icon: Phone },
            { name: "Email", href: "mailto:contact@litohandmade.com", icon: Mail },
          ].map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 group p-6 border border-white/5 hover:bg-white/5 transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent group-hover:text-white transition-all text-stone">
                {"customIcon" in item ? item.customIcon : item.icon ? <item.icon size={20} /> : null}
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
