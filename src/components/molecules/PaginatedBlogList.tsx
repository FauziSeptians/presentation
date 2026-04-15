'use client';

import Pagination from '../atom/Pagination';
import { HeroVideoDialog } from '../ui/hero-video-dialog';

interface BlogItem {
  videoSrc: string;
  thumbnailSrc: string;
}

export default function PaginatedBlogList({ data }: { data: BlogItem[] }) {
  return (
    <Pagination data={data}>
      {(paginatedData) => (
        <div className="flex min-h-[220px] flex-col gap-4 md:grid md:grid-cols-3">
          {paginatedData.map((item) => (
            <HeroVideoDialog
              key={item.videoSrc}
              className="!h-full"
              animationStyle="from-center"
              videoSrc={item.videoSrc}
              thumbnailSrc={item.thumbnailSrc}
              thumbnailAlt={item.thumbnailSrc}
            />
          ))}
        </div>
      )}
    </Pagination>
  );
}
