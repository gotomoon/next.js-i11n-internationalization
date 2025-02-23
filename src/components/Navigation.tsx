'use client';

import LocaleSwitcher from './LocaleSwitcher';
import {Link} from '../i18n/routing';
import {useTranslations} from 'next-intl';
import MobileMenu from './MobileMenu';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-base hover:text-gray-600">
              {t('home')}
            </Link>
            <Link href="/about" className="text-base hover:text-gray-600">
              {t('about')}
            </Link>
            <Link href="/contact" className="text-base hover:text-gray-600">
              {t('contact')}
            </Link>
            <Link
              href="/pathnames"
              className="hidden md:inline-block text-base hover:text-gray-600"
            >
              {t('pathnames')}
            </Link>
            <Link href="/new-page" className="text-base hover:text-gray-600">
              {t('newPage')}
            </Link>
          </div>

          {/* Desktop Language Switcher */}
          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}
