"use client";

import { motion } from "framer-motion";
import { Link } from "lucide-react";

const products = [
  { id: 1, name: "Chậu Hoa Len Hồng Phấn", tone: "Cool", price: "150.000đ", image: "https://images.unsplash.com/photo-1544453086-444743c3d526?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Chậu Hoa Hướng Dương Len", tone: "Warm", price: "180.000đ", image: "https://images.unsplash.com/photo-1517457210191-881c10d37e5e?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Túi Len Đeo Chéo Nâu Đất", tone: "Warm", price: "350.000đ", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Băng Đô Len Xanh Xám", tone: "Cool", price: "80.000đ", image: "https://images.unsplash.com/photo-1587375225330-10abf62df302?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Móc Khoá Cún Bạc", tone: "Cool", price: "60.000đ", image: "https://images.unsplash.com/photo-1610486241372-acc653ea91bc?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "Set DIY Chậu Len Cam", tone: "Warm", price: "250.000đ", image: "https://plus.unsplash.com/premium_photo-1678120038891-0306eeebfed4?q=80&w=600&auto=format&fit=crop" },
  { id: 7, name: "Túi Tote Viền Xanh Rêu", tone: "Warm", price: "400.000đ", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=600&auto=format&fit=crop" },
  { id: 8, name: "Mũ Len Be Nhạt", tone: "Cool", price: "220.000đ", image: "https://images.unsplash.com/photo-1576424458514-633055d21a22?q=80&w=600&auto=format&fit=crop" },
];

export default function ProductGrid({ userTone }: { userTone: string }) {
  const filteredProducts = products.filter(p => userTone === "All" || p.tone === userTone);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-800 mb-4 cursor-default">
            Bộ sưu tập Hala Handmade
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Những thiết kế độc bản từ len, được tạo ra bằng sự tỉ mỉ của đôi tay.
          </p>
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={product.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-200 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
                  {product.tone === "Warm" ? "Warm" : "Cool"} Tone
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-rose-500 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-500">{product.price}</p>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            Không tìm thấy sản phẩm phù hợp.
          </div>
        )}

        <div className="mt-16 text-center">
          <button className="border border-rose-300 hover:border-rose-400 text-rose-500 hover:bg-rose-50 px-8 py-3 rounded-full font-medium transition-colors">
            Xem tất cả sản phẩm
          </button>
        </div>
      </div>
    </section>
  );
}
