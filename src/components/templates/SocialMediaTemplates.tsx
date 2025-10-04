import SocialMedia from '../atom/SocialMedia';
import { CredentialsProps } from '../atom/SocialMedia';
import { AuroraText } from '../ui/aurora-text';

export default function SocialMediaTemplates() {
  const credValue: CredentialsProps = {
    env: process.env.NEXT_PUBLIC_ENV ?? '',
    website: process.env.NEXT_PUBLIC_WEBSITE ?? '',
    phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? '',
    email: process.env.NEXT_PUBLIC_EMAIL ?? '',
  };

  return (
    <>
      <div className="flex h-96 items-center px-6 justify-between">
        <h1 className="flex flex-col text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white">
          Our <AuroraText>Social Media</AuroraText>{' '}
        </h1>
        <SocialMedia
          email={credValue?.email}
          env={credValue?.env}
          phoneNumber={credValue?.phoneNumber}
          website={credValue?.website}
        />
      </div>
    </>
  );
}
