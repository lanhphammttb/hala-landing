"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 blur-xl">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-400 rounded-full mix-blend-multiply filter" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8 leading-tight">
            Sẵn sàng tìm món đồ thủ công hoàn hảo?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Liên hệ với Hala Handmade để nhận tư vấn trực tiếp và gửi gắm những yêu thương.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://zalo.me"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto overflow-hidden group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Chat Zalo</span>
            </a>

            <a
              href="https://m.me/halahandmade"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto group"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Nhắn tin Messenger</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
