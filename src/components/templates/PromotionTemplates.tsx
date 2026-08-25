'use client';

import { useDownloadPdf } from '@/hooks/useDownloadPdf';
import { useToastStore } from '@/stores/useToastStore';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';
import { AuroraText } from '../ui/aurora-text';
import { Button } from '../ui/button';

export default function PromotionTemplates() {
  const { download } = useDownloadPdf();
  const { showToast } = useToastStore();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1.1, 0.3]);
  const scaleText = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1.1, 0.3]);

  const [isGradientActive, setIsGradientActive] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setIsGradientActive(latest <= 0.42 || latest >= 0.55);
  });

  return (
    <section className="h-fit bg-white text-black md:h-[200vh] dark:bg-black dark:text-white">
      <motion.div
        ref={ref}
        className="sticky top-0 flex h-fit items-center justify-center px-6 md:h-screen"
      >
        <motion.div
          className="relative flex w-full max-w-5xl items-center justify-center overflow-hidden rounded-xl p-6 md:p-10"
          style={{ scale, height: '100%' }}
        >
          {/* Layer gradient background */}
          <motion.div
            className="gradient-animated absolute inset-0 z-0 rounded-xl bg-gradient-to-br from-white/10 to-white/5"
            animate={{ opacity: isGradientActive ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />

          {/* Layer solid black background */}
          <motion.div
            className="absolute inset-0 z-0 rounded-xl bg-white dark:bg-black"
            animate={{ opacity: isGradientActive ? 0 : 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />

          {/* Main content */}
          <motion.div
            className="relative z-10 flex w-full flex-col items-center justify-center gap-8"
            style={{ scale: scaleText }}
          >
            <div className="flex max-w-xl flex-col text-center">
              <p className="text-lg leading-snug font-semibold md:text-2xl">
                I’d love to bring my skills and energy to your organization.
              </p>
              <p className="mt-2 text-sm opacity-80 md:text-base">
                Are you open to exploring how I can support your goals?
              </p>
            </div>

            <div className="flex w-full flex-col justify-center gap-4 pt-8 md:flex-row md:items-center">
              <Button
                variant="outline"
                className="!h-full w-full cursor-pointer md:w-auto"
                onClick={() => {
                  download(
                    '/files/cv_new.pdf',
                    'CV_Muhammad-Fauzi-Septiana-Putra.pdf'
                  );
                  showToast('Download successfully!');
                }}
              >
                Download CV
              </Button>

              <a
                href="mailto:muhammad.putra1418@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Fauzi,%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
                className="flex w-full items-center justify-center rounded-md bg-black px-6 py-2 text-sm text-black transition hover:bg-white/90 md:w-auto md:text-base dark:bg-white"
              >
                <AuroraText>Email Me</AuroraText>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
