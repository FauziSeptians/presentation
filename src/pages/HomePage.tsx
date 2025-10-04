'use client';

import Credentials, { CredentialsProps } from '@/components/atom/Credentials';
import Profile, { ProfileProps } from '@/components/atom/Profile';
import { useRemoteConfigStore } from '@/stores/useRemoteConfigStore';
import Image from 'next/image';

export default function HomePage() {
  const { data, isLoading } = useRemoteConfigStore();

  const profileData: ProfileProps = {
    name: 'Muhammad Fauzi Septiana Putra',
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

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-6">
        {data?.banner ? (
          <Image
            src="https://asset-2.tstatic.net/wartakota/foto/bank/images/Jersey-terbaru-timnas-Indonesia-2025.jpg"
            alt="indonesia"
            width={1200} 
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
        ) : null}
        <Profile
          name={profileData?.name}
          img={profileData?.img}
          role={profileData?.role}
          age={profileData?.age}
        />
        <Credentials
          email={credValue?.email}
          env={credValue?.env}
          phoneNumber={credValue?.phoneNumber}
          website={credValue?.website}
        />
      </div>
    </div>
  );
}
