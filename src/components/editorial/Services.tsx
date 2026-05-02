"use client";

import { motion } from "framer-motion";
import VintageImage from "./VintageImage";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Thiết kế riêng",
    category: "Theo Yêu Cầu",
    description: "Móc tay hoàn toàn theo yêu cầu — từ màu sắc đến kích cỡ, phản ánh đúng cá tính của bạn.",
    img: "/anh1.jpg",
  },
  {
    title: "Thú Bông Len",
    category: "Bộ Sưu Tập",
    description: "Những người bạn nhỏ được móc tỉ mỉ, mang theo hơi ấm và sự bình yên cho mọi không gian.",
    img: "/anh3.jpg",
  },
  {
    title: "Phụ Kiện Cao Cấp",
    category: "Phụ Kiện",
    description: "Mũ, khăn, túi xách nhỏ — mỗi mũi kim đều là một sự cam kết về chất lượng và thẩm mỹ.",
    img: "/anh4.jpg",
  },
];

export default function FleurServices() {
  return (
    <section id="services" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent text-[11px] uppercase tracking-[0.4em] font-bold mb-6 block"
            >
              Nghệ Thuật Chế Tác
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif italic text-5xl md:text-6xl text-primary leading-tight"
            >
              Những gì <br /> chúng tôi tạo ra
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary/60 max-w-sm text-lg font-light leading-relaxed"
          >
            Mỗi sản phẩm là một hành trình của sự tỉ mỉ, nơi len sợi được dệt thành những kỷ niệm hữu hình.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone mb-8">
                <VintageImage
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                
                {/* Floating Category */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-white/50" />
                  <span className="text-white text-[9px] uppercase tracking-[0.3em] font-bold">{service.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-serif italic text-2xl text-primary mb-4 transition-colors group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="text-primary/60 text-sm leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-3 text-accent text-[10px] uppercase tracking-widest font-bold group-hover:gap-5 transition-all">
                    <span>Tìm hiểu thêm</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
