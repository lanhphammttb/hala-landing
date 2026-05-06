import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ProductDetailClient from "@/components/ProductDetailClient";

type ProductDetail = {
  id: number;
  name: string;
  description: string;
  base_price: number;
  tags: string[];
  image: string;
  images: string[];
  tone: string;
  business_logo: string | null;
};

async function getProduct(id: string): Promise<ProductDetail | null> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  try {
    const res = await fetch(`${baseUrl}/api/public/products/${id}`, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://litohandmade.com";

  if (!product) {
    return { title: "Sản phẩm không tồn tại" };
  }

  const productUrl = `${siteUrl}/product/${id}`;
  const imageUrl = product.image || `${siteUrl}/og-image.jpg`;

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: productUrl },
    openGraph: {
      type: "website",
      url: productUrl,
      title: product.name,
      description: product.description,
      images: [{ url: imageUrl, width: 800, height: 800, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-serif mb-4">Sản phẩm không tồn tại</h2>
        <p className="text-gray-500 mb-8">Có thể sản phẩm đã bị xóa hoặc ngưng kinh doanh.</p>
        <Link href="/" className="text-rose-500 font-medium flex items-center gap-2 hover:bg-rose-50 px-6 py-3 rounded-full transition-colors">
          Trở về trang chủ
        </Link>
      </div>
    );
  }
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://litohandmade.com";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: product.images?.length ? product.images : [product.image],
          offers: {
            "@type": "Offer",
            price: product.base_price,
            priceCurrency: "VND",
            availability: "https://schema.org/InStock",
            url: `${siteUrl}/product/${product.id}`,
            seller: {
              "@type": "Organization",
              name: "LITO Handmade",
            },
          },
        }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
