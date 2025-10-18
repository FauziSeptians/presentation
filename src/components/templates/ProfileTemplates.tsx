'use client';

import { CredentialsProps } from '../atom/SocialMedia';
import Profile, { ProfileProps } from '../atom/Profile';
import Image from 'next/image';
import OptimizedImage from '../atom/Image';
import { HtmlHTMLAttributes } from 'react';

export default function ProfileTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  const profileData: ProfileProps = {
    name: 'Fauziseptians',
    img: 'https://avatars.githubusercontent.com/u/114633811?s=400&u=0a35d72cfd33db4fb46033f9772ca44cf68ac839&v=4',
    role: 'Software Developer',
    age: 22,
  };

  return (
    <div
      className="flex w-full items-center justify-between px-6 py-3"
      {...props}
    >
      <Profile
        name={profileData.name}
        img={profileData.img}
        role={profileData.role}
        age={profileData.age}
      />
      <div className="relative hidden w-full items-center justify-center md:flex">
        <OptimizedImage
          src="/images/images-porto.png"
          alt="zoro"
          width={390}
          height={100}
          className="absolute z-30 rounded-[45%]"
        />
        <div className="absolute z-0 h-[400px] w-[400px] rounded-[40%] bg-gradient-to-br from-[#ffd319] via-[#ff2975] to-[#8c1eff] opacity-60 blur-3xl" />
      </div>
    </div>
  );
}
