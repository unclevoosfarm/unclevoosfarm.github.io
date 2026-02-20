import { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'en' | 'my' | 'zh';

type TranslationKey = keyof typeof translations.en;

const translations = {
  en: {
    // Header
    navStay: 'Stay',
    navShop: 'Shop Harvest',
    navTours: 'Farm Tours',
    navReviews: 'Testimonials',
    bookNow: 'Book Now',
    // Hero
    heroBadge: '100% Organic & Family Owned',
    heroTitle1: 'Welcome to the',
    heroTitle2: 'Good Life.',
    heroDesc1: "Escape the city and breathe in the fresh air at Uncle Voo's.",
    heroDesc2: 'Hand-picked harvest, cozy farm stays, and smiles guaranteed.',
    heroBookStay: 'Book Your Stay',
    heroViewHarvest: 'View Harvest',
    heroPetFriendly: 'Pet Friendly',
    heroFreshBreakfast: 'Fresh Breakfast',
    // Stay section
    stayTitle: 'Stay at the Farm',
    staySubtitle: 'Experience rural living with modern comforts. Wake up to the sound of roosters and the smell of freshly brewed coffee.',
    stayPerNight: '/ night',
    stayCheckAvailability: 'Check Availability',
    stayGuests: 'Guests',
    stayMostPopular: 'Most Popular',
    // Stay cards
    stay1Title: 'Cozy Cabin',
    stay1Price: 'RM 450',
    stay1Desc: 'A rustic wooden cabin perfect for couples. Includes a private porch overlooking the pineapple fields and a warm fireplace.',
    stay1Feat1: '2 Guests',
    stay1Feat2: 'Queen Bed',
    stay1Feat3: 'Breakfast Included',
    stay2Title: 'Family Farmhouse',
    stay2Price: 'RM 750',
    stay2Desc: 'Spacious farmhouse with a full kitchen, living area, and garden access. Perfect for families wanting the complete farm experience.',
    stay2Feat1: '6 Guests',
    stay2Feat2: '3 Bedrooms',
    stay2Feat3: 'Full Kitchen',
    stay3Title: 'Camping Green View',
    stay3Price: 'RM 180',
    stay3Desc: 'Sleep under the stars with our premium glamping setup. Includes comfortable bedding and a campfire spot.',
    stay3Feat1: '4 Guests',
    stay3Feat2: 'Tent Provided',
    stay3Feat3: 'Campfire Access',
    // Harvest section
    harvestTag: 'Straight from the soil',
    harvestTitle: 'Fresh Harvest',
    harvestSeeAll: 'See All Products',
    harvestAddToCart: 'Add to Cart',
    harvestOrderEmail: 'Order via Email',
    harvestOrderWhatsApp: 'WhatsApp',
    harvestInSeason: 'In Season',
    harvestBestSeller: 'Best Seller',
    // Product cards
    prod1Name: 'Organic Broccoli',
    prod1Price: 'RM 15.00',
    prod1Unit: '/kg',
    prod1Desc: 'Crisp, green, and pesticide-free. Perfect for stir-fries or steaming.',
    prod2Name: 'Honey Pineapple',
    prod2Price: 'RM 22.00',
    prod2Unit: '/pc',
    prod2Desc: "Uncle Voo's famous sweet pineapples. Juicy and golden.",
    prod3Name: 'Red Lady Papaya',
    prod3Price: 'RM 18.50',
    prod3Unit: '/kg',
    prod3Desc: 'Rich in vitamins and flavor. Great for breakfast or salads.',
    // Testimonials
    reviewsTag: 'Testimonials',
    reviewsTitle: 'Guest Reviews',
    reviewsSubtitle: 'What our happy visitors have to say about their stay.',
    review1Text: '"Absolutely magical! The kids loved feeding the goats and the cabin was so cozy. We will definitely be back next summer."',
    review1Name: 'Sarah Jenkins',
    review1Role: 'Family Trip',
    review2Text: '"The freshest produce I\'ve ever tasted. I bought a box of vegetables to take home and they were delicious. Highly recommend!"',
    review2Name: 'Michael Tan',
    review2Role: 'Day Visitor',
    review3Text: '"A perfect escape from the city. The wifi was surprisingly good, so I could work a bit while enjoying the nature views."',
    review3Name: 'Jessica Lee',
    review3Role: 'Digital Nomad',
    // Contact
    contactTitle: 'Get in touch',
    contactName: 'Name',
    contactNamePlaceholder: 'Your name',
    contactEmail: 'Email',
    contactEmailPlaceholder: 'you@example.com',
    contactMessage: 'Message',
    contactMessagePlaceholder: 'How can we help you?',
    contactSend: 'Send Message',
    contactVisitTitle: 'Visit Us',
    contactVisitDesc: 'Come say hi to Uncle Voo and the animals. We love visitors!',
    contactAddress: '123 Green Valley Road,\nSunshine District, 54321',
    contactPhone: '+60 12-345 6789',
    contactEmailAddr: 'hello@unclevoofarm.com',
    // Footer
    footerCopyright: '\u00a9 2026 Uncle Voo\'s Farm. All rights reserved.',
    footerMadeWith: 'Made with',
    footerAnd: 'and organic compost.',
    // Language
    langLabel: 'Language',
  },
  my: {
    // Header
    navStay: 'Penginapan',
    navShop: 'Kedai Tuaian',
    navTours: 'Lawatan Ladang',
    navReviews: 'Testimoni',
    bookNow: 'Tempah',
    // Hero
    heroBadge: '100% Organik & Milik Keluarga',
    heroTitle1: 'Selamat Datang ke',
    heroTitle2: 'Kehidupan Indah.',
    heroDesc1: 'Lari dari kesibukan bandar dan hirup udara segar di Uncle Voo.',
    heroDesc2: 'Tuaian segar, penginapan selesa, dan senyuman dijamin.',
    heroBookStay: 'Tempah Penginapan',
    heroViewHarvest: 'Lihat Tuaian',
    heroPetFriendly: 'Mesra Haiwan',
    heroFreshBreakfast: 'Sarapan Segar',
    // Stay section
    stayTitle: 'Penginapan di Ladang',
    staySubtitle: 'Rasai kehidupan luar bandar dengan keselesaan moden. Bangun dengan bunyi ayam berkokok dan bau kopi segar.',
    stayPerNight: '/ malam',
    stayCheckAvailability: 'Semak Ketersediaan',
    stayGuests: 'Tetamu',
    stayMostPopular: 'Paling Popular',
    // Stay cards
    stay1Title: 'Kabin Selesa',
    stay1Price: 'RM 450',
    stay1Desc: 'Kabin kayu rustik sesuai untuk pasangan. Termasuk anjung peribadi menghadap ladang nanas dan perapian hangat.',
    stay1Feat1: '2 Tetamu',
    stay1Feat2: 'Katil Queen',
    stay1Feat3: 'Sarapan Termasuk',
    stay2Title: 'Rumah Ladang Keluarga',
    stay2Price: 'RM 750',
    stay2Desc: 'Rumah ladang luas dengan dapur penuh, ruang tamu, dan akses taman. Sesuai untuk keluarga.',
    stay2Feat1: '6 Tetamu',
    stay2Feat2: '3 Bilik Tidur',
    stay2Feat3: 'Dapur Penuh',
    stay3Title: 'Perkhemahan Hijau',
    stay3Price: 'RM 180',
    stay3Desc: 'Tidur di bawah bintang dengan persediaan glamping premium kami. Termasuk peralatan tidur selesa.',
    stay3Feat1: '4 Tetamu',
    stay3Feat2: 'Khemah Disediakan',
    stay3Feat3: 'Akses Unggun Api',
    // Harvest section
    harvestTag: 'Terus dari tanah',
    harvestTitle: 'Tuaian Segar',
    harvestSeeAll: 'Lihat Semua Produk',
    harvestAddToCart: 'Tambah ke Troli',
    harvestOrderEmail: 'Pesan melalui Emel',
    harvestOrderWhatsApp: 'WhatsApp',
    harvestInSeason: 'Dalam Musim',
    harvestBestSeller: 'Terlaris',
    // Product cards
    prod1Name: 'Brokoli Organik',
    prod1Price: 'RM 15.00',
    prod1Unit: '/kg',
    prod1Desc: 'Rangup, hijau, dan bebas racun perosak. Sesuai untuk tumis atau kukus.',
    prod2Name: 'Nanas Madu',
    prod2Price: 'RM 22.00',
    prod2Unit: '/biji',
    prod2Desc: 'Nanas manis terkenal Uncle Voo. Berair dan keemasan.',
    prod3Name: 'Betik Red Lady',
    prod3Price: 'RM 18.50',
    prod3Unit: '/kg',
    prod3Desc: 'Kaya vitamin dan rasa. Sesuai untuk sarapan atau salad.',
    // Testimonials
    reviewsTag: 'Testimoni',
    reviewsTitle: 'Ulasan Tetamu',
    reviewsSubtitle: 'Apa kata pelawat gembira kami tentang penginapan mereka.',
    review1Text: '"Benar-benar ajaib! Anak-anak suka memberi makan kambing dan kabin sangat selesa. Kami pasti akan kembali musim panas depan."',
    review1Name: 'Sarah Jenkins',
    review1Role: 'Percutian Keluarga',
    review2Text: '"Hasil paling segar yang pernah saya rasa. Saya beli sekotak sayur untuk bawa pulang dan ia sangat sedap. Sangat disyorkan!"',
    review2Name: 'Michael Tan',
    review2Role: 'Pelawat Harian',
    review3Text: '"Pelarian sempurna dari bandar. Wifi sangat baik, jadi saya boleh bekerja sambil menikmati pemandangan alam."',
    review3Name: 'Jessica Lee',
    review3Role: 'Nomad Digital',
    // Contact
    contactTitle: 'Hubungi Kami',
    contactName: 'Nama',
    contactNamePlaceholder: 'Nama anda',
    contactEmail: 'Emel',
    contactEmailPlaceholder: 'anda@contoh.com',
    contactMessage: 'Mesej',
    contactMessagePlaceholder: 'Bagaimana kami boleh membantu?',
    contactSend: 'Hantar Mesej',
    contactVisitTitle: 'Lawati Kami',
    contactVisitDesc: 'Datang bertegur sapa dengan Uncle Voo dan haiwan-haiwan. Kami suka pelawat!',
    contactAddress: '123 Jalan Lembah Hijau,\nDaerah Sunshine, 54321',
    contactPhone: '+60 12-345 6789',
    contactEmailAddr: 'hello@unclevoofarm.com',
    // Footer
    footerCopyright: '\u00a9 2026 Uncle Voo Farm. Hak cipta terpelihara.',
    footerMadeWith: 'Dibuat dengan',
    footerAnd: 'dan kompos organik.',
    // Language
    langLabel: 'Bahasa',
  },
  zh: {
    // Header
    navStay: '\u4f4f\u5bbf',
    navShop: '\u4e70\u6536\u83b7',
    navTours: '\u519c\u573a\u6e38',
    navReviews: '\u8bc4\u4ef7',
    bookNow: '\u9884\u8ba2',
    // Hero
    heroBadge: '100% \u6709\u673a & \u5bb6\u65cf\u7ecf\u8425',
    heroTitle1: '\u6b22\u8fce\u6765\u5230',
    heroTitle2: '\u7f8e\u597d\u751f\u6d3b\u3002',
    heroDesc1: '\u9003\u79bb\u57ce\u5e02\uff0c\u5728Uncle Voo\u547c\u5438\u65b0\u9c9c\u7a7a\u6c14\u3002',
    heroDesc2: '\u65b0\u9c9c\u6536\u83b7\u3001\u6e29\u99a8\u4f4f\u5bbf\uff0c\u5fae\u7b11\u4fdd\u8bc1\u3002',
    heroBookStay: '\u9884\u8ba2\u4f4f\u5bbf',
    heroViewHarvest: '\u67e5\u770b\u6536\u83b7',
    heroPetFriendly: '\u5ba0\u7269\u53cb\u597d',
    heroFreshBreakfast: '\u65b0\u9c9c\u65e9\u9910',
    // Stay section
    stayTitle: '\u4f4f\u5728\u519c\u573a',
    staySubtitle: '\u4f53\u9a8c\u4e61\u6751\u751f\u6d3b\u4e0e\u73b0\u4ee3\u8212\u9002\u3002\u4f34\u7740\u516c\u9e21\u557c\u9e23\u548c\u73b0\u78e8\u5496\u5561\u7684\u9999\u5473\u9192\u6765\u3002',
    stayPerNight: '/ \u665a',
    stayCheckAvailability: '\u67e5\u770b\u53ef\u7528\u6027',
    stayGuests: '\u5ba2\u4eba',
    stayMostPopular: '\u6700\u53d7\u6b22\u8fce',
    // Stay cards
    stay1Title: '\u6e29\u99a8\u5c0f\u5c4b',
    stay1Price: 'RM 450',
    stay1Desc: '\u9002\u5408\u60c5\u4fa3\u7684\u4e61\u6751\u6728\u5c4b\u3002\u5305\u62ec\u4fef\u77b0\u83e0\u841d\u7530\u7684\u79c1\u4eba\u95e8\u5eca\u548c\u6e29\u6696\u7684\u58c1\u7089\u3002',
    stay1Feat1: '2\u4f4d\u5ba2\u4eba',
    stay1Feat2: '\u5927\u5e8a',
    stay1Feat3: '\u542b\u65e9\u9910',
    stay2Title: '\u5bb6\u5ead\u519c\u820d',
    stay2Price: 'RM 750',
    stay2Desc: '\u5bbd\u655e\u7684\u519c\u820d\uff0c\u914d\u6709\u5b8c\u6574\u53a8\u623f\u3001\u5ba2\u5385\u548c\u82b1\u56ed\u901a\u9053\u3002\u9002\u5408\u5bb6\u5ead\u3002',
    stay2Feat1: '6\u4f4d\u5ba2\u4eba',
    stay2Feat2: '3\u95f4\u5367\u5ba4',
    stay2Feat3: '\u5b8c\u6574\u53a8\u623f',
    stay3Title: '\u7eff\u8272\u9732\u8425',
    stay3Price: 'RM 180',
    stay3Desc: '\u5728\u661f\u7a7a\u4e0b\u5165\u7761\uff0c\u4eab\u53d7\u6211\u4eec\u7684\u9ad8\u7ea7\u9732\u8425\u8bbe\u7f6e\u3002\u5305\u62ec\u8212\u9002\u5bdd\u5177\u548c\u7bc7\u706b\u70b9\u3002',
    stay3Feat1: '4\u4f4d\u5ba2\u4eba',
    stay3Feat2: '\u63d0\u4f9b\u5e10\u7bf7',
    stay3Feat3: '\u7bc7\u706b\u901a\u9053',
    // Harvest section
    harvestTag: '\u76f4\u63a5\u4ece\u571f\u58e4\u4e2d',
    harvestTitle: '\u65b0\u9c9c\u6536\u83b7',
    harvestSeeAll: '\u67e5\u770b\u6240\u6709\u4ea7\u54c1',
    harvestAddToCart: '\u52a0\u5165\u8d2d\u7269\u8f66',
    harvestOrderEmail: '\u90ae\u4ef6\u4e0b\u5355',
    harvestOrderWhatsApp: 'WhatsApp',
    harvestInSeason: '\u5f53\u5b63',
    harvestBestSeller: '\u7545\u9500',
    // Product cards
    prod1Name: '\u6709\u673a\u897f\u5170\u82b1',
    prod1Price: 'RM 15.00',
    prod1Unit: '/\u516c\u65a4',
    prod1Desc: '\u6e05\u8106\u3001\u7fe0\u7eff\u3001\u65e0\u519c\u836f\u3002\u9002\u5408\u7092\u83dc\u6216\u6e05\u84b8\u3002',
    prod2Name: '\u871c\u7cd6\u83e0\u841d',
    prod2Price: 'RM 22.00',
    prod2Unit: '/\u4e2a',
    prod2Desc: 'Uncle Voo\u8457\u540d\u7684\u751c\u83e0\u841d\u3002\u591a\u6c41\u91d1\u9ec4\u3002',
    prod3Name: '\u7ea2\u5973\u58eb\u6728\u74dc',
    prod3Price: 'RM 18.50',
    prod3Unit: '/\u516c\u65a4',
    prod3Desc: '\u5bcc\u542b\u7ef4\u751f\u7d20\u548c\u98ce\u5473\u3002\u9002\u5408\u65e9\u9910\u6216\u6c99\u62c9\u3002',
    // Testimonials
    reviewsTag: '\u8bc4\u4ef7',
    reviewsTitle: '\u5ba2\u4eba\u8bc4\u8bba',
    reviewsSubtitle: '\u542c\u542c\u6211\u4eec\u5feb\u4e50\u7684\u6e38\u5ba2\u5bf9\u4ed6\u4eec\u4f4f\u5bbf\u7684\u8bc4\u4ef7\u3002',
    review1Text: '\u201c\u7edd\u5bf9\u795e\u5947\uff01\u5b69\u5b50\u4eec\u559c\u6b22\u5582\u5c71\u7f8a\uff0c\u5c0f\u5c4b\u5f88\u6e29\u99a8\u3002\u6211\u4eec\u660e\u5e74\u590f\u5929\u4e00\u5b9a\u4f1a\u518d\u6765\u3002\u201d',
    review1Name: 'Sarah Jenkins',
    review1Role: '\u5bb6\u5ead\u65c5\u884c',
    review2Text: '\u201c\u6211\u54c1\u5c1d\u8fc7\u7684\u6700\u65b0\u9c9c\u7684\u519c\u4ea7\u54c1\u3002\u6211\u4e70\u4e86\u4e00\u7bb1\u84d4\u83dc\u5e26\u56de\u5bb6\uff0c\u975e\u5e38\u7f8e\u5473\u3002\u5f3a\u70c8\u63a8\u8350\uff01\u201d',
    review2Name: 'Michael Tan',
    review2Role: '\u65e5\u95f4\u6e38\u5ba2',
    review3Text: '\u201c\u5b8c\u7f8e\u7684\u57ce\u5e02\u9003\u79bb\u3002WiFi\u51fa\u4e4e\u610f\u6599\u5730\u597d\uff0c\u6211\u53ef\u4ee5\u8fb9\u5de5\u4f5c\u8fb9\u6b23\u8d4f\u81ea\u7136\u666f\u89c2\u3002\u201d',
    review3Name: 'Jessica Lee',
    review3Role: '\u6570\u5b57\u6e38\u6c11',
    // Contact
    contactTitle: '\u8054\u7cfb\u6211\u4eec',
    contactName: '\u59d3\u540d',
    contactNamePlaceholder: '\u60a8\u7684\u59d3\u540d',
    contactEmail: '\u7535\u5b50\u90ae\u4ef6',
    contactEmailPlaceholder: 'you@example.com',
    contactMessage: '\u6d88\u606f',
    contactMessagePlaceholder: '\u6211\u4eec\u600e\u4e48\u5e2e\u60a8\uff1f',
    contactSend: '\u53d1\u9001\u6d88\u606f',
    contactVisitTitle: '\u8bbf\u95ee\u6211\u4eec',
    contactVisitDesc: '\u6765\u548cUncle Voo\u548c\u52a8\u7269\u4eec\u6253\u4e2a\u62db\u547c\u3002\u6211\u4eec\u6b22\u8fce\u6e38\u5ba2\uff01',
    contactAddress: '123 \u7eff\u8c37\u8def,\n\u9633\u5149\u533a, 54321',
    contactPhone: '+60 12-345 6789',
    contactEmailAddr: 'hello@unclevoofarm.com',
    // Footer
    footerCopyright: '\u00a9 2026 Uncle Voo Farm\u3002\u7248\u6743\u6240\u6709\u3002',
    footerMadeWith: '\u7528',
    footerAnd: '\u548c\u6709\u673a\u5806\u80a5\u5236\u4f5c\u3002',
    // Language
    langLabel: '\u8bed\u8a00',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}