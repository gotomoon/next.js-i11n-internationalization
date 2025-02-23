import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string};
}) {
  const t = await getTranslations({locale, namespace: 'NewPage'});
  return {
    title: t('title')
  };
}

export default function NewPage() {
  const t = useTranslations('NewPage');
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      {/* ... other content */}
    </div>
  );
}
