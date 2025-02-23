import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string};
}) {
  const t = await getTranslations({locale, namespace: 'AboutPage'});

  return {
    title: t('title')
  };
}

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      <p className="text-lg mb-8">{t('description')}</p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">{t('mission.title')}</h2>
          <p>{t('mission.text')}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">{t('vision.title')}</h2>
          <p>{t('vision.text')}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-6">{t('values.title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="font-medium">{t('values.innovation')}</div>
          </div>
          <div className="text-center">
            <div className="font-medium">{t('values.integrity')}</div>
          </div>
          <div className="text-center">
            <div className="font-medium">{t('values.excellence')}</div>
          </div>
          <div className="text-center">
            <div className="font-medium">{t('values.collaboration')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
