"use client";

import { motion } from "framer-motion";
import VintageImage from "./VintageImage";

export default function FleurGiftIdeas() {
  return (
    <section id="gift" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          {/* Soft Rounded Visual */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10"
            >
              <VintageImage src="/anh4.jpg" alt="Quà tặng Hala" className="w-full aspect-[4/5] object-cover" />
            </motion.div>
            {/* Decorative Shadow Blur */}
            <div className="absolute inset-0 bg-[#C59D5F]/10 blur-[100px] -z-10 rounded-full" />
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block px-6 py-2 bg-[#FAF7F2] text-[#A56336] rounded-full text-[11px] font-bold uppercase tracking-widest">
                 Dịch vụ thiết kế riêng
              </div>
              <h2 className="font-serif italic text-6xl md:text-7xl text-[#2C2420] leading-none">
                 Món Quà <br /> <span className="text-[#C59D5F]">Từ Trái Tim</span>
              </h2>
              <p className="text-lg md:text-xl text-[#2C2420]/60 leading-relaxed font-light italic">
                 “Bạn có thể chọn màu len, kiểu dáng và thêu tên riêng để tạo nên một món quà độc bản dành tặng người thương.”
              </p>
              <div className="pt-6">
                <button className="px-16 py-5 bg-[#2C2420] text-white text-[13px] uppercase tracking-[0.2em] font-bold rounded-full hover:bg-[#A56336] transition-all shadow-xl">
                   Nhận tư vấn ngay
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
