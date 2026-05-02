"use client";

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
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={handleError}
        className={`absolute inset-0 w-full h-full object-cover ${className}`}
        style={{
          filter: "sepia(6%) saturate(92%) contrast(97%) brightness(102%)",
          ...style,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(160,120,70,0.04)", mixBlendMode: "multiply" }}
      />
    </div>
  );
}
