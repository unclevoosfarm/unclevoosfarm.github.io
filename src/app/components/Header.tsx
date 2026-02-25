import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage, type Language } from './LanguageContext';
import { motion } from 'motion/react';
// import { PaletteSwitcher } from './PaletteSwitcher'; // palette locked to Forest & Teal; uncomment to re-enable switcher
import logoImg from '@/assets/uncle-voo-logo.png';
import { analytics } from '@/app/lib/analytics';

const languageOptions: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'my', label: 'MY' },
  { code: 'zh', label: 'ZH' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { label: t('navStay'), href: '#stay' },
    { label: t('navShop'), href: '#shop' },
    { label: t('navTours'), href: '#tours' },
    { label: t('navReviews'), href: '#reviews' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="max-w-[1280px] mx-auto px-4 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2.5 shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={logoImg}
              alt="Uncle Voo's Farm"
              className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg lg:text-xl font-extrabold text-[var(--olive-dark)]">
                Uncle Voo's
              </span>
              <span className="text-[10px] lg:text-xs font-semibold uppercase tracking-widest text-[var(--olive-medium)]">
                Farm
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => analytics.navClick(item.label, item.href)}
                className="text-[var(--olive-medium)] hover:text-[var(--primary)] transition-colors font-medium relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center bg-[var(--cream)] rounded-full p-1">
              {languageOptions.map((opt) => (
                <motion.button
                  key={opt.code}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => { analytics.languageChange(language, opt.code); setLanguage(opt.code); }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    language === opt.code
                      ? 'bg-white shadow-sm text-[var(--olive-dark)]'
                      : 'text-[var(--olive-medium)]'
                  }`}
                  aria-label={`Switch to ${opt.label}`}
                >
                  {opt.label}
                </motion.button>
              ))}
            </div>

            {/* Book Now CTA */}
            <motion.a
              href="#stay"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--cta)] hover:bg-[var(--cta-dark)] text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
            >
              {t('bookNow')}
            </motion.a>
          </div>

          {/* Mobile Right Section */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Language Toggle */}
            <div className="flex items-center bg-[var(--cream)] rounded-full p-0.5">
              {languageOptions.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => { analytics.languageChange(language, opt.code); setLanguage(opt.code); }}
                  className={`px-2 py-1 rounded-full text-[10px] font-semibold transition-all ${
                    language === opt.code
                      ? 'bg-white shadow-sm text-[var(--olive-dark)]'
                      : 'text-[var(--olive-medium)]'
                  }`}
                  aria-label={`Switch to ${opt.label}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-[var(--cream)] rounded-full transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[var(--olive-dark)]" />
              ) : (
                <Menu className="h-6 w-6 text-[var(--olive-dark)]" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => { analytics.navClick(item.label, item.href); setMobileMenuOpen(false); }}
                className="block py-2.5 text-[var(--olive-dark)] hover:text-[var(--primary)] hover:bg-[var(--cream)] rounded-xl px-4 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#stay"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[var(--cta)] hover:bg-[var(--cta-dark)] text-white py-3 rounded-full font-semibold mt-3 mx-4 transition-colors"
            >
              {t('bookNow')}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
