import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import PageLayout from '@/components/PageLayout';
import YoutubeForm from '@/components/YoutubeForm';
import Accordion from '@/components/Accordion';

import { Metadata } from "next";
import {ImageResponse} from 'next/og';
type Props = {
  params: {locale: string};
};

/* const items = [
  { title: 'What is React?', content: 'React is a JavaScript library for building user interfaces.' },
  { title: 'What is Tailwind CSS?', content: 'Tailwind CSS is a utility-first CSS framework.' },
  { title: 'What is TypeScript?', content: 'TypeScript is a typed superset of JavaScript.' },
]; */
 




type AccordionItemProps = {
  title: string;
  content: string;
  id: string;
};

const generateItems = (t: any): AccordionItemProps[] => {
  return Array(7).fill(null).map((_, i) => ({
    title: t(`q${i + 1}`),
    content: t(`a${i + 1}`),
    id: `accordion-content-${i}` // Unique ID for each item
  }));
};

export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');
  const tt = useTranslations('FAQ');
  const items = generateItems(tt);
    
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
      
      
      <div>
        <div className="p-4">
       {/*  <Accordion itemKeys={itemKeys} /> */}
       <h2 className='text-2xl font-semibold mb-4 mt-8'>{tt('title')}</h2>
       <Accordion items={items} />
        </div>
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

