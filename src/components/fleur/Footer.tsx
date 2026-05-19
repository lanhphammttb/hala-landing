"use client";

import { ArrowUp, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FleurFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async () => {
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="relative border-t border-[#2C2420]/5 bg-white px-6 pb-12 pt-24 font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/icon_litohandmade.png"
              alt="LITO Handmade"
              width={60}
              height={40}
              sizes="60px"
              className="mb-8 h-10 w-auto object-contain"
            />
            <p className="mb-10 max-w-xs font-serif text-sm italic leading-relaxed text-[#2C2420]/70">
              “Tôn vinh nghệ thuật thủ công truyền thống qua những thiết kế len hiện đại và độc bản.”
            </p>
          </div>

          <div>
            <h3 className="mb-10 text-[11px] font-black uppercase tracking-[0.4em] text-[#A56336]">Cửa hàng</h3>
            <ul className="space-y-4">
              {["Tất cả sản phẩm", "Túi xách tay", "Phụ kiện len", "Thú len & Quà tặng", "Hàng mới về"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm font-medium text-[#2C2420]/70 transition-colors hover:text-[#C59D5F]">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-10 text-[11px] font-black uppercase tracking-[0.4em] text-[#A56336]">Hỗ trợ khách hàng</h3>
            <ul className="space-y-4">
              {["Hướng dẫn đặt hàng", "Chính sách vận chuyển", "Đổi trả & Hoàn tiền", "Chăm sóc sản phẩm len", "Liên hệ hỗ trợ"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm font-medium text-[#2C2420]/70 transition-colors hover:text-[#C59D5F]">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-10 text-[11px] font-black uppercase tracking-[0.4em] text-[#A56336]">Đăng ký nhận tin</h3>
            <p className="mb-8 text-sm leading-relaxed text-[#2C2420]/70">Nhận thông báo sớm nhất về các bộ sưu tập giới hạn.</p>
            <div className="group flex items-center border-b border-[#2C2420]/10 transition-colors focus-within:border-[#C59D5F]">
              <input
                type="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                disabled={status === "loading" || status === "success"}
                className="min-h-[44px] w-full border-none bg-transparent text-sm text-[#2C2420] outline-none placeholder:text-[#2C2420]/20 disabled:opacity-50"
              />
              <button
                onClick={handleSubscribe}
                disabled={status === "loading" || status === "success"}
                className="min-h-[44px] min-w-[44px] text-[10px] font-black uppercase tracking-widest text-[#A56336] disabled:opacity-50"
              >
                {status === "loading" ? "..." : status === "success" ? "✓" : "Gửi"}
              </button>
            </div>
            {status === "success" && <p className="mt-3 text-[11px] text-[#C59D5F]">Đăng ký thành công!</p>}
            {status === "error" && <p className="mt-3 text-[11px] text-red-400">Có lỗi xảy ra, thử lại nhé.</p>}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-t border-[#2C2420]/5 pt-12 md:flex-row">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#2C2420]/65">
            <MapPin size={14} strokeWidth={1.5} />
            <span>Hà Nội, Việt Nam</span>
          </div>

          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2C2420]/65">
            © 2026 LITO HANDMADE. BẢN QUYỀN ĐÃ ĐƯỢC BẢO HỘ.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[#2C2420]/65 transition-colors hover:text-[#C59D5F]"
          >
            <span className="text-[10px] font-black uppercase tracking-widest">Lên đầu trang</span>
            <div className="rounded-full border border-[#2C2420]/5 p-3 transition-all group-hover:border-[#C59D5F]">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
