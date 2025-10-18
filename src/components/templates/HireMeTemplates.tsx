'use client';

import { HtmlHTMLAttributes, useEffect, useRef } from 'react';
import CardHire from '../molecules/CardHire';
import { AuroraText } from '../ui/aurora-text';
import { hireMe } from '../../data/hireme-data';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function HireMeTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '0px 0px -100px 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <div
      className="flex flex-col items-center justify-start gap-20 px-6 py-8"
      ref={containerRef}
      {...props}
    >
      <h1 className="flex flex-col text-center text-4xl font-bold tracking-tighter md:text-start md:text-5xl lg:text-7xl">
        <AuroraText>Why Hire Me</AuroraText>
      </h1>

      <div className="flex w-full flex-col gap-5 text-justify text-white md:flex-row md:px-8">
        {hireMe.map((item, index) => (
          <motion.div
            key={item?.title}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <CardHire
              title={item?.title}
              description={item?.description}
              icon={item?.icon}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
