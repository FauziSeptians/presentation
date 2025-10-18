import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

export default function AnimatedSection({
  children,
  className,
  ...props
}: HTMLMotionProps<'section'>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
