import { useToastStore } from '@/stores/useToastStore';
import { classNames } from '@/utils/classNames';
import { MotionValue, useMotionValueEvent } from 'framer-motion';
import { Github, InstagramIcon, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export type CredentialsProps = {
  linkedin: string;
  github: string;
  instagram: string;
  email: string;
  scrollYProgress: MotionValue<number>;
};

export default function SocialMedia({
  linkedin,
  github,
  instagram,
  email,
  scrollYProgress,
}: CredentialsProps) {
  const { showToast } = useToastStore();
  const [animation, setAnimation] = useState(0);

  const data = [
    {
      icon: <Linkedin size={17} />,
      val: linkedin,
      title: 'linkedin',
    },
    {
      icon: <Github size={17} />,
      val: github,
      title: 'github',
    },
    {
      icon: <InstagramIcon size={17} />,
      val: instagram,
      title: 'instagram',
    },
    {
      icon: <Mail size={17} />,
      val: email,
      title: 'email',
    },
  ];

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setAnimation(latest);
  });

  const activeCount = data.filter(
    (_, i) => animation >= 0.2 + i * 0.125
  ).length;
  const progressHeight = (activeCount / data.length) * 100;

  return (
    <div className="relative flex w-full max-w-md flex-col gap-12">
      {/* Background line */}
      <div className="absolute left-[20px] z-0 h-full w-[5px] rounded-full dark:bg-white/20"></div>

      {/* Progress line */}
      <div
        className="absolute left-[20px] z-10 w-[5px] rounded-full bg-black transition-all duration-300 dark:bg-white"
        style={{ height: `${progressHeight}%` }}
      ></div>

      {/* Items */}
      {data.map((item, index) => {
        const start = 0.2 + index * 0.125;
        const isActive = animation >= start;

        return (
          <div
            key={item.val}
            className="group z-10 flex flex-row items-center gap-3"
          >
            <div
              className={classNames(
                'rounded-full p-3 text-white transition-all duration-300',
                isActive
                  ? 'border-2 border-white bg-black opacity-100'
                  : 'border-2 border-black/30 bg-black/30 opacity-50'
              )}
            >
              {item.icon}
            </div>
            <button
              className="text-md relative cursor-pointer overflow-hidden px-3 py-2 tracking-wider text-white"
              title={item.title}
              onClick={() => {
                showToast('Data copied successfully!');
                navigator.clipboard.writeText(item.val);
              }}
            >
              <span
                className={classNames(
                  'relative z-10 truncate overflow-hidden text-xs whitespace-nowrap transition-colors duration-300 group-hover:text-black md:text-base',
                  isActive ? 'text-white dark:text-black' : ''
                )}
              >
                {item.val}
              </span>
              <span
                className={classNames(
                  'absolute top-0 left-0 h-full bg-black transition-all duration-500 dark:bg-white',
                  isActive ? 'w-full' : 'w-0'
                )}
              ></span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
