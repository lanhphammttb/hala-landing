"use client";

const benefits = [
  { icon: "💰", title: "Có cọc tiền", desc: "để lấy len về làm" },
  { icon: "📈", title: "Thu nhập ổn định", desc: "Làm nhiều — nhận nhiều" },
  { icon: "⏰", title: "Thời gian linh hoạt", desc: "Chủ động thời gian, làm tại nhà" },
  { icon: "🤝", title: "Hợp tác lâu dài", desc: "Hỗ trợ, đồng hành cùng thợ" },
];

const requirements = [
  "Biết móc len cơ bản",
  "Cẩn thận, tỉ mỉ, có trách nhiệm",
  "Đúng tiến độ, đảm bảo chất lượng",
];

export default function MiMiRecruitment() {
  return (
    <section id="recruit" className="py-16 px-6 bg-gradient-to-br from-[#ffd6e5] to-[#ffb8cc]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-[#e8547a] text-white rounded-2xl px-6 py-3 shadow-md mb-4">
            <span className="text-lg">🧶</span>
            <div className="text-left">
              <p className="text-sm font-bold tracking-wide">TUYỂN THỢ GIA CÔNG</p>
              <p className="text-xs opacity-90">MÓC LEN</p>
            </div>
            <span className="text-lg">🧶</span>
          </div>
          <p className="text-xs text-[#c0304f] font-medium">
            Có cọc tiền để lấy len về làm
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Benefits */}
          <div className="bg-white/80 rounded-3xl p-8 border-2 border-[#f9b8cc] backdrop-blur-sm">
            <h3 className="text-lg font-bold text-[#e8547a] mb-6 text-center">
              Quyền lợi của bạn ♥
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#fff0f5] border border-[#f9c4d0]">
                  <span className="text-2xl mb-2">{b.icon}</span>
                  <p className="text-xs font-bold text-[#c0304f] mb-1">{b.title}</p>
                  <p className="text-[10px] text-[#c06080] leading-tight">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements + CTA */}
          <div className="bg-white/80 rounded-3xl p-8 border-2 border-[#f9b8cc] backdrop-blur-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#e8547a] mb-6 text-center">
                Yêu cầu ✨
              </h3>
              <ul className="space-y-3 mb-8">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-[#2c2420]">
                    <span className="text-pink-400 mt-0.5">♥</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <p className="text-xs text-[#c06080] mb-4 italic">
                Cùng "Mị Mị Mê Len" móc nên những điều xinh xắn ♥
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3 rounded-full bg-[#e8547a] text-white text-xs font-bold tracking-wide hover:bg-[#d4436a] transition-colors shadow-md"
              >
                LIÊN HỆ NGAY
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
