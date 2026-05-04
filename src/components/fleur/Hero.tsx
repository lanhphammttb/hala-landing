"use client";

import { motion } from "framer-motion";
import VintageImage from "./VintageImage";

export default function FleurHero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center bg-[#FAF7F2] overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full"
        >
          <h1 className="font-serif italic text-[#2C2420] text-4xl md:text-6xl leading-[1.2] mb-8 tracking-tight">
            Đồ Len <span className="text-[#C59D5F]">Handmade</span>
          </h1>

          <div className="relative w-full max-w-2xl mx-auto mb-10 aspect-[16/7] rounded-xl overflow-hidden shadow-md">
             <VintageImage 
               src="/vintage_crochet_hero_1777732976775.png" 
               alt="Hala Boutique" 
               className="w-full h-full object-cover"
             />
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="#popular"
              className="px-8 py-3 bg-[#2C2420] text-white text-[12px] uppercase font-bold rounded-full hover:bg-[#A56336] transition-all"
            >
              Cửa hàng
            </a>
            <a
              href="#gift"
              className="px-8 py-3 bg-white text-[#2C2420] text-[12px] uppercase font-bold rounded-full border border-[#2C2420]/10 transition-all"
            >
              Đặt làm
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
