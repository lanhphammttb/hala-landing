import type { Metadata } from "next";
import { Fraunces, Be_Vietnam_Pro, Pinyon_Script } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const pinyonScript = Pinyon_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "optional", // decorative — không block render
  preload: false,
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],   // chỉ regular + bold là đủ
  style: ["italic"],        // luôn dùng italic trong UI
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-jakarta",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],  // bỏ 300 và 700
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://litohandmade.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/icon_logo.svg",
    shortcut: "/icon_logo.svg",
    apple: "/icon_logo.svg",
  },
  title: {
    default: "Lito Handmade — Phụ Kiện Móc Len Thủ Công Độc Bản",
    template: "%s | Lito Handmade",
  },
  description:
    "Phụ kiện móc len thủ công 100% — thiết kế độc bản theo sắc độ da và phong cách riêng của bạn. Mũ len, túi len, khăn len handmade tại Việt Nam.",
  keywords: [
    "móc len handmade",
    "phụ kiện len thủ công",
    "mũ len handmade",
    "túi len handmade",
    "khăn len thủ công",
    "quà tặng handmade",
    "len thủ công Việt Nam",
    "Lito Handmade",
  ],
  authors: [{ name: "Lito Handmade" }],
  creator: "Lito Handmade",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "Lito Handmade",
    title: "Lito Handmade — Phụ Kiện Móc Len Thủ Công Độc Bản",
    description:
      "Phụ kiện móc len thủ công 100% — thiết kế độc bản theo sắc độ da và phong cách riêng của bạn.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lito Handmade — Phụ Kiện Móc Len Thủ Công",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lito Handmade — Phụ Kiện Móc Len Thủ Công Độc Bản",
    description:
      "Phụ kiện móc len thủ công 100% — thiết kế độc bản theo sắc độ da và phong cách riêng của bạn.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${fraunces.variable} ${beVietnam.variable} ${pinyonScript.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans text-[#2A1F14] bg-[#FAF7F2] min-h-screen">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                url: siteUrl,
                name: "Lito Handmade",
                description:
                  "Phụ kiện móc len thủ công 100% — thiết kế độc bản theo sắc độ da và phong cách riêng của bạn.",
                inLanguage: "vi",
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${siteUrl}/?q={search_term_string}`,
                  },
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "LocalBusiness",
                "@id": `${siteUrl}/#business`,
                name: "Lito Handmade",
                description:
                  "Phụ kiện móc len thủ công 100% — thiết kế độc bản theo sắc độ da và phong cách riêng của bạn.",
                url: siteUrl,
                logo: `${siteUrl}/favicon.ico`,
                image: `${siteUrl}/og-image.jpg`,
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "VN",
                },
                sameAs: [],
              },
            ],
          }}
        />
        {children}
      </body>
    </html>
  );
}
