"use client";

export default function GiftIdeas() {
  return (
    <section id="gift" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-xs tracking-widest uppercase text-[#8b6f5e] mb-3">
            Nhớ mãi người thân yêu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2c2420] mb-6 leading-tight">
            Quà Tặng Lưu Giữ Mãi Mãi
          </h2>
          <p className="text-sm text-[#8b6f5e] leading-relaxed mb-8 max-w-md">
            Ai mà không yêu thích hoa? Dù tặng hay nhận, điểm hạn chế duy nhất của hoa tươi
            là tuổi thọ ngắn ngủi. Chúng tôi đam mê tạo ra những bó hoa không chỉ đẹp mà
            còn bền lâu. Hoa khô cao cấp của chúng tôi có thể tồn tại nhiều năm. Hãy liên hệ
            để tìm hiểu thêm về bó hoa hoàn hảo của bạn.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#2c2420] text-white text-xs tracking-widest uppercase hover:bg-[#8b6f5e] transition-colors"
          >
            Tư vấn ngay
          </a>
        </div>

        {/* Circular image */}
        <div className="flex justify-center">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=700&auto=format&fit=crop"
              alt="Gift bouquet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
