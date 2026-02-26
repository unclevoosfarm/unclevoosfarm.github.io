import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  Store,
  Compass,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import heroData from '@/content/hero.json';
import { useLanguage } from './LanguageContext';
import { analytics } from '@/app/lib/analytics';

type Lang = 'en' | 'my' | 'zh';
const loc = <T extends Record<Lang, string>>(field: T, lang: string): string =>
  field[(lang as Lang)] ?? field.en;

/* ------------------------------------------------------------------ */
/*  Slide data                                                         */
/* ------------------------------------------------------------------ */

type BadgeIcon = 'home' | 'store' | 'compass';

function SlideIcon({ name, size }: { name: BadgeIcon; size: 'sm' | 'md' }) {
  const cls = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';
  if (name === 'home') return <Home className={cls} />;
  if (name === 'store') return <Store className={cls} />;
  return <Compass className={cls} />;
}

interface LocalizedString { en: string; my: string; zh: string; }

interface Slide {
  id: string;
  badge: LocalizedString;
  badgeIcon: BadgeIcon;
  headingLine1: LocalizedString;
  headingAccent: LocalizedString;
  description: LocalizedString;
  ctaLabel: LocalizedString;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

const slides: Slide[] = heroData.slides as unknown as Slide[];

const SLIDE_DURATION = 6000; // ms

/* ------------------------------------------------------------------ */
/*  Hero component                                                     */
/* ------------------------------------------------------------------ */

export function Hero() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTickRef = useRef<number>(0);
  const [progressPct, setProgressPct] = useState(0);

  const totalSlides = slides.length;

  /* ---------- navigation helpers ---------- */

  const goTo = useCallback(
    (index: number) => {
      setCurrentSlide(((index % totalSlides) + totalSlides) % totalSlides);
      progressRef.current = 0;
      setProgressPct(0);
      lastTickRef.current = 0;
    },
    [totalSlides],
  );

  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  /* ---------- auto-rotation with rAF progress ---------- */

  useEffect(() => {
    if (isPaused) {
      lastTickRef.current = 0;
      return;
    }

    const tick = (timestamp: number) => {
      if (lastTickRef.current === 0) {
        lastTickRef.current = timestamp;
      }
      const delta = timestamp - lastTickRef.current;
      lastTickRef.current = timestamp;

      progressRef.current += delta;
      const pct = Math.min((progressRef.current / SLIDE_DURATION) * 100, 100);
      setProgressPct(pct);

      if (progressRef.current >= SLIDE_DURATION) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        progressRef.current = 0;
        setProgressPct(0);
        lastTickRef.current = 0;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused, totalSlides, currentSlide]);

  /* ---------- keyboard navigation ---------- */

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  /* ---------- derived ---------- */

  const slide = slides[currentSlide];
  const slideNumber = String(currentSlide + 1).padStart(2, '0');
  const totalNumber = String(totalSlides).padStart(2, '0');

  /* ---------------------------------------------------------------- */
  /*  Render                                                           */
  /* ---------------------------------------------------------------- */

  return (
    <section
      id="home"
      aria-label="Uncle Voo's Farm – Organic Farm Stay, Harvest Shop and Farm Tours in Malaysia"
      className="relative h-[600px] lg:h-[700px] w-full overflow-hidden"
      role="banner"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ---- Background images ---- */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === currentSlide ? 1 : 0 }}
          aria-hidden={i !== currentSlide}
        >
          <img
            src={s.image}
            alt={s.imageAlt}
            className="h-full w-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'low'}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
        </div>
      ))}

      {/* ---- Slide content ---- */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              {/* Badge */}
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                <SlideIcon name={slide.badgeIcon} size="sm" />
                {loc(slide.badge, language)}
              </span>

              {/* Heading */}
              <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                {loc(slide.headingLine1, language)}
                <br />
                <span className="text-[#A8D5A2] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {loc(slide.headingAccent, language)}
                </span>
              </h1>

              {/* Description */}
              <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-200 md:text-lg">
                {loc(slide.description, language)}
              </p>

              {/* CTA button */}
              <motion.a
                href={slide.ctaHref}
                onClick={() => analytics.heroCTAClick(slide.id, loc(slide.ctaLabel, language), slide.ctaHref)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--olive-dark)] shadow-lg transition-colors hover:bg-[var(--cta)] hover:text-white"
              >
                {loc(slide.ctaLabel, language)}
                <SlideIcon name={slide.badgeIcon} size="md" />
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ---- Progress bar ---- */}
      <div className="absolute bottom-0 left-0 z-20 h-[3px] w-full bg-white/10">
        <div
          className="h-full bg-[var(--primary)] transition-[width] duration-100 ease-linear"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* ---- Bottom controls ---- */}
      <div className="absolute bottom-24 left-0 right-0 z-20">
        <div className="mx-auto flex w-full max-w-7xl items-end justify-between px-6 lg:px-12">
          {/* Left: dots + counter */}
          <div className="flex items-center gap-4">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide
                      ? 'w-8 bg-[var(--primary)]'
                      : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                />
              ))}
            </div>

            {/* Counter */}
            <span className="font-mono text-sm tracking-wider text-white/70">
              {slideNumber} / {totalNumber}
            </span>
          </div>

          {/* Right: prev / next arrows (desktop only) */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
