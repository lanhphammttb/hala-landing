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
    <section id="popular" className="py-16 px-6 bg-stone/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-serif italic text-4xl md:text-6xl text-primary mb-8"
          >
            Sản phẩm <span className="text-accent">Mới về</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-accent mx-auto" />
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-12">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden aspect-[4/5] bg-background rounded-sm">
                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                <button className="absolute inset-x-0 bottom-0 w-full bg-accent text-white py-4 text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Thêm vào giỏ
                </button>
              </div>

              <div className="text-center">
                <h3 className="font-sans text-[11px] text-primary/60 uppercase tracking-widest font-semibold mb-1">
                  {product.name}
                </h3>
                <p className="font-serif italic text-xl text-primary">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-4 group"
          >
            <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold border-b border-primary/10 pb-2 transition-all hover:border-accent">
              Xem tất cả
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
