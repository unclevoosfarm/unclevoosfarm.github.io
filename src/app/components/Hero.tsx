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

/* ------------------------------------------------------------------ */
/*  Slide data                                                         */
/* ------------------------------------------------------------------ */

interface Slide {
  badge: string;
  badgeIcon: React.ReactNode;
  headingLine1: string;
  headingAccent: string;
  description: string;
  ctaLabel: string;
  ctaIcon: React.ReactNode;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

const slides: Slide[] = [
  {
    badge: 'Accommodation',
    badgeIcon: <Home className="h-3.5 w-3.5" />,
    headingLine1: 'Peaceful Homestay',
    headingAccent: 'Experience',
    description:
      'Escape to our cozy cabins nestled among lush greenery. Wake up to birdsong, sip fresh coffee on the porch, and let the tranquility of the farm restore your spirit.',
    ctaLabel: 'Rest & Recharge',
    ctaIcon: <ArrowRight className="h-4 w-4" />,
    ctaHref: '#stay',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDIOj-Qstr6LNcXG4r8MsyE6jZyxBpmE7pHJJ-08BQg7oP7chvO9Z2CYdlm5pX709vAcxJTMMSfsKFjSWtq0q1fe2p5dfnnn4yABebjp4QWcdqLH3bZnHMrJ1pxrAfsX2gqK3WfxrQ30hE_4uJvz_Fq3Cnb30_KBa_AgSTQ_W7yISvCamExHejK7cZeouTBDL2829smMO5Dv9Unlhbl13AAOgCYEIeyRJRqtvJAwFrGj0IMOY59NvnsdTvvQVBsFKEenh1JDSKs_Ixo',
    imageAlt: 'Cozy farmhouse cabin surrounded by lush tropical greenery at Uncle Voo\'s Farm',
  },
  {
    badge: 'Fresh Produce',
    badgeIcon: <Store className="h-3.5 w-3.5" />,
    headingLine1: 'Organic Farm',
    headingAccent: 'Shop',
    description:
      'Browse our farm shop stocked with fresh seasonal produce, homemade preserves, and artisan goods. All grown and crafted right here on Uncle Voo\'s land.',
    ctaLabel: 'Browse Our Harvest',
    ctaIcon: <Store className="h-4 w-4" />,
    ctaHref: '#shop',
    image:
      'https://images.unsplash.com/photo-1488459716781-31db52582fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1280',
    imageAlt: 'Fresh organic produce and seasonal harvest from Uncle Voo\'s Farm shop',
  },
  {
    badge: 'Adventures',
    badgeIcon: <Compass className="h-3.5 w-3.5" />,
    headingLine1: 'Interactive Farm',
    headingAccent: 'Tours',
    description:
      'Join an educational adventure through our working farm. Feed the animals, pick your own fruit, and discover the joy of sustainable farming. Perfect for families and curious minds.',
    ctaLabel: 'Experience Farm Life',
    ctaIcon: <Compass className="h-4 w-4" />,
    ctaHref: '#tours',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJl2xZx-XNH-9XqureycfbHsnjaC0z30K72rdfPmpceXNWzmUFBhskAL1nsomF_mA9hCfB6jIRvQ3Tcd3egOG5gJPQ_XmRyy7e3b_EyuJ08AaliGAyA4kb3XVsfyqa7px8X_401R-Qm8tlefjHY_1rIVlDLNcoBeRPWXTGCQsy0eqGB3-LSojmtWSJ-pA3rJhwPb381rmVYyj5evjDrL-Et-kffB_OUI2c8xUvWHyeicAaw_EpcDRY_22Alf_l5pBjhaCngMg04uQu',
    imageAlt: 'Family enjoying a guided farm tour at Uncle Voo\'s organic farm in Malaysia',
  },
];

const SLIDE_DURATION = 6000; // ms

/* ------------------------------------------------------------------ */
/*  Hero component                                                     */
/* ------------------------------------------------------------------ */

export function Hero() {
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
                {slide.badgeIcon}
                {slide.badge}
              </span>

              {/* Heading */}
              <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                {slide.headingLine1}
                <br />
                <span className="text-[var(--primary)]">
                  {slide.headingAccent}
                </span>
              </h1>

              {/* Description */}
              <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-200 md:text-lg">
                {slide.description}
              </p>

              {/* CTA button */}
              <motion.a
                href={slide.ctaHref}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--olive-dark)] shadow-lg transition-colors hover:bg-[var(--cta)] hover:text-white"
              >
                {slide.ctaLabel}
                {slide.ctaIcon}
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
