'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      image: '/images/services/service-categories/Business Signs.png',
      title: 'Business Signs',
      description: 'Professional signage solutions including 3D lettering, light boxes, pylon signs, and more to elevate your business presence.',
      features: [
        { name: '3D Channel Lettering', href: '/services/business-signs/3d-channel-lettering' },
        { name: 'Light Box Signs', href: '/services/business-signs/light-box-cabinet-sign' },
        { name: 'Pylon & Pole Signs', href: '/services/business-signs/pylon-sign' },
        { name: 'Interior Signage', href: '/services/business-signs/interior-signage' }
      ],
      gradient: 'from-primary-pink to-primary-blue',
      href: '/services/business-signs',
    },
    {
      image: '/images/services/service-categories/Large Format Printing.png',
      title: 'Large Format Printing',
      description: 'High-quality large format printing solutions for outdoor and indoor advertising, from eye-catching lawn signs to stunning wall decals.',
      features: [
        { name: 'Lawn Signs', href: '/services/large-format-printing/lawn-sign' },
        { name: 'Vinyl Lettering', href: '/services/large-format-printing/vinyl-cut-lettering' },
        { name: 'Fabric Flags', href: '/services/large-format-printing/fabric-flag' },
        { name: 'Window Decals', href: '/services/large-format-printing/window-door-decal' }
      ],
      gradient: 'from-primary-blue to-primary-yellow',
      href: '/services/large-format-printing',
    },
    {
      image: '/images/services/service-categories/Digital Signs.png',
      title: 'Digital Signs',
      description: 'Cutting-edge digital signage with dynamic content capabilities including LED displays and interactive kiosks.',
      features: [
        { name: 'Digital LED Signs', href: '/services/digital-signs/digital-led-sign' },
        { name: 'Media Trucks', href: '/services/digital-signs/media-truck' },
        { name: 'Interactive Kiosks', href: '/services/digital-signs/interactive-kiosks' },
        { name: 'Real-time Updates', href: '/services/digital-signs/digital-led-sign' }
      ],
      gradient: 'from-primary-yellow to-primary-pink',
      href: '/services/digital-signs',
    },
    {
      image: '/images/services/service-categories/Commercial Printing.png',
      title: 'Commercial Printing',
      description: 'Complete commercial printing services for all your business communication and marketing materials.',
      features: [
        { name: 'Business Cards', href: '/services/commercial-printing/business-cards' },
        { name: 'Brochures', href: '/services/commercial-printing/brochures-flyer' },
        { name: 'Calendars', href: '/services/commercial-printing/calendar' },
        { name: 'Restaurant Menus', href: '/services/commercial-printing/restaurant-menu' }
      ],
      gradient: 'from-primary-pink to-primary-yellow',
      href: '/services/commercial-printing',
    },
    {
      image: '/images/services/service-categories/Vehicle Wraps.png',
      title: 'Vehicle Wraps',
      description: 'Transform your vehicles into mobile billboards with stunning custom wraps for cars, trucks, and vans.',
      features: [
        { name: 'Full Vehicle Wraps', href: '/services/vehicle-wraps/car-truck-van-wraps' },
        { name: 'Partial Wraps', href: '/services/vehicle-wraps/car-truck-van-wraps' },
        { name: 'Fleet Graphics', href: '/services/vehicle-wraps/car-truck-van-wraps' },
        { name: 'Paint Protection', href: '/services/vehicle-wraps/car-truck-van-wraps' }
      ],
      gradient: 'from-primary-blue to-primary-pink',
      href: '/services/vehicle-wraps',
    },
    {
      image: '/images/services/service-categories/website design.png',
      title: 'Website Design',
      description: 'Modern, responsive website design services to establish and grow your digital presence effectively.',
      features: [
        { name: 'Responsive Design', href: '/services/website-design/website-design-development' },
        { name: 'SEO Optimization', href: '/services/website-design/website-design-development' },
        { name: 'E-commerce', href: '/services/website-design/website-design-development' },
        { name: 'Custom Development', href: '/services/website-design/website-design-development' }
      ],
      gradient: 'from-primary-yellow to-primary-blue',
      href: '/services/website-design',
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-pink rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-blue rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-blue/10 to-primary-pink/10 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent">
              OUR SERVICES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Complete Solutions for
            <span className="block mt-2 bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue bg-clip-text text-transparent animate-gradient">
              Every Need
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From eye-catching signage to professional printing, we offer comprehensive
            solutions to amplify your brand and drive business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Image Header */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-[100%_100%] group-hover:scale-110 transition-transform duration-500"
                  priority={index < 3}
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30 group-hover:opacity-20 transition-opacity duration-300`}></div>

                {/* Decorative Circle */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-20 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
              </div>

              {/* Content */}
              <div className="p-8 relative z-20">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-primary-pink group-hover:to-primary-blue group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-2`}></div>
                      <Link href={feature.href} className="hover:text-primary-pink transition-colors">
                        {feature.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center text-primary-pink font-semibold group-hover:gap-3 gap-2 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute z-0 inset-0 border-2 border-transparent group-hover:border-primary-pink rounded-3xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Can't find what you're looking for?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-pink to-primary-blue text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <span>Get Custom Solution</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Services;
