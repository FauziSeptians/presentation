import Image from 'next/image';
import { HyperText } from '../ui/hyper-text';

export type ProfileProps = {
  name: string;
  img: string;
  role: string;
  age: number;
};

export default function Profile({ name, img, role, age }: ProfileProps) {
  const names = `Hi, I'M ${name}`;
  return (
    <div className="flex w-full items-center justify-between gap-4 text-white">
      <div className="flex w-full max-w-lg flex-col gap-6">
        <div className="flex flex-col gap-3">
          <HyperText className="!text-md !tracking-widest !uppercase">
            {names}
          </HyperText>
          <p className="text-7xl font-semibold uppercase">I&apos;M A {role}</p>
        </div>
        <p className="text-justify opacity-70">
          I&apos;m Muhammad Fauzi Septiana Putra, a passionate Software Developer
          with a keen eye for design and user experience. This space reflects my
          journey through code and creativity, blending functionality with
          aesthetics to build meaningful digital experiences.
        </p>
      </div>
    </div>
  );
}
