import { useLanguage } from './LanguageContext';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Star, StarHalf } from 'lucide-react';
import testimonialsData from '@/content/testimonials.json';

type Lang = 'en' | 'my' | 'zh';
const loc = <T extends Record<Lang, string>>(field: T, lang: string): string =>
  field[(lang as Lang)] ?? field.en;

export function Testimonials() {
  const { t, language } = useLanguage();
  const { rating, testimonials } = testimonialsData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const hasMultiple = testimonials.length > 1;

  useEffect(() => {
    if (!hasMultiple || isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [hasMultiple, isPaused, testimonials.length]);

  const active = testimonials[activeIndex] ?? testimonials[0];
  const activeRating = Number(active.rating ?? 5);
  const clampedRating = Number.isFinite(activeRating) ? Math.min(5, Math.max(1, activeRating)) : 5;
  const activeStars = Math.round(clampedRating);

  return (
    <section
      id="reviews"
      aria-label={`Guest Reviews – Uncle Voo's Farm rated ${rating} out of 5`}
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
              {rating}<span className="text-[var(--cta)]">/5</span>
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
          <div
            className="flex-1"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <p className="text-xl text-gray-200 italic leading-relaxed">
                  "{loc(active.text, language)}"
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center gap-0.5" aria-label={`Rated ${clampedRating} out of 5`}>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`h-4 w-4 ${idx < activeStars ? 'text-[var(--cta)] fill-[var(--cta)]' : 'text-white/30'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-300 font-medium">{clampedRating.toFixed(1)}/5</span>
                </div>
                <p className="text-sm text-gray-400 mt-4 font-semibold">
                  - {active.name}, {loc(active.role, language)}
                </p>
              </motion.div>
            </AnimatePresence>

            {hasMultiple && (
              <div className="mt-6 flex items-center gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-current={index === activeIndex}
                    className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                        ? 'w-8 bg-[var(--cta)]'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
