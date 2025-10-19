export default function MarqueeText({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center">
      <div
        className="relative text-5xl font-bold text-transparent uppercase md:text-8xl"
        style={{
          WebkitTextStroke: '1px white',
        }}
      >
        {title}
      </div>
    </div>
  );
}
