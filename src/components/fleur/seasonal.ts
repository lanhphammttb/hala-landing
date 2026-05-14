export type SeasonalTheme = {
  id: "default" | "tet" | "midAutumn" | "christmas";
  accentClass: string;
  badgeClass: string;
  ctaClass: string;
  ornamentClass: string;
  overlayClass: string;
  surfaceClass: string;
  label?: string;
  note?: string;
};

const themes: Record<SeasonalTheme["id"], SeasonalTheme> = {
  default: {
    id: "default",
    accentClass: "text-[#E4C28B]",
    badgeClass: "border-white/16 bg-white/8 text-white/72",
    ctaClass: "bg-[#E4C28B] hover:bg-white",
    overlayClass: "from-[#211915]/82 via-[#2C2420]/42 to-transparent",
    ornamentClass: "hidden",
    surfaceClass: "bg-[#FDF9F3]",
  },
  tet: {
    id: "tet",
    accentClass: "text-[#FFD37A]",
    badgeClass: "border-[#FFD37A]/35 bg-[#7A241A]/28 text-[#FFE2A3]",
    ctaClass: "bg-[#FFD37A] hover:bg-white",
    ornamentClass: "bg-[#FFD37A]",
    overlayClass: "from-[#211915]/84 via-[#3A2019]/38 to-transparent",
    surfaceClass: "bg-[#FFF8EC]",
    label: "Quà Tết làm tay",
    note: "Gói màu may mắn",
  },
  midAutumn: {
    id: "midAutumn",
    accentClass: "text-[#FFD27A]",
    badgeClass: "border-[#FFD27A]/35 bg-[#6A3C1B]/26 text-[#FFE4AD]",
    ctaClass: "bg-[#FFD27A] hover:bg-white",
    ornamentClass: "bg-[#FFD27A]",
    overlayClass: "from-[#211915]/84 via-[#4E321B]/38 to-transparent",
    surfaceClass: "bg-[#FFF8EF]",
    label: "Quà Trung Thu",
    note: "Ấm màu đoàn viên",
  },
  christmas: {
    id: "christmas",
    accentClass: "text-[#F4D8A1]",
    badgeClass: "border-[#F4D8A1]/35 bg-[#1F4B35]/28 text-[#FBE6B6]",
    ctaClass: "bg-[#F4D8A1] hover:bg-white",
    ornamentClass: "bg-[#F4D8A1]",
    overlayClass: "from-[#172019]/86 via-[#1F4B35]/34 to-transparent",
    surfaceClass: "bg-[#FDF9F3]",
    label: "Quà Giáng Sinh",
    note: "Món nhỏ ấm tay",
  },
};

export function getSeasonalTheme(date = new Date()): SeasonalTheme {
  const override = process.env.NEXT_PUBLIC_SEASONAL_THEME as SeasonalTheme["id"] | undefined;
  if (override && themes[override]) return themes[override];

  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 1 && day >= 10) || (month === 2 && day <= 20)) return themes.tet;
  if (month === 9 || (month === 10 && day <= 10)) return themes.midAutumn;
  if (month === 12 && day >= 1 && day <= 25) return themes.christmas;

  return themes.default;
}
