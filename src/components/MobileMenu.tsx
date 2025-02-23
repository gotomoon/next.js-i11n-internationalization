'use client';

import {useTranslations} from 'next-intl';
import {Link} from '../i18n/routing';
import {useState} from 'react';
import LocaleSwitcher from './LocaleSwitcher';

export default function MobileMenu() {
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-gray-900"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" /> // X icon
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
          )}
        </svg>
      </button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="fixed top-[60px] left-0 right-0 bg-white border-b shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <nav className="space-y-4">
              <Link
                href="/"
                className="block py-2 hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                {t('home')}
              </Link>
              <Link
                href="/about"
                className="block py-2 hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                {t('about')}
              </Link>
              <Link
                href="/pathnames"
                className="block py-2 hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                {t('pathnames')}
              </Link>
              <Link
                href="/contact"
                className="block py-2 hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                {t('contact')}
              </Link>
              <div className="py-2">
                <LocaleSwitcher />
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
