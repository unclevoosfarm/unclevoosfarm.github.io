import { useLanguage } from './LanguageContext';
import { Mail, MessageCircle, ZoomIn, Filter } from 'lucide-react';
import svgPaths from '../../imports/svg-3ykeeib9ga';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState, forwardRef } from 'react';
import { Lightbox } from './Lightbox';
import produceLogoImg from '@/assets/uncle-voo-produce-logo.jpg';

function ArrowRight() {
  return (
    <svg className="h-4 w-5" fill="none" viewBox="0 0 20 16">
      <path d={svgPaths.p29a30900} fill="var(--primary)" />
    </svg>
  );
}

function SmallStar() {
  return (
    <svg className="h-[9.5px] w-[10px]" fill="none" viewBox="0 0 10 9.5">
      <path d={svgPaths.pc98bac0} fill="white" />
    </svg>
  );
}

interface ProductCardProps {
  name: string;
  price: string;
  unit: string;
  description: string;
  image: string;
  bgColor: string;
  category: string;
  badge?: { text: string; type: 'season' | 'best' };
  index: number;
  onImageClick: (url: string) => void;
}

const ProductCard = forwardRef<HTMLElement, ProductCardProps>(({ name, price, unit, description, image, bgColor, badge, index, onImageClick }, ref) => {
  const { t } = useLanguage();
  // Using layout prop for shared layout animations
  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="bg-white flex flex-col flex-1 min-w-[280px] max-w-[400px] rounded-[48px] overflow-hidden relative border border-gray-100 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:translate-y-[-4px]"
    >
      {/* Image Section */}
      <div
        className={`${bgColor} h-[256px] relative overflow-hidden group cursor-pointer`}
        onClick={() => onImageClick(image)}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
          <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
        </div>
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        {badge && (
          <div
            className={`absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full shadow-sm z-20 ${badge.type === 'season'
                ? 'bg-white text-gray-700'
                : 'bg-[var(--primary)] text-white'
              }`}
          >
            {badge.type === 'season' ? (
              <>
                <span className="bg-[var(--primary)] rounded-full w-2 h-2" />
                <span className="font-semibold text-xs">{badge.text}</span>
              </>
            ) : (
              <>
                <SmallStar />
                <span className="font-semibold text-xs">{badge.text}</span>
              </>
            )}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-1 bg-white">
        {/* Title */}
        <h3 className="text-[var(--foreground)] text-2xl mb-2">{name}</h3>

        {/* Price row */}
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-[var(--primary)] text-3xl font-semibold">{price}</span>
          <span className="text-gray-500 text-sm">{unit}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
          {description}
        </p>

        {/* Order Actions */}
        <div className="mt-auto w-full pt-6">
          <a
            href={`https://wa.me/60123456789?text=${encodeURIComponent(
              `Hi Uncle Voo, I would like to order ${name}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--cta)] hover:bg-[var(--cta-dark)] text-white rounded-3xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Order via WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
});

ProductCard.displayName = 'ProductCard';

export function HarvestProducts() {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Fruits', 'Veggies', 'Pantry'];

  const products = [
    {
      name: t('prod1Name'),
      price: t('prod1Price'),
      unit: t('prod1Unit'),
      description: t('prod1Desc'),
      image: 'https://images.unsplash.com/photo-1769424052115-1631279ce8e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJicyUyMGJ1bmRsZSUyMG9yZ2FuaWN8ZW58MXx8fHwxNzcxNDg2NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bgColor: 'bg-[#F0FDF4]', // Green
      category: 'Veggies',
      badge: { text: t('harvestInSeason'), type: 'season' as const },
    },
    {
      name: t('prod2Name'),
      price: t('prod2Price'),
      unit: t('prod2Unit'),
      description: t('prod2Desc'),
      image: 'https://images.unsplash.com/photo-1472352255192-75fb1f6b329c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5lYXBwbGUlMjB0cm9waWNhbCUyMGZydWl0fGVufDF8fHx8MTc3MTQyMDE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bgColor: 'bg-[#FEFCE8]', // Yellow
      category: 'Fruits',
      badge: { text: t('harvestBestSeller'), type: 'best' as const },
    },
    {
      name: t('prod3Name'),
      price: t('prod3Price'),
      unit: t('prod3Unit'),
      description: t('prod3Desc'),
      image: 'https://images.unsplash.com/photo-1671447553255-20117f875f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwcGFwYXlhJTIwZnJ1aXR8ZW58MXx8fHwxNzcxNDg2NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bgColor: 'bg-[#f0f5ee]', // Light green tint
      category: 'Fruits',
    },
    {
      name: 'Farm Fresh Eggs',
      price: 'RM 18.00',
      unit: '/ tray (30pcs)',
      description: 'Free-range kampong eggs collected daily. Rich yolks and superior taste for your breakfast.',
      image: 'https://images.unsplash.com/photo-1728894703381-b2b6effd5ff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwZnJlc2glMjBlZ2dzJTIwYmFza2V0JTIwcnVzdGljfGVufDF8fHx8MTc3MTQ5MDEwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bgColor: 'bg-[#FFFBEB]', // Amber
      category: 'Pantry',
    },
    {
      name: 'Raw Honey',
      price: 'RM 45.00',
      unit: '/ jar (500g)',
      description: 'Pure, unprocessed honey from our own apiary. Contains natural enzymes and pollen.',
      image: 'https://images.unsplash.com/photo-1671548185843-3f50c6c1060b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwcmF3JTIwaG9uZXklMjBqYXIlMjBmYXJtfGVufDF8fHx8MTc3MTQ5MDEwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bgColor: 'bg-[#FEF3C7]', // Amber Darker
      category: 'Pantry',
      badge: { text: 'New Arrival', type: 'season' as const },
    },
  ];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="shop" aria-label="Fresh Organic Harvest Shop – Buy Fruits, Vegetables and Farm Produce from Uncle Voo's Farm" className="py-20 lg:py-24 bg-[var(--cream)] relative min-h-[800px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 gap-6">
          <div className="flex items-center gap-4">
            <img src={produceLogoImg} alt="Uncle Voo's Produce" className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 border-[var(--primary)]/20 shadow-md" />
            <div className="text-left">
              <span className="text-[var(--primary)] text-sm font-semibold tracking-wider uppercase block mb-2">
                {t('harvestTag')}
              </span>
              <h2 className="text-[var(--foreground)] text-3xl md:text-4xl">
                {t('harvestTitle')}
              </h2>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 bg-white p-2 rounded-full shadow-sm border border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                    ? 'bg-[var(--primary)] text-white shadow-md'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid with Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => (
              <ProductCard
                key={product.name}
                {...product}
                index={i}
                onImageClick={setLightboxImage}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
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
