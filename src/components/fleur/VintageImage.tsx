import Image from 'next/image';

interface Props {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  sizes?: string;
}

export default function VintageImage({
  src,
  alt = '',
  className = '',
  style,
  priority = false,
  sizes = '100vw'
}: Props) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        quality={60}
        className={`absolute inset-0 w-full h-full object-cover ${className}`}
        style={{
          filter: 'sepia(6%) saturate(92%) contrast(97%) brightness(102%)',
          ...style
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'rgba(160,120,70,0.04)',
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );
}
