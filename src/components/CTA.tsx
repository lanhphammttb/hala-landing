"use client";

import { Phone, Mail } from "lucide-react";

const CONTACTS = [
  {
    name: "Messenger",
    href: "https://m.me/litohandmade",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.903 1.446 5.49 3.713 7.194V21l2.538-1.394A10.62 10.62 0 0012 19.486c5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.007 12.435l-2.548-2.72-4.97 2.72 5.467-5.802 2.61 2.72 4.908-2.72-5.467 5.802z"/></svg>,
    primary: true,
  },
  {
    name: "Zalo",
    href: "https://zalo.me/0886251629",
    icon: <svg viewBox="0 0 48 48" fill="currentColor" className="w-4 h-4"><path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm-3.5 27.5H16v-15h4.5v15zm6 0h-4.5v-15H26c2.485 0 4.5 2.015 4.5 4.5v6c0 2.485-2.015 4.5-4.5 4.5zm0-4.5v-6c0-.277-.223-.5-.5-.5H26v7h-.5c-.277 0-.5-.223-.5-.5z"/></svg>,
    primary: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/litohandmade",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    primary: false,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@lito_handmade",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.26 8.26 0 004.83 1.55V6.89a4.85 4.85 0 01-1.06-.2z"/></svg>,
    primary: false,
  },
  {
    name: "Gọi điện",
    href: "tel:+84886251629",
    icon: <Phone className="w-4 h-4" />,
    primary: false,
  },
  {
    name: "Email",
    href: "mailto:contact@litohandmade.com",
    icon: <Mail className="w-4 h-4" />,
    primary: false,
  },
];

export default function CTA() {
  return (
    <section id="contact" className="bg-[#faf8f5] py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-32 h-32 rounded-full bg-[#e8ddd0] mx-auto mb-10 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=300&auto=format&fit=crop"
            alt="Staff"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="font-serif text-4xl md:text-5xl text-[#2c2420] mb-4">
          Nói Chuyện Với Chúng Tôi
        </h2>
        <p className="text-sm text-[#8b6f5e] leading-relaxed mb-10 max-w-md mx-auto">
          Khó chọn bó hoa? Hãy để nhân viên thân thiện của chúng tôi giúp bạn. Chúng tôi là
          những người thợ đam mê và tin rằng mỗi người đều xứng đáng có bó hoa của riêng mình.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {CONTACTS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className={`flex items-center justify-center gap-2 px-6 py-3 text-xs tracking-widest uppercase transition-colors ${
                item.primary
                  ? "bg-[#2c2420] text-white hover:bg-[#8b6f5e]"
                  : "border border-[#2c2420] text-[#2c2420] hover:bg-[#2c2420] hover:text-white"
              }`}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
