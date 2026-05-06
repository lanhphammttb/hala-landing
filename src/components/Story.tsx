"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, ShieldCheck } from "lucide-react";

export default function Story() {
  const features = [
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Làm bằng tình yêu",
      desc: "Mỗi sản phẩm đều được móc tay thủ công 100%, đòi hỏi sự tỉ mỉ và kiên nhẫn trong từng đường len."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-orange-400" />,
      title: "Thiết kế cá nhân hóa",
      desc: "Phối màu dựa trên sắc tố da và sở thích, giúp bạn sở hữu món quà độc bản không đụng hàng."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "Chất liệu cao cấp",
      desc: "Sử dụng dòng len cotton mềm mịn, ít xù lông, an toàn cho da và giữ form dáng lâu bền."
    }
  ];

  return (
    <section className="py-32 bg-rose-50/30 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-100/40 blur-3xl -z-10 rounded-l-full transform translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=800&auto=format&fit=crop"
                alt="Crafting process"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Floating Element */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl z-20 max-w-xs border border-gray-100 hidden md:block"
            >
              <div className="flex gap-2 text-rose-500 mb-2">
                ★★★★★
              </div>
              <p className="text-gray-600 text-sm font-medium italic">
                "Mọi chi tiết đều hoàn hảo, món quà ý nghĩa nhất mình từng mua tặng bản thân."
              </p>
              <p className="text-gray-900 text-xs font-bold mt-2">— Khách hàng Hương Ly</p>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-rose-500 uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-rose-500"></span>
                Về Lito Handmade
              </h2>
              <h3 className="text-4xl md:text-5xl/tight font-serif text-gray-900 mb-8">
                Tạo nên sự khác biệt từ những điều nhỏ nhất
              </h3>
              
              <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed mb-12">
                <p>
                  So với việc sản xuất hàng loạt công nghiệp, chúng mình lựa chọn đi chậm lại. Tại Lito Handmade, một chiếc túi có thể tốn vài ngày để hoàn thiện, nhưng đó là sự đầu tư xứng đáng cho chất lượng.
                </p>
              </div>

              <div className="flex flex-col gap-8">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-gray-900 font-medium mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 font-light leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
