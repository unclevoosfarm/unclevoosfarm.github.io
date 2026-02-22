import { LanguageProvider } from './components/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StayCards } from './components/StayCards';
import { HarvestProducts } from './components/HarvestProducts';
import { FarmTours } from './components/FarmTours';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FFFCF5]">
        {/* Sticky Header with Navigation */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Farm Stay Accommodations */}
          <StayCards />

          {/* Fresh Harvest Products */}
          <HarvestProducts />

          {/* Farm Tour Experiences */}
          <FarmTours />

          {/* Guest Testimonials */}
          <Testimonials />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
