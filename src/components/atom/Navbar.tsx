'use client';

import { classNames } from '@/utils/classNames';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AuroraText } from '../ui/aurora-text';
import ThemeToggle from './ThemeToggle';

const sections = ['profile', 'social', 'project', 'skill', 'certification'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const timeout = setTimeout(() => {
      const targets = document.querySelectorAll('section[id]');
      targets.forEach((el) => observer.observe(el));
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={classNames(
        'sticky top-0 z-50 px-6 transition-colors duration-300',
        isScrolled
          ? 'bg-white/70 text-black backdrop-blur-md dark:bg-zinc-900/70 dark:text-white'
          : 'bg-white text-black dark:bg-zinc-900 dark:text-white'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          <AuroraText>Fauziseptians</AuroraText>
        </Link>

        <ul className="hidden space-x-6 md:flex">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={classNames(
                  activeSection === section
                    ? 'font-semibold text-blue-500 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300',
                  'text-md tracking-wider transition-colors hover:text-blue-500 dark:hover:text-blue-400'
                )}
              >
                {activeSection === section ? (
                  <AuroraText>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </AuroraText>
                ) : (
                  section.charAt(0).toUpperCase() + section.slice(1)
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-gray-800 md:hidden dark:text-white"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>

      {isMobileOpen && (
        <div className="space-y-4 bg-white px-4 pt-2 pb-4 transition-colors duration-300 md:hidden dark:bg-zinc-900">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsMobileOpen(false)}
              className={classNames(
                activeSection === section
                  ? 'font-semibold text-blue-500 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300',
                'text-md block tracking-wider transition-colors hover:text-blue-500 dark:hover:text-blue-400'
              )}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
