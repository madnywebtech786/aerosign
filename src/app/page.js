import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import CTASection from '@/components/CTASection';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Stats />
        <CTASection variant="secondary" />
        <Testimonials />
        <CTASection variant="primary" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
