"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import ColorQuiz from "../components/ColorQuiz";
import ProductGrid from "../components/ProductGrid";
import Story from "../components/Story";
import CTA from "../components/CTA";

type Product = {
  id: number;
  name: string;
  tone: string;
  base_price: number;
  image: string;
};

export default function HomePageClient({
  logoUrl,
  products,
}: {
  logoUrl: string | null;
  products: Product[];
}) {
  const [userTone, setUserTone] = useState<string>("All");

  return (
    <main className="min-h-screen font-sans selection:bg-rose-200 selection:text-gray-900 bg-white">
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif text-rose-500 font-bold tracking-tight flex items-center">
            {logoUrl ? (
              <img src={logoUrl} alt="Lito Handmade Logo" className="h-10 object-contain" />
            ) : (
              "Lito Handmade"
            )}
          </a>
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
        <ProductGrid userTone={userTone} initialProducts={products} />
      </div>

      <div id="story">
        <Story />
      </div>

      <CTA />

      <footer className="bg-gray-900 py-12 text-center text-gray-400">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Lito Handmade. Built with love and Next.js.</p>
        </div>
      </footer>
    </main>
  );
}
