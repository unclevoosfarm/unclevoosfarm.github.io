import { useLanguage } from './LanguageContext';
import { ChevronDown } from 'lucide-react';

type Language = 'en' | 'my' | 'zh';

type FaqItem = {
  q: string;
  a: string;
};

type SectionCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  faqs: FaqItem[];
};

const content: Record<Language, SectionCopy> = {
  en: {
    eyebrow: 'Information',
    title: 'Frequently Asked Questions',
    subtitle:
      'Find answers to common questions about farm stay bookings, tours, fresh produce, and your visit to Uncle Voo\'s Farm in Sandakan, Sabah.',
    faqs: [
      {
        q: 'How do I book a farm stay in Sandakan?',
        a: 'You can book directly by contacting Uncle Voo\'s Farm via WhatsApp. Share your preferred date, guest count, and any special requests to confirm availability.',
      },
      {
        q: 'What should I bring for the farm tours?',
        a: 'Wear comfortable clothes, covered shoes, and bring drinking water. For daytime tours in Sandakan, we also recommend a hat, sunscreen, and mosquito repellent.',
      },
      {
        q: 'Is fresh produce available for purchase?',
        a: 'Yes. Depending on season and stock, you can inquire about duck eggs, kampung chicken eggs, ducks, goats, vegetables, and local fruits at the farm.',
      },
      {
        q: 'What are your visiting hours?',
        a: 'General visiting hours are daily from 9:00 AM to 4:00 PM. Please contact us before visiting so we can guide you on the best time slot for farm tours or stay check-in.',
      },
    ],
  },
  my: {
    eyebrow: 'Maklumat',
    title: 'Soalan Lazim',
    subtitle:
      'Dapatkan jawapan pantas tentang tempahan penginapan ladang, lawatan ladang, hasil segar, dan kunjungan anda ke Uncle Voo\'s Farm di Sandakan, Sabah.',
    faqs: [
      {
        q: 'Bagaimana saya boleh menempah penginapan ladang di Sandakan?',
        a: 'Anda boleh tempah terus melalui WhatsApp Uncle Voo\'s Farm. Nyatakan tarikh, jumlah tetamu, dan keperluan khas untuk semakan ketersediaan.',
      },
      {
        q: 'Apa yang perlu dibawa untuk lawatan ladang?',
        a: 'Pakai pakaian yang selesa, kasut bertutup, dan bawa air minuman. Untuk lawatan siang di Sandakan, bawa topi, pelindung matahari, dan penghalau nyamuk.',
      },
      {
        q: 'Adakah hasil ladang segar dijual?',
        a: 'Ya. Bergantung musim dan stok, anda boleh bertanya tentang telur itik, telur ayam kampung, itik, kambing, sayur, dan buah tempatan.',
      },
      {
        q: 'Apakah waktu lawatan?',
        a: 'Waktu lawatan umum ialah setiap hari 9:00 pagi hingga 4:00 petang. Sila hubungi kami dahulu untuk cadangan slot lawatan atau daftar masuk penginapan.',
      },
    ],
  },
  zh: {
    eyebrow: '信息',
    title: '常见问题',
    subtitle:
      '这里整理了关于山打根 Uncle Voo\'s Farm 农场住宿、导览活动、新鲜农产品与到访安排的常见问题。',
    faqs: [
      {
        q: '如何预订山打根农场住宿？',
        a: '可通过 WhatsApp 直接联系 Uncle Voo\'s Farm 预订，并提供入住日期、人数及特别需求以确认房态。',
      },
      {
        q: '参加农场导览需要带什么？',
        a: '建议穿着轻便衣物和包脚鞋，并携带饮用水。白天到访山打根时，建议准备帽子、防晒与防蚊用品。',
      },
      {
        q: '可以购买新鲜农产品吗？',
        a: '可以。视季节与库存而定，可咨询鸭蛋、甘榜鸡蛋、鸭只、山羊、蔬菜和本地水果等。',
      },
      {
        q: '开放参观时间是什么时候？',
        a: '一般参观时间为每天上午 9:00 至下午 4:00。建议先联系确认最合适的导览或入住时段。',
      },
    ],
  },
};

export function LocalSeoSection() {
  const { language } = useLanguage();
  const current = content[(language as Language)] ?? content.en;

  return (
    <section
      aria-label="Sandakan farm stay information and frequently asked questions"
      className="py-20 lg:py-24 bg-[var(--cream)]"
    >
      <div className="max-w-[960px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[var(--primary)] text-sm font-semibold tracking-wider uppercase block mb-2">
            {current.eyebrow}
          </span>
          <h2 className="text-[var(--foreground)] text-3xl md:text-4xl mb-4">
            {current.title}
          </h2>
          <p className="text-gray-600 max-w-[672px] mx-auto leading-relaxed">
            {current.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {current.faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-gray-100 bg-white px-5 md:px-6 py-4 shadow-sm"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-[var(--foreground)] font-semibold text-base md:text-lg">
                <span>{item.q}</span>
                <ChevronDown className="h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed pr-6">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
