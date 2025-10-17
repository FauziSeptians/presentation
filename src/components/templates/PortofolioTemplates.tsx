import { CardPortofolio } from '../atom/Card';
import { RetroGrid } from '../ui/retro-grid';
import portoflio from '../../data/portofolio-data.json';
import { RainbowButton } from '../ui/rainbow-button';
import { HtmlHTMLAttributes } from 'react';

export default function PortofolioTemplates(props?: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex h-fit flex-col gap-4" {...props}>
      <div className="relative flex h-72 w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
        <span className="pointer-events-none z-10 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl md:text-7xl leading-none font-bold tracking-wide whitespace-pre-wrap text-transparent">
          Portofolio
        </span>
        <RetroGrid lightLineColor="white" darkLineColor="white" />
      </div>
      <div className="flex flex-col gap-12 px-6">
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">
          {portoflio.map((item) => (
            <CardPortofolio
              key={item?.title}
              title={item?.title}
              image={item?.image}
              alt={item?.alt}
              description={item?.description}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <RainbowButton className="w-full max-w-xs">Show More</RainbowButton>
        </div>
      </div>
    </div>
  );
}
