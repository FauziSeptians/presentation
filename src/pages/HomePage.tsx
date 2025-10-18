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
import SpacerTextTemplate from '@/components/templates/SpacerTextTemplate';
import AnimatedSection from '@/components/atom/AnimatedSection';

export default function HomePage() {
  const { data, isLoading } = useRemoteConfigStore();

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <TextAnimate animation="blurIn" as="h1">
          Loading.....
        </TextAnimate>
      </div>
    );

  return (
    <div className="min-h-screen w-full bg-black pt-16">
      {data?.musicPlayer && <SimpleVideoPlayer />}

      <div className="mx-auto flex h-full w-full max-w-6xl flex-col gap-36">
        <AnimatedSection id="profile" className="scroll-mt-24">
          <ProfileTemplates />
        </AnimatedSection>

        <AnimatedSection id="hire" className="scroll-mt-24">
          <HireMeTemplates />
        </AnimatedSection>

        <AnimatedSection id="social" className="scroll-mt-24">
          <SocialMediaTemplates />
        </AnimatedSection>

        {data?.portofolio && (
          <AnimatedSection id="project" className="scroll-mt-24">
            <PortofolioTemplates />
          </AnimatedSection>
        )}

        <AnimatedSection id="skill" className="scroll-mt-24">
          <SkillTemplates />
        </AnimatedSection>

        <AnimatedSection id="promotion" className="scroll-mt-24">
          <PromotionTemplates />
        </AnimatedSection>

        <AnimatedSection id="certification" className="scroll-mt-24">
          <CertificationTemplates />
        </AnimatedSection>

        <SpacerTextTemplate />

        <AnimatedSection id="blog" className="scroll-mt-24">
          <BlogTemplates />
        </AnimatedSection>

        <FooterTemplates />
      </div>
    </div>
  );
}
