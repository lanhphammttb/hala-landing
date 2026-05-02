import type { Metadata } from "next";
import { Fraunces, Be_Vietnam_Pro, Crimson_Text, Quicksand, Lora, EB_Garamond, Pinyon_Script } from "next/font/google";
import "./globals.css";

const pinyonScript = Pinyon_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-vintage-classic",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-cute",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-jakarta",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hala Handmade — Phụ Kiện Móc Len Thủ Công Độc Bản",
  description: "Phụ kiện móc len thủ công 100% — thiết kế độc bản theo sắc độ da và phong cách riêng của bạn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${fraunces.variable} ${beVietnam.variable} ${crimson.variable} ${quicksand.variable} ${ebGaramond.variable} ${pinyonScript.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans text-[#2A1F14] bg-[#FAF7F2] min-h-screen">{children}</body>
    </html>
  );
}
