"use client";

import { motion } from "framer-motion";
import VintageImage from "./VintageImage";

export default function FleurHero() {
  return (
    <section className="relative h-svh min-h-[600px] flex items-center justify-center bg-[#FAF7F2] overflow-hidden">
      {/* Warm Soft Glow */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#C59D5F]/5 to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full"
        >
          <span className="text-[#A56336] text-[12px] md:text-[14px] uppercase tracking-[0.4em] font-bold mb-6 block">Tiệm đồ len thủ công Hala</span>
          
          <h1 className="font-serif italic text-[#2C2420] text-6xl md:text-8xl lg:text-9xl leading-[1.1] mb-12 tracking-tight">
            Gói Ghém <br /> <span className="text-[#C59D5F]">Sự Ấm Áp</span>
          </h1>

          <div className="relative w-full max-w-4xl mx-auto mb-16 aspect-[16/7] rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white">
             <VintageImage 
               src="/vintage_crochet_hero_1777732976775.png" 
               alt="Hala Boutique" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/5" />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#popular"
              className="px-12 py-5 bg-[#2C2420] text-white text-[13px] uppercase tracking-[0.2em] font-bold rounded-full hover:bg-[#A56336] transition-all shadow-lg"
            >
              Xem bộ sưu tập
            </a>
            <a
              href="#gift"
              className="px-12 py-5 bg-white text-[#2C2420] text-[13px] uppercase tracking-[0.2em] font-bold rounded-full border border-[#2C2420]/10 hover:border-[#A56336] transition-all shadow-sm"
            >
              Đặt làm theo yêu cầu
            </a>
          </div>
        </motion.div>
      </div>

      {/* Soft Decorative Elements */}
      <div className="absolute bottom-10 left-10 opacity-20 hidden md:block">
         <div className="w-16 h-16 border-2 border-[#A56336] rounded-full border-dashed animate-spin-slow" />
      </div>
    </section>
  );
}
