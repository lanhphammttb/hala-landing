import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "vietnamese"],
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
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans text-gray-800 bg-[#FAFAFA] min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
