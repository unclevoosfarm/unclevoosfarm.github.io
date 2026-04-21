import { useLanguage } from './LanguageContext';
import { ChevronDown } from 'lucide-react';
import faqData from '@/content/faq.json';

type Language = 'en' | 'my' | 'zh';
type LocalizedString = Record<Language, string>;
const loc = (field: LocalizedString, lang: string): string =>
  field[(lang as Language)] ?? field.en;


export function LocalSeoSection() {
  const { language } = useLanguage();

  return (
    <section
      aria-label="Sandakan farm stay information and frequently asked questions"
      className="py-20 lg:py-24 bg-[var(--cream)]"
    >
      <div className="max-w-[960px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[var(--primary)] text-sm font-semibold tracking-wider uppercase block mb-2">
            {loc(faqData.eyebrow, language)}
          </span>
          <h2 className="text-[var(--foreground)] text-3xl md:text-4xl mb-4">
            {loc(faqData.title, language)}
          </h2>
          <p className="text-gray-600 max-w-[672px] mx-auto leading-relaxed">
            {loc(faqData.subtitle, language)}
          </p>
        </div>

        <div className="space-y-4">
          {faqData.faqs.map((item) => (
            <details
              key={item.id}
              className="group rounded-2xl border border-gray-100 bg-white px-5 md:px-6 py-4 shadow-sm"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-[var(--foreground)] font-semibold text-base md:text-lg">
                <span>{loc(item.question, language)}</span>
                <ChevronDown className="h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed pr-6">{loc(item.answer, language)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
