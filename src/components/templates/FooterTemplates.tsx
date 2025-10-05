import { AuroraText } from '../ui/aurora-text';

export default function FooterTemplates() {
  return (
    <div className="h-96 border-t-[1px] border-neutral-200/30 bg-black py-8 px-6">
      <div className="">
        <p className="text-md flex flex-col font-bold tracking-tighter text-white md:text-xl lg:text-3xl">
          Fauziseptians <AuroraText>Software Developer</AuroraText>{' '}
        </p>
      </div>
    </div>
  );
}
