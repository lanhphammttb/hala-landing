"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ShoppingBag, ShieldCheck, Star } from "lucide-react";

type ProductDetail = {
  id: number;
  name: string;
  description: string;
  base_price: number;
  tags: string[];
  image: string;
  images: string[];
  tone: string;
  business_logo: string | null;
};

export default function ProductDetailClient({ product }: { product: ProductDetail }) {
  const router = useRouter();
  const [activeImage, setActiveImage] = useState<string>(product.images[0] || product.image);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-rose-200 selection:text-gray-900">
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Quay lại
          </button>

          <a href="/" className="text-2xl font-serif text-rose-500 font-bold tracking-tight">
            {product.business_logo ? (
              <img src={product.business_logo} alt="Lito Handmade Logo" className="h-10 object-contain" />
            ) : (
              <span>Lito Handmade</span>
            )}
          </a>

          <div className="hidden md:block w-24"></div>
        </div>
      </nav>

      <main className="pt-32 pb-24 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6 sticky top-32">
            <motion.div
              layoutId={`product-image-${product.id}`}
              className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-50 shadow-sm border border-gray-100"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </motion.div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                      activeImage === img ? "border-rose-500 shadow-md scale-105" : "border-transparent hover:border-gray-200"
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col pt-4 lg:pt-8 min-h-full">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-rose-50 text-rose-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide flex items-center gap-1">
                 <Star className="w-4 h-4 fill-current" /> Handmade
              </span>
              {product.tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              {product.name}
            </h1>

            <p className="text-3xl font-medium text-rose-500 mb-10">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.base_price)}
            </p>

            <div className="prose prose-lg text-gray-600 font-light mb-12">
              {product.description ? (
                <p className="whitespace-pre-line leading-relaxed">{product.description}</p>
              ) : (
                <p className="italic text-gray-400">Sản phẩm được làm thủ công tỉ mỉ bằng tình yêu thương và sự đam mê. Mỗi tác phẩm là một câu chuyện riêng mang dấu ấn độc bản...</p>
              )}
            </div>

            <hr className="border-gray-100 mb-10" />

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href="https://zalo.me/litohandmade"
                className="flex-1 bg-gray-900 text-white hover:bg-gray-800 py-5 px-8 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-xl shadow-gray-900/20"
              >
                <ShoppingBag className="w-6 h-6" /> Thiết kế riêng cho bạn
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
              <div className="flex gap-4 items-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-yellow-500">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Chất lượng cao</h4>
                  <p className="text-sm text-gray-500">Len nhập khẩu, an toàn cho da</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-emerald-500">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Độc bản 100%</h4>
                  <p className="text-sm text-gray-500">Được móc tay từng chi tiết</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
