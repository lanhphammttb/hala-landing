"use client";

import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import ColorQuiz from "../components/ColorQuiz";
import ProductGrid from "../components/ProductGrid";
import Story from "../components/Story";
import CTA from "../components/CTA";

export default function Home() {
  const [userTone, setUserTone] = useState<string>("All");
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLogo() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
        const res = await fetch(`${apiUrl}/public/products`);
        if (res.ok) {
          const data = await res.json();
          if (data.business_logo) {
            setLogoUrl(data.business_logo);
          }
        }
      } catch (error) {
        console.error("Failed to fetch logo", error);
      }
    }
    fetchLogo();
  }, []);

  return (
    <main className="min-h-screen font-sans selection:bg-rose-200 selection:text-gray-900 bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif text-rose-500 font-bold tracking-tight flex items-center">
            {logoUrl ? (
              <img src={logoUrl} alt="Hala Handmade Logo" className="h-10 object-contain" />
            ) : (
              "Hala Handmade"
            )}
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#quiz" className="hover:text-rose-500 transition-colors">Quiz</a>
            <a href="#collection" className="hover:text-rose-500 transition-colors">Bộ sưu tập</a>
            <a href="#story" className="hover:text-rose-500 transition-colors">Câu chuyện</a>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <Hero />
      </div>

      <div id="quiz">
        <ColorQuiz onResult={setUserTone} />
      </div>

      <div id="collection">
        <ProductGrid userTone={userTone} />
      </div>

      <div id="story">
        <Story />
      </div>

      <CTA />

      <footer className="bg-gray-900 py-12 text-center text-gray-400">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Hala Handmade. Built with love and Next.js.</p>
        </div>
      </footer>
    </main>
  );
}
