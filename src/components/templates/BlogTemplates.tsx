import { HtmlHTMLAttributes } from 'react';
import { AuroraText } from '../ui/aurora-text';
import { HeroVideoDialog } from '../ui/hero-video-dialog';
import blog from '../../data/blog-data.json';

export default function BlogTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div className="flex h-96 flex-col gap-12 px-6" {...props}>
      <h1 className="flex justify-center gap-3 text-center text-4xl font-bold tracking-tighter text-white md:text-start md:text-5xl lg:text-7xl">
        My <AuroraText>Blog</AuroraText>{' '}
      </h1>
      <div className="h-full">
        <div className="flex gap-4">
          {blog?.map((item) => {
            return (
              <HeroVideoDialog
                key={item?.videoSrc}
                className="!h-fit w-96"
                animationStyle="from-center"
                videoSrc={item?.videoSrc}
                thumbnailSrc={item?.thumbnailSrc}
                thumbnailAlt={item?.thumbnailSrc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
