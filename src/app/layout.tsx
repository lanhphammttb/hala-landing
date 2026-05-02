import type { Metadata } from "next";
import { Lora, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-jakarta",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Hala Handmade | Độc Bản & Bình Yên",
  description: "Phụ kiện thủ công thiết kế riêng cho sắc độ da và phong cách cá tính của bạn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${lora.variable} ${beVietnam.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans text-[#2A1F14] bg-[#FAF7F2] min-h-screen">{children}</body>
    </html>
  );
}
