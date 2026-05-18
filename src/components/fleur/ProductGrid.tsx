import { Heart } from "lucide-react";
import Image from "next/image";

const products = [
  { id: 1, img: "/anh1.jpg", name: "Túi Xách Mini Xinh", price: "280.000₫", tag: "Mới" },
  { id: 2, img: "/anh2.jpg", name: "Túi Tote Len Mềm", price: "450.000₫", tag: "Hot" },
  { id: 3, img: "/anh3.jpg", name: "Túi Dây Rút Thêu", price: "320.000₫", tag: "Đặc biệt" },
  { id: 4, img: "/anh4.jpg", name: "Mũ Nồi Len Đáng Yêu", price: "220.000₫", tag: "Sẵn có" },
  { id: 5, img: "/anh5.jpg", name: "Thú Len Handmade", price: "95.000₫", tag: "Mới" },
  { id: 6, img: "/anh6.jpg", name: "Bó Hoa Len Trang Trí", price: "150.000₫", tag: "Quà tặng" },
];

export default function FleurProductGrid() {
  return (
    <section id="popular" className="bg-white px-5 py-8 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-serif italic text-3xl md:text-4xl text-[#2C2420]">
            Sản phẩm <span className="text-[#C59D5F]">Nổi bật</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-3 md:gap-10">
          {products.map((p) => (
            <div
              key={p.id}
              className="group cursor-pointer"
            >
              <div className="relative mb-3 aspect-square overflow-hidden rounded-[1.25rem] bg-[#FAF7F2] shadow-sm transition-all duration-500 group-hover:shadow-xl sm:mb-5 sm:rounded-[1.5rem]">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  quality={72}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                   <span className="bg-white/90 backdrop-blur-md text-[#A56336] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      {p.tag}
                   </span>
                </div>
                {/* Friendly Heart Button */}
                <a href="#gift" aria-label="Yêu thích" className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#2C2420]/20 hover:text-red-400 transition-colors">
                   <Heart size={16} />
                </a>
              </div>

              <div className="text-center">
                <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-[15px] font-medium leading-[1.25] text-[#2C2420] transition-colors group-hover:text-[#A56336] sm:text-lg md:text-xl">
                  {p.name}
                </h3>
                <p className="mt-0.5 text-base font-bold leading-tight text-[#A56336] sm:mt-1 sm:text-lg">{p.price}</p>
                <a href="#contact" className="mt-4 inline-block px-6 py-2 bg-[#2C2420] text-white text-[10px] uppercase font-bold rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                   Thêm vào giỏ
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#contact" className="inline-block px-10 py-3 bg-[#FAF7F2] text-[#2C2420] text-[11px] uppercase tracking-widest font-bold rounded-full hover:bg-[#2C2420] hover:text-white transition-all">
             Xem tất cả
          </a>
        </div>
      </div>
    </section>
  );
}
