'use client';

import { HtmlHTMLAttributes } from 'react';
import { hireMe } from '../../data/hireme-data';
import AnimatedHireMeList from '../molecules/AnimatedHireMeList';
import { AuroraText } from '../ui/aurora-text';

export default function HireMeTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div
      className="flex flex-col items-center justify-start gap-20 px-6 py-8"
      {...props}
    >
      <h1 className="flex flex-col text-center text-4xl font-bold tracking-tighter md:text-start md:text-5xl lg:text-7xl">
        <AuroraText>Why Hire Me</AuroraText>
      </h1>

      <AnimatedHireMeList items={hireMe} />
    </div>
  );
}
