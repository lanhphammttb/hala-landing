"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
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

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    async function fetchDetail() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
        const res = await fetch(`${apiUrl}/public/products/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
          setActiveImage(data.images[0] || data.image);
        }
      } catch (error) {
        console.error("Failed to fetch product details", error);
      } finally {
        setLoading(false);
      }
    }
    if (params.id) fetchDetail();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-serif mb-4">Sản phẩm không tồn tại</h2>
        <p className="text-gray-500 mb-8">Có thể sản phẩm đã bị xóa hoặc ngưng kinh doanh.</p>
        <button
          onClick={() => router.back()}
          className="text-rose-500 font-medium flex items-center gap-2 hover:bg-rose-50 px-6 py-3 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Trở về trang chủ
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-rose-200 selection:text-gray-900">
      {/* Navigation (Simple) */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Quay lại
          </button>

          <div className="text-2xl font-serif text-rose-500 font-bold tracking-tight">
            {product.business_logo ? (
              <img src={product.business_logo} alt="Hala Handmade Logo" className="h-10 object-contain cursor-pointer" onClick={() => router.push('/')} />
            ) : (
              <span className="cursor-pointer" onClick={() => router.push('/')}>Hala Handmade</span>
            )}
          </div>

          <div className="hidden md:block w-24"></div> {/* spacer */}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-24 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Images Section */}
          <div className="flex flex-col gap-6 sticky top-32">
            {/* Main Image */}
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

            {/* Thumbnails Gallery */}
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
                    <img src={img} alt={`Thumbnail ${idx+1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="flex flex-col pt-4 lg:pt-8 min-h-full">
            {/* Badges/Tags */}
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

            {/* Description */}
            <div className="prose prose-lg text-gray-600 font-light mb-12">
              {product.description ? (
                <p className="whitespace-pre-line leading-relaxed">{product.description}</p>
              ) : (
                <p className="italic text-gray-400">Sản phẩm được làm thủ công tỉ mỉ bằng tình yêu thương và sự đam mê. Mỗi tác phẩm là một câu chuyện riêng mang dấu ấn độc bản...</p>
              )}
            </div>

            <hr className="border-gray-100 mb-10" />

            {/* Add to cart / Action */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <button
                onClick={() => {
                  window.location.href = `https://zalo.me/halahandmade`; // Example redirect
                }}
                className="flex-1 bg-gray-900 text-white hover:bg-gray-800 py-5 px-8 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-xl shadow-gray-900/20"
              >
                <ShoppingBag className="w-6 h-6" /> Thiết kế riêng cho bạn
              </button>
            </div>

            {/* Trust points */}
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
