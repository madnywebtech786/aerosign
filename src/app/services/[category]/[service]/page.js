import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, CheckCircle2, Star, Phone, Mail } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceImage from '@/components/ServiceImage';
import ServiceTypes from '@/components/ServiceTypes';
import ServiceProcess from '@/components/ServiceProcess';
import { servicesData, allServices } from '@/data/services';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const params = [];

  Object.keys(servicesData).forEach((categoryKey) => {
    const category = servicesData[categoryKey];
    category.services.forEach((service) => {
      params.push({
        category: categoryKey,
        service: service.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const categoryData = servicesData[resolvedParams.category];

  if (!categoryData) {
    return { title: 'Service Not Found' };
  }

  const service = categoryData.services.find(s => s.slug === resolvedParams.service);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.name} Calgary | ${categoryData.title} | Aero Sign & Print Alberta`,
    description: `Professional ${service.name.toLowerCase()} services in Calgary. ${service.description} Custom design, manufacturing & installation across Alberta. Call 403-764-7000 for a free quote.`,
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const categoryData = servicesData[resolvedParams.category];

  if (!categoryData) {
    notFound();
  }

  const service = categoryData.services.find(s => s.slug === resolvedParams.service);

  if (!service) {
    notFound();
  }

  // Get related services from the same category
  const relatedServices = categoryData.services
    .filter(s => s.slug !== service.slug)
    .slice(0, 3);

  // Portfolio images (placeholders for now)
  const portfolioImages = [
    { id: 1, alt: `${service.name} Example 1` },
    { id: 2, alt: `${service.name} Example 2` },
    { id: 3, alt: `${service.name} Example 3` },
    { id: 4, alt: `${service.name} Example 4` },
    { id: 5, alt: `${service.name} Example 5` },
    { id: 6, alt: `${service.name} Example 6` },
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />

      <main className="pt-32">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary-pink transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#services" className="hover:text-primary-pink transition-colors">Services</Link>
              <span>/</span>
              <Link href={`/services/${resolvedParams.category}`} className="hover:text-primary-pink transition-colors">
                {categoryData.title}
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-semibold">{service.name}</span>
            </div>
          </div>
        </section>

        {/* Hero Section - Simple */}
        <section className={`relative py-16 bg-gradient-to-br ${categoryData.gradient} text-white overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(255,255,255,0.5)_35px,rgba(255,255,255,0.5)_70px)]"></div>
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/services/${resolvedParams.category}`}
              className="inline-flex items-center text-white/80 hover:text-white mb-6 group transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to {categoryData.title}
            </Link>

            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <span className="text-sm font-semibold">{categoryData.title}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                {service.name}
              </h1>

              <p className="text-lg md:text-xl leading-relaxed opacity-90">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section - Image Left, Details Right */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
              {/* Left - Service Image */}
              <div className="lg:sticky lg:top-24">
                <ServiceImage
                  slug={service.slug}
                  name={service.name}
                  gradient={categoryData.gradient}
                />
              </div>

              {/* Right - Detailed Content */}
              <div className="space-y-12">
                {/* Service Details */}
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    About This Service
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {service.fullDescription || service.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {service.seoContent || `Our ${service.name.toLowerCase()} service combines cutting-edge technology with expert craftsmanship to deliver exceptional results that exceed your expectations. We understand that quality signage is crucial for your business success, and we're committed to providing solutions that make a lasting impact.`}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                  <ul className="grid gap-3">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-3 group"
                      >
                        <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${categoryData.gradient} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
                  <ul className="grid gap-3">
                    {service.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-3 group"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-blue to-primary-pink flex items-center justify-center flex-shrink-0">
                          <Star className="w-3.5 h-3.5 text-white fill-white" />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <Link
                    href="#contact-cta"
                    className="px-8 py-4 bg-gradient-to-r from-primary-pink to-primary-blue text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
                  >
                    Get A Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a
                    href="tel:+14037647000"
                    className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-primary-pink hover:text-primary-pink transition-all duration-300 inline-flex items-center"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Types Section */}
        {service.types && service.types.length > 0 && (
          <ServiceTypes types={service.types} gradient={categoryData.gradient} />
        )}

        {/* Service Process Section */}
        {service.processes && service.processes.length > 0 && (
          <ServiceProcess processes={service.processes} gradient={categoryData.gradient} />
        )}

        {/* Portfolio/Gallery Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Our
                <span className={`ml-3 bg-gradient-to-r ${categoryData.gradient} bg-clip-text text-transparent`}>
                  Work
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Check out some examples of our {service.name.toLowerCase()} projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {portfolioImages.map((img) => (
                <div
                  key={img.id}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryData.gradient} flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <span className="text-4xl mb-2 block">🖼️</span>
                      <p className="text-sm font-semibold">{img.alt}</p>
                      <p className="text-xs opacity-75 mt-1">Portfolio #{img.id}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Related
                  <span className={`ml-3 bg-gradient-to-r ${categoryData.gradient} bg-clip-text text-transparent`}>
                    Services
                  </span>
                </h2>
                <p className="text-xl text-gray-600">
                  Explore more {categoryData.title.toLowerCase()} options
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {relatedServices.map((relatedService, index) => (
                  <Link
                    key={index}
                    href={`/services/${resolvedParams.category}/${relatedService.slug}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
                  >
                    <div className={`h-32 bg-gradient-to-br ${categoryData.gradient} p-6 relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.5)_10px,rgba(255,255,255,0.5)_20px)]"></div>
                      <h3 className="relative text-xl font-bold text-white">{relatedService.name}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">{relatedService.description}</p>
                      <div className="flex items-center text-primary-pink font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                        <span>View Details</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section id="contact-cta" className={`py-20 relative overflow-hidden bg-gradient-to-br ${categoryData.gradient} text-white`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(255,255,255,0.5)_35px,rgba(255,255,255,0.5)_70px)]"></div>
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Get Your {service.name}?
            </h2>
            <p className="text-xl mb-10 leading-relaxed opacity-90 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our team is ready to bring your vision to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                Get Free Consultation
              </Link>
              <a
                href="tel:+14037647000"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call 403-764-7000
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
