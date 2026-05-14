'use client';

import { motion } from 'framer-motion';
import VintageImage from './VintageImage';
import type { SeasonalTheme } from './seasonal';

type FleurHeroProps = {
  seasonal: SeasonalTheme;
};

export default function FleurHero({ seasonal }: FleurHeroProps) {
  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden bg-[#2C2420] pt-20 text-white md:h-screen">
      <div className="absolute inset-0 z-0">
        <VintageImage
          src="/anh2.jpg"
          alt="Túi len handmade Lito"
          className="h-full w-full scale-105 object-cover"
          priority
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${seasonal.overlayClass}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/58 via-transparent to-[#1d1511]/25" />
        {seasonal.id !== 'default' && (
          <div className="pointer-events-none absolute left-6 top-28 hidden h-24 w-24 sm:block">
            <span className={`absolute left-2 top-9 h-2.5 w-2.5 rounded-full ${seasonal.ornamentClass} opacity-80`} />
            <span className={`absolute left-8 top-3 h-1.5 w-1.5 rounded-full ${seasonal.ornamentClass} opacity-55`} />
            <span className={`absolute left-14 top-12 h-2 w-2 rounded-full ${seasonal.ornamentClass} opacity-65`} />
            <span className="absolute left-1 top-1 h-20 w-px rotate-12 bg-white/14" />
          </div>
        )}
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl pt-10"
        >
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <p className={`text-[12px] font-bold ${seasonal.accentClass}`}>
              {seasonal.label || 'Túi len làm tay'}
            </p>
            {seasonal.note && (
              <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${seasonal.badgeClass}`}>
                {seasonal.note}
              </span>
            )}
          </div>
          <h1 className="font-serif text-5xl leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Đồ Len
            <span className={`block italic ${seasonal.accentClass}`}>Handmade</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-white/78 md:text-lg">
            Mềm mại, dễ phối, làm theo màu bạn thích.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#popular"
              className={`rounded-full px-8 py-3.5 text-sm font-bold text-[#2C2420] shadow-xl shadow-black/20 transition-all ${seasonal.ctaClass}`}
            >
              Xem mẫu
            </a>
            <a
              href="#gift"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#2C2420]"
            >
              Đặt theo màu
            </a>
          </div>

          <div className="mt-14 hidden max-w-xl grid-cols-3 gap-6 border-t border-white/18 pt-7 sm:grid">
            {[
              ['Làm tay', 'Từng chiếc'],
              ['2-5 ngày', 'Hoàn thiện'],
              ['Đổi màu', 'Theo ý thích'],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="text-sm font-bold text-white">{value}</div>
                <div className="mt-2 text-xs text-white/55">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <a
        href="#popular"
        className="absolute bottom-8 right-6 z-20 hidden items-center gap-3 text-sm font-bold text-white/78 transition-colors hover:text-white md:flex"
      >
        Xem thêm
        <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
