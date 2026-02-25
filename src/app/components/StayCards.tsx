import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

type Lang = 'en' | 'my' | 'zh';
const loc = <T extends Record<Lang, string>>(field: T, lang: string): string =>
  field[(lang as Lang)] ?? field.en;
import { useEffect, useState } from 'react';
import stayData from '@/content/stay.json';
import { analytics } from '@/app/lib/analytics';
import { Lightbox } from './Lightbox';
import {
  ZoomIn,
  BedDouble,
  Users,
  Flame,
  UtensilsCrossed,
  Wind,
  Droplets,
  WashingMachine,
  MessageCircle,
  Home,
  X,
} from 'lucide-react';

const amenityIconMap = [BedDouble, Users, Wind, UtensilsCrossed, Flame, Droplets, WashingMachine];

type Stay = (typeof stayData.stays)[number];

/* ── Full detail modal ───────────────────────────────────────────── */
function StayDetailModal({ stay, language, onClose }: {
  stay: Stay;
  language: string;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const amenities = stay.amenities.map((a, i) => ({
    icon: amenityIconMap[i] || Home,
    label: loc(a, language),
  }));

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 lg:p-8"
        onClick={onClose}
      >
        {/* Modal panel */}
        <motion.div
          key="panel"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, type: 'spring', bounce: 0.2 }}
          className="bg-white rounded-3xl lg:rounded-[48px] overflow-hidden shadow-2xl border border-gray-100 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>

          <div className="flex flex-col lg:flex-row">
            {/* Image Side */}
            <div
              className="lg:w-1/2 h-[280px] lg:h-auto lg:min-h-[520px] relative overflow-hidden group cursor-pointer shrink-0"
              onClick={() => setLightboxImage(stay.image)}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                <ZoomIn className="text-white w-10 h-10 drop-shadow-md" />
              </div>
              <motion.img
                src={stay.image}
                alt={loc(stay.name, language)}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg z-20">
                <div className="flex items-baseline gap-1">
                  <span className="text-[var(--primary)] text-2xl font-bold">{stay.price}</span>
                  <span className="text-gray-500 text-sm">{loc(stay.priceUnit, language)}</span>
                </div>
              </div>
            </div>

            {/* Details Side */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-[var(--foreground)] text-2xl lg:text-3xl font-bold mb-4">
                {loc(stay.name, language)}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {loc(stay.description, language)}
              </p>

              {/* Full amenities grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {amenities.map((amenity) => {
                  const Icon = amenity.icon;
                  return (
                    <div
                      key={amenity.label}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[var(--cream)]/50 border border-[var(--cream)]"
                    >
                      <div className="h-9 w-9 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-[var(--foreground)] text-sm font-medium">
                        {amenity.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <motion.a
                href={stay.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.whatsappClick('stay', loc(stay.name, language))}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--cta)] hover:bg-[var(--cta-dark)] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                {t('stayCheckAvailability')}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {lightboxImage && (
        <Lightbox
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
          imageSrc={lightboxImage}
        />
      )}
    </AnimatePresence>
  );
}

/* ── Grid card for multi-stay layout ─────────────────────────────── */
function StayGridCard({ stay, language, onOpenDetail, onImageClick }: {
  stay: Stay;
  language: string;
  onOpenDetail: (stay: Stay) => void;
  onImageClick: (url: string) => void;
}) {
  const { t } = useLanguage();
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="bg-white flex flex-col flex-1 min-w-[280px] max-w-[400px] rounded-[48px] overflow-hidden relative border border-gray-100 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:translate-y-[-4px] cursor-pointer"
      onClick={() => onOpenDetail(stay)}
    >
      {/* Image */}
      <div
        className="h-[256px] relative overflow-hidden group"
        onClick={(e) => { e.stopPropagation(); onImageClick(stay.image); }}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
          <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
        </div>
        <motion.img
          src={stay.image}
          alt={loc(stay.name, language)}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg z-20">
          <div className="flex items-baseline gap-1">
            <span className="text-[var(--primary)] text-lg font-bold">{stay.price}</span>
            <span className="text-gray-500 text-xs">{loc(stay.priceUnit, language)}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1 bg-white">
        <h3 className="text-[var(--foreground)] text-2xl mb-2">{loc(stay.name, language)}</h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {loc(stay.description, language)}
        </p>

        {/* Amenity pills (preview) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {stay.amenities.slice(0, 4).map((a, i) => {
            const Icon = amenityIconMap[i] || Home;
            return (
              <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--cream)]/50 border border-[var(--cream)] text-xs font-medium text-[var(--foreground)]">
                <Icon className="h-3.5 w-3.5 text-[var(--primary)]" />
                {loc(a, language)}
              </span>
            );
          })}
          {stay.amenities.length > 4 && (
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-xs text-gray-500">
              +{stay.amenities.length - 4} more
            </span>
          )}
        </div>

        {/* CTA — stop propagation so it doesn't open modal */}
        <div className="mt-auto w-full" onClick={(e) => e.stopPropagation()}>
          <a
            href={stay.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.whatsappClick('stay', loc(stay.name, language))}
            className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--cta)] hover:bg-[var(--cta-dark)] text-white rounded-3xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">{t('stayCheckAvailability')}</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Single detailed card (original layout) ──────────────────────── */
function StaySingleCard({ stay, language, onImageClick }: {
  stay: (typeof stayData.stays)[number];
  language: string;
  onImageClick: (url: string) => void;
}) {
  const { t } = useLanguage();
  const amenities = stay.amenities.map((a, i) => ({
    icon: amenityIconMap[i] || Home,
    label: loc(a, language),
  }));

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
          className="lg:w-1/2 h-[300px] lg:h-auto lg:min-h-[520px] relative overflow-hidden group cursor-pointer"
          onClick={() => onImageClick(stay.image)}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
            <ZoomIn className="text-white w-10 h-10 drop-shadow-md" />
          </div>
          <motion.img
            src={stay.image}
            alt={loc(stay.name, language)}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          {/* Price Badge */}
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg z-20">
            <div className="flex items-baseline gap-1">
              <span className="text-[var(--primary)] text-2xl font-bold">{stay.price}</span>
              <span className="text-gray-500 text-sm">{loc(stay.priceUnit, language)}</span>
            </div>
          </div>
        </div>

        {/* Details Side */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <h3 className="text-[var(--foreground)] text-2xl lg:text-3xl font-bold mb-4">
            {loc(stay.name, language)}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-8">
            {loc(stay.description, language)}
          </p>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {amenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={amenity.label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--cream)]/50 border border-[var(--cream)]"
                >
                  <div className="h-9 w-9 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[var(--foreground)] text-sm font-medium">
                    {amenity.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.a
            href={stay.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.whatsappClick('stay', loc(stay.name, language))}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--cta)] hover:bg-[var(--cta-dark)] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            {t('stayCheckAvailability')}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main section ────────────────────────────────────────────────── */
export function StayCards() {
  const { t, language } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [selectedStay, setSelectedStay] = useState<Stay | null>(null);

  const stays = stayData.stays;
  const isMulti = stays.length > 1;

  return (
    <section id="stay" aria-label="Farm Stay – Cozy Organic Farmhouse Accommodation at Uncle Voo's Farm" className="py-20 lg:py-24 bg-[var(--background)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-[var(--primary)] text-sm font-semibold tracking-wider uppercase block mb-2">
            {t('stayTag')}
          </span>
          <h2 className="text-[var(--foreground)] text-3xl md:text-4xl mb-4">
            {t('stayTitle')}
          </h2>
          <p className="text-gray-600 max-w-[672px] mx-auto leading-relaxed">
            {t('staySubtitle')}
          </p>
        </motion.div>

        {/* Conditional layout */}
        {isMulti ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <AnimatePresence mode="popLayout">
              {stays.map((stay) => (
                <StayGridCard
                  key={stay.id}
                  stay={stay}
                  language={language}
                  onOpenDetail={(s) => { analytics.stayDetailView(loc(s.name, language)); setSelectedStay(s); }}
                  onImageClick={setLightboxImage}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <StaySingleCard
            stay={stays[0]}
            language={language}
            onImageClick={setLightboxImage}
          />
        )}
      </div>

      {/* Detail modal (multi-stay grid only) */}
      <AnimatePresence>
        {selectedStay && (
          <StayDetailModal
            stay={selectedStay}
            language={language}
            onClose={() => setSelectedStay(null)}
          />
        )}
      </AnimatePresence>

      {/* Image lightbox */}
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
