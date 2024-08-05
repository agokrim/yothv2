import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import {localePrefix, defaultLocale, locales, pathnames} from './config';

/*  export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames
});
  */
const intlMiddleware = createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames
});

export default function middleware(req: NextRequest) {
  // Bypass middleware for sitemap.xml
  if (req.nextUrl.pathname === '/sitemap.xml') {
    return NextResponse.next();
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(de|en|ar|fr|es)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',


     '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)'
  ]
};


