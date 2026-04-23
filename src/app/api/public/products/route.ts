import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const upstream = new URL(`${API_URL}/public/products`);

  url.searchParams.forEach((value, key) => {
    upstream.searchParams.set(key, value);
  });

  try {
    const response = await fetch(upstream.toString(), {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    const text = await response.text();
    return new NextResponse(text, {
      status: response.status,
      headers: { "content-type": response.headers.get("content-type") || "application/json" },
    });
  } catch {
    return NextResponse.json(
      { detail: `Cannot reach backend API at ${API_URL}` },
      { status: 502 },
    );
  }
}
