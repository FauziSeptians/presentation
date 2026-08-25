'use client';

import { ExperienceItem } from '@/data/experience-data';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, ChevronDown, GraduationCap } from 'lucide-react';
import { useRef, useState } from 'react';

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
  isLast: boolean;
}

export default function ExperienceCard({
  experience,
  index,
  isLast,
}: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleDescriptions = isExpanded
    ? experience.descriptions
    : experience.descriptions.slice(0, 3);

  const hasMore = experience.descriptions.length > 3;

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-4 md:gap-8"
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Timeline Line & Node */}
      <div className="relative flex flex-col items-center">
        {/* Animated Glowing Node */}
        <motion.div
          className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full md:h-14 md:w-14"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: index * 0.2 + 0.2,
            type: 'spring',
            stiffness: 200,
          }}
        >
          {/* Pulsing ring behind */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 opacity-40"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.1, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Main circle */}
          <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-500 shadow-lg md:h-12 md:w-12">
            {experience.type === 'intern' ? (
              <GraduationCap className="h-5 w-5 text-white md:h-6 md:w-6" />
            ) : (
              <Briefcase className="h-5 w-5 text-white md:h-6 md:w-6" />
            )}
          </div>
        </motion.div>

        {/* Timeline connector line */}
        {!isLast && (
          <motion.div
            className="w-[2px] flex-1 bg-gradient-to-b from-purple-500/60 via-indigo-500/30 to-transparent"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: index * 0.2 + 0.5,
              ease: 'easeOut',
            }}
            style={{ transformOrigin: 'top' }}
          />
        )}
      </div>

      {/* Card Content */}
      <motion.div
        className={cn(
          'group relative mb-10 flex-1 overflow-hidden rounded-2xl border',
          'border-gray-200/60 bg-white/80 backdrop-blur-xl',
          'dark:border-zinc-700/50 dark:bg-zinc-900/80',
          'transition-all duration-500',
          'hover:border-purple-400/50 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)]',
          'dark:hover:border-purple-500/40 dark:hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)]'
        )}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.2 + 0.3,
          ease: 'easeOut',
        }}
      >
        {/* Top gradient accent bar */}
        <motion.div
          className="h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: index * 0.2 + 0.4,
            ease: 'easeOut',
          }}
          style={{ transformOrigin: 'left' }}
        />

        <div className="p-5 md:p-7">
          {/* Header */}
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div className="space-y-1">
              {/* Company name */}
              <motion.h3
                className="text-lg font-bold tracking-tight text-gray-900 md:text-xl dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
              >
                {experience.company}
              </motion.h3>
              {/* Role */}
              <motion.p
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-sm font-semibold tracking-wide text-transparent md:text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
              >
                {experience.role}
              </motion.p>
            </div>

            {/* Date Badge */}
            <motion.div
              className="flex items-center gap-1.5 self-start rounded-full border border-gray-200/80 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 md:text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.2 + 0.6,
                type: 'spring',
              }}
            >
              <Calendar className="h-3.5 w-3.5 text-purple-500" />
              {experience.period}
            </motion.div>
          </div>

          {/* Type Badge */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.7 }}
          >
            <span
              className={cn(
                'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
                experience.type === 'fulltime'
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                  : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
              )}
            >
              {experience.type === 'fulltime' ? 'Full-time' : 'Internship'}
            </span>
          </motion.div>

          {/* Description items */}
          <div className="space-y-3">
            {visibleDescriptions.map((desc, descIndex) => (
              <motion.div
                key={descIndex}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2 + 0.7 + descIndex * 0.08,
                  ease: 'easeOut',
                }}
              >
                {/* Bullet accent */}
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-pink-500 to-purple-500" />
                <p className="text-xs leading-relaxed text-gray-600 md:text-sm dark:text-gray-400">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Show More / Less button */}
          {hasMore && (
            <motion.button
              className="mt-4 flex cursor-pointer items-center gap-1 text-xs font-medium text-purple-500 transition-colors hover:text-purple-400 md:text-sm"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded
                ? 'Show Less'
                : `Show ${experience.descriptions.length - 3} More`}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </motion.button>
          )}
        </div>

        {/* Hover glow overlay */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/[0.03] via-purple-500/[0.03] to-indigo-500/[0.03]" />
        </div>
      </motion.div>
    </motion.div>
  );
}
