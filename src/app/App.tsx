import { LanguageProvider } from './components/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickCards } from './components/QuickCards';
import { FeaturesSection } from './components/FeaturesSection';
import { StayCards } from './components/StayCards';
import { HarvestProducts } from './components/HarvestProducts';
import { FarmTours } from './components/FarmTours';
import { LocalSeoSection } from './components/LocalSeoSection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[var(--background)]">
        {/* Sticky Header with Navigation */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Slider */}
          <Hero />

          {/* Quick Cards (overlaps hero) */}
          <QuickCards />

          {/* Why Uncle Voo's Farm */}
          <FeaturesSection />

          {/* Farm Stay Accommodations */}
          <StayCards />

          {/* Fresh Harvest Products */}
          <HarvestProducts />

          {/* Farm Tour Experiences */}
          <FarmTours />

          {/* Sandakan Local SEO Content */}
          <LocalSeoSection />

          {/* Guest Testimonials */}
          <Testimonials />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp floating button */}
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}
