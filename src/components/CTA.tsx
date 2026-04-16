"use client";

import { motion } from "framer-motion";
import { MessageCircle, Send, Gift } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-gray-900 z-10" id="cta">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-rose-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[40rem] h-[40rem] bg-orange-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-rose-500/10 rounded-full mb-8">
            <Gift className="w-8 h-8 text-rose-400" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Sẵn sàng tìm món phụ kiện <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 italic">hoàn hảo cho riêng bạn?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
            Hala Handmade đang nhận đặt các mẫu thiết kế riêng với số lượng giới hạn tháng này. Hãy trò chuyện với chúng mình để biến ý tưởng của bạn thành hiện thực.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://zalo.me"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-blue-500/25 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Tư vấn qua Zalo</span>
            </a>
            
            <a
              href="https://m.me/halahandmade"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 w-full sm:w-auto group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>Nhắn tin Messenger</span>
            </a>
          </div>
          
          <p className="mt-8 text-sm text-gray-500">
            * Thời gian hoàn thiện sản phẩm thủ công từ 3-7 ngày tùy độ phức tạp.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
