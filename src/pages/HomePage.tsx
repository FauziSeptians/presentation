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
import PortofolioTemplates from '@/components/templates/PortofolioTemplates';
import FooterTemplates from '@/components/templates/FooterTemplates';

export default function HomePage() {
  const { data, isLoading } = useRemoteConfigStore();

  console.log('store', data);

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <TextAnimate animation="blurIn" as="h1">
          Loading.....
        </TextAnimate>
      </div>
    );

  return (
    <div className="min-h-screen w-full overflow-y-auto bg-black pt-16">
      {data?.musicPlayer ? <SimpleVideoPlayer /> : null}
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-36">
        <ProfileTemplates />
        <SocialMediaTemplates />
        {data?.portofolio ? <PortofolioTemplates /> : null}
        <FooterTemplates/>
      </div>
    </div>
  );
}
