import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Users, Truck } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable practices in everything we do.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified Organic',
    description: '100% pesticide-free produce for your health.',
  },
  {
    icon: Users,
    title: 'Family Friendly',
    description: 'Safe activities for visitors of all ages.',
  },
  {
    icon: Truck,
    title: 'Farm to Table',
    description: 'Delivered fresh from our fields to your door.',
  },
];

const images = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB29_wJXZ79Jbd_3GHG_WRxMgD3Ei2i-euz9fI-rfaAxro7kpvLudMeyonhv9oDiS3pv1ScfxyAm-8_bUDbtCf88Fv-ZTyRfbEQigABTjWvkAO2O0HgGv_FuDssMa_htHYBGE30Ko8bpEyJF-rh6R9hSzSRo3heJEeET4pS9SLgQA7qXWP0j-pQQ-noAkEoAWgyWKue7L467OBVLYMjKP0ioaoApVbpj8_RNEFh8l73C_DUNh96KE1MjrZTAfGklJmM6E9MKNsvWRab',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAD_4Qk2LwzGCURRPJuk5v1c5KvrXNG1YK8nNFmyNoPiPYe2DrPZBJpim1sflCtqR3BbFh39QE5cFYJ-a3SYL6tSQlj_8zR_z5nycYNfF37Pmz7cE4NF8NJxpEXjYJ2o0ckBkirlJEX03v-hAfEj2g-YNWRhfKLzSSvq9HN_vtKvrtIvreUOFK1X8vkOX24KE_9JEHkljZC9NA-bmo_77O0uryAMJr2Vc4pLNfx9lRCoQcHeX_6yIJvWorjleLUJ0VHyn6u9wPeHdwu',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA8STzegf_h7pJFO0ax5pvA7UczShcox-MVA7SR70NOt9KOQTsHJhxH5a-FwQR50DaXwqFm01RHzGhLYET7jFnEYiC4cOnf4gYjJGzfhqMw8ip_ye2rzn5_mWrAHzXo4PMp0EzA9KdGOZ-yaejOYza-u3qIy0gA55DrXQ0asNJYRhLsqcNouQrDoDkzfwrUNH0JKmFifX_pAlCd7F4_-ks9fjmkVlNK5mGTbrwe5lEzJh311Ugck2SCkACtZAyfGmB4sOzY_wFOoO7q',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBI9wT5du_ftjT4XDH4FSTeAs98IyEDBM-EMlnUyHU9n6XHJnZ-Uyjb-ZGRR5reosyewQX6-0Cmk53DLu6wnP3QE2VU2UQKGqScK3T_AFmjRBjoGq-yJki2JH5fDnEbvXaBZuk5yYaXzg7vxEU8OvI9y-SbH6FrEeZBaGOij_79591X3EbAT1Dm5TGhTBSKzfYaENRe6lnHu1ubSx6RYp9MShIlw1g8tn6OLDOi0H0wm4COSX_DQrVwot4UegMfISwP13tZ5n1weJlw',
];

export function FeaturesSection() {
  return (
    <section aria-label="Why Choose Uncle Voo's Farm – Eco-Friendly, Organic and Family Friendly" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left side — Content */}
        <div className="flex-1">
          {/* Section label pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[var(--primary)]/10 text-[var(--primary-dark)] rounded-full px-4 py-1.5 mb-6"
          >
            <Leaf className="h-4 w-4" />
            <span className="font-semibold text-sm">
              Why Uncle Voo's Farm
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[var(--foreground)] text-3xl lg:text-5xl font-extrabold leading-tight mb-4"
          >
            Reconnect with nature and enjoy the simple pleasures.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 leading-relaxed mb-10 max-w-xl"
          >
            Whether you're looking for a weekend escape, fresh ingredients for
            your dinner, or a learning experience for your kids, Uncle Voo's Farm
            offers a unique connection to the land.
          </motion.p>

          {/* 2x2 Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group flex gap-4 p-4 rounded-xl border border-[var(--cream)] bg-white hover:border-[var(--primary)]/30 hover:shadow-md transition-all duration-300"
                >
                  {/* Icon container */}
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-[var(--foreground)] font-semibold mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right side — Asymmetric image grid */}
        <div className="flex-1 relative">
          {/* Decorative blur circles */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[var(--primary)]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[var(--cta)]/20 rounded-full blur-3xl pointer-events-none" />

          {/* 2-column offset grid */}
          <div className="grid grid-cols-2 gap-4 relative z-10">
            {/* Left column — offset down */}
            <div className="flex flex-col gap-4 mt-8">
              <img
                src={images[0]}
                alt="Farm scenery"
                className="h-48 w-full rounded-2xl shadow-lg object-cover hover:shadow-xl transition-shadow duration-300"
              />
              <img
                src={images[1]}
                alt="Fresh produce"
                className="h-64 w-full rounded-2xl shadow-lg object-cover hover:shadow-xl transition-shadow duration-300"
              />
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4">
              <img
                src={images[2]}
                alt="Farm activities"
                className="h-64 w-full rounded-2xl shadow-lg object-cover hover:shadow-xl transition-shadow duration-300"
              />
              <img
                src={images[3]}
                alt="Countryside view"
                className="h-48 w-full rounded-2xl shadow-lg object-cover hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
