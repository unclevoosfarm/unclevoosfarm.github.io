import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Lightbox } from './Lightbox';
import { ZoomIn } from 'lucide-react';

function CheckCircle() {
  return (
    <svg className="h-[15px] w-[15px] shrink-0" fill="none" viewBox="0 0 15 15">
      <path d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM11.0355 5.53553L7.03553 9.53553C6.74264 9.82843 6.25736 9.82843 5.96447 9.53553L3.96447 7.53553C3.67157 7.24264 3.67157 6.75736 3.96447 6.46447C4.25736 6.17157 4.74264 6.17157 5.03553 6.46447L6.5 7.92893L9.96447 4.46447C10.2574 4.17157 10.7426 4.17157 11.0355 4.46447C11.3284 4.75736 11.3284 5.24264 11.0355 5.53553Z" fill="#22C55E" />
    </svg>
  );
}

interface StayCardProps {
  title: string;
  price: string;
  perNight: string;
  description: string;
  features: string[];
  imageUrl: string;
  checkLabel: string;
  badge?: string;
  btnColor: string;
  btnShadow: string;
  index: number;
  onImageClick: (url: string) => void;
}

function StayCard({
  title,
  price,
  perNight,
  description,
  features,
  imageUrl,
  checkLabel,
  badge,
  btnColor,
  btnShadow,
  index,
  onImageClick,
}: StayCardProps) {
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
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
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        {badge && (
          <div className="absolute top-[1px] right-[1px] bg-[#3B82F6] rounded-bl-[32px] rounded-tr-[32px] px-4 py-2 z-20">
            <span className="font-['Fredoka'] text-white text-sm">{badge}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col">
        <h3 className="font-['Fredoka'] text-[#111827] text-2xl mb-2">{title}</h3>

        <div className="flex items-baseline gap-1 mb-4">
          <span className="font-['Quicksand'] text-[#F97316] text-3xl font-semibold">{price}</span>
          <span className="font-['Quicksand'] text-gray-500">{perNight}</span>
        </div>

        <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Features list */}
        <div className="flex flex-col gap-3 mb-8">
          {features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle />
              <span className="font-['Quicksand'] text-gray-700 text-sm">{feat}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href={`https://wa.me/60123456789?text=${encodeURIComponent(
            `Hi Uncle Voo, I would like to check availability for ${title}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`block text-center w-full py-3 rounded-3xl font-['Quicksand'] font-semibold text-white transition-colors ${btnColor}`}
          style={{ boxShadow: btnShadow }}
        >
          {checkLabel}
        </motion.a>
      </div>
    </motion.article>
  );
}

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stays = [
    {
      title: t('stay1Title'),
      price: t('stay1Price'),
      description: t('stay1Desc'),
      features: [t('stay1Feat1'), t('stay1Feat2'), t('stay1Feat3')],
      imageUrl: 'https://images.unsplash.com/photo-1767284933117-70a1cba02bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjB3b29kZW4lMjBjYWJpbiUyMGZvcmVzdHxlbnwxfHx8fDE3NzE0ODc5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      btnColor: 'bg-[#3B82F6]',
      btnShadow: '0px 4px 6px -1px #bfdbfe, 0px 2px 4px -2px #bfdbfe',
    },
    {
      title: t('stay2Title'),
      price: t('stay2Price'),
      description: t('stay2Desc'),
      features: [t('stay2Feat1'), t('stay2Feat2'), t('stay2Feat3')],
      imageUrl: 'https://images.unsplash.com/photo-1723726594846-60f5fbe35cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBmYXJtaG91c2UlMjBjb3VudHJ5c2lkZXxlbnwxfHx8fDE3NzE0ODc5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: t('stayMostPopular'),
      btnColor: 'bg-[#3B82F6]',
      btnShadow: '0px 4px 6px -1px #bfdbfe, 0px 2px 4px -2px #bfdbfe',
    },
    {
      title: t('stay3Title'),
      price: t('stay3Price'),
      description: t('stay3Desc'),
      features: [t('stay3Feat1'), t('stay3Feat2'), t('stay3Feat3')],
      imageUrl: 'https://images.unsplash.com/photo-1698918160268-34254701cfed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwdGVudCUyMGdsYW1waW5nJTIwbmF0dXJlfGVufDF8fHx8MTc3MTQ4NzkwOXww&ixlib=rb-4.1.0&q=80&w=1080',
      btnColor: 'bg-[#3B82F6]',
      btnShadow: '0px 4px 6px -1px #bfdbfe, 0px 2px 4px -2px #bfdbfe',
    },
  ];

  return (
    <section ref={sectionRef} id="stay" className="py-20 lg:py-24 bg-[#FFFCF5]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-['Fredoka'] text-[#111827] text-3xl md:text-4xl mb-4">
            {t('stayTitle')}
          </h2>
          <p className="font-['Quicksand'] text-gray-600 max-w-[672px] mx-auto leading-relaxed">
            {t('staySubtitle')}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {stays.map((stay, i) => (
            <StayCard
              key={i}
              {...stay}
              perNight={t('stayPerNight')}
              checkLabel={t('stayCheckAvailability')}
              index={i}
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