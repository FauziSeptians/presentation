import AnimatedSection from '@/components/atom/AnimatedSection';
import HireMeTemplates from '@/components/templates/HireMeTemplates';
import ProfileTemplates from '@/components/templates/ProfileTemplates';
import SocialMediaTemplates from '@/components/templates/SocialMediaTemplates';
import PortofolioTemplates from '@/components/templates/PortofolioTemplates';
import SkillTemplates from '@/components/templates/SkillTemplates';
import PromotionTemplates from '@/components/templates/PromotionTemplates';
import CertificationTemplates from '@/components/templates/CertificationTemplates';
import BlogTemplates from '@/components/templates/BlogTemplates';
import SpacerTextTemplate from '@/components/templates/SpacerTextTemplate';
import FooterTemplates from '@/components/templates/FooterTemplates';

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white pt-16 md:pt-0 dark:bg-black">
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

        <AnimatedSection id="project" className="scroll-mt-24">
          <PortofolioTemplates />
        </AnimatedSection>

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
