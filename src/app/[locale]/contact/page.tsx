import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string};
}) {
  const t = await getTranslations({locale, namespace: 'ContactPage'});

  return {
    title: t('title')
  };
}

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      <p className="text-lg mb-8">{t('description')}</p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="md:col-span-2">
          <form className="bg-white p-6 rounded-lg shadow">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  placeholder={t('form.namePlaceholder')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  placeholder={t('form.emailPlaceholder')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('form.subject')}
                </label>
                <input
                  type="text"
                  placeholder={t('form.subjectPlaceholder')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('form.message')}
                </label>
                <textarea
                  rows={4}
                  placeholder={t('form.messagePlaceholder')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  {t('form.submit')}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">{t('info.title')}</h2>
          <div className="space-y-4">
            <p>{t('info.address')}</p>
            <p>{t('info.phone')}</p>
            <p>{t('info.email')}</p>
            <p>{t('info.hours')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
