"use client";

import { motion } from "framer-motion";
import { Heart, Plus } from "lucide-react";

const products = [
  { id: 1, img: "/anh1.jpg", name: "Túi xách mini Crochet", price: "280.000₫", label: "Mới Về" },
  { id: 2, img: "/anh2.jpg", name: "Túi Tote Len Bespoke", price: "350.000₫", label: "" },
  { id: 3, img: "/anh3.jpg", name: "Túi dây rút họa tiết", price: "320.000₫", label: "Nổi Bật" },
  { id: 4, img: "/anh4.jpg", name: "Túi hoa Crochet 3D", price: "290.000₫", label: "" },
  { id: 5, img: "/anh5.jpg", name: "Móc chìa khóa Amigurumi", price: "90.000₫", label: "" },
  { id: 6, img: "/anh6.jpg", name: "Hoa len trang trí nội thất", price: "120.000₫", label: "Bền Vững" },
];

export default function FleurProductGrid() {
  return (
    <section id="popular" className="py-32 px-6 bg-stone/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sage text-[11px] uppercase tracking-[0.5em] font-bold mb-6 block"
          >
            Tuyển Tập Chọn Lọc
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-serif italic text-5xl md:text-7xl text-primary mb-12"
          >
            Bộ sưu tập mới
          </motion.h2>
          <div className="w-20 h-[2px] bg-accent mx-auto" />
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative mb-8 overflow-hidden aspect-[4/5] bg-background shadow-sm transition-all duration-500 hover:shadow-2xl">
                {/* Product Image */}
                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  style={{ filter: "sepia(5%) brightness(1.02)" }}
                />
                
                {/* Product Label */}
                {product.label && (
                  <div className="absolute top-6 left-6 bg-accent px-4 py-1.5">
                    <span className="text-white text-[9px] uppercase tracking-widest font-bold">
                      {product.label}
                    </span>
                  </div>
                )}

                {/* Wishlist Button */}
                <button className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-primary">
                  <Heart size={16} />
                </button>

                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-deep-brown/80 to-transparent">
                  <button className="w-full bg-white text-primary py-4 text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-3 hover:bg-accent hover:text-white transition-colors">
                    <Plus size={16} />
                    <span>Thêm vào giỏ</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-end">
                <div className="flex-1">
                  <h3 className="font-sans text-[13px] text-primary/80 uppercase tracking-widest font-semibold mb-2 truncate">
                    {product.name}
                  </h3>
                  <p className="font-serif italic text-2xl text-primary">
                    {product.price}
                  </p>
                </div>
                <div className="h-px flex-1 bg-stone mx-4 mb-3" />
                <button className="text-accent hover:text-primary transition-colors text-[10px] uppercase tracking-widest font-bold mb-1">
                  Chi Tiết
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-32 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-6 group"
          >
            <span className="text-primary text-[11px] uppercase tracking-[0.4em] font-bold border-b border-primary/20 pb-2 transition-all group-hover:border-accent group-hover:text-accent">
              Xem toàn bộ cửa hàng
            </span>
            <div className="w-12 h-px bg-primary/20 group-hover:bg-accent group-hover:w-20 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}
