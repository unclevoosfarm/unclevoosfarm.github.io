import { useLanguage } from './LanguageContext';
import imgHeroFarm from 'figma:asset/0a28f452b2853de1494470dfce4fa4d85bde710f.png';
import svgPaths from '../../imports/svg-3ykeeib9ga';
import { motion, useScroll, useTransform } from 'motion/react';
import { WeatherWidget } from './WeatherWidget';

function LeafIcon() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 11.3303 11.3282">
      <path d={svgPaths.p1e0bf800} fill="white" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 22 20">
      <path d={svgPaths.p22ebd2c0} fill="white" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg className="h-[19px] w-[22px]" fill="none" viewBox="0 0 21.9758 19">
      <path d={svgPaths.p345cae00} fill="white" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p1caa9380} fill="#22C55E" />
    </svg>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);
  const badgeY = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section
      id="home"
      className="relative min-h-[600px] md:min-h-[650px] lg:min-h-[700px] w-full overflow-hidden flex items-center justify-center"
      role="banner"
    >
      {/* Hero Image */}
      <motion.div style={{ y }} className="absolute w-full h-[130%] -top-[15%] left-0">
        <img
          src={imgHeroFarm}
          alt="Uncle Voo's Farm landscape"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Dynamic Content - Weather */}
      <WeatherWidget />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Curved Wave at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden z-20">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64 C240,96 480,112 720,96 C960,80 1200,48 1440,64 L1440,120 L0,120 Z"
            fill="#FFFCF5"
          />
        </svg>
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[896px] mx-auto py-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ y: badgeY }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 backdrop-blur-sm bg-white/20 border border-white/30 rounded-full px-5 py-2.5 mb-8 hover:bg-white/30 transition-colors cursor-default"
        >
          <LeafIcon />
          <span className="font-['Quicksand'] text-white text-sm">
            {t('heroBadge')}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Fredoka'] text-white mb-6"
        >
          <span className="block text-4xl md:text-5xl lg:text-[72px] lg:leading-[72px]">
            {t('heroTitle1')}
          </span>
          <span className="relative inline-block text-4xl md:text-5xl lg:text-[72px] lg:leading-[72px] text-[#F97316]">
            {t('heroTitle2')}
            {/* Blue underline */}
            <svg
              className="absolute -bottom-1 left-0 w-full h-3"
              fill="none"
              viewBox="0 0 331.78 12"
              preserveAspectRatio="none"
            >
              <path
                d={svgPaths.p10074760}
                stroke="#3B82F6"
                strokeWidth="4"
              />
            </svg>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-['Quicksand'] text-gray-200 text-lg md:text-xl lg:text-2xl max-w-[672px] mb-8 leading-relaxed"
        >
          {t('heroDesc1')}
          <br />
          {t('heroDesc2')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
        >
          <motion.a
            href="#stay"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#F97316] text-white px-8 py-4 rounded-full font-['Fredoka'] shadow-[0px_10px_15px_-3px_rgba(249,115,22,0.3)] hover:shadow-[0px_20px_25px_-5px_rgba(249,115,22,0.4)] transition-shadow"
          >
            <HomeIcon />
            <span>{t('heroBookStay')}</span>
          </motion.a>
          <motion.a
            href="#shop"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-full font-['Fredoka'] hover:bg-white/20 transition-colors"
          >
            <CartIcon />
            <span>{t('heroViewHarvest')}</span>
          </motion.a>
        </motion.div>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-8"
        >
          <div className="flex items-center gap-2">
            <CheckIcon />
            <span className="font-['Quicksand'] text-gray-300 text-sm md:text-base">
              {t('heroPetFriendly')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon />
            <span className="font-['Quicksand'] text-gray-300 text-sm md:text-base">
              {t('heroFreshBreakfast')}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}