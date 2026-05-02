"use client";

import { motion } from "framer-motion";
import VintageImage from "./VintageImage";

export default function FleurHero() {
  return (
    <section className="relative h-[100vh] min-h-[700px] overflow-hidden flex items-center justify-center">
      {/* Background with a more cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <VintageImage src="/anh2.jpg" alt="Hala Handmade Hero" className="scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 border border-white/20 backdrop-blur-md px-6 py-2 rounded-full"
        >
          <span className="text-white/80 text-[10px] uppercase tracking-[0.4em] font-medium">
            Thủ Công Bằng Cả Trái Tim từ 2024
          </span>
        </motion.div>

        {/* Main Headline - Using Fraunces for maximum impact */}
        <div className="text-center mb-10 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif italic font-bold text-white leading-[1.1] mb-6"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
          >
            Độc Bản <span className="font-normal not-italic">&amp;</span> <br /> 
            <span className="text-accent">Bình Yên</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto"
          >
            Phụ kiện móc len thiết kế riêng theo sắc độ da và phong cách cá tính của bạn.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <a
            href="#popular"
            className="bg-accent hover:bg-accent-dark text-white px-12 py-4 text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Khám phá ngay
          </a>
          <a
            href="#contact"
            className="text-white border-b border-white/30 hover:border-white px-4 py-2 text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300"
          >
            Tư vấn riêng
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </div>

      {/* Decorative vertical texts */}
      <div className="absolute left-8 bottom-24 hidden xl:block">
        <span className="text-white/20 text-[9px] uppercase tracking-[0.5em] rotate-[-90deg] origin-left whitespace-nowrap">
          Chế Tác Thủ Công Nghệ Thuật
        </span>
      </div>
      <div className="absolute right-8 bottom-24 hidden xl:block">
        <span className="text-white/20 text-[9px] uppercase tracking-[0.5em] rotate-[90deg] origin-right whitespace-nowrap">
          Những Tác Phẩm Độc Bản
        </span>
      </div>
    </section>
  );
}
