import MarqueeText from '../atom/MarqueeText';
import SkillCard from '../molecules/SkillCard';
import { Marquee } from '../ui/marquee';

const text = [
  'Software Engineer | ',
  'Muhammad Fauzi Septiana Putra | ',
  'Junior Developer',
];

export default function SpacerTextTemplate() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden">
      <Marquee pauseOnHover className="[--duration:40s]">
        {text.map((item) => (
          <MarqueeText key={item} title={item} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {text.map((item) => (
          <MarqueeText key={item} title={item} />
        ))}
      </Marquee>
    </div>
  );
}
