import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export default function CardHire({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <div className="group relative flex w-full cursor-pointer flex-col items-center justify-center gap-4 overflow-hidden rounded-xl px-4 py-6 transition-all duration-500 hover:bg-black dark:hover:bg-white">
      <span className="absolute inset-0 z-0 w-0 bg-black transition-all duration-500 group-hover:w-full dark:bg-white" />
      <div className="flex h-24 w-24 items-center justify-center rounded-full transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
        <Icon
          className="h-14 w-14 animate-bounce"
          style={{ animationDuration: '5s' }}
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="relative z-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text font-semibold tracking-wider text-transparent transition-all duration-500 group-hover:bg-none group-hover:text-white dark:group-hover:text-black">
          {title}
        </p>
        <p className="relative z-10 px-5 text-center text-xs tracking-wider opacity-70 transition-colors duration-500 group-hover:text-white md:px-3 dark:text-white dark:group-hover:text-black">
          {description}
        </p>
      </div>
    </div>
  );
}
