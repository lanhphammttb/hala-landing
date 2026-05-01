"use client";

import { Banknote, TrendingUp, Clock, Users, Check, Scissors } from "lucide-react";

const benefits = [
  { icon: Banknote, title: "Có cọc tiền", desc: "Ứng trước tiền len để bạn yên tâm sản xuất" },
  { icon: TrendingUp, title: "Thu nhập ổn định", desc: "Làm nhiều — nhận nhiều, không giới hạn" },
  { icon: Clock, title: "Thời gian linh hoạt", desc: "Chủ động giờ giấc, làm ngay tại nhà" },
  { icon: Users, title: "Hợp tác lâu dài", desc: "Đồng hành, hỗ trợ thợ tận tình" },
];

const requirements = [
  "Biết móc len cơ bản",
  "Cẩn thận, tỉ mỉ, có trách nhiệm",
  "Đúng tiến độ, đảm bảo chất lượng",
];

export default function MiMiRecruitment() {
  return (
    <section id="recruit" className="py-20 px-6 bg-[#FFE8F0]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-[#e8547a] text-white rounded-2xl px-6 py-3 shadow-md mb-5">
            <Scissors size={16} />
            <div className="text-left">
              <p className="text-sm font-bold tracking-wide">TUYỂN THỢ GIA CÔNG</p>
              <p className="text-[10px] opacity-80 tracking-[0.15em]">MÓC LEN HANDMADE</p>
            </div>
          </div>
          <p className="text-xs text-[#c0304f]">Có cọc tiền để lấy len về làm</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Benefits */}
          <div className="bg-white rounded-3xl p-8 border border-[#f5c6d8] shadow-sm">
            <h3 className="text-xs font-semibold text-[#e8547a] mb-6 text-center tracking-wide uppercase">
              Quyền lợi của bạn
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col gap-2 p-4 rounded-2xl bg-[#FFF8FB] border border-[#f5c6d8]">
                  <div className="w-8 h-8 rounded-full bg-[#FFE8F0] flex items-center justify-center">
                    <Icon size={14} className="text-[#e8547a]" />
                  </div>
                  <p className="text-xs font-bold text-[#c0304f]">{title}</p>
                  <p className="text-[10px] text-[#8b4460] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements + CTA */}
          <div className="bg-white rounded-3xl p-8 border border-[#f5c6d8] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-semibold text-[#e8547a] mb-6 text-center tracking-wide uppercase">
                Yêu cầu
              </h3>
              <ul className="space-y-4 mb-8">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-[#2c1a22]">
                    <div className="w-5 h-5 rounded-full bg-[#FFE8F0] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-[#e8547a]" />
                    </div>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <p className="text-[10px] text-[#8b4460] mb-5 italic leading-relaxed">
                Cùng Mị Mị Mê Len móc nên những điều xinh xắn — liên hệ ngay hôm nay
              </p>
              <a href="#contact"
                className="inline-block px-8 py-3 rounded-full bg-[#e8547a] text-white text-[10px] font-medium tracking-[0.2em] uppercase hover:bg-[#d4436a] transition-colors shadow-md">
                Liên hệ ngay
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
