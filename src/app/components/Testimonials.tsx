import { useLanguage } from './LanguageContext';
import svgPaths from '../../imports/svg-3ykeeib9ga';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { SectionDivider } from './SectionDivider';

function StarIcon() {
  return (
    <svg className="h-[19px] w-5 shrink-0" fill="none" viewBox="0 0 20 19">
      <path d={svgPaths.p3e30af00} fill="#FACC15" />
    </svg>
  );
}

interface ReviewCardProps {
  stars: number;
  text: string;
  initial: string;
  name: string;
  role: string;
  avatarBg: string;
  avatarColor: string;
  index: number;
}

function ReviewCard({ stars, text, initial, name, role, avatarBg, avatarColor, index }: ReviewCardProps) {
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
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.15), 0px 8px 10px -6px rgba(0,0,0,0.1)"
      }}
      className="bg-[#FFFCF5] flex-1 min-w-[280px] rounded-[48px] p-8 border border-gray-100 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex flex-col transition-colors duration-300"
    >
      {/* Stars */}
      <motion.div 
        className="flex gap-0 mb-4"
        whileHover={{ scale: 1.05, originX: 0 }}
      >
        {Array.from({ length: stars }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </motion.div>

      {/* Review text */}
      <p className="font-['Quicksand'] text-gray-700 leading-relaxed flex-1 mb-4">
        {text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-2">
        <motion.div
          className={`${avatarBg} w-12 h-12 rounded-full flex items-center justify-center shrink-0`}
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          <span className={`font-['Quicksand'] font-semibold text-xl ${avatarColor}`}>
            {initial}
          </span>
        </motion.div>
        <div>
          <h4 className="font-['Quicksand'] font-semibold text-[#111827]">{name}</h4>
          <span className="font-['Quicksand'] text-gray-500 text-sm">{role}</span>
        </div>
      </div>
    </motion.article>
  );
}

export function Testimonials() {
  const { t } = useLanguage();

  const reviews = [
    {
      stars: 5,
      text: t('review1Text'),
      initial: 'S',
      name: t('review1Name'),
      role: t('review1Role'),
      avatarBg: 'bg-[rgba(249,115,22,0.2)]',
      avatarColor: 'text-[#F97316]',
    },
    {
      stars: 5,
      text: t('review2Text'),
      initial: 'M',
      name: t('review2Name'),
      role: t('review2Role'),
      avatarBg: 'bg-[rgba(59,130,246,0.2)]',
      avatarColor: 'text-[#3B82F6]',
    },
    {
      stars: 5,
      text: t('review3Text'),
      initial: 'J',
      name: t('review3Name'),
      role: t('review3Role'),
      avatarBg: 'bg-[rgba(34,197,94,0.2)]',
      avatarColor: 'text-[#22C55E]',
    },
  ];

  return (
    <section id="reviews" className="py-20 lg:py-24 relative">
      <SectionDivider fill="#FFF7ED" position="top" className="-mt-1" />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* White rounded container */}
        <div className="bg-white rounded-[48px] shadow-sm py-16 lg:py-20 px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="font-['Quicksand'] text-[#F97316] text-sm font-semibold tracking-wider uppercase block mb-2">
              {t('reviewsTag')}
            </span>
            <h2 className="font-['Fredoka'] text-[#111827] text-3xl md:text-4xl mb-3">
              {t('reviewsTitle')}
            </h2>
            <p className="font-['Quicksand'] text-gray-600 max-w-[672px] mx-auto">
              {t('reviewsSubtitle')}
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch max-w-[1200px] mx-auto">
            {reviews.map((review, i) => (
              <ReviewCard key={i} {...review} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}