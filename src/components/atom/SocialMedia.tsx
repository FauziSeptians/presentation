import { useToastStore } from '@/stores/useToastStore';
import { classNames } from '@/utils/classNames';
import { Box, Computer, EarthIcon, Phone } from 'lucide-react';

export type CredentialsProps = {
  linkedin: string;
  github: string;
  phoneNumber: string;
  email: string;
};

export default function SocialMedia({
  linkedin,
  github,
  phoneNumber,
  email,
}: CredentialsProps) {
  const { showToast } = useToastStore();

  const data = [
    {
      icon: <Computer size={17} />,
      val: linkedin,
      title: 'linkedin',
    },
    {
      icon: <EarthIcon size={17} />,
      val: github,
      title: 'github',
    },
    {
      icon: <Phone size={17} />,
      val: phoneNumber,
      title: 'phone number',
    },
    { icon: <Box size={17} />, val: email, title: 'email' },
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
            <button
              className="text-md relative cursor-pointer overflow-hidden px-3 py-2 tracking-wider text-white"
              title={item?.title}
              onClick={() => {
                showToast('Data copied successfully!');
                navigator.clipboard.writeText(item?.val);
              }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                {item.val}
              </span>
              <span className="absolute top-0 left-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
