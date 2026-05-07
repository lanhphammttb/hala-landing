import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LITO Handmade",
    short_name: "LITO",
    description: "Phụ kiện móc len thủ công 100% — thiết kế độc bản",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#2A1F14",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
