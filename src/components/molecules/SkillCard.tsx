import { cn } from "@/lib/utils";
import OptimizedImage from "../atom/Image";

export default function SkillCard ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <figure
      className={cn(
        'relative h-24 w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex h-full flex-row items-center gap-2">
        <OptimizedImage
          className="rounded-full"
          width={32}
          height={32}
          alt={title}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {title}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};