'use client';

import { motion, useInView } from 'framer-motion';
import { HtmlHTMLAttributes, useRef } from 'react';

export default function AnimatedSection({
  children,
  className,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <div {...props}>
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
