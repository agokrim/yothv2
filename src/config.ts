import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'de','ar','fr'] as const;

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    en: '/blog',
    de: '/blog',
    ar: '/blog',
    fr: '/blog'
  },
  '/privacypolicy': {
    en: '/privacypolicy',
    de: '/privacypolicy',
    ar: '/privacypolicy',
    fr: '/privacypolicy'
  }
};


export const localePrefix: LocalePrefix<typeof locales> = 'always';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
