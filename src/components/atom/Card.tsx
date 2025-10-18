/* eslint-disable @next/next/no-img-element */

'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Lens } from '@/components/ui/lens';
import { CardTypes } from '@/types/card';
import Link from 'next/link';
import OptimizedImage from './Image';

export function CardPortofolio({
  title,
  description,
  image,
  alt = 'images',
  link,
}: CardTypes) {
  return (
    <Link href={link ?? ''} target="_blank" rel="noopener noreferrer">
      <Card className="group relative min-h-[400px] max-w-md cursor-pointer overflow-hidden !pt-0 text-white shadow-none transition-all duration-500 ease-in-out hover:scale-103">
        <div className="absolute inset-0 z-0 h-0 bg-white transition-all duration-500 ease-in-out group-hover:h-full" />

        <CardHeader className="relative z-10 w-full p-0">
          <Lens
            zoomFactor={2}
            lensSize={150}
            isStatic={false}
            ariaLabel="Zoom Area"
          >
            <OptimizedImage
              src={image}
              alt={alt}
              width={100}
              height={100}
              className="h-44 w-full object-cover object-center"
            />
          </Lens>
        </CardHeader>

        <CardContent className="relative z-10 flex h-[calc(100%-176px)] flex-col justify-between gap-2 transition-colors duration-500 group-hover:text-black">
          <CardTitle className="text-2xl transition-colors duration-500">
            {title}
          </CardTitle>
          <CardDescription className="max-h-[100px] overflow-hidden text-ellipsis opacity-70 transition-colors duration-500">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
