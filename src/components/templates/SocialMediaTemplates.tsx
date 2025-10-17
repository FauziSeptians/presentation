import { HtmlHTMLAttributes } from 'react';
import SocialMedia from '../atom/SocialMedia';
import { CredentialsProps } from '../atom/SocialMedia';
import { AuroraText } from '../ui/aurora-text';
import social from '../../data/credential-data.json';

export default function SocialMediaTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  const credValue: CredentialsProps = {
    linkedin: social?.linkedin,
    github: social?.github,
    phoneNumber: social?.phoneNumber,
    email: social?.email,
  };

  return (
    <div
      className="flex h-96 flex-col items-center justify-between gap-12 px-6 md:flex-row md:gap-0"
      {...props}
    >
      <h1 className="flex flex-col text-center text-4xl font-bold tracking-tighter text-white md:text-start md:text-5xl lg:text-7xl">
        My <AuroraText>Social Media</AuroraText>{' '}
      </h1>
      <SocialMedia
        email={credValue?.email}
        linkedin={credValue?.linkedin}
        phoneNumber={credValue?.phoneNumber}
        github={credValue?.github}
      />
    </div>
  );
}
