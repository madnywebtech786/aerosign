'use client'
import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, CheckCircle2, Star, Phone, Mail, Heart, BookOpen, Plane, Bus, Info, Library, CreditCard, Building2 } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceImage from '@/components/ServiceImage';
import ServiceTypes from '@/components/ServiceTypes';
import ServiceProcess from '@/components/ServiceProcess';
import GallerySlider from '@/components/GallerySlider';
import { servicesData, allServices } from '@/data/services';
import { notFound } from 'next/navigation';

export default function ServiceDetailPage({ params }) {
  const resolvedParams = use(params);
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
        <section className={`relative py-28 text-white overflow-hidden`}>
          {/* Background Image with Overlay */}
          {service.image ? (
            <>
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-[100%_100%]"
                  priority
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${categoryData.gradient} opacity-80`}></div>
            </>
          ) : (
            <>
              <div className={`absolute inset-0 bg-gradient-to-br ${categoryData.gradient}`}></div>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(255,255,255,0.5)_35px,rgba(255,255,255,0.5)_70px)]"></div>
              </div>
            </>
          )}

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
                  image={service.image}
                  sideImage={service.sideImage}
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

        {/* Applications Section - Interactive Kiosks */}
        {service.applications && service.applications.length > 0 && (
          <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Animated background patterns */}
            <div className="absolute inset-0">
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }}></div>

              {/* Floating gradient circles */}
              <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary-pink/20 to-primary-blue/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-primary-yellow/20 to-primary-pink/20 rounded-full blur-3xl animate-float-delayed"></div>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-lg border border-gray-200 mb-6 hover:shadow-xl transition-shadow duration-300">
                    <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${categoryData.gradient} animate-pulse`}></div>
                    <span className="text-sm font-semibold text-gray-700">Perfect For Multiple Industries</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Great For The Following
                    <span className={`block mt-3 bg-gradient-to-r ${categoryData.gradient} bg-clip-text text-transparent`}>
                      Applications
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Our Interactive Kiosks serve diverse industries with innovative, cutting-edge solutions tailored to your specific needs
                  </p>
                </div>

                {/* Applications Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                  {service.applications.map((app, index) => (
                    <div
                      key={index}
                      className="group relative"
                    >
                      {/* Card */}
                      <div className="relative h-full">
                        {/* Gradient background layer */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${categoryData.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm`}></div>

                        {/* Main card content */}
                        <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 cursor-pointer border border-gray-100 group-hover:border-transparent">
                          {/* Top decorative corner */}
                          <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${categoryData.gradient} opacity-5 rounded-bl-full transition-opacity duration-300 group-hover:opacity-10`}></div>

                          {/* Content container */}
                          <div className="relative flex flex-col items-center text-center space-y-4">
                            {/* Icon container */}
                            <div className="relative mb-2">
                              {/* Animated circle ring */}
                              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${categoryData.gradient} opacity-10 group-hover:scale-110 transition-transform duration-500`}></div>

                              {/* Icon circle */}
                              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:shadow-lg transition-all duration-500">
                                {/* Icon */}
                                <div className={`transform group-hover:scale-110 transition-transform duration-500 text-gray-700`}>
                                  {app.icon === 'Heart' && <Heart className="w-8 h-8" strokeWidth={1.5} />}
                                  {app.icon === 'BookOpen' && <BookOpen className="w-8 h-8" strokeWidth={1.5} />}
                                  {app.icon === 'Plane' && <Plane className="w-8 h-8" strokeWidth={1.5} />}
                                  {app.icon === 'Bus' && <Bus className="w-8 h-8" strokeWidth={1.5} />}
                                  {app.icon === 'Info' && <Info className="w-8 h-8" strokeWidth={1.5} />}
                                  {app.icon === 'Library' && <Library className="w-8 h-8" strokeWidth={1.5} />}
                                  {app.icon === 'CreditCard' && <CreditCard className="w-8 h-8" strokeWidth={1.5} />}
                                  {app.icon === 'Building2' && <Building2 className="w-8 h-8" strokeWidth={1.5} />}
                                </div>
                              </div>
                            </div>

                            {/* Application name */}
                            <h3 className="text-base lg:text-lg font-bold text-gray-900 px-2">
                              {app.name}
                            </h3>

                            {/* Animated underline */}
                            <div className={`h-0.5 w-0 group-hover:w-12 bg-gradient-to-r ${categoryData.gradient} transition-all duration-500`}></div>
                          </div>

                          {/* Bottom left accent */}
                          <div className={`absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr ${categoryData.gradient} opacity-0 group-hover:opacity-5 rounded-tr-full transition-opacity duration-300`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                  <div className="inline-flex flex-col items-center gap-6 p-8 rounded-3xl bg-white shadow-xl border border-gray-200">
                    <p className="text-lg text-gray-700 font-medium">
                      Need a custom kiosk solution for your industry?
                    </p>
                    <Link
                      href="#contact-cta"
                      className={`inline-flex items-center px-10 py-4 bg-gradient-to-r ${categoryData.gradient} text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group`}
                    >
                      Get Started Today
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <p className="text-sm text-gray-500">Free consultation • Quick response • Expert guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Installation Section - 3D Sign Installation */}
        {service.installationSection && (
          <section className="relative py-32 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
              {/* Animated grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.15] animate-[gridScroll_20s_linear_infinite]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }}
              ></div>

              {/* Glowing orbs */}
              <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br ${categoryData.gradient} rounded-full opacity-20 blur-3xl animate-pulse`}></div>
              <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br ${categoryData.gradient} rounded-full opacity-20 blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left - Content */}
                  <div className="space-y-8 lg:pr-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${categoryData.gradient} animate-pulse`}></div>
                      <span className="text-sm font-semibold text-white/90">Professional Installation</span>
                    </div>

                    <h2 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                      <span className={`bg-gradient-to-r ${categoryData.gradient} bg-clip-text text-transparent`}>
                        {service.installationSection.heading}
                      </span>
                    </h2>

                    <div className="space-y-6">
                      {service.installationSection.content.split('\n\n').map((paragraph, index) => (
                        <div key={index} className="group">
                          <div className={`h-px w-12 bg-gradient-to-r ${categoryData.gradient} mb-4 group-hover:w-24 transition-all duration-300`}></div>
                          <p className="text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                            {paragraph}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Stats or features */}
                    <div className="grid grid-cols-3 gap-6 pt-8">
                      {[
                        { label: 'Expert Team', value: '10+' },
                        { label: 'Years Experience', value: '15+' },
                        { label: 'Projects Done', value: '500+' }
                      ].map((stat, index) => (
                        <div key={index} className="group cursor-default">
                          <div className={`text-3xl font-bold bg-gradient-to-r ${categoryData.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right - Video with futuristic frame */}
                  <div className="relative group">
                    {/* Corner decorations */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-white/30 rounded-tl-3xl group-hover:w-20 group-hover:h-20 transition-all duration-500"></div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-3xl group-hover:w-20 group-hover:h-20 transition-all duration-500"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-white/30 rounded-bl-3xl group-hover:w-20 group-hover:h-20 transition-all duration-500"></div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-white/30 rounded-br-3xl group-hover:w-20 group-hover:h-20 transition-all duration-500"></div>

                    {/* Glowing border effect */}
                    <div className={`absolute -inset-[2px] bg-gradient-to-r ${categoryData.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}></div>

                    {/* Video container */}
                    <div className="relative aspect-video rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                      <video
                        className="w-full h-full object-cover"
                        controls
                        poster="/images/3d-sign-installation-poster.jpg"
                      >
                        <source src={service.installationSection.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Scan line effect overlay */}
                      <div className="absolute inset-0 pointer-events-none opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent h-32 animate-[scan_3s_ease-in-out_infinite]"></div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className={`absolute -z-10 top-1/2 -right-8 w-32 h-32 bg-gradient-to-br ${categoryData.gradient} rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <div className={`absolute -z-10 bottom-1/4 -left-8 w-24 h-24 bg-gradient-to-br ${categoryData.gradient} rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Portfolio/Gallery Section */}
        <GallerySlider
          gallery={service.gallery}
          serviceName={service.name}
          gradient={categoryData.gradient}
        />

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
