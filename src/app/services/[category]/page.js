import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import { servicesData } from '@/data/services';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return Object.keys(servicesData).map((category) => ({
    category: category,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const categoryData = servicesData[resolvedParams.category];

  if (!categoryData) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${categoryData.title} | Aero Sign & Print`,
    description: categoryData.description,
  };
}

export default async function ServiceCategoryPage({ params }) {
  const resolvedParams = await params;
  const categoryData = servicesData[resolvedParams.category];

  if (!categoryData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <ServiceHero categoryData={categoryData} />

        {/* Services List */}
        <section id="services-list" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Our
                <span className={`ml-3 bg-gradient-to-r ${categoryData.gradient} bg-clip-text text-transparent`}>
                  {categoryData.title}
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Explore our comprehensive range of {categoryData.title.toLowerCase()} solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {categoryData.services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Header */}
                  <div className={`relative h-32 bg-gradient-to-br ${categoryData.gradient} p-6 overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.5)_10px,rgba(255,255,255,0.5)_20px)]"></div>
                    </div>
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Key Features:</h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 text-primary-pink" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    {service.benefits && service.benefits.length > 0 && (
                      <div className="mb-6 bg-gray-50 rounded-xl p-5">
                        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <Star className="w-5 h-5 mr-2 text-primary-yellow fill-primary-yellow" />
                          Benefits:
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary-pink mr-2 mt-2 flex-shrink-0"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA */}
                    <Link
                      href={`/services/${resolvedParams.category}/${service.slug}`}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${categoryData.gradient} text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 group`}
                    >
                      <span>View Details</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-20 relative overflow-hidden bg-gradient-to-br ${categoryData.gradient} text-white`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(255,255,255,0.5)_35px,rgba(255,255,255,0.5)_70px)]"></div>
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 leading-relaxed opacity-90 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Let's bring your vision to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/#services"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
