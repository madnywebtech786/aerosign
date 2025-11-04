'use client';

import Link from 'next/link';
import { ArrowRight, Target, Award, Lightbulb, Zap, Shield, Heart, Sparkles, CheckCircle } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutImage from '@/components/AboutImage';

export default function AboutPage() {
  const whyUs = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Same-day and rush services available to meet your urgent deadlines',
      stat: '24hr',
      gradient: 'from-primary-pink to-pink-600'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Industry-leading materials and state-of-the-art printing technology',
      stat: '100%',
      gradient: 'from-primary-blue to-blue-600'
    },
    {
      icon: Shield,
      title: 'Guaranteed',
      description: 'Full satisfaction guarantee backed by our commitment to excellence',
      stat: '10yrs',
      gradient: 'from-primary-yellow to-yellow-600'
    },
    {
      icon: Heart,
      title: 'Client Love',
      description: 'Dedicated support team ready to help you succeed',
      stat: '5000+',
      gradient: 'from-primary-pink to-primary-blue'
    }
  ];

  const expertise = [
    'Custom Signage Design',
    'Large Format Printing',
    'Digital LED Displays',
    'Vehicle Wraps & Graphics',
    'Architectural Signs',
    'Wayfinding Solutions',
    'Retail Store Graphics',
    'Trade Show Displays',
    'Window & Wall Graphics',
    'Monument Signs',
    'Channel Letters',
    'Installation Services'
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />

      <main className="pt-24">
        {/* Hero Section - Image Left, Content Right */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Sticky Image */}
              <div className="order-2 lg:order-1">
                <AboutImage />
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2 space-y-8">
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-pink/10 to-primary-blue/10 rounded-full border border-primary-pink/20">
                  <Sparkles className="w-5 h-5 text-primary-pink" />
                  <span className="text-sm font-bold bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
                    ABOUT AERO SIGN & PRINT
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-900">Bringing Your</span>
                  <span className="block mt-3 bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue bg-clip-text text-transparent animate-gradient">
                    Vision to Life
                  </span>
                </h1>

                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Aero Sign & Print Inc. designs, manufactures, and installs industry-leading signage solutions in Calgary, Alberta that capture audience attention and boost customer branding. Our mission is to maximize your return on print and signage investment through outstanding quality and innovative design.
                  </p>
                  <p>
                    We've invested significantly in state-of-the-art technology and equipment to ensure our clients stay ahead with the full array of industry-leading solutions. Whether it's business signage, digital advertising, or commercial printing, Aero Sign & Print delivers reliable and affordable services to local businesses and franchises across Alberta.
                  </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-gray-200">
                  <div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
                      10+
                    </div>
                    <div className="text-sm text-gray-600 mt-2 font-medium">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary-blue to-primary-yellow bg-clip-text text-transparent">
                      5K+
                    </div>
                    <div className="text-sm text-gray-600 mt-2 font-medium">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary-yellow to-primary-pink bg-clip-text text-transparent">
                      10K+
                    </div>
                    <div className="text-sm text-gray-600 mt-2 font-medium">Projects Done</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/#contact"
                    className="px-8 py-4 bg-gradient-to-r from-primary-pink to-primary-blue text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center group"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="/#services"
                    className="px-8 py-4 bg-gray-100 text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 inline-flex items-center"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-pink rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Why Choose
                <span className="block mt-2 bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue bg-clip-text text-transparent animate-gradient">
                  Aero Sign & Print
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                As a Calgary-based printing company, we deliver professional and efficient signage solutions with industry best practices that maximize your brand's visibility and ROI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyUs.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    {/* Stat Badge */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-white to-gray-100 group-hover:from-white group-hover:to-white rounded-full flex items-center justify-center shadow-lg">
                      <span className={`text-lg font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`}>
                        {item.stat}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 transition-all duration-500`}>
                      <item.icon className="w-8 h-8 text-white group-hover:text-primary-pink transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-blue/10 to-primary-yellow/10 rounded-full border border-primary-blue/20 mb-6">
                <Target className="w-5 h-5 text-primary-blue" />
                <span className="text-sm font-bold bg-gradient-to-r from-primary-blue to-primary-yellow bg-clip-text text-transparent">
                  OUR EXPERTISE
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Full-Service
                <span className="block mt-2 bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue bg-clip-text text-transparent animate-gradient">
                  Signage Solutions
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                From custom design to professional installation, we handle every aspect of your signage and printing needs.
                Our comprehensive Calgary services ensure seamless delivery and exceptional quality for businesses throughout Alberta.
              </p>
            </div>

            {/* Expertise Cards Grid - 3 columns */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent overflow-hidden hover:-translate-y-2"
                >
                  {/* Gradient border effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    index % 3 === 0 ? 'from-primary-pink to-pink-600' :
                    index % 3 === 1 ? 'from-primary-blue to-blue-600' :
                    'from-primary-yellow to-yellow-600'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

                  {/* Inner content container */}
                  <div className="relative bg-white rounded-xl p-6 group-hover:bg-transparent transition-colors duration-500">
                    {/* Number badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-white group-hover:to-white rounded-full flex items-center justify-center shadow-md">
                      <span className={`text-sm font-bold bg-gradient-to-br ${
                        index % 3 === 0 ? 'from-primary-pink to-pink-600' :
                        index % 3 === 1 ? 'from-primary-blue to-blue-600' :
                        'from-primary-yellow to-yellow-600'
                      } bg-clip-text text-transparent`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                      index % 3 === 0 ? 'from-primary-pink to-pink-600' :
                      index % 3 === 1 ? 'from-primary-blue to-blue-600' :
                      'from-primary-yellow to-yellow-600'
                    } flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>

                    {/* Text */}
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-white leading-tight transition-colors duration-500">
                      {item}
                    </h3>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-tl ${
                      index % 3 === 0 ? 'from-primary-pink to-transparent' :
                      index % 3 === 1 ? 'from-primary-blue to-transparent' :
                      'from-primary-yellow to-transparent'
                    } rounded-tl-full`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href="/#services"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary-pink to-primary-blue text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 group text-lg"
              >
                <span>View All Services</span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-pink rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-blue rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Mission Card */}
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-pink to-primary-blue rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:border-white/40 transition-all duration-300 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-pink to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed text-lg flex-grow">
                    To maximize our customers' return on print and signage investment by designing, manufacturing, and installing industry-leading signage that captures audience attention and boosts customer branding. We're committed to delivering outstanding quality through industry best practices in every project.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-yellow rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:border-white/40 transition-all duration-300 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed text-lg flex-grow">
                    To be Calgary and Alberta's most trusted printing company, recognized for reliable and affordable signage solutions that keep businesses ahead with state-of-the-art technology. We aspire to deliver the full array of industry-leading best solutions and services that help local businesses and franchises thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue"></div>
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(255,255,255,0.1)_35px,rgba(255,255,255,0.1)_70px)]"></div>

              <div className="relative px-8 py-16 lg:py-24 text-center text-white">
                <Sparkles className="w-16 h-16 mx-auto mb-6 animate-bounce" />
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Let's Create Something Amazing
                </h2>
                <p className="text-xl mb-10 leading-relaxed opacity-90 max-w-2xl mx-auto">
                  Ready to maximize your brand's visibility with professional Calgary signage and printing?
                  Contact Aero Sign & Print today for reliable, affordable solutions that hit the target!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#contact"
                    className="px-10 py-5 bg-white text-primary-pink font-bold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center text-lg"
                  >
                    <span>Get Started Now</span>
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Link>
                  <a
                    href="tel:+14037647000"
                    className="px-10 py-5 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary-pink transition-all duration-300 inline-flex items-center justify-center text-lg"
                  >
                    Call 403-764-7000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
