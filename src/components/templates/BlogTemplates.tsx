import { HtmlHTMLAttributes } from 'react';
import { AuroraText } from '../ui/aurora-text';
import { HeroVideoDialog } from '../ui/hero-video-dialog';
import blog from '../../data/blog-data.json';
import Pagination from '../atom/Pagination';

export default function BlogTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div className="flex h-fit flex-col gap-12 px-6 md:h-96" {...props}>
      <h1 className="flex justify-center gap-3 text-center text-4xl font-bold tracking-tighter text-white md:text-start md:text-5xl lg:text-7xl">
        My <AuroraText>Blog</AuroraText>{' '}
      </h1>
      <div className="h-full">
        <Pagination data={blog}>
          {(data) => (
            <div className="flex min-h-[220px] flex-col gap-4 md:grid md:grid-cols-3">
              {data.map((item) => (
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
      </div>
    </div>
  );
}
