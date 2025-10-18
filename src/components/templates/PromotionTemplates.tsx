import { useDownloadPdf } from '@/hooks/useDownloadPdf';
import { AuroraText } from '../ui/aurora-text';
import { Button } from '../ui/button';
import { useToastStore } from '@/stores/useToastStore';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import { useRef, useState } from 'react';
import { classNames } from '@/utils/classNames'; // pastikan kamu punya helper ini

export default function PromotionTemplates() {
  const { download } = useDownloadPdf();
  const { showToast } = useToastStore();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Animasi scale dan teks
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1.1, 0.3]);
  const scaleText = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1.1, 0.3]);

  // State untuk mengatur apakah gradient aktif
  const [isGradientActive, setIsGradientActive] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setIsGradientActive(latest <= 0.42 || latest >= 0.55);
  });

  return (
    <section className="h-[200vh] bg-black text-white">
      <motion.div
        ref={ref}
        className="sticky top-0 flex h-screen items-center justify-center px-6"
      >
        <motion.div
          className={classNames(
            'relative flex w-full max-w-5xl items-center justify-center overflow-hidden rounded-xl p-6 transition-colors duration-700 md:p-10',
            isGradientActive
              ? 'gradient-animated bg-gradient-to-br from-white/10 to-white/5'
              : 'bg-black'
          )}
          style={{ scale, height: '100%' }}
        >
          {/* Overlay hitam untuk transisi smooth */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-0 rounded-xl bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: isGradientActive ? 0 : 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />

          {/* Konten utama */}
          <motion.div
            className="relative z-10 flex w-full flex-col items-center justify-center gap-8"
            style={{ scale: scaleText }}
          >
            <motion.div className="flex max-w-xl flex-col text-center">
              <p className="text-lg leading-snug font-semibold md:text-2xl">
                I’d love to bring my skills and energy to your organization.
              </p>
              <p className="mt-2 text-sm opacity-80 md:text-base">
                Are you open to exploring how I can support your goals?
              </p>
            </motion.div>

            <div className="flex w-full flex-col justify-center gap-4 pt-8 md:flex-row md:items-center">
              <Button
                variant="outline"
                className="!h-full w-full cursor-pointer md:w-auto"
                onClick={() => {
                  download(
                    '/files/cv.pdf',
                    'CV_Muhammad-Fauzi-Septiana-Putra.pdf'
                  );
                  showToast('download successfully!');
                }}
              >
                Download CV
              </Button>

              <a
                href="mailto:muhammad.putra1418@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Fauzi,%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
                className="flex w-full items-center justify-center rounded-md bg-white px-6 py-2 text-sm text-black transition hover:bg-white/90 md:w-auto md:text-base"
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
