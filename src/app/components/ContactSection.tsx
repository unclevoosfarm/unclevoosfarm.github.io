import { useLanguage } from './LanguageContext';
import svgPaths from '../../imports/svg-3ykeeib9ga';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { SectionDivider } from './SectionDivider';
import { Facebook, Instagram, Twitter } from 'lucide-react';

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
  const { t } = useLanguage();
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
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-16 lg:py-20 bg-[rgba(59,130,246,0.05)] relative">
      <SectionDivider fill="#FFFCF5" position="top" className="-mt-1" />
      <div className="max-w-[830px] mx-auto px-6 lg:px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[40px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col md:flex-row"
        >
          {/* Form Side */}
          <div className="flex-1 p-8 md:p-10">
            <h2 className="font-['Fredoka'] text-[#111827] text-3xl mb-6">{t('contactTitle')}</h2>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="font-['Quicksand'] text-gray-700 text-sm font-medium">
                  {t('contactName')}
                </label>
                <input
                  type="text"
                  placeholder={t('contactNamePlaceholder')}
                  className="bg-white border border-gray-300 rounded-3xl px-5 py-3.5 font-['Quicksand'] text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="font-['Quicksand'] text-gray-700 text-sm font-medium">
                  {t('contactEmail')}
                </label>
                <input
                  type="email"
                  placeholder={t('contactEmailPlaceholder')}
                  className="bg-white border border-gray-300 rounded-3xl px-5 py-3.5 font-['Quicksand'] text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="font-['Quicksand'] text-gray-700 text-sm font-medium">
                  {t('contactMessage')}
                </label>
                <textarea
                  placeholder={t('contactMessagePlaceholder')}
                  rows={4}
                  className="bg-white border border-gray-300 rounded-3xl px-5 py-3.5 font-['Quicksand'] text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#F97316] text-white py-4 rounded-3xl font-['Quicksand'] font-semibold shadow-[0px_10px_15px_-3px_#fed7aa,0px_4px_6px_-4px_#fed7aa] hover:shadow-[0px_15px_20px_-3px_#fed7aa,0px_6px_8px_-4px_#fed7aa] transition-shadow"
              >
                {t('contactSend')}
              </motion.button>
            </form>
          </div>

          {/* Blue Info Side */}
          <div className="bg-[#3B82F6] p-8 md:p-10 md:w-[332px] relative overflow-hidden flex flex-col justify-between">
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
              <h3 className="font-['Fredoka'] text-white text-2xl mb-4">{t('contactVisitTitle')}</h3>
              <p className="font-['Quicksand'] text-white/90 leading-relaxed mb-8">
                {t('contactVisitDesc')}
              </p>

              {/* Contact Details */}
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <MapPinIcon />
                  <span className="font-['Quicksand'] text-white/90 text-sm whitespace-pre-line leading-relaxed">
                    {t('contactAddress')}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <PhoneIcon />
                  <span className="font-['Quicksand'] text-white/90 text-sm">
                    {t('contactPhone')}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <EmailIcon />
                  <span className="font-['Quicksand'] text-white/90 text-sm">
                    {t('contactEmailAddr')}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-12 relative z-10">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
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