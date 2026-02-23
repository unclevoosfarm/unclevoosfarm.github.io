import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import stayData from '@/content/stay.json';
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
} from 'lucide-react';

export function StayCards() {
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
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  const amenities = [
    { icon: BedDouble, label: t('stayAmenityRooms') },
    { icon: Users, label: t('stayAmenityGuests') },
    { icon: Wind, label: t('stayAmenityAircon') },
    { icon: UtensilsCrossed, label: t('stayAmenityKitchen') },
    { icon: Flame, label: t('stayAmenityBBQ') },
    { icon: Droplets, label: t('stayAmenityWater') },
    { icon: WashingMachine, label: t('stayAmenityLaundry') },
  ];

  const imageUrl = stayData.image;

  return (
    <section ref={sectionRef} id="stay" aria-label="Farm Stay – Cozy Organic Farmhouse Accommodation at Uncle Voo's Farm" className="py-20 lg:py-24 bg-[var(--background)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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

        {/* Featured Homestay Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl lg:rounded-[48px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] border border-gray-100"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image Side */}
            <div
              className="lg:w-1/2 h-[300px] lg:h-auto lg:min-h-[520px] relative overflow-hidden group cursor-pointer"
              onClick={() => setLightboxImage(imageUrl)}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                <ZoomIn className="text-white w-10 h-10 drop-shadow-md" />
              </div>
              <motion.img
                src={imageUrl}
                alt={stayData.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              {/* Price Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg z-20">
                <div className="flex items-baseline gap-1">
                  <span className="text-[var(--primary)] text-2xl font-bold">{stayData.price}</span>
                  <span className="text-gray-500 text-sm">{stayData.priceUnit}</span>
                </div>
              </div>
            </div>

            {/* Details Side */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-[var(--foreground)] text-2xl lg:text-3xl font-bold mb-4">
                {stayData.name}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                {stayData.description}
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
                href={stayData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
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
