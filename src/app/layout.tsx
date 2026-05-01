import type { Metadata } from "next";
import { Cormorant_Garamond, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
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
      className={`${cormorant.variable} ${beVietnam.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans text-gray-800 bg-[#FAFAFA] min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
