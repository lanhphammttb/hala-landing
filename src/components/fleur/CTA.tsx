import { Phone, Mail } from "lucide-react";

const CONTACTS = [
  {
    name: "Messenger",
    href: "https://m.me/litohandmade",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.903 1.446 5.49 3.713 7.194V21l2.538-1.394A10.62 10.62 0 0012 19.486c5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.007 12.435l-2.548-2.72-4.97 2.72 5.467-5.802 2.61 2.72 4.908-2.72-5.467 5.802z"/>
      </svg>
    ),
  },
  {
    name: "Zalo",
    href: "https://zalo.me/0886251629",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-5 h-5">
        <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm-3.5 27.5H16v-15h4.5v15zm6 0h-4.5v-15H26c2.485 0 4.5 2.015 4.5 4.5v6c0 2.485-2.015 4.5-4.5 4.5zm0-4.5v-6c0-.277-.223-.5-.5-.5H26v7h-.5c-.277 0-.5-.223-.5-.5z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/litohandmade",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@lito_handmade",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.26 8.26 0 004.83 1.55V6.89a4.85 4.85 0 01-1.06-.2z"/>
      </svg>
    ),
  },
  {
    name: "Gọi điện",
    href: "tel:+84886251629",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    name: "Email",
    href: "mailto:contact@litohandmade.com",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/litohandmade.store",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/lito_handmade",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.566 0-2.387-1.715-4.057-4.164-4.057-2.837 0-4.5 2.127-4.5 4.327 0 .856.33 1.775.741 2.276a.3.3 0 0 1 .069.286c-.076.315-.244.995-.277 1.134-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
      </svg>
    ),
  },
];

export default function FleurCTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#2C2420] text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 font-serif text-6xl italic leading-none tracking-normal md:text-[8rem]">
          Liên hệ với <span className="text-[#C59D5F]">LITO</span>
        </h2>

        <div className="grid grid-cols-4 md:grid-cols-8 justify-items-center gap-8">
          {CONTACTS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-[#C59D5F] group-hover:bg-[#C59D5F] group-hover:text-[#2C2420] transition-all">
                {item.icon}
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-white transition-colors">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
