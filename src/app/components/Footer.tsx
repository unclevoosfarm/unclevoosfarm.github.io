import { useLanguage } from './LanguageContext';
import svgPaths from '../../imports/svg-3ykeeib9ga';
import logoImg from '@/assets/uncle-voo-logo.png';

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
    <footer className="bg-white border-t border-gray-200 py-16" aria-label="Site footer">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex flex-col items-center gap-6">
        {/* Logo */}
        <div>
          <img
            src={logoImg}
            alt="Uncle Voo's Farm – Organic Farm Stay Malaysia"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Quick nav links for crawlers */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <li><a href="#home" className="hover:text-[var(--primary)] transition-colors">{t('footerHome')}</a></li>
            <li><a href="#stay" className="hover:text-[var(--primary)] transition-colors">{t('footerNavStay')}</a></li>
            <li><a href="#shop" className="hover:text-[var(--primary)] transition-colors">{t('footerNavShop')}</a></li>
            <li><a href="#tours" className="hover:text-[var(--primary)] transition-colors">{t('footerNavTours')}</a></li>
            <li><a href="#reviews" className="hover:text-[var(--primary)] transition-colors">{t('footerNavReviews')}</a></li>
            <li><a href="#contact" className="hover:text-[var(--primary)] transition-colors">{t('footerNavContact')}</a></li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-gray-500 text-center text-sm">
          {t('footerCopyrightText')}
        </p>

        {/* Made with love */}
        <div className="flex items-center gap-1 justify-center">
          <span className="text-gray-400 text-sm">{t('footerMadeWith')}</span>
          <HeartIcon />
          <span className="text-gray-400 text-sm">{t('footerAnd')}</span>
        </div>
      </div>
    </footer>
  );
}
