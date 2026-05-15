'use client';

import { motion } from 'framer-motion';
import VintageImage from './VintageImage';
import type { SeasonalTheme } from './seasonal';

type FleurHeroProps = {
  seasonal: SeasonalTheme;
};

export default function FleurHero({ seasonal }: FleurHeroProps) {
  return (
    <section className="relative flex min-h-[350px] items-end overflow-hidden bg-[#2C2420] pb-8 pt-20 text-white sm:min-h-[640px] sm:pb-20 md:h-screen md:min-h-[680px]">
      <div className="absolute inset-0 z-0">
        <VintageImage
          src="/anh2.jpg"
          alt="Túi len handmade Lito"
          className="h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17110f]/70 via-[#17110f]/18 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17110f]/48 via-transparent to-[#17110f]/18" />
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-7xl px-6 sm:px-10 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[520px]"
        >
          <h1 className="font-serif text-[2.75rem] leading-[1.02] tracking-normal text-white drop-shadow-sm sm:text-6xl lg:text-[4.7rem]">
            Đồ Len
            <span className={`block italic ${seasonal.accentClass}`}>Handmade</span>
          </h1>

          <div className="mt-6 flex">
            <a
              href="#popular"
              className="border-b border-white/70 pb-1 text-sm font-semibold text-white transition-colors hover:border-white hover:text-[#FFD37A]"
            >
              Xem mẫu mới
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
