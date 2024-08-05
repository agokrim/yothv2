import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'sp','de','fr','ar'] as const;

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    en: '/blog',
    sp: '/blog',
    de: '/blog',
    fr: '/blog',
    ar: '/blog',
  },
  '/privacypolicy': {
    en: '/privacypolicy',
    sp: '/privacypolicy',
    de: '/privacypolicy',
    fr: '/privacypolicy',
    ar: '/privacypolicy',
  }
};


export const localePrefix: LocalePrefix<typeof locales> = 'always';

export const port = process.env.PORT || 3000;
/* export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`; */


   export const host = process.env.NODE_ENV === 'production'
 ? 'https://youtubethumbnail.net'
  : `http://localhost:${port}`;