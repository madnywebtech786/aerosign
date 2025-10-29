'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Building2, Printer, Monitor, FileText, Car, Globe } from 'lucide-react';

const iconMap = {
  'Building2': Building2,
  'Printer': Printer,
  'Monitor': Monitor,
  'FileText': FileText,
  'Car': Car,
  'Globe': Globe,
};

const ServiceHero = ({ categoryData }) => {
  const IconComponent = iconMap[categoryData.icon] || Building2;
  return (
    <section className={`relative py-20 lg:py-32 bg-gradient-to-br ${categoryData.gradient} text-white overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px)`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/20 rounded-lg rotate-45 animate-float-delayed"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#services"
          className="inline-flex items-center text-white/80 hover:text-white mb-8 group transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Services
        </Link>

        <div className="max-w-4xl">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
            <IconComponent className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            {categoryData.title}
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-8">
            {categoryData.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#services-list"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
