'use client';

import { useState } from 'react';
import { CardPortofolio } from '../atom/Card';
import { RainbowButton } from '../ui/rainbow-button';

interface PortofolioItem {
  title: string;
  image: string;
  url: {
    github?: string;
    web?: string;
  };
  description: string;
  tag: string[];
  category: string;
}

interface AnimatedPortofolioListProps {
  items: PortofolioItem[];
}

export default function AnimatedPortofolioList({ items }: AnimatedPortofolioListProps) {
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="flex flex-col gap-12 px-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {visibleItems.map((item) => (
          <CardPortofolio
            key={item.title}
            title={item.title}
            image={item.image}
            alt={item.title}
            link={{ github: item.url.github, web: item.url.web }}
            description={item.description}
            tags={item.tag}
            category={item.category}
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
  );
}
