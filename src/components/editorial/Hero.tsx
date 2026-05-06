"use client";

import { motion } from "framer-motion";
import VintageImage from "./VintageImage";

export default function EditorialHero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <VintageImage src="/anh2.jpg" alt="Lito Handmade Hero" className="scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center">
        <div className="text-center mb-10 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif italic font-bold text-white leading-[1.1]"
            style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
          >
            Độc Bản <span className="font-normal not-italic">&amp;</span> <br /> 
            <span className="text-[#C59D5F]">Bình Yên</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="#popular"
            className="bg-[#C59D5F] text-white px-12 py-4 text-[12px] uppercase tracking-[0.3em] font-black transition-all duration-300 shadow-2xl hover:scale-105 rounded-sm"
          >
            Mua ngay
          </a>
        </motion.div>
      </div>

      {/* Subtle Bottom Label */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40">
         <span className="text-white text-[10px] uppercase tracking-[0.4em]">Lito Handmade</span>
      </div>
    </section>
  );
}
