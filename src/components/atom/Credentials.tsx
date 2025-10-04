import { classNames } from '@/utils/classNames';
import { Box, Computer, EarthIcon, Phone } from 'lucide-react';

export type CredentialsProps = {
  env: string;
  website: string;
  phoneNumber: string;
  email: string;
};

export default function Credentials({
  env,
  website,
  phoneNumber,
  email,
}: CredentialsProps) {
  const data = [
    {
      icon: <Computer />,
      val: env,
    },
    {
      icon: <EarthIcon />,
      val: website,
    },
    {
      icon: <Phone />,
      val: phoneNumber,
    },
    { icon: <Box />, val: email },
  ];

  return (
    <div className="flex flex-col gap-4 rounded-md border-[1px] border-neutral-400 p-3 shadow-xs">
      {data?.map((item, idx) => {
        const isLastItem = idx === data?.length - 1;

        return (
          <div
            key={item?.val}
            className={classNames(
              isLastItem ? '' : 'border-b-[1px] border-b-neutral-200',
              'flex flex-row items-center justify-between pb-3'
            )}
          >
            {item?.icon}
            <p className="text-md">{item?.val}</p>
          </div>
        );
      })}
    </div>
  );
}
