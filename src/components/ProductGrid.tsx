"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  tone: string;
  base_price: number;
  image: string;
};

export default function ProductGrid({
  userTone,
  initialProducts,
}: {
  userTone: string;
  initialProducts: Product[];
}) {
  const products = initialProducts || [];
  const loading = false;
  const filteredProducts = products.filter(p => userTone === "All" || p.tone === userTone);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-rose-500 uppercase mb-4">
            Thiết kế giới hạn
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 cursor-default">
            Bộ sưu tập Hala Handmade
          </h3>
          <div className="w-24 h-1 bg-rose-200 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-light leading-relaxed">
            Những tác phẩm độc bản từ len, được tạo ra bằng sự tỉ mỉ của đôi tay và mang theo câu chuyện của riêng bạn.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse flex flex-col gap-4">
                <div className="bg-gray-200 aspect-[4/5] rounded-[2rem] w-full"></div>
                <div className="bg-gray-200 h-6 w-3/4 rounded-md"></div>
                <div className="bg-gray-200 h-5 w-1/2 rounded-md"></div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={product.id}
                className="group cursor-pointer flex flex-col gap-4"
              >
                <Link
                  href={`/product/${product.id}`}
                  className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-100 shadow-sm border border-gray-100 group-hover:shadow-xl transition-all duration-500"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                      {product.tone === "Warm" ? "☀️ Warm Tone" : product.tone === "Cool" ? "❄️ Cool Tone" : "✨ All Tone"}
                    </div>
                  </div>

                  {/* Quick Add Button Overlay */}
                  <div className="absolute bottom-4 inset-x-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="flex items-center justify-center gap-2 bg-white/95 backdrop-blur text-gray-900 py-3 rounded-xl font-medium shadow-lg hover:bg-gray-900 hover:text-white transition-colors w-full">
                      <ShoppingBag className="w-4 h-4" />
                      Đặt hàng ngay
                    </span>
                  </div>
                </Link>

                <div className="px-2">
                  <h3 className="text-xl font-serif font-medium text-gray-900 group-hover:text-rose-500 transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.base_price)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500 bg-gray-50 rounded-3xl">
             <p className="text-xl mb-4 font-serif">Rất tiếc...</p>
             <p>Chưa có sản phẩm nào phù hợp với bộ lọc hiện tại.</p>
          </div>
        )}
      </div>
    </section>
  );
}
