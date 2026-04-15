'use client';

// components/SkillCard.tsx
import { cn } from '@/lib/utils';
import OptimizedImage from '../atom/Image';

export default function SkillCard({
  img,
  title,
  description,
  Icon,
}: {
  img?: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon?: any;
}) {
  return (
    <figure
      className={cn(
        'relative h-24 w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transition-colors duration-300',
        'bg-gray-50 hover:bg-gray-100',
        'dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800'
      )}
    >
      <div className="flex h-full flex-row items-center gap-2">
        <OptimizedImage src={Icon.src} width={32} height={32} alt={Icon.src} />
        {img && (
          <OptimizedImage
            className="size-8 rounded-full"
            width={32}
            height={32}
            alt={title}
            src={img}
          />
        )}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-gray-900 dark:text-white">
            {title}
          </figcaption>
          <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
}
