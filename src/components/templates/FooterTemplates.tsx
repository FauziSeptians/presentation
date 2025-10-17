import { HtmlHTMLAttributes } from 'react';
import { AuroraText } from '../ui/aurora-text';

export default function FooterTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div
      className="h-96 border-t-[1px] border-neutral-200/30 bg-black px-6 py-8"
      {...props}
    >
      <p className="text-md flex flex-col font-bold tracking-tighter text-white md:text-xl lg:text-3xl">
        Fauziseptians <AuroraText>Software Developer</AuroraText>{' '}
      </p>
    </div>
  );
}
