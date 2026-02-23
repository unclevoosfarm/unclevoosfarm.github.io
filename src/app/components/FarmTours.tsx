import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Clock, ZoomIn, MessageCircle } from 'lucide-react';
import { Lightbox } from './Lightbox';

function CheckCircle() {
  return (
    <svg className="h-[15px] w-[15px] shrink-0 text-[var(--primary)]" fill="none" viewBox="0 0 15 15">
      <path d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM11.0355 5.53553L7.03553 9.53553C6.74264 9.82843 6.25736 9.82843 5.96447 9.53553L3.96447 7.53553C3.67157 7.24264 3.67157 6.75736 3.96447 6.46447C4.25736 6.17157 4.74264 6.17157 5.03553 6.46447L6.5 7.92893L9.96447 4.46447C10.2574 4.17157 10.7426 4.17157 11.0355 4.46447C11.3284 4.75736 11.3284 5.24264 11.0355 5.53553Z" fill="currentColor" />
    </svg>
  );
}

interface TourCardProps {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  imageUrl: string;
  badge?: string;
  index: number;
  bookLabel: string;
  onImageClick: (url: string) => void;
}

function TourCard({
  title,
  price,
  duration,
  description,
  features,
  imageUrl,
  badge,
  index,
  bookLabel,
  onImageClick,
}: TourCardProps) {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const node = cardRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{
        y: -8,
        boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.15), 0px 8px 10px -6px rgba(0,0,0,0.1)"
      }}
      className="bg-white flex-1 min-w-[280px] rounded-[48px] overflow-hidden relative shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] border border-gray-100 transition-colors duration-300"
    >
      {/* Image header */}
      <div
        className="h-[192px] relative overflow-hidden group cursor-pointer"
        onClick={() => onImageClick(imageUrl)}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
          <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
        </div>
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        {badge && (
          <div className="absolute top-[1px] right-[1px] bg-[var(--primary)] rounded-bl-[32px] rounded-tr-[32px] px-4 py-2 z-20">
            <span className="text-white text-sm">{badge}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col">
        <h3 className="text-[var(--foreground)] text-2xl mb-2">{title}</h3>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[var(--primary)] text-3xl font-semibold">{price}</span>
          <div className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1">
            <Clock className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-gray-500 text-sm">{duration}</span>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Features list */}
        <div className="flex flex-col gap-3 mb-8">
          {features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle />
              <span className="text-gray-700 text-sm">{feat}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href={`https://wa.me/60123456789?text=${encodeURIComponent(
            `Hi Uncle Voo, I would like to book the ${title} tour`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--cta)] hover:bg-[var(--cta-dark)] text-white rounded-3xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">{bookLabel}</span>
        </motion.a>
      </div>
    </motion.article>
  );
}

export function FarmTours() {
  const { t } = useLanguage();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const node = sectionRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const tours = [
    {
      title: t('tour1Name'),
      price: t('tour1Price'),
      duration: t('tour1Duration'),
      description: t('tour1Desc'),
      features: [t('tour1Feat1'), t('tour1Feat2'), t('tour1Feat3')],
      imageUrl: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      title: t('tour2Name'),
      price: t('tour2Price'),
      duration: t('tour2Duration'),
      description: t('tour2Desc'),
      features: [t('tour2Feat1'), t('tour2Feat2'), t('tour2Feat3')],
      imageUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      badge: t('toursMostPopular'),
    },
    {
      title: t('tour3Name'),
      price: t('tour3Price'),
      duration: t('tour3Duration'),
      description: t('tour3Desc'),
      features: [t('tour3Feat1'), t('tour3Feat2'), t('tour3Feat3')],
      imageUrl: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      badge: t('toursFamilyFavorite'),
    },
  ];

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

        {/* Cards Grid */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {tours.map((tour, i) => (
            <TourCard
              key={i}
              {...tour}
              index={i}
              bookLabel={t('toursBookTour')}
              onImageClick={setLightboxImage}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
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
