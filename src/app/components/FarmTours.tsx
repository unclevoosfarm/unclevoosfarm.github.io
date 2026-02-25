import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

type Lang = 'en' | 'my' | 'zh';
const loc = <T extends Record<Lang, string>>(field: T, lang: string): string =>
  field[(lang as Lang)] ?? field.en;
import { useEffect, useRef, useState } from 'react';
import { Clock, ZoomIn, MessageCircle } from 'lucide-react';
import { Lightbox } from './Lightbox';
import toursData from '@/content/tours.json';
import { analytics } from '@/app/lib/analytics';

type Tour = (typeof toursData.tours)[number];

function CheckCircle() {
  return (
    <svg className="h-[15px] w-[15px] shrink-0 text-[var(--primary)]" fill="none" viewBox="0 0 15 15">
      <path d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM11.0355 5.53553L7.03553 9.53553C6.74264 9.82843 6.25736 9.82843 5.96447 9.53553L3.96447 7.53553C3.67157 7.24264 3.67157 6.75736 3.96447 6.46447C4.25736 6.17157 4.74264 6.17157 5.03553 6.46447L6.5 7.92893L9.96447 4.46447C10.2574 4.17157 10.7426 4.17157 11.0355 4.46447C11.3284 4.75736 11.3284 5.24264 11.0355 5.53553Z" fill="currentColor" />
    </svg>
  );
}

/* ── Single detailed card (shown when only 1 tour) ───────────────── */
function TourSingleCard({ tour, language, onImageClick }: {
  tour: Tour;
  language: string;
  onImageClick: (url: string) => void;
}) {
  const { t } = useLanguage();
  const title = loc(tour.title, language);
  const duration = loc(tour.duration as Record<Lang, string>, language);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-3xl lg:rounded-[48px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] border border-gray-100"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Side */}
        <div
          className="lg:w-1/2 h-[300px] lg:h-auto lg:min-h-[520px] relative overflow-hidden group cursor-pointer shrink-0"
          onClick={() => onImageClick(tour.image)}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
            <ZoomIn className="text-white w-10 h-10 drop-shadow-md" />
          </div>
          <motion.img
            src={tour.image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          {/* Optional price badge */}
          {tour.price && (
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg z-20">
              <span className="text-[var(--primary)] text-2xl font-bold">{tour.price}</span>
            </div>
          )}
          {tour.badge && (
            <div className="absolute top-4 right-4 bg-[var(--primary)] rounded-bl-[24px] rounded-tr-[24px] px-4 py-2 z-20">
              <span className="text-white text-sm">{tour.badge}</span>
            </div>
          )}
        </div>

        {/* Details Side */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <h3 className="text-[var(--foreground)] text-2xl lg:text-3xl font-bold mb-4">
            {title}
          </h3>

          {/* Duration pill */}
          <div className="flex items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5">
              <Clock className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-gray-600 text-sm">{duration}</span>
            </div>
            {!tour.price && (
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold">
                {t('toursPriceOnRequest')}
              </span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            {loc(tour.description as Record<Lang, string>, language)}
          </p>

          {/* Features */}
          <div className="flex flex-col gap-3 mb-8">
            {tour.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle />
                <span className="text-gray-700 text-sm">{loc(feat, language)}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href={`https://wa.me/60123456789?text=${encodeURIComponent(
              `Hi Uncle Voo, I would like to enquire about the ${title} tour`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.whatsappClick('tour', title)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--cta)] hover:bg-[var(--cta-dark)] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            {t('toursBookTour')}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Grid card (shown when 2+ tours) ─────────────────────────────── */
interface TourCardProps {
  tour: Tour;
  language: string;
  index: number;
  bookLabel: string;
  priceOnRequest: string;
  onImageClick: (url: string) => void;
}

function TourGridCard({ tour, language, index, bookLabel, priceOnRequest, onImageClick }: TourCardProps) {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const title = loc(tour.title, language);
  const duration = loc(tour.duration as Record<Lang, string>, language);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.1 }
    );
    const node = cardRef.current;
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8, boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.15), 0px 8px 10px -6px rgba(0,0,0,0.1)" }}
      className="bg-white flex-1 min-w-[280px] rounded-[48px] overflow-hidden relative shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div
        className="h-[192px] relative overflow-hidden group cursor-pointer shrink-0"
        onClick={() => onImageClick(tour.image)}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
          <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
        </div>
        <motion.img
          src={tour.image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        {tour.badge && (
          <div className="absolute top-[1px] right-[1px] bg-[var(--primary)] rounded-bl-[32px] rounded-tr-[32px] px-4 py-2 z-20">
            <span className="text-white text-sm">{tour.badge}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-[var(--foreground)] text-2xl mb-2">{title}</h3>

        <div className="flex items-center gap-3 mb-4">
          {tour.price ? (
            <span className="text-[var(--primary)] text-3xl font-semibold">{tour.price}</span>
          ) : (
            <span className="text-[var(--primary)] text-sm font-semibold px-3 py-1 rounded-full bg-[var(--primary)]/10">
              {priceOnRequest}
            </span>
          )}
          <div className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1">
            <Clock className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-gray-500 text-sm">{duration}</span>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 flex-1 line-clamp-3">
          {loc(tour.description as Record<Lang, string>, language)}
        </p>

        <div className="flex flex-col gap-3 mb-8">
          {tour.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle />
              <span className="text-gray-700 text-sm">{loc(feat, language)}</span>
            </div>
          ))}
        </div>

        <motion.a
          href={`https://wa.me/60123456789?text=${encodeURIComponent(
            `Hi Uncle Voo, I would like to enquire about the ${title} tour`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => analytics.whatsappClick('tour', title)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-auto w-full flex items-center justify-center gap-2 py-3 bg-[var(--cta)] hover:bg-[var(--cta-dark)] text-white rounded-3xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">{bookLabel}</span>
        </motion.a>
      </div>
    </motion.article>
  );
}

export function FarmTours() {
  const { t, language } = useLanguage();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.1 }
    );
    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  const tours = toursData.tours;
  const isMulti = tours.length > 1;

  return (
    <section ref={sectionRef} id="tours" aria-label="Farm Tour Experiences – Guided Agricultural Tours at Uncle Voo's Farm Malaysia" className="py-20 lg:py-24 bg-[var(--background)] relative">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-[var(--primary)] text-sm font-semibold tracking-wider uppercase block mb-2">
            {t('toursTag')}
          </span>
          <h2 className="text-[var(--foreground)] text-3xl md:text-4xl mb-4">
            {t('toursTitle')}
          </h2>
          <p className="text-gray-600 max-w-[672px] mx-auto leading-relaxed">
            {t('toursSubtitle')}
          </p>
        </motion.div>

        {/* Adaptive layout */}
        {isMulti ? (
          <AnimatePresence>
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              {tours.map((tour, i) => (
                <TourGridCard
                  key={tour.id}
                  tour={tour}
                  language={language}
                  index={i}
                  bookLabel={t('toursBookTour')}
                  priceOnRequest={t('toursPriceOnRequest')}
                  onImageClick={setLightboxImage}
                />
              ))}
            </div>
          </AnimatePresence>
        ) : (
          <TourSingleCard
            tour={tours[0]}
            language={language}
            onImageClick={setLightboxImage}
          />
        )}
      </div>

      {lightboxImage && (
        <Lightbox
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
          imageSrc={lightboxImage}
        />
      )}
    </section>
  );
}


