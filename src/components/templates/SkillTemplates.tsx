import { cn } from '@/lib/utils';
import CardHire from '../molecules/CardHire';
import { Marquee } from '../ui/marquee';
import { AuroraText } from '../ui/aurora-text';
import skills from '../../data/skill-data.json';
import Image from 'next/image';
import OptimizedImage from '../atom/Image';
import SkillCard from '../molecules/SkillCard';
import { HtmlHTMLAttributes } from 'react';

export default function SkillTemplates(props?: HtmlHTMLAttributes<HTMLDivElement>) {
  const firstRow = skills.slice(0, skills.length / 2);
  const secondRow = skills.slice(skills.length / 2);

  return (
    <div className="flex h-96 flex-col gap-12 px-6" {...props}>
      <h1 className="flex gap-3 text-center text-4xl font-bold tracking-tighter text-white md:text-start md:text-5xl lg:text-7xl">
        My <AuroraText>Stack</AuroraText>{' '}
      </h1>
      <>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-3">
          <Marquee pauseOnHover className="[--duration:60s]">
            {firstRow.map((review) => (
              <SkillCard key={review.title} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:60s]">
            {secondRow.map((review) => (
              <SkillCard key={review.title} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </>
    </div>
  );
}
