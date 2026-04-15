"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="py-24 bg-rose-50/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=800&auto=format&fit=crop"
                alt="Crafting process"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-8">
                <p className="text-white text-xl font-medium leading-relaxed">
                  "Mỗi mũi đan là một câu chuyện riêng."
                </p>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-rose-500 uppercase mb-4">
                Câu Chuyện Hala
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8 leading-tight">
                Không chỉ là một món phụ kiện
              </h3>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Tại Hala Handmade, chúng tôi tin rằng những vật dụng thân thuộc nhất cũng xứng đáng được tạo ra bằng tình yêu và sự tỉ mỉ tuyệt đối.
                </p>
                <p>
                  Khác với những sản phẩm công nghiệp sản xuất hàng loạt, mỗi chiếc túi len, băng đô hay chậu hoa tại Hala là kết tinh từ hàng giờ đồng hồ đan lát của những thợ thủ công lành nghề.
                </p>
                <p>
                  Chúng tôi không chạy theo số lượng. Chúng tôi trau chuốt từng đường len để mỗi món quà bạn nhận được hay trao đi đều mang một linh hồn và giá trị riêng biệt.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
