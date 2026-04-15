import { HtmlHTMLAttributes } from 'react';
import portofolio from '../../data/portofolio-data.json';
import AnimatedPortofolioList from '../molecules/AnimatedPortofolioList';
import { RetroGrid } from '../ui/retro-grid';

export default function PortofolioTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div className="flex h-fit flex-col gap-4" {...props}>
      <div className="relative flex h-72 w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <span className="pointer-events-none z-10 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl leading-none font-bold tracking-wide whitespace-pre-wrap text-transparent md:text-7xl">
          Portofolio
        </span>
        <RetroGrid />
      </div>

      <AnimatedPortofolioList items={portofolio} />
    </div>
  );
}
