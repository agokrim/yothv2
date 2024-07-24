import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-gray-400">
        <div>
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/pathnames">{t('pathnames')}</NavigationLink>
          <NavigationLink href="/privacypolicy">{t('privacypolicy')}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
