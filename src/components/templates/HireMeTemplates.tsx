import { HtmlHTMLAttributes } from 'react';
import CardHire from '../molecules/CardHire';
import { AuroraText } from '../ui/aurora-text';
import hireMe from '../../data/hireme-data.json';

export default function HireMeTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div
      className="flex flex-col items-center justify-start gap-20 px-6 py-8"
      {...props}
    >
      <h1 className="flex flex-col text-center text-4xl font-bold tracking-tighter md:text-start md:text-5xl lg:text-7xl">
        <AuroraText>Why Hire Me</AuroraText>{' '}
      </h1>
      <div className="flex w-full flex-col gap-5 text-justify text-white md:flex-row md:px-8">
        {hireMe.map((item) => {
          return (
            <CardHire
              key={item?.title}
              title={item?.title}
              description={item?.description}
            />
          );
        })}
      </div>
    </div>
  );
}
