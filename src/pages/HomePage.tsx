'use client';

import Credentials, { CredentialsProps } from '@/components/atom/SocialMedia';
import Profile, { ProfileProps } from '@/components/atom/Profile';
import ProfileTemplates from '@/components/templates/ProfileTemplates';
import SocialMediaTemplates from '@/components/templates/SocialMediaTemplates';
import { RetroGrid } from '@/components/ui/retro-grid';
import { TextAnimate } from '@/components/ui/text-animate';
import { VideoText } from '@/components/ui/video-text';
import { useRemoteConfigStore } from '@/stores/useRemoteConfigStore';
import Image from 'next/image';
import SimpleVideoPlayer from '@/components/atom/SimpleVideoPlayer';

export default function HomePage() {
  const { data, isLoading } = useRemoteConfigStore();

  console.log("store", data)

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <TextAnimate animation="blurIn" as="h1">
          Loading.....
        </TextAnimate>
      </div>
    );

  return (
    <div className="min-h-screen w-full overflow-y-auto bg-black">
      {data?.musicPlayer ? <SimpleVideoPlayer /> : null}
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-36">
        <ProfileTemplates />
        <SocialMediaTemplates />
        {data?.portofolio ? (
          <div className="relative flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
            <span className="pointer-events-none z-10 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl leading-none font-bold tracking-wide whitespace-pre-wrap text-transparent">
              Portofolio
            </span>
            <RetroGrid lightLineColor="white" darkLineColor="white" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
