import type { Metadata } from 'next';
import { Fraunces, Be_Vietnam_Pro, Pinyon_Script } from 'next/font/google';
import JsonLd from '@/components/JsonLd';
import './globals.css';

const pinyonScript = Pinyon_Script({
  variable: '--font-script',
  subsets: ['latin'],
  weight: ['400'],
  display: 'optional', // decorative — không block render
  preload: false
});

const fraunces = Fraunces({
  variable: '--font-serif',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '700'], // chỉ regular + bold là đủ
  style: ['italic'], // luôn dùng italic trong UI
  display: 'swap'
});

const beVietnam = Be_Vietnam_Pro({
  variable: '--font-jakarta',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600'], // bỏ 300 và 700
  display: 'swap'
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://litohandmade.com').replace(/\/$/, '');
const siteRoot = `${siteUrl}/`;

export const metadata: Metadata = {
  metadataBase: new URL(siteRoot),
  applicationName: 'LITO Handmade',
  title: {
    default: 'LITO Handmade — Phụ Kiện Móc Len Thủ Công Độc Bản',
    template: '%s | LITO Handmade'
  },
  description:
    'Phụ kiện móc len thủ công 100% — thiết kế độc bản theo sắc độ da và phong cách riêng của bạn. Mũ len, túi len, khăn len handmade tại Việt Nam.',
  keywords: [
    'móc len handmade',
    'phụ kiện len thủ công',
    'mũ len handmade',
    'túi len handmade',
    'khăn len thủ công',
    'quà tặng handmade',
    'len thủ công Việt Nam',
    'LITO Handmade'
  ],
  authors: [{ name: 'LITO Handmade' }],
  creator: 'LITO Handmade',
  publisher: 'LITO Handmade',
  category: 'Handmade accessories',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: siteRoot,
    siteName: 'LITO Handmade',
    title: 'LITO Handmade — Phụ Kiện Móc Len Thủ Công Độc Bản',
    description:
      'Phụ kiện móc len thủ công 100% — thiết kế độc bản theo sắc độ da và phong cách riêng của bạn.',
    images: [
      {
        url: '/litohandmade.png',
        width: 1536,
        height: 864,
        alt: 'LITO Handmade — Phụ Kiện Móc Len Thủ Công'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LITO Handmade — Phụ Kiện Móc Len Thủ Công Độc Bản',
    description:
      'Phụ kiện móc len thủ công 100% — thiết kế độc bản theo sắc độ da và phong cách riêng của bạn.',
    images: ['/litohandmade.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: siteRoot
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '512x512' }],
    apple: [{ url: '/apple-icon.png', type: 'image/png', sizes: '180x180' }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${fraunces.variable} ${beVietnam.variable} ${pinyonScript.variable} scroll-smooth antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KDRC5866');` }} />
      </head>
      <body className="font-sans text-[#2A1F14] bg-[#FAF7F2] min-h-screen">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KDRC5866" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebSite',
                '@id': `${siteRoot}#website`,
                url: siteRoot,
                name: 'LITO Handmade',
                alternateName: ['LITO', 'Lito Handmade'],
                description:
                  'Phụ kiện móc len thủ công 100% — thiết kế độc bản theo sắc độ da và phong cách riêng của bạn.',
                inLanguage: 'vi',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: `${siteRoot}?q={search_term_string}`
                  },
                  'query-input': 'required name=search_term_string'
                }
              },
              {
                '@type': 'LocalBusiness',
                '@id': `${siteRoot}#business`,
                name: 'LITO Handmade',
                description:
                  'Phụ kiện móc len thủ công 100% — thiết kế độc bản theo sắc độ da và phong cách riêng của bạn.',
                url: siteRoot,
                logo: `${siteRoot}icon.png`,
                image: `${siteRoot}litohandmade.png`,
                telephone: '+84886251629',
                email: 'contact@litohandmade.com',
                priceRange: '$$',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'VN',
                  addressLocality: 'Hà Nội',
                  streetAddress: 'Hà Nội'
                },
                sameAs: [
                  'https://www.facebook.com/litohandmade',
                  'https://www.tiktok.com/@lito_handmade',
                  'https://m.me/litohandmade',
                  'https://zalo.me/0886251629'
                ]
              }
            ]
          }}
        />
        {children}
      </body>
    </html>
  );
}
