"use client";

import VintageImage from "./VintageImage";

interface Props {
  src: string;
  alt?: string;
  ratio?: string;
  hoverScale?: boolean;
  radius?: string;
}

export default function ArchFrame({
  src,
  alt = "",
  ratio = "3/4",
  hoverScale = false,
  radius = "1.5rem",
}: Props) {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ aspectRatio: ratio, borderRadius: radius }}
    >
      <VintageImage
        src={src}
        alt={alt}
        className={hoverScale ? "group-hover:scale-105 transition-transform duration-700" : ""}
      />
    </div>
  );
}
