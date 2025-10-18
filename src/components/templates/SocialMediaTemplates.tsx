import { useRef } from 'react';
import SocialMedia from '../atom/SocialMedia';
import { CredentialsProps } from '../atom/SocialMedia';
import { AuroraText } from '../ui/aurora-text';
import social from '../../data/credential-data.json';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SocialMediaTemplates() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [50, -20]);
  const scaleTitle = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1.2, 0.9]
  );

  const credValue: CredentialsProps = {
    linkedin: social?.linkedin,
    github: social?.github,
    phoneNumber: social?.phoneNumber,
    email: social?.email,
    scrollYProgress,
  };

  return (
    <section className="h-[200vh] bg-black text-white">
      <motion.div
        ref={ref}
        className="sticky top-0 flex h-screen flex-col items-center justify-between gap-12 px-10 md:flex-row md:gap-0"
      >
        <motion.h1
          style={{ y: yTitle, scale: scaleTitle }}
          className="flex flex-col text-center text-4xl font-bold tracking-tighter md:text-start md:text-5xl lg:text-7xl"
        >
          My <AuroraText>Social Media</AuroraText>
        </motion.h1>

        <SocialMedia {...credValue} />
      </motion.div>
    </section>
  );
}
