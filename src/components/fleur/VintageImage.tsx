"use client";

/* Reusable image wrapper:
   - sepia + warm saturation for vintage feel
   - onError fallback to a confirmed-working image
   - warm multiply overlay for color harmony */

const FALLBACK = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop";

interface Props {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function VintageImage({ src, alt = "", className = "", style }: Props) {
  function handleError(e: React.SyntheticEvent<HTMLImageElement>) {
    const img = e.currentTarget;
    if (img.src !== FALLBACK) img.src = FALLBACK;
  }

  return (
    <div className="relative w-full h-full">
      <img
        src={src}
        alt={alt}
        onError={handleError}
        className={`w-full h-full object-cover ${className}`}
        style={{
          filter: "sepia(28%) saturate(80%) contrast(92%) brightness(97%)",
          ...style,
        }}
      />
      {/* Warm amber multiply overlay — unifies all images to vintage palette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "rgba(180, 140, 90, 0.18)",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}
