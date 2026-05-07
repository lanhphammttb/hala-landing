"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Yarn thread decoration - top left */}
      <div className="absolute top-8 left-8 opacity-30">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="32" cy="32" r="28" stroke="#C59D5F" strokeWidth="1.5" strokeDasharray="4 3"/>
          <circle cx="32" cy="32" r="18" stroke="#C59D5F" strokeWidth="1" strokeDasharray="3 4"/>
          <line x1="4" y1="32" x2="60" y2="32" stroke="#C59D5F" strokeWidth="1" strokeDasharray="3 3"/>
          <line x1="32" y1="4" x2="32" y2="60" stroke="#C59D5F" strokeWidth="1" strokeDasharray="3 3"/>
          {/* Compass needle */}
          <line x1="32" y1="20" x2="32" y2="32" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round"/>
          <line x1="32" y1="32" x2="44" y2="38" stroke="#C59D5F" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="3" fill="#8B6F47"/>
        </svg>
      </div>

      {/* Yarn ball - bottom left */}
      <motion.div
        className="absolute bottom-12 left-6 opacity-20"
        animate={{ x: [0, 10, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="26" stroke="#C59D5F" strokeWidth="1.5"/>
          <path d="M10 20 Q30 10 50 20" stroke="#C59D5F" strokeWidth="1.2" fill="none"/>
          <path d="M6 32 Q30 22 54 32" stroke="#C59D5F" strokeWidth="1.2" fill="none"/>
          <path d="M10 44 Q30 34 50 44" stroke="#C59D5F" strokeWidth="1.2" fill="none"/>
          <path d="M50 30 Q40 5 30 4" stroke="#8B6F47" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* Heart - bottom right */}
      <motion.div
        className="absolute bottom-16 right-10 opacity-25"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 34s-14-8.5-14-18a8 8 0 0116 0 8 8 0 0116 0c0 9.5-18 18-18 18z" stroke="#C59D5F" strokeWidth="1.5" fill="#C59D5F" fillOpacity="0.2"/>
        </svg>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-3xl w-full">

        {/* Left — Cat mascot */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex-shrink-0"
        >
          {/* Question mark bubble */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-2 z-10"
          >
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md border border-[#C59D5F]/20">
              <span className="text-[#C59D5F] font-serif italic text-xl font-bold">?</span>
            </div>
            {/* bubble tail */}
            <div className="w-3 h-3 bg-white border-r border-b border-[#C59D5F]/20 rotate-45 absolute -bottom-1 left-3" />
          </motion.div>

          <motion.img
            src="/icon_litohandmade.png"
            alt="LITO mascot lạc đường"
            className="w-52 h-52 md:w-64 md:h-64 object-contain"
            style={{ mixBlendMode: "multiply" }}
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Right — Text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* 404 styled as yarn */}
          <div className="relative mb-2">
            <span
              className="font-serif italic text-[7rem] md:text-[9rem] leading-none select-none"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #C59D5F",
                textShadow: "4px 4px 0 #e8d5b0",
              }}
            >
              4
            </span>
            {/* Yarn ball O */}
            <span className="inline-flex items-center justify-center relative mx-1">
              <svg
                width="90" height="90"
                viewBox="0 0 90 90"
                className="inline-block align-middle"
                style={{ marginBottom: "8px" }}
              >
                <circle cx="45" cy="45" r="40" fill="#F5ECD7" stroke="#C59D5F" strokeWidth="2"/>
                <path d="M10 38 Q45 18 80 38" stroke="#C59D5F" strokeWidth="1.5" fill="none"/>
                <path d="M7 50 Q45 30 83 50" stroke="#C59D5F" strokeWidth="1.5" fill="none"/>
                <path d="M10 62 Q45 42 80 62" stroke="#C59D5F" strokeWidth="1.5" fill="none"/>
                <path d="M20 18 Q45 6 68 18" stroke="#8B6F47" strokeWidth="1.2" fill="none"/>
                <path d="M20 72 Q45 84 68 72" stroke="#8B6F47" strokeWidth="1.2" fill="none"/>
                <circle cx="45" cy="45" r="6" fill="#C59D5F" fillOpacity="0.3" stroke="#C59D5F" strokeWidth="1.5"/>
              </svg>
            </span>
            <span
              className="font-serif italic text-[7rem] md:text-[9rem] leading-none select-none"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #C59D5F",
                textShadow: "4px 4px 0 #e8d5b0",
              }}
            >
              4
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif italic text-[#2A1F14] text-2xl md:text-3xl mb-2">
            Lỗi! Trang Không Tìm Thấy
          </h1>
          <p className="text-[#2A1F14]/40 text-sm mb-8 max-w-xs">
            Có vẻ con mèo len đã cuộn mất đường dẫn này rồi.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="px-7 py-3 bg-[#2A1F14] text-white text-[11px] uppercase tracking-widest font-bold rounded-full hover:bg-[#C59D5F] transition-colors duration-300"
            >
              Về Trang Chủ
            </Link>
            <a
              href="https://zalo.me/0886251629"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 border border-[#2A1F14]/20 text-[#2A1F14] text-[11px] uppercase tracking-widest font-bold rounded-full hover:border-[#C59D5F] hover:text-[#C59D5F] transition-colors duration-300"
            >
              Liên Hệ Hỗ Trợ
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
