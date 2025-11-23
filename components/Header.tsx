'use client';

/**
 * Header - Sticky navigation with scroll effect
 * RTL-optimized with Hebrew navigation
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigationLinks = [
  { href: '/', labelHe: 'דף הבית' },
  { href: '/#services', labelHe: 'שירותים' },
  { href: '/about', labelHe: 'אודות' },
  { href: '/contact', labelHe: 'צור קשר' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-soft backdrop-blur-sm'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="section-container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-dark transition-colors hover:text-accent"
          >
            HWOOD
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href ||
                (link.href !== '/' && pathname?.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive ? 'text-accent' : 'text-dark'
                  }`}
                >
                  {link.labelHe}
                </Link>
              );
            })}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              קבלו הצעת מחיר
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark hover:text-accent transition-colors"
            aria-label="תפריט"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
