'use client';

import ProfileTemplates from '@/components/templates/ProfileTemplates';
import SocialMediaTemplates from '@/components/templates/SocialMediaTemplates';
import PortofolioTemplates from '@/components/templates/PortofolioTemplates';
import FooterTemplates from '@/components/templates/FooterTemplates';
import HireMeTemplates from '@/components/templates/HireMeTemplates';
import SkillTemplates from '@/components/templates/SkillTemplates';
import CertificationTemplates from '@/components/templates/CertificationTemplates';
import BlogTemplates from '@/components/templates/BlogTemplates';
import PromotionTemplates from '@/components/templates/PromotionTemplates';
import SimpleVideoPlayer from '@/components/atom/SimpleVideoPlayer';
import { TextAnimate } from '@/components/ui/text-animate';
import { useRemoteConfigStore } from '@/stores/useRemoteConfigStore';

export default function HomePage() {
  const { data, isLoading } = useRemoteConfigStore();

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <TextAnimate animation="blurIn" as="h1">
          Loading.....
        </TextAnimate>
      </div>
    );

  return (
    <div className="min-h-screen w-full bg-black pt-16">
      {data?.musicPlayer && <SimpleVideoPlayer />}

      <div className="mx-auto flex h-full w-full max-w-6xl flex-col gap-36">
        <section id="profile" className="scroll-mt-24">
          <ProfileTemplates />
        </section>

        <section id="hire" className="scroll-mt-24">
          <HireMeTemplates />
        </section>

        <section id="social" className="scroll-mt-24">
          <SocialMediaTemplates />
        </section>

        {data?.portofolio && (
          <section id="project" className="scroll-mt-24">
            <PortofolioTemplates />
          </section>
        )}

        <section id="skill" className="scroll-mt-24">
          <SkillTemplates />
        </section>

        <section id="promotion" className="scroll-mt-24">
          <PromotionTemplates />
        </section>

        <section id="certification" className="scroll-mt-24">
          <CertificationTemplates />
        </section>

        <section id="blog" className="scroll-mt-24">
          <BlogTemplates />
        </section>

        <FooterTemplates />
      </div>
    </div>
  );
}
