"use client";

import { motion } from "framer-motion";
import VintageImage from "./VintageImage";

export default function FleurGiftIdeas() {
  return (
    <section id="gift" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone/20 -skew-x-12 translate-x-1/2" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 md:gap-32">
        {/* Left: Image with a layered frame */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 aspect-[4/5] md:aspect-square overflow-hidden shadow-2xl"
          >
            <VintageImage src="/anh4.jpg" alt="LITO Handmade Gift Ideas" />
          </motion.div>
          
          {/* Decorative floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-10 -right-10 w-48 h-48 border border-accent/30 hidden md:block"
          />
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/5 hidden md:block" />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-[11px] uppercase tracking-[0.4em] font-bold mb-8 block">
              Khoảnh Khắc Đáng Nhớ
            </span>
            <h2 className="font-serif italic text-5xl md:text-7xl text-primary leading-[1.1] mb-10">
              Quà tặng <br /> <span className="not-italic text-accent">lưu giữ</span> <br /> mãi mãi
            </h2>
            
            <div className="w-16 h-[1px] bg-primary/20 mb-10" />

            <div className="space-y-6 mb-12">
              <p className="text-primary/70 text-lg font-light leading-relaxed">
                Khác với hoa tươi chóng tàn, những món quà từ len sợi của Lito mang theo sự bền bỉ của thời gian. Mỗi mũi kim là một lời nhắn nhủ, một sự trân trọng gửi trao đến người thân yêu.
              </p>
              <p className="text-primary/70 text-lg font-light leading-relaxed">
                Chúng tôi tin rằng món quà ý nghĩa nhất là món quà mang đậm dấu ấn cá nhân và được thực hiện bằng cả trái tim.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <a
                href="#contact"
                className="bg-primary text-white px-10 py-4 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-accent transition-all duration-300"
              >
                Nhận tư vấn ngay
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-accent" />
                <span className="text-primary/40 text-[10px] uppercase tracking-widest italic">
                  Chăm sóc tận tâm
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background large text */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
        <span className="text-[20vw] font-serif italic font-bold text-primary whitespace-nowrap uppercase">
          Vĩnh Cửu
        </span>
      </div>
    </section>
  );
}
