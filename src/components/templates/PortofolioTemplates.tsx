'use client';

import { useState } from 'react';
import { CardPortofolio } from '../atom/Card';
import { RetroGrid } from '../ui/retro-grid';
import portoflio from '../../data/portofolio-data.json';
import { RainbowButton } from '../ui/rainbow-button';
import { HtmlHTMLAttributes } from 'react';

export default function PortofolioTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleItems = portoflio.slice(0, visibleCount);
  const hasMore = visibleCount < portoflio.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="flex h-fit flex-col gap-4" {...props}>
      <div className="relative flex h-72 w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
        <span className="pointer-events-none z-10 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl leading-none font-bold tracking-wide whitespace-pre-wrap text-transparent md:text-7xl">
          Portofolio
        </span>
        <RetroGrid lightLineColor="white" darkLineColor="white" />
      </div>
      <div className="flex flex-col gap-12 px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {visibleItems.map((item) => (
            <CardPortofolio
              key={item?.title}
              title={item?.title}
              image={item?.image}
              alt={item?.title}
              link={item?.url}
              description={item?.description}
            />
          ))}
        </div>
        {hasMore && (
          <div className="flex justify-center">
            <RainbowButton className="w-full max-w-xs" onClick={handleShowMore}>
              Show More
            </RainbowButton>
          </div>
        )}
      </div>
    </div>
  );
}
