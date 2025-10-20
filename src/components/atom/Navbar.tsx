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
        'sticky top-0 z-50 px-6 text-black shadow-md transition-colors duration-300 dark:text-white',
        isScrolled
          ? 'bg-white/20 backdrop-blur-md dark:bg-black/70'
          : 'bg-white dark:bg-black'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl text-blue-600">
          <AuroraText>Fauziseptians</AuroraText>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden space-x-6 md:flex">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={classNames(
                  activeSection === section
                    ? 'font-semibold text-blue-400'
                    : '!font-regular opacity-70 dark:text-white',
                  '!text-md tracking-wider transition-colors'
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

        {/* Mobile Toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ThemeToggle />
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="space-y-4 bg-black/80 px-4 pt-2 pb-4 backdrop-blur-md md:hidden">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsMobileOpen(false)}
              className={classNames(
                activeSection === section
                  ? 'font-semibold text-blue-400'
                  : 'text-white opacity-70',
                'text-md block tracking-wider transition-colors'
              )}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
