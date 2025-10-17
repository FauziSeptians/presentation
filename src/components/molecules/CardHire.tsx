export default function CardHire({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="h-24 w-24 rounded-full bg-red-200"></div>
      <div className="flex flex-col items-center gap-2 text-white">
        <p className="font-semibold tracking-wider">{title}</p>
        <p className="px-5 text-center text-xs tracking-wider opacity-70 md:px-3">
          {description}
        </p>
      </div>
    </div>
  );
}
