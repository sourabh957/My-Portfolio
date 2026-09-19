'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GITHUB_URL, UPWORK_URL } from '@/data/social';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={[
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300 motion-reduce:transition-none',
        scrolled ? 'border-b border-emerald-100/10 bg-[#07100d]/92 backdrop-blur-xl' : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-5 sm:px-6">
        <Link href="/" className="font-semibold tracking-[0.18em] text-white">
          SC<span className="text-[#9ef7bd]">.</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-[#9baca2] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hidden rounded-md border border-emerald-100/15 px-3 py-2 text-xs text-[#c5d0ca] transition-colors hover:border-[#9ef7bd]/50 hover:text-white xl:inline-flex">GitHub ↗</a>
          <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className="rounded-md bg-[#9ef7bd] px-3 py-2 text-xs font-semibold text-[#07100d] transition-colors hover:bg-[#b6facd]">Hire me ↗</a>
        </div>

        <button
          className="rounded-md border border-emerald-100/15 p-2 text-[#9baca2] transition-colors hover:text-white md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen ? (
        <div id="mobile-navigation" className="border-t border-emerald-100/10 bg-[#07100d]/97 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-sm text-[#9baca2] transition-colors hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2"><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="rounded-md border border-emerald-100/15 px-3 py-2 text-xs">GitHub ↗</a><a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className="rounded-md bg-[#9ef7bd] px-3 py-2 text-xs font-semibold text-[#07100d]">Hire me ↗</a></div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
