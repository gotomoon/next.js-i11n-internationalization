import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">{t('company')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-gray-600">
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-600">
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t('legal')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="hover:text-gray-600">
                  {t('privacy')}
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gray-600">
                  {t('terms')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t('social')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://twitter.com" className="hover:text-gray-600">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:text-gray-600">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>{t('copyright', {year: new Date().getFullYear()})}</p>
        </div>
      </div>
    </footer>
  );
}
