'use client';

import { CredentialsProps } from '../atom/SocialMedia';
import Profile, { ProfileProps } from '../atom/Profile';
import Image from 'next/image';

export default function ProfileTemplates() {
  const profileData: ProfileProps = {
    name: 'Fauziseptians',
    img: 'https://avatars.githubusercontent.com/u/114633811?s=400&u=0a35d72cfd33db4fb46033f9772ca44cf68ac839&v=4',
    role: 'Software Developer',
    age: 22,
  };

  const credValue: CredentialsProps = {
    env: process.env.NEXT_PUBLIC_ENV ?? '',
    website: process.env.NEXT_PUBLIC_WEBSITE ?? '',
    phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? '',
    email: process.env.NEXT_PUBLIC_EMAIL ?? '',
  };

  return (
    <div className="flex w-full items-center justify-between px-6 py-10 my-24">
      <Profile
        name={profileData.name}
        img={profileData.img}
        role={profileData.role}
        age={profileData.age}
      />
      <div className="relative flex w-full items-center justify-center">
        <Image
          src="/assets/zoro.png"
          alt="zoro"
          width={490}
          height={400}
          className="absolute z-50"
        />
        <Image
          src="/assets/circle.png"
          alt="zoro"
          width={490}
          height={400}
          className="absolute rounded-xl"
        />
      </div>
    </div>
  );
}
