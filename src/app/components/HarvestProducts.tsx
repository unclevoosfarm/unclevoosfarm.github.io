import { useLanguage } from './LanguageContext';
import { MessageCircle, ZoomIn, Filter } from 'lucide-react';
import { analytics } from '@/app/lib/analytics';

type Lang = 'en' | 'my' | 'zh';
const loc = <T extends Record<Lang, string>>(field: T, lang: string): string =>
  field[(lang as Lang)] ?? field.en;
import productsData from '@/content/products.json';
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
  category: Record<Lang, string>;
  categoryKey: string;
  badge?: { text: string; type: 'season' | 'best' };
  index: number;
  onImageClick: (url: string) => void;
}

const ProductCard = forwardRef<HTMLElement, ProductCardProps>(({ name, price, unit, description, image, bgColor, badge, index, onImageClick }, ref) => {
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
        className="h-[256px] relative overflow-hidden group cursor-pointer"
        style={{ backgroundColor: bgColor }}
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

        {/* Price row — only shown if price is set */}
        {price && (
          <div className="flex items-baseline gap-1 mb-4 flex-wrap">
            <span className="text-[var(--primary)] text-2xl lg:text-3xl font-semibold whitespace-nowrap">{price}</span>
            <span className="text-gray-500 text-sm">{unit}</span>
          </div>
        )}

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
  const { t, language } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  // activeCategory stores the 'en' key as stable identifier
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Derive unique categories from products, preserving insertion order
  const categoryMap = new Map<string, Record<Lang, string>>();
  for (const p of productsData.products) {
    if (!categoryMap.has(p.category.en)) {
      categoryMap.set(p.category.en, p.category);
    }
  }

  const products = productsData.products.map(p => ({
    ...p,
    name: loc(p.name, language),
    description: loc(p.description, language),
    categoryKey: p.category.en,
    badge: p.badge && p.badgeType ? { text: p.badge, type: p.badgeType as 'season' | 'best' } : undefined,
  }));

  const filteredProducts = activeCategory === null
    ? products
    : products.filter(p => p.categoryKey === activeCategory);

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

          {/* Category Filter Pills — derived dynamically from products */}
          <div className="flex flex-wrap justify-center gap-3 bg-white p-2 rounded-full shadow-sm border border-gray-100">
            {/* "All" tab */}
            <button
              onClick={() => { analytics.productFilter('all'); setActiveCategory(null); }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === null
                ? 'bg-[var(--primary)] text-white shadow-md'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              {t('harvestFilterAll')}
            </button>

            {/* One tab per unique category */}
            {[...categoryMap.entries()].map(([key, labelObj]) => (
              <button
                key={key}
                onClick={() => { analytics.productFilter(key); setActiveCategory(key); }}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === key
                  ? 'bg-[var(--primary)] text-white shadow-md'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                {loc(labelObj, language)}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid with Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => (
              <ProductCard
                key={product.id}
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
