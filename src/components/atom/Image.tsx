import { classNames } from '@/utils/classNames';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type OptimizedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
};

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);

  return hasError ? (
    <div
      className={classNames(
        'flex items-center justify-center bg-gray-100 text-gray-500',
        className
      )}
    >
      <ImageIcon size={Math.min(width, height) * 0.6} />
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      onError={() => setHasError(true)}
      placeholder="blur"
      blurDataURL="/blur-placeholder.png"
    />
  );
}
