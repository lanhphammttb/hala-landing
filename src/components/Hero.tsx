"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FAFAFA]">
      {/* Decorative background blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-rose-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-orange-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[20%] w-[30rem] h-[30rem] bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-20">
        
        {/* Text Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-sm font-medium mb-8"
          >
            <Star className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span>Được may thủ công 100% tại Việt Nam</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-serif text-gray-900 mb-6 leading-[1.1] text-balance"
          >
            Trao gửi bình yên qua từng <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 italic">mũi len</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 leading-relaxed font-light"
          >
            Định hình phong cách của bạn với những món phụ kiện thủ công tinh tế. 
            Được thiết kế độc bản dựa trên sắc độ da và cá tính riêng của bạn.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="#quiz" className="group flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>Tìm màu sắc của bạn</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#collection" className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 px-8 py-4 rounded-full font-medium transition-all text-lg shadow-sm hover:shadow">
              Xem bộ sưu tập
            </a>
          </motion.div>
        </div>

        {/* Image Grid Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Main Large Image */}
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl flex-shrink-0 z-10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <img 
               src="https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?q=80&w=800&auto=format&fit=crop" 
               alt="Handmade Bag" 
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
          </div>

          {/* Floating Small Images */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-[10%] right-[0%] lg:right-[-10%] w-48 aspect-square rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-white rotate-6 hidden sm:block"
          >
            <img 
               src="https://images.unsplash.com/photo-1544453086-444743c3d526?q=80&w=400&auto=format&fit=crop" 
               alt="Yarn Detail" 
               className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-[5%] left-[0%] lg:left-[-5%] w-56 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-white rotate-[-6deg] hidden sm:block bg-white p-2"
          >
            <img 
               src="https://images.unsplash.com/photo-1610486241372-acc653ea91bc?q=80&w=400&auto=format&fit=crop" 
               alt="Crafting Process" 
               className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
