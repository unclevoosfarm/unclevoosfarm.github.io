import { useLanguage } from './LanguageContext';
import svgPaths from '../../imports/svg-3ykeeib9ga';
import uncleVooLogo from 'figma:asset/59875ed302d3978fdf3075319f5aa3eafc42d49b.png';

function HeartIcon() {
  return (
    <svg className="h-[11px] w-[12px]" fill="none" viewBox="0 0 11.6667 10.7042">
      <path d={svgPaths.p22180e58} fill="#F87171" />
    </svg>
  );
}

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#FFFCF5] border-t border-gray-200 py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-4">
          <img
            src={uncleVooLogo}
            alt="Uncle Voo's Farm"
            className="w-24 h-24 rounded-full object-cover border-2 border-[#F97316]/20"
            loading="lazy"
          />
        </div>

        {/* Brand name */}
        <h3 className="font-['Fredoka'] text-2xl tracking-wider mb-8">
          <span className="text-[#F97316]">Uncle Voo's</span>{' '}
          <span className="text-[#3B82F6]">Farm</span>
        </h3>

        {/* Copyright */}
        <p className="font-['Fredoka'] text-gray-500 text-center mb-4">
          {t('footerCopyright')}
        </p>

        {/* Made with love */}
        <div className="flex items-center gap-1 justify-center">
          <span className="font-['Quicksand'] text-gray-400 text-sm">{t('footerMadeWith')}</span>
          <HeartIcon />
          <span className="font-['Quicksand'] text-gray-400 text-sm">{t('footerAnd')}</span>
        </div>
      </div>
    </footer>
  );
}