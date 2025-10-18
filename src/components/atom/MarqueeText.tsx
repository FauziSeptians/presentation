import { AuroraText } from '../ui/aurora-text';

export default function MarqueeText({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center">
      <div
        className="relative text-5xl md:text-8xl font-bold text-transparent uppercase"
        style={{
          WebkitTextStroke: '1px white',
        }}
      >
        {title}
      </div>
    </div>
  );
}
