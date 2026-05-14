export type SeasonalTheme = {
  id: "default" | "tet" | "midAutumn" | "christmas";
  accentClass: string;
  surfaceClass: string;
  label?: string;
};

const themes: Record<SeasonalTheme["id"], SeasonalTheme> = {
  default: {
    id: "default",
    accentClass: "text-[#E4C28B]",
    surfaceClass: "bg-[#FDF9F3]",
  },
  tet: {
    id: "tet",
    accentClass: "text-[#F3C36B]",
    surfaceClass: "bg-[#FFF8EC]",
    label: "Bộ sưu tập Tết",
  },
  midAutumn: {
    id: "midAutumn",
    accentClass: "text-[#E8B75C]",
    surfaceClass: "bg-[#FFF8EF]",
    label: "Quà Trung Thu",
  },
  christmas: {
    id: "christmas",
    accentClass: "text-[#E4C28B]",
    surfaceClass: "bg-[#FDF9F3]",
    label: "Quà Giáng Sinh",
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
