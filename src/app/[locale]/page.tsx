import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import PageLayout from '@/components/PageLayout';
import YoutubeForm from '@/components/YoutubeForm';
import { Metadata } from "next";
import {ImageResponse} from 'next/og';
type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');
    
  return (
    <PageLayout title={t('title')}>
    
       <p className="" >
        {t.rich('description', {
          code: (chunks) => (
            <code className="font-mono ">{chunks}</code>
          )
        })}
 
      </p>
      <div>
        <YoutubeForm/>
      </div>
     
    </PageLayout>
  );
};

export async function generateMetadata({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
  //unstable_setRequestLocale(locale);

  //const t = useTranslations('Seo');
 
  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      t('keyword1'),
      t('keyword2'),
      t('keyword3'),
 
      
    
    ],
    openGraph: {
      url: "https://get-youtube-thumbnail.net",
      type: "website",
      title: t('title'),
      description:
      t('description'),
      },
      twitter: {
        card: "summary_large_image",
        title: t('title'),
        description:
        t('description'),
        creator: "@agokrim",
        site: "@agokrim",
       
      },
      alternates: {
        canonical: "https://get-youtube-thumbnail.net"
      }
  };
};

