import { useState, useRef, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, Tractor } from 'lucide-react';
import { useLanguage, type Language } from './LanguageContext';
import uncleVooLogo from 'figma:asset/59875ed302d3978fdf3075319f5aa3eafc42d49b.png';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

const languageOptions: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'my', label: 'Bahasa Melayu', flag: 'MY' },
  { code: 'zh', label: '\u4e2d\u6587', flag: 'ZH' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const tractorLeft = useTransform(scaleX, (value) => `${value * 100}%`);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { label: t('navStay'), href: '#stay' },
    { label: t('navShop'), href: '#shop' },
    { label: t('navTours'), href: '#tours' },
    { label: t('navReviews'), href: '#reviews' },
  ];

  const currentLang = languageOptions.find((l) => l.code === language)!;

  return (
    <header className="sticky top-0 z-50 bg-[#FFFCF5]/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-[1280px] mx-auto px-4 lg:px-8 relative" aria-label="Main navigation">
        {/* Scroll Progress Bar Container */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100/50">
          {/* Colored Bar */}
          <motion.div
            className="h-full bg-[#F97316] origin-left"
            style={{ scaleX }}
          />
          {/* Tractor Icon - Moves independently to avoid distortion */}
          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 -ml-3 z-10 pointer-events-none"
            style={{ left: tractorLeft }}
          >
             <motion.div 
               animate={{ y: [0, -2, 0] }}
               transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
               className="bg-white rounded-full p-1 shadow-sm border border-orange-100"
             >
              <Tractor className="w-4 h-4 text-[#F97316]" />
            </motion.div>
          </motion.div>
        </div>

        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="flex items-center gap-2.5 group shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={uncleVooLogo}
              alt="Uncle Voo's Farm Logo"
              className="h-10 w-10 lg:h-12 lg:w-12 rounded-full object-cover"
              loading="eager"
            />
            <span className="font-['Fredoka'] text-lg lg:text-xl text-gray-800">
              <span className="text-[#F97316]">Uncle Voo's</span>{' '}
              <span className="text-[#3B82F6]">Farm</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-[#F97316] transition-colors font-['Quicksand'] font-medium relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
            <div ref={langRef} className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600 font-['Quicksand'] font-medium"
                aria-label="Select language"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">{currentLang.flag}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </motion.button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 min-w-[180px] z-50">
                  {languageOptions.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => {
                        setLanguage(opt.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-[#FFFCF5] transition-colors font-['Quicksand'] ${
                        language === opt.code
                          ? 'text-[#F97316] font-semibold bg-orange-50/50'
                          : 'text-gray-700'
                      }`}
                    >
                      <span className="w-7 text-center text-sm font-semibold bg-gray-100 rounded px-1 py-0.5">
                        {opt.flag}
                      </span>
                      <span>{opt.label}</span>
                      {language === opt.code && (
                        <span className="ml-auto text-[#F97316]">&#10003;</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Book Now CTA */}
            <motion.a
              href="#stay"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F97316] hover:bg-[#ea6a0f] text-white px-6 py-2.5 rounded-full font-['Quicksand'] font-semibold shadow-md hover:shadow-lg transition-all"
            >
              {t('bookNow')}
            </motion.a>
          </div>

          {/* Mobile Right Section */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Language */}
            <div ref={langRef} className="relative">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setLangOpen(!langOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Select language"
              >
                <Globe className="h-5 w-5 text-gray-600" />
              </motion.button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 min-w-[160px] z-50">
                  {languageOptions.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => {
                        setLanguage(opt.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-[#FFFCF5] transition-colors font-['Quicksand'] ${
                        language === opt.code
                          ? 'text-[#F97316] font-semibold'
                          : 'text-gray-700'
                      }`}
                    >
                      <span className="text-sm font-semibold">{opt.flag}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
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
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-gray-700 hover:text-[#F97316] hover:bg-orange-50/50 rounded-xl px-4 transition-colors font-['Quicksand'] font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#stay"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#F97316] text-white py-3 rounded-full font-['Quicksand'] font-semibold mt-3 mx-4"
            >
              {t('bookNow')}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}