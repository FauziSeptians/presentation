import { classNames } from '@/utils/classNames';
import { Box, Computer, EarthIcon, Phone } from 'lucide-react';

export type CredentialsProps = {
  env: string;
  website: string;
  phoneNumber: string;
  email: string;
};

export default function SocialMedia({
  env,
  website,
  phoneNumber,
  email,
}: CredentialsProps) {
  const data = [
    {
      icon: <Computer size={17} />,
      val: env,
    },
    {
      icon: <EarthIcon size={17} />,
      val: website,
    },
    {
      icon: <Phone size={17} />,
      val: phoneNumber,
    },
    { icon: <Box size={17} />, val: email },
  ];

  return (
    <div className="relative flex w-full max-w-md flex-col gap-12">
      <div className="absolute left-[20px] z-0 h-full w-[5px] rounded-full bg-white/90"></div>
      {data.map((item) => {
        return (
          <div
            key={item.val}
            className={classNames(
              'group z-10 flex flex-row items-center gap-3'
            )}
          >
            <div className="rounded-full border-2 border-white bg-black p-3 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
              {item.icon}
            </div>
            <p className="text-md relative overflow-hidden px-3 py-2 tracking-wider text-white">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                {item.val}
              </span>
              <span className="absolute top-0 left-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
