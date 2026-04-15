import { HtmlHTMLAttributes } from 'react';
import blog from '../../data/blog-data.json';
import PaginatedBlogList from '../molecules/PaginatedBlogList';
import { AuroraText } from '../ui/aurora-text';

export default function BlogTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div className="flex h-fit flex-col gap-12 px-6 md:h-96" {...props}>
      <h1 className="flex justify-center gap-3 text-center text-4xl font-bold tracking-tighter text-black md:text-start md:text-5xl lg:text-7xl dark:text-white">
        My <AuroraText>Blog</AuroraText>{' '}
      </h1>
      <div className="h-full">
        <PaginatedBlogList data={blog} />
      </div>
    </div>
  );
}
