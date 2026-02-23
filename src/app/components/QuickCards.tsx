import { motion } from 'motion/react';
import { Bed, Apple, Users, ArrowRight } from 'lucide-react';

interface QuickCard {
  icon: React.ElementType;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const cards: QuickCard[] = [
  {
    icon: Bed,
    title: 'Cozy Stays',
    description:
      'Rustic cabins with modern amenities for the perfect countryside getaway.',
    linkText: 'Check Availability',
    href: '#stay',
  },
  {
    icon: Apple,
    title: 'Daily Harvest',
    description:
      'Visit our shop for fresh eggs, milk, and seasonal vegetables picked today.',
    linkText: 'Browse Products',
    href: '#shop',
  },
  {
    icon: Users,
    title: 'Farm Tours',
    description:
      'Explore our working farm with guided tours. Feed the animals, pick fresh fruit, and learn about sustainable farming.',
    linkText: 'Book a Tour',
    href: '#tours',
  },
];

export function QuickCards() {
  return (
    <section aria-label="Uncle Voo's Farm – Quick Links to Stay, Shop and Tours" className="max-w-7xl mx-auto px-6 lg:px-12 -mt-16 relative z-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-xl shadow-lg border border-[var(--cream)] p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="h-12 w-12 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[var(--foreground)] text-xl font-semibold mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {card.description}
              </p>

              {/* Link */}
              <a
                href={card.href}
                aria-label={`${card.linkText} – ${card.title}`}
                className="inline-flex items-center gap-1.5 font-semibold text-[var(--primary)] group/link"
              >
                <span>{card.linkText}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
