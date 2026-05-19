"use client";
import { useEffect } from "react";

export default function NavbarScrollEffect() {
  useEffect(() => {
    const toggle = () =>
      document.documentElement.classList.toggle("nav-scrolled", window.scrollY > 50);
    toggle();
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  return null;
}
