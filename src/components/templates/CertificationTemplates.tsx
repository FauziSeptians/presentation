import { HtmlHTMLAttributes } from 'react';
import certificates from '../../data/certificates-data.json';
import { CardPortofolio } from '../atom/Card';
import Pagination from '../atom/Pagination';
import { AuroraText } from '../ui/aurora-text';

export default function CertificationTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div className="flex h-fit flex-col gap-12 px-6" {...props}>
      <h1 className="flex justify-center gap-3 text-center text-4xl font-bold tracking-tighter text-black md:text-start md:text-5xl lg:text-7xl dark:text-white">
        My <AuroraText>Certification</AuroraText>{' '}
      </h1>
      <div className="h-full">
        <Pagination data={certificates}>
          {(data) => (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {data.slice(0, 3).map((item) => (
                <CardPortofolio
                  key={item?.title}
                  title={item?.title}
                  image={item?.image}
                  alt={item?.title}
                  description={item?.description}
                  link={item?.url}
                />
              ))}
            </div>
          )}
        </Pagination>
      </div>
    </div>
  );
}
