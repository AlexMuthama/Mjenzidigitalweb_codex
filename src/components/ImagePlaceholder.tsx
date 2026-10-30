import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: string;
  className?: string;
  src?: string | null;
  alt?: string;
  fit?: 'cover' | 'contain';
  blurredBackground?: boolean;
  blurredBackgroundOpacity?: number;
  blurredBackgroundBlur?: number;
}

export default function ImagePlaceholder({
  label = 'Image placeholder',
  aspectRatio = 'aspect-[4/3]',
  className = '',
  src,
  alt = '',
  fit = 'cover',
  blurredBackground = false,
  blurredBackgroundOpacity,
  blurredBackgroundBlur,
}: ImagePlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  if (src && !hasError) {
    return (
      <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
        {blurredBackground && fit === 'contain' && (
          <img
            src={src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            style={
              blurredBackgroundOpacity === undefined && blurredBackgroundBlur === undefined
                ? undefined
                : {
                    opacity: blurredBackgroundOpacity,
                    filter:
                      blurredBackgroundBlur === undefined
                        ? undefined
                        : `blur(${blurredBackgroundBlur}px) brightness(0.75)`,
                  }
            }
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl brightness-75"
          />
        )}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setHasError(true)}
          className={`relative z-10 w-full h-full ${fit === 'contain' ? 'object-contain bg-transparent p-3 sm:p-5' : 'object-cover'}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${aspectRatio} ${className} bg-gradient-to-br from-ivory-100 to-sage-100/40 border border-dashed border-sage-300/50 rounded-2xl`}
    >
      <div className="flex flex-col items-center gap-3 text-sage-400">
        <ImageIcon className="w-8 h-8" />
        <span className="text-xs font-medium text-center px-4 max-w-[200px]">{label}</span>
      </div>
    </div>
  );
}
