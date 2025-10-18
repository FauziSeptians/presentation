import { HtmlHTMLAttributes } from 'react';
import { AuroraText } from '../ui/aurora-text';
import { CardPortofolio } from '../atom/Card';
import portofolio from '../../data/portofolio-data.json';
import Pagination from '../atom/Pagination';

export default function CertificationTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div className="flex h-fit flex-col gap-12 px-6" {...props}>
      <h1 className="flex justify-center gap-3 text-center text-4xl font-bold tracking-tighter text-white md:text-start md:text-5xl lg:text-7xl">
        My <AuroraText>Certification</AuroraText>{' '}
      </h1>
      <div className="h-full">
        <Pagination data={portofolio}>
          {(data) => (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {data.slice(0, 3).map((item) => (
                <CardPortofolio
                  key={item?.title}
                  title={item?.title}
                  image={item?.image}
                  alt={item?.alt}
                  description={item?.description}
                />
              ))}
            </div>
          )}
        </Pagination>
      </div>
    </div>
  );
}
