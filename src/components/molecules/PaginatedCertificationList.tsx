'use client';

import { CardPortofolio } from '../atom/Card';
import Pagination from '../atom/Pagination';

interface CertificationItem {
  title: string;
  image: string;
  url: string;
  description: string;
}

export default function PaginatedCertificationList({ data }: { data: CertificationItem[] }) {
  return (
    <Pagination data={data}>
      {(paginatedData) => (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {paginatedData.map((item) => (
            <CardPortofolio
              key={item.title}
              title={item.title}
              image={item.image}
              alt={item.title}
              description={item.description}
              link={{ web: item.url }}
            />
          ))}
        </div>
      )}
    </Pagination>
  );
}
