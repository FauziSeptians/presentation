import { HtmlHTMLAttributes } from 'react';
import { AuroraText } from '../ui/aurora-text';
import { CardPortofolio } from '../atom/Card';
import portofolio from "../../data/portofolio-data.json"

export default function CertificationTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div className="flex md:h-96 h-fit flex-col gap-12 px-6" {...props}>
      <h1 className="flex gap-3 text-center justify-center text-4xl font-bold tracking-tighter text-white md:text-start md:text-5xl lg:text-7xl">
        My <AuroraText>Certification</AuroraText>{' '}
      </h1>
      <div className="h-full">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {portofolio.slice(0,3).map((item) => (
            <CardPortofolio
              key={item?.title}
              title={item?.title}
              image={item?.image}
              alt={item?.alt}
              description={item?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
