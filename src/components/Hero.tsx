"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-rose-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight"
          >
            Trao gửi bình yên qua từng <span className="text-rose-400">mũi len</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Phụ kiện thủ công thiết kế riêng cho sắc độ da và phong cách cá tính của bạn.
            Chi tiết tỉ mỉ, chất lượng vĩnh cửu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 rounded-full font-medium transition-colors text-lg shadow-lg">
              Tìm sản phẩm của bạn
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
