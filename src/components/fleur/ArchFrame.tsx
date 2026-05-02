"use client";

import VintageImage from "./VintageImage";

interface Props {
  src: string;
  alt?: string;
  ratio?: string;           // e.g. "3/4" (default) or "1/1"
  hoverScale?: boolean;
}

export default function ArchFrame({ src, alt = "", ratio = "3/4", hoverScale = false }: Props) {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ aspectRatio: ratio, borderRadius: "999px 999px 0 0" }}
    >
      <VintageImage
        src={src}
        alt={alt}
        className={hoverScale ? "group-hover:scale-105 transition-transform duration-700" : ""}
      />
    </div>
  );
}
