'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AuroraText } from '../ui/aurora-text';
import { classNames } from '@/utils/classNames';
import { Menu, X } from 'lucide-react';

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
        'sticky top-0 z-50 shadow-md transition-colors duration-300 px-6 text-white',
        isScrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-black'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl text-blue-600">
          <AuroraText>Fauziseptians</AuroraText>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={classNames(
                  activeSection === section
                    ? 'font-semibold text-blue-400'
                    : '!font-regular text-white opacity-70',
                  'transition-colors !text-md tracking-wider'
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
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-4 bg-black/80 backdrop-blur-md">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsMobileOpen(false)}
              className={classNames(
                activeSection === section
                  ? 'font-semibold text-blue-400'
                  : 'text-white opacity-70',
                'block transition-colors text-md tracking-wider'
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
