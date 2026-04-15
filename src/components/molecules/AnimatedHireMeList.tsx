'use client';

import { motion } from 'framer-motion';
import CardHire from '../molecules/CardHire';

interface AnimatedHireMeListProps {
  items: Array<{
    title: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
  }>;
}

export default function AnimatedHireMeList({ items }: AnimatedHireMeListProps) {
  return (
    <div className="flex w-full flex-col gap-5 text-justify text-black md:flex-row md:px-8 dark:text-white">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.4 }}
        >
          <CardHire
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        </motion.div>
      ))}
    </div>
  );
}
