import { HtmlHTMLAttributes } from 'react';
import { AuroraText } from '../ui/aurora-text';

export default function CertificationTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div className="flex h-96 flex-col gap-12 px-6" {...props}>
      <h1 className="flex gap-3 text-center text-4xl font-bold tracking-tighter text-white md:text-start md:text-5xl lg:text-7xl">
        My <AuroraText>Certification</AuroraText>{' '}
      </h1>
      <div className="h-full bg-red-200">Certification</div>
    </div>
  );
}
