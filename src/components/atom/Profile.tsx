import Image from 'next/image';

export type ProfileProps = {
  name: string;
  img: string;
  role: string;
  age: number;
};

export default function Profile({ name, img, role, age }: ProfileProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Image
        src={img ?? "./assets/profile.jpg"}
        alt={name}
        width={150}
        height={150}
        className="rounded-full"
      ></Image>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="text-md">{age} Yo</p>
        </div>
        <p className="text-md">{role}</p>
      </div>
    </div>
  );
}
