import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';
import { Star, StarHalf } from 'lucide-react';

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section
      id="reviews"
      aria-label="Guest Reviews – Uncle Voo's Farm rated 4.9 out of 5"
      className="bg-[var(--olive-dark)] py-16 px-6 lg:px-12"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          {/* Left: Rating */}
          <div className="flex-shrink-0 text-center md:text-left">
            <p className="text-4xl font-extrabold text-white">
              4.9<span className="text-[var(--cta)]">/5</span>
            </p>
            <div className="flex items-center gap-0.5 justify-center md:justify-start mt-1">
              <Star className="w-5 h-5 text-[var(--cta)] fill-[var(--cta)]" />
              <Star className="w-5 h-5 text-[var(--cta)] fill-[var(--cta)]" />
              <Star className="w-5 h-5 text-[var(--cta)] fill-[var(--cta)]" />
              <Star className="w-5 h-5 text-[var(--cta)] fill-[var(--cta)]" />
              <StarHalf className="w-5 h-5 text-[var(--cta)] fill-[var(--cta)]" />
            </div>
            <p className="text-sm text-gray-400 mt-1">{t('reviewsSubtitle')}</p>
          </div>

          {/* Divider */}
          <div className="h-px md:h-16 md:w-px w-full bg-white/10" />

          {/* Right: Featured Quote */}
          <div className="flex-1">
            <p className="text-xl text-gray-200 italic leading-relaxed">
              "{t('review1Text')}"
            </p>
            <p className="text-sm text-gray-400 mt-4 font-semibold">
              - {t('review1Name')}, {t('review1Role')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
