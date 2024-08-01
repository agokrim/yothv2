import clsx from 'clsx';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
//import useTextDirection from "../../_hooks/useTextDirection";
import { isRtlLang } from 'rtl-detect';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import {ReactNode} from 'react';
import Navigation from '@/components/Navigation';
import {locales} from '@/config';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google'
import Document, { Head } from "next/document";


const inter = Inter({subsets: ['latin']});


type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const dir = isRtlLang(locale) ? 'rtl' : 'ltr';

 

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale} dir={dir}>

      <body className={clsx(inter.className, 'flex h-full flex-col')}>
      <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          {children}

        </NextIntlClientProvider>
        <GoogleAnalytics gaId="G-TCTGBNV43C" />
       <Analytics />
      </body>
    </html>
  );
}
