import { Heart, Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import FleurMobileMenu from "./NavbarMobileMenu";
import NavbarScrollEffect from "./NavbarScrollEffect";

export const links = [
  { label: "Mẫu túi", href: "#popular" },
  { label: "Quà tặng", href: "#gift" },
  { label: "Đặt làm", href: "#contact" },
  { label: "Câu chuyện", href: "#services" },
];

const iconLinkBaseClass =
  "h-9 w-9 items-center justify-center rounded-full text-[#2C2420] transition-colors hover:bg-[#2C2420]/5 sm:h-10 sm:w-10";

export default function FleurNavbar() {
  return (
    <>
      <NavbarScrollEffect />
      <nav className="fixed inset-x-0 top-0 z-[100] transition-all duration-500 [html.nav-scrolled_&]:border-b [html.nav-scrolled_&]:border-[#2C2420]/10 [html.nav-scrolled_&]:bg-[#fffaf3]/90 [html.nav-scrolled_&]:backdrop-blur-xl">
        <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex shrink-0 items-center">
            <a href="#" className="flex min-w-0 items-center">
              <Image
                src="/icon_litohandmade.png"
                alt="LITO Handmade"
                width={66}
                height={44}
                sizes="66px"
                priority
                className="h-10 w-auto object-contain sm:h-11"
              />
            </a>
          </div>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-10 text-sm font-semibold text-white/80 transition-colors [html.nav-scrolled_&]:text-[#2C2420]/70 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-[#A56336] [html:not(.nav-scrolled)_&]:hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center justify-end gap-1 sm:gap-3">
            <a href="#popular" aria-label="Tìm kiếm" className={`${iconLinkBaseClass} hidden text-white [html.nav-scrolled_&]:text-[#2C2420] sm:flex`}>
              <Search size={20} />
            </a>
            <a href="#contact" aria-label="Tài khoản" className={`${iconLinkBaseClass} hidden text-white [html.nav-scrolled_&]:text-[#2C2420] lg:flex`}>
              <User size={18} />
            </a>
            <a href="#gift" aria-label="Yêu thích" className={`${iconLinkBaseClass} hidden text-white [html.nav-scrolled_&]:text-[#2C2420] sm:flex`}>
              <Heart size={18} />
            </a>
            <a href="#popular" aria-label="Giỏ hàng" className={`${iconLinkBaseClass} group hidden text-white [html.nav-scrolled_&]:text-[#2C2420] sm:flex`}>
              <ShoppingBag size={17} className="transition-transform group-hover:scale-110" />
            </a>
            <FleurMobileMenu links={links} />
          </div>
        </div>
      </nav>
    </>
  );
}
