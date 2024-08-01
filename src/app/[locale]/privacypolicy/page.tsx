import {useTranslations} from 'next-intl';
import { getTranslations,unstable_setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/PageLayout';


type Props = {
  params: {locale: string};
};

export default function PrivacypolicyPage({params: {locale}}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('PrivacypolicyPage');

  

  return (
    <PageLayout title={t('title')}>
      <div className="">
           {t.rich('description', {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          code: (chunks) => (
            <code className="font-mono ">{chunks}</code>
          )
        })}
      </div>
    </PageLayout>
  );
};

export async function generateMetadata({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
  //unstable_setRequestLocale(locale);

  //const t = useTranslations('Seo');
 
  return {
    title: t('privacytitle'),
    description: t('privacydescription'),
    
  };
};