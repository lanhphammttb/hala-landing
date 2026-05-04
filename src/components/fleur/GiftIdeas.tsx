"use client";

import { motion } from "framer-motion";
import VintageImage from "./VintageImage";

export default function FleurGiftIdeas() {
  return (
    <section id="gift" className="py-8 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          {/* Soft Rounded Visual */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl z-10"
            >
              <VintageImage src="/anh4.jpg" alt="Quà tặng Hala" className="w-full aspect-[4/3] object-cover" />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif italic text-3xl md:text-5xl text-[#2C2420] leading-none">
                 Quà Tặng <span className="text-[#C59D5F]">Handmade</span>
              </h2>
              <p className="text-sm md:text-base text-[#2C2420]/60 leading-relaxed font-light">
                 Thiết kế riêng theo yêu cầu của bạn, mang đậm dấu ấn cá nhân.
              </p>
              <div className="pt-2">
                <button className="px-10 py-3 bg-[#2C2420] text-white text-[12px] uppercase font-bold rounded-full hover:bg-[#A56336] transition-all">
                   Tư vấn ngay
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
