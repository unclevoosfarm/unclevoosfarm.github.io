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
    stayTag: 'Farm Homestay',
    stayTitle: 'Stay at the Farm',
    staySubtitle: 'Wake up to birdsong, cook breakfast with farm-fresh eggs, and let the kids explore the countryside. Your whole family under one roof.',
    stayPerNight: '/ night',
    stayCheckAvailability: 'Book via WhatsApp',
    stayName: "Uncle Voo's Farmhouse",
    stayPrice: 'RM 600',
    stayDesc: 'Your private countryside retreat with everything you need for a memorable getaway. Four spacious queen bedrooms, a fully equipped kitchen, and all the comforts of home, set against the peaceful backdrop of a working farm. Fire up the BBQ, gather your favourite people, and make memories that last.',
    stayAmenityRooms: '4 Queen Rooms',
    stayAmenityGuests: 'Up to 8 Guests',
    stayAmenityAircon: 'Air Conditioning',
    stayAmenityKitchen: 'Full Kitchen',
    stayAmenityBBQ: 'BBQ Stove',
    stayAmenityWater: 'Water Heater',
    stayAmenityLaundry: 'Laundry',
    // Harvest section
    harvestTag: 'Straight from the soil',
    harvestFilterAll: 'All',
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
    // Farm Tours
    toursTag: 'Explore the Farm',
    toursTitle: 'Farm Tour Experiences',
    toursSubtitle: 'Discover the heart of Uncle Voo\'s Farm with our guided tours. Perfect for families, couples, and nature lovers.',
    toursBookTour: 'Book via WhatsApp',
    toursPriceOnRequest: 'Price on request',
    tour1Name: 'Morning Farm Walk',
    tour1Price: 'RM 35',
    tour1Duration: '1.5 hours',
    tour1Desc: 'Start your day with a peaceful walk through the farm. Visit the vegetable gardens, fruit orchards, and enjoy the fresh morning air.',
    tour1Feat1: 'Up to 10 guests',
    tour1Feat2: 'Light refreshments',
    tour1Feat3: 'Photo opportunities',
    tour2Name: 'Harvest Experience',
    tour2Price: 'RM 65',
    tour2Duration: '2.5 hours',
    tour2Desc: 'Get your hands dirty! Pick your own fruits and vegetables straight from the field, and learn organic farming techniques from Uncle Voo himself.',
    tour2Feat1: 'Up to 8 guests',
    tour2Feat2: 'Take home your harvest',
    tour2Feat3: 'Farming workshop',
    tour3Name: 'Animal Feeding Adventure',
    tour3Price: 'RM 45',
    tour3Duration: '2 hours',
    tour3Desc: 'Meet our friendly farm animals! Feed the goats, collect eggs from the chicken coop, and learn about sustainable animal care.',
    tour3Feat1: 'Up to 12 guests',
    tour3Feat2: 'Kid-friendly',
    tour3Feat3: 'Includes farm snacks',
    toursFamilyFavorite: 'Family Favorite',
    toursMostPopular: 'Most Popular',
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
    contactSuccessTitle: 'Message Sent!',
    contactSuccessDesc: "Thanks for reaching out. We'll get back to you soon.",
    contactSendAnother: 'Send another message',
    contactErrorDesc: 'Something went wrong. Please try again or contact us via WhatsApp.',
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
    stayTag: 'Penginapan Ladang',
    stayTitle: 'Penginapan di Ladang',
    staySubtitle: 'Bangun dengan nyanyian burung, masak sarapan dengan telur ladang segar, dan biar anak-anak meneroka luar bandar. Sekeluarga di bawah satu bumbung.',
    stayPerNight: '/ malam',
    stayCheckAvailability: 'Tempah melalui WhatsApp',
    stayName: 'Rumah Ladang Uncle Voo',
    stayPrice: 'RM 600',
    stayDesc: 'Tempat percutian peribadi anda di luar bandar dengan segala yang diperlukan untuk percutian yang tidak dapat dilupakan. Empat bilik queen yang luas, dapur lengkap, dan semua keselesaan rumah dengan pemandangan ladang yang tenang. Hidupkan BBQ, kumpulkan orang tersayang, dan cipta kenangan indah.',
    stayAmenityRooms: '4 Bilik Queen',
    stayAmenityGuests: 'Sehingga 8 Tetamu',
    stayAmenityAircon: 'Penghawa Dingin',
    stayAmenityKitchen: 'Dapur Lengkap',
    stayAmenityBBQ: 'Dapur BBQ',
    stayAmenityWater: 'Pemanas Air',
    stayAmenityLaundry: 'Dobi',
    // Harvest section
    harvestTag: 'Terus dari tanah',
    harvestFilterAll: 'Semua',
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
    // Farm Tours
    toursTag: 'Terokai Ladang',
    toursTitle: 'Pengalaman Lawatan Ladang',
    toursSubtitle: 'Temui keindahan Ladang Uncle Voo dengan lawatan berpandu kami. Sesuai untuk keluarga, pasangan, dan pencinta alam.',
    toursBookTour: 'Tempah melalui WhatsApp',
    toursPriceOnRequest: 'Harga atas permintaan',
    tour1Name: 'Jalan Pagi di Ladang',
    tour1Price: 'RM 35',
    tour1Duration: '1.5 jam',
    tour1Desc: 'Mulakan hari anda dengan berjalan-jalan di ladang. Lawati kebun sayur, dusun buah-buahan, dan nikmati udara segar pagi.',
    tour1Feat1: 'Sehingga 10 tetamu',
    tour1Feat2: 'Minuman ringan',
    tour1Feat3: 'Peluang bergambar',
    tour2Name: 'Pengalaman Menuai',
    tour2Price: 'RM 65',
    tour2Duration: '2.5 jam',
    tour2Desc: 'Kotorkan tangan anda! Petik buah-buahan dan sayur-sayuran sendiri dari ladang, dan belajar teknik pertanian organik dari Uncle Voo.',
    tour2Feat1: 'Sehingga 8 tetamu',
    tour2Feat2: 'Bawa pulang tuaian anda',
    tour2Feat3: 'Bengkel pertanian',
    tour3Name: 'Pengembaraan Memberi Makan Haiwan',
    tour3Price: 'RM 45',
    tour3Duration: '2 jam',
    tour3Desc: 'Temui haiwan ladang kami yang mesra! Beri makan kambing, kutip telur dari reban ayam, dan pelajari penjagaan haiwan lestari.',
    tour3Feat1: 'Sehingga 12 tetamu',
    tour3Feat2: 'Mesra kanak-kanak',
    tour3Feat3: 'Termasuk snek ladang',
    toursFamilyFavorite: 'Kegemaran Keluarga',
    toursMostPopular: 'Paling Popular',
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
    contactSuccessTitle: 'Mesej Dihantar!',
    contactSuccessDesc: 'Terima kasih kerana menghubungi kami. Kami akan membalas anda tidak lama lagi.',
    contactSendAnother: 'Hantar mesej lain',
    contactErrorDesc: 'Sesuatu telah berlaku. Sila cuba lagi atau hubungi kami melalui WhatsApp.',
    contactVisitTitle: 'Lawati Kami',
    contactVisitDesc: 'Datang bertegur sapa dengan Uncle Voo dan haiwan-haiwan. Kami suka pelawat!',
    contactAddress: '123 Jalan Lembah Hijau,\nDaerah Sunshine, 54321',
    contactPhone: '+60 12-345 6789',
    contactEmailAddr: 'hello@unclevoofarm.com',
    // Footer
    footerCopyright: '\u00a9 2026 Uncle Voo\'s Farm. Hak cipta terpelihara.',
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
    stayTag: '\u519c\u573a\u6c11\u5bbf',
    stayTitle: '\u4f4f\u5728\u519c\u573a',
    staySubtitle: '\u4f34\u7740\u9e1f\u9e23\u9192\u6765\uff0c\u7528\u519c\u573a\u9c9c\u86cb\u505a\u65e9\u9910\uff0c\u8ba9\u5b69\u5b50\u4eec\u81ea\u7531\u63a2\u7d22\u4e61\u6751\u3002\u5168\u5bb6\u4eba\u540c\u5c4b\u6a90\u4e0b\u3002',
    stayPerNight: '/ \u665a',
    stayCheckAvailability: '\u901a\u8fc7WhatsApp\u9884\u8ba2',
    stayName: 'Uncle Voo \u519c\u820d',
    stayPrice: 'RM 600',
    stayDesc: '\u60a8\u7684\u79c1\u4eba\u4e61\u6751\u5ea6\u5047\u5c4b\uff0c\u62e5\u6709\u96be\u5fd8\u5047\u671f\u6240\u9700\u7684\u4e00\u5207\u3002\u56db\u95f4\u5bbd\u655e\u7684\u5927\u5e8a\u623f\u3001\u8bbe\u5907\u9f50\u5168\u7684\u53a8\u623f\u3001\u4ee5\u53ca\u6240\u6709\u5bb6\u7684\u8212\u9002\uff0c\u5750\u843d\u5728\u5b81\u9759\u7684\u519c\u573a\u80cc\u666f\u4e2d\u3002\u70b9\u71c3BBQ\uff0c\u53ec\u96c6\u4eb2\u670b\u597d\u53cb\uff0c\u521b\u9020\u7f8e\u597d\u56de\u5fc6\u3002',
    stayAmenityRooms: '4\u95f4\u5927\u5e8a\u623f',
    stayAmenityGuests: '\u6700\u591a8\u4f4d\u5ba2\u4eba',
    stayAmenityAircon: '\u7a7a\u8c03',
    stayAmenityKitchen: '\u5b8c\u6574\u53a8\u623f',
    stayAmenityBBQ: 'BBQ\u7089',
    stayAmenityWater: '\u70ed\u6c34\u5668',
    stayAmenityLaundry: '\u6d17\u8863\u673a',
    // Harvest section
    harvestTag: '直接从土壤中',
    harvestFilterAll: '全部',
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
    // Farm Tours
    toursTag: '\u63a2\u7d22\u519c\u573a',
    toursTitle: '\u519c\u573a\u6e38\u89c8\u4f53\u9a8c',
    toursSubtitle: '\u8ddf\u968f\u6211\u4eec\u7684\u5bfc\u6e38\u63a2\u7d22Uncle Voo\u519c\u573a\u7684\u9b45\u529b\u3002\u9002\u5408\u5bb6\u5ead\u3001\u60c5\u4fa3\u548c\u81ea\u7136\u7231\u597d\u8005\u3002',
    toursBookTour: '\u901a\u8fc7WhatsApp\u9884\u8ba2',
    toursPriceOnRequest: '\u4ef7\u683c\u8be2\u95ee',
    tour1Name: '\u6e05\u6668\u519c\u573a\u6563\u6b65',
    tour1Price: 'RM 35',
    tour1Duration: '1.5\u5c0f\u65f6',
    tour1Desc: '\u4ee5\u5b81\u9759\u7684\u519c\u573a\u6563\u6b65\u5f00\u59cb\u65b0\u7684\u4e00\u5929\u3002\u53c2\u89c2\u83dc\u56ed\u3001\u679c\u56ed\uff0c\u4eab\u53d7\u6e05\u6668\u7684\u65b0\u9c9c\u7a7a\u6c14\u3002',
    tour1Feat1: '\u6700\u591a10\u4f4d\u5ba2\u4eba',
    tour1Feat2: '\u8f7b\u98df\u996e\u54c1',
    tour1Feat3: '\u62cd\u7167\u673a\u4f1a',
    tour2Name: '\u6536\u83b7\u4f53\u9a8c',
    tour2Price: 'RM 65',
    tour2Duration: '2.5\u5c0f\u65f6',
    tour2Desc: '\u4eb2\u624b\u4f53\u9a8c\uff01\u4ece\u7530\u91cc\u91c7\u6458\u6c34\u679c\u548c\u84d4\u83dc\uff0c\u8ddf Uncle Voo\u5b66\u4e60\u6709\u673a\u519c\u4e1a\u6280\u672f\u3002',
    tour2Feat1: '\u6700\u591a8\u4f4d\u5ba2\u4eba',
    tour2Feat2: '\u5e26\u8d70\u4f60\u7684\u6536\u83b7',
    tour2Feat3: '\u519c\u4e1a\u5de5\u4f5c\u574a',
    tour3Name: '\u52a8\u7269\u5582\u517b\u5192\u9669',
    tour3Price: 'RM 45',
    tour3Duration: '2\u5c0f\u65f6',
    tour3Desc: '\u8ba4\u8bc6\u6211\u4eec\u53cb\u5584\u7684\u519c\u573a\u52a8\u7269\uff01\u5582\u5c71\u7f8a\u3001\u4ece\u9e21\u820d\u6536\u96c6\u9e21\u86cb\uff0c\u5b66\u4e60\u53ef\u6301\u7eed\u7684\u52a8\u7269\u62a4\u7406\u3002',
    tour3Feat1: '\u6700\u591a12\u4f4d\u5ba2\u4eba',
    tour3Feat2: '\u9002\u5408\u513f\u7ae5',
    tour3Feat3: '\u542b\u519c\u573a\u96f6\u98df',
    toursFamilyFavorite: '\u5bb6\u5ead\u6700\u7231',
    toursMostPopular: '\u6700\u53d7\u6b22\u8fce',
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
    contactSuccessTitle: '\u6d88\u606f\u5df2\u53d1\u9001\uff01',
    contactSuccessDesc: '\u611f\u8c22\u60a8\u7684\u8054\u7cfb\uff0c\u6211\u4eec\u5c06\u5c3d\u5feb\u56de\u590d\u60a8\u3002',
    contactSendAnother: '\u53d1\u9001\u53e6\u4e00\u6761\u6d88\u606f',
    contactErrorDesc: '\u51fa\u9519\u4e86\uff0c\u8bf7\u91cd\u8bd5\u6216\u901a\u8fc7WhatsApp\u8054\u7cfb\u6211\u4eec\u3002',
    contactVisitTitle: '\u8bbf\u95ee\u6211\u4eec',
    contactVisitDesc: '\u6765\u548cUncle Voo\u548c\u52a8\u7269\u4eec\u6253\u4e2a\u62db\u547c\u3002\u6211\u4eec\u6b22\u8fce\u6e38\u5ba2\uff01',
    contactAddress: '123 \u7eff\u8c37\u8def,\n\u9633\u5149\u533a, 54321',
    contactPhone: '+60 12-345 6789',
    contactEmailAddr: 'hello@unclevoofarm.com',
    // Footer
    footerCopyright: '\u00a9 2026 Uncle Voo\'s Farm\u3002\u7248\u6743\u6240\u6709\u3002',
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

function getSavedLanguage(): Language {
  try {
    const saved = localStorage.getItem('uncle-voo-lang');
    if (saved === 'en' || saved === 'my' || saved === 'zh') return saved;
  } catch {}
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getSavedLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try { localStorage.setItem('uncle-voo-lang', lang); } catch {}
    document.documentElement.lang = lang === 'my' ? 'ms' : lang;
  };

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