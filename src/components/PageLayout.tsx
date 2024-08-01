import {useTranslations} from 'next-intl';
import {ReactNode} from 'react';
import ExternalLink from './ExternalLink';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({children, title}: Props) {
  const t = useTranslations('PageLayout');

  return (
    <div className="relative flex grow flex-col py-36 ">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1 h-[20500px] w-[20500px] translate-x-[-47.5%] rounded-full " />
      </div>
      <div className="container relative flex grow flex-col px-4">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight  md:text-5xl">
          {title}
        </h1>
        <div className="mt-6 text-gray-800 md:text-lg">{children}</div>
        
      </div>
    </div>
  );
}
