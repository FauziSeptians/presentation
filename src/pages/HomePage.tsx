'use client';

import Credentials, { CredentialsProps } from '@/components/atom/Credentials';
import Profile, { ProfileProps } from '@/components/atom/Profile';

export default function HomePage() {
  const profileData: ProfileProps = {
    name: 'Muhammad Fauzi Septiana Putra',
    img: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-6">
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
