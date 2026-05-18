import VintageImage from "./VintageImage";

export default function FleurGiftIdeas() {
  return (
    <section id="gift" className="py-8 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          {/* Soft Rounded Visual */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl aspect-4/3">
              <VintageImage
                src="/anh4.jpg"
                alt="Quà tặng Lito"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <h2 className="font-serif italic text-3xl md:text-5xl text-[#2C2420] leading-none">
                 Quà Tặng <span className="text-[#C59D5F]">Handmade</span>
              </h2>
              <p className="text-sm md:text-base text-[#2C2420]/60 leading-relaxed font-light">
                 Thiết kế riêng theo yêu cầu của bạn, mang đậm dấu ấn cá nhân.
              </p>
              <div className="pt-2">
                <a href="#contact" className="inline-block px-10 py-3 bg-[#2C2420] text-white text-[12px] uppercase font-bold rounded-full hover:bg-[#A56336] transition-all">
                   Tư vấn ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
