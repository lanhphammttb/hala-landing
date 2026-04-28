import HomePageClient from "../components/HomePageClient";

type Product = {
  id: number;
  name: string;
  tone: string;
  base_price: number;
  image: string;
};

type ProductListResponse = {
  items: Product[];
  business_logo?: string | null;
};

async function getHomeData(): Promise<{ products: Product[]; logoUrl: string | null }> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  try {
    const res = await fetch(`${baseUrl}/api/public/products`, { cache: "no-store" });
    if (!res.ok) {
      return { products: [], logoUrl: null };
    }
    const data: ProductListResponse = await res.json();
    return {
      products: data.items || [],
      logoUrl: data.business_logo || null,
    };
  } catch {
    return { products: [], logoUrl: null };
  }
}

export default async function Home() {
  const { products, logoUrl } = await getHomeData();
  return <HomePageClient products={products} logoUrl={logoUrl} />;
}
