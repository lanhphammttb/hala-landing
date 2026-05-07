"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";

const products = [
  { id: 1, img: "/anh1.jpg", name: "Túi Xách Mini Xinh", price: "280.000₫", tag: "Mới" },
  { id: 2, img: "/anh2.jpg", name: "Túi Tote Len Mềm", price: "450.000₫", tag: "Hot" },
  { id: 3, img: "/anh3.jpg", name: "Túi Dây Rút Thêu", price: "320.000₫", tag: "Đặc biệt" },
  { id: 4, img: "/anh4.jpg", name: "Mũ Nồi Len Đáng Yêu", price: "220.000₫", tag: "Sẵn có" },
  { id: 5, img: "/anh5.jpg", name: "Thú Len Handmade", price: "95.000₫", tag: "Mới" },
  { id: 6, img: "/anh6.jpg", name: "Bó Hoa Len Trang Trí", price: "150.000₫", tag: "Quà tặng" },
];

export default function FleurProductGrid() {
  return (
    <section id="popular" className="py-8 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif italic text-3xl md:text-4xl text-[#2C2420]"
          >
            Sản phẩm <span className="text-[#C59D5F]">Nổi bật</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-5 aspect-square rounded-[1.5rem] overflow-hidden bg-[#FAF7F2] shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                   <span className="bg-white/90 backdrop-blur-md text-[#A56336] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      {p.tag}
                   </span>
                </div>
                {/* Friendly Heart Button */}
                <button aria-label="Yêu thích" className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#2C2420]/20 hover:text-red-400 transition-colors">
                   <Heart size={16} />
                </button>
              </div>

              <div className="text-center">
                <h3 className="text-lg md:text-xl font-medium text-[#2C2420] mb-1 group-hover:text-[#A56336] transition-colors">
                  {p.name}
                </h3>
                <p className="font-bold text-[#A56336] text-lg">{p.price}</p>
                <button className="mt-4 px-6 py-2 bg-[#2C2420] text-white text-[10px] uppercase font-bold rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                   Thêm vào giỏ
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-10 py-3 bg-[#FAF7F2] text-[#2C2420] text-[11px] uppercase tracking-widest font-bold rounded-full hover:bg-[#2C2420] hover:text-white transition-all">
             Xem tất cả
          </button>
        </div>
      </div>
    </section>
  );
}
