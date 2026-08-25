'use client';

import ExperienceCard from '@/components/molecules/ExperienceCard';
import { experienceData } from '@/data/experience-data';
import { HtmlHTMLAttributes } from 'react';
import { AuroraText } from '../ui/aurora-text';

export default function ExperienceTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div
      className="flex flex-col items-center justify-start gap-20 px-6 py-8"
      {...props}
    >
      <h1 className="flex flex-col text-center text-4xl font-bold tracking-tighter md:text-start md:text-5xl lg:text-7xl">
        <AuroraText>Work Experience</AuroraText>
      </h1>

      <div className="relative w-full">
        {experienceData.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${experience.period}`}
            experience={experience}
            index={index}
            isLast={index === experienceData.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
