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

export function CardPortofolio({
  title,
  description,
  image,
  alt = 'images',
}: CardTypes) {
  return (
    <Card className="relative max-w-md !pt-0 text-white shadow-none">
      <CardHeader className="p-0">
        <Lens
          zoomFactor={2}
          lensSize={150}
          isStatic={false}
          ariaLabel="Zoom Area"
        >
          <img
            src={image}
            alt={alt}
            width={100}
            height={100}
            className="h-44 w-full object-cover object-center"
          />
        </Lens>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="opacity-70">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
