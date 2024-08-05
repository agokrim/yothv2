/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://youtubethumbnail.net',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/404', '/500'],
    alternateRefs: [
      {
        href: 'https://youtubethumbnail.net/en',
        hreflang: 'en',
      },
      {
        href: 'https://youtubethumbnail.net/es',
        hreflang: 'es',
      },
      {
        href: 'https://youtubethumbnail.net/fr',
        hreflang: 'fr',
      },
      {
        href: 'https://youtubethumbnail.net/ar',
        hreflang: 'ar',
      },
      {
        href: 'https://youtubethumbnail.net/de',
        hreflang: 'de',
      },
    ],
  };
  