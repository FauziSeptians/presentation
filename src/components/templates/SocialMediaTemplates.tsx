import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import social from '../../data/credential-data.json';
import SocialMedia, { CredentialsProps } from '../atom/SocialMedia';
import { AuroraText } from '../ui/aurora-text';

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

  const credValue: CredentialsProps = { ...social, scrollYProgress };

  return (
    <section className="h-fit bg-black text-white md:h-[200vh]">
      <motion.div
        ref={ref}
        className="sticky top-0 flex flex-col items-center justify-between gap-12 px-10 md:h-screen md:flex-row md:gap-0"
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
