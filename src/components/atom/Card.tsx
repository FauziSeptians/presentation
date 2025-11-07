'use client';

// import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CardTypes } from '@/types/card';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Lens } from '../ui/lens';
import OptimizedImage from './Image';

export function CardPortofolio({
  title,
  description,
  image,
  link,
  category,
  tags,
  className,
}: CardTypes) {
  return (
    <Card
      className={cn(
        'group glass-card relative overflow-hidden',
        'transition-all duration-500 ease-out',
        'hover:shadow-hover hover:border-primary/50 !flex !flex-col !items-start !gap-0 bg-gray-50 !py-0 hover:scale-[1.02] hover:bg-gray-100 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800',
        className
      )}
      title={description}
    >
      <CardHeader className="relative z-10 w-full p-0">
        <div className="absolute -z-10 bg-gray-50 transition-colors hover:bg-gray-100 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800" />

        {category && (
          <div className="absolute top-4 left-4 z-99999">
            <Badge
              variant="secondary"
              className="shadow-glow bg-black text-white backdrop-blur-sm dark:bg-white dark:text-black"
            >
              {category}
            </Badge>
          </div>
        )}

        <div className="absolute top-4 right-4 z-99999 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {link?.web && (
            <Link
              className="rounded-lg border bg-white p-2 backdrop-blur-sm transition-colors"
              href={link?.web}
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
          {link?.github && (
            <Link
              className="rounded-lg border border-white p-2 backdrop-blur-sm transition-colors"
              href={link?.github}
            >
              <Github className="h-4 w-4 text-white" />
            </Link>
          )}
        </div>
        <Lens
          zoomFactor={2}
          lensSize={150}
          isStatic={false}
          ariaLabel="Zoom Area"
        >
          <OptimizedImage
            src={image}
            alt={title}
            width={100}
            height={100}
            className="h-44 w-full object-cover object-center"
          />
        </Lens>
      </CardHeader>

      <CardContent className="flex flex-col justify-between space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="group-hover:text-primary text-xl font-semibold transition-colors duration-300 dark:text-white">
            {title}
          </h3>
          <p
            className="line-clamp-3 text-sm leading-relaxed dark:text-white/60"
            title={description}
          >
            {description}
          </p>
        </div>

        {tags && tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs transition-colors dark:border-white/50 dark:text-white/50"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {/* Glow Effect on Hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="from-primary/5 via-accent/5 to-primary/5 animate-glow-pulse absolute inset-0 bg-gradient-to-r" />
      </div>
    </Card>
  );
}
