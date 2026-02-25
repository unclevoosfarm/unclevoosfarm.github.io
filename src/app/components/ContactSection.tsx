import { useLanguage } from './LanguageContext';
import svgPaths from '../../imports/svg-3ykeeib9ga';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import contactData from '@/content/contact.json';
import { analytics } from '@/app/lib/analytics';

type Lang = 'en' | 'my' | 'zh';
const loc = <T extends Record<Lang, string>>(field: T, lang: string): string =>
  field[(lang as Lang)] ?? field.en;

function MapPinIcon() {
  return (
    <svg className="h-5 w-4 shrink-0" fill="none" viewBox="0 0 16 20">
      <path d={svgPaths.p1869180} fill="white" opacity="0.8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-[18px] w-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
      <g opacity="0.8">
        <path d={svgPaths.p143e1930} fill="white" />
      </g>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="h-4 w-5 shrink-0" fill="none" viewBox="0 0 20 16">
      <g opacity="0.8">
        <path d={svgPaths.p13e73800} fill="white" />
      </g>
    </svg>
  );
}

export function ContactSection() {
  const { t, language } = useLanguage();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const socialLinks = [
    { icon: Facebook, href: contactData.facebook, label: "Uncle Voo's Farm on Facebook", platform: 'facebook' },
    { icon: Instagram, href: contactData.instagram, label: "Uncle Voo's Farm on Instagram", platform: 'instagram' },
    { icon: Twitter, href: contactData.twitter, label: "Uncle Voo's Farm on Twitter", platform: 'twitter' },
  ].filter(s => s.href && s.href.trim() !== '');

  return (
    <section ref={sectionRef} id="contact" aria-label="Contact Uncle Voo's Farm – Book a Stay or Ask Us Anything" className="py-16 lg:py-20 bg-[var(--background)] relative">
      <div className="max-w-[830px] mx-auto px-6 lg:px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[40px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col md:flex-row"
        >
          {/* Form Side */}
          <div className="flex-1 p-8 md:p-10">
            <h2 id="contact-heading" className="text-[var(--foreground)] text-3xl mb-6">{t('contactTitle')}</h2>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-name" className="text-gray-700 text-sm font-medium">
                  {t('contactName')}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder={t('contactNamePlaceholder')}
                  autoComplete="name"
                  className="bg-white border border-gray-300 rounded-3xl px-5 py-3.5 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-email" className="text-gray-700 text-sm font-medium">
                  {t('contactEmail')}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder={t('contactEmailPlaceholder')}
                  autoComplete="email"
                  className="bg-white border border-gray-300 rounded-3xl px-5 py-3.5 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-message" className="text-gray-700 text-sm font-medium">
                  {t('contactMessage')}
                </label>
                <textarea
                  id="contact-message"
                  placeholder={t('contactMessagePlaceholder')}
                  rows={4}
                  className="bg-white border border-gray-300 rounded-3xl px-5 py-3.5 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                onClick={() => analytics.contactFormSubmit()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[var(--cta)] hover:bg-[var(--cta-dark)] text-white py-4 rounded-3xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {t('contactSend')}
              </motion.button>
            </form>
          </div>

          {/* Dark Olive Info Side */}
          <div className="bg-[var(--olive-dark)] p-8 md:p-10 md:w-[332px] relative overflow-hidden flex flex-col justify-between">
            {/* Decorative blurs */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full blur-[20px]"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-10 top-10 w-20 h-20 bg-white rounded-full blur-[12px]"
            />

            <div className="relative z-10">
              <h3 className="text-white text-2xl mb-4">{t('contactVisitTitle')}</h3>
              <p className="text-white/90 leading-relaxed mb-8">
                {t('contactVisitDesc')}
              </p>

              {/* Contact Details */}
              <address className="not-italic flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <MapPinIcon />
                  <span className="text-white/90 text-sm whitespace-pre-line leading-relaxed">
                    {loc(contactData.address, language)}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <PhoneIcon />
                  <a href={`tel:${contactData.phone}`} onClick={() => analytics.contactInfoClick('phone', contactData.phone)} className="text-white/90 text-sm hover:text-white transition-colors">
                    {contactData.phone}
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <EmailIcon />
                  <a href={`mailto:${contactData.email}`} onClick={() => analytics.contactInfoClick('email', contactData.email)} className="text-white/90 text-sm hover:text-white transition-colors">
                    {contactData.email}
                  </a>
                </div>
              </address>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-12 relative z-10" aria-label="Follow us on social media">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() => analytics.socialClick(social.platform)}
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileHover={{ scale: 1.15, rotate: 5, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
