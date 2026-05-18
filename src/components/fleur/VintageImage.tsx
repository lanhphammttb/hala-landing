'use client';

import Image from 'next/image';
import { useState } from 'react';

const FALLBACK = '/anh2.jpg';

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
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        quality={72}
        onError={() => { if (imageSrc !== FALLBACK) setImageSrc(FALLBACK); }}
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
