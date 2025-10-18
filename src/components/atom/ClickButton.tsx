import { classNames } from '@/utils/classNames';
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  LucideProps,
} from 'lucide-react';
import {
  ForwardRefExoticComponent,
  MouseEventHandler,
  RefAttributes,
  useReducer,
  ReactNode,
} from 'react';

export default function ClickButton({
  Icon,
  onClick,
  className,
}: {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  onClick: MouseEventHandler<SVGSVGElement> | undefined;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        'group absolute right-2 z-20 flex h-full w-fit items-center',
        className
      )}
    >
      <Icon
        size={48}
        onClick={onClick}
        className="cursor-pointer text-white transition-opacity duration-300"
      />
    </div>
  );
}
