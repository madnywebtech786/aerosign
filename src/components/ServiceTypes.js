'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function ServiceTypes({ types, gradient }) {
  const [activeType, setActiveType] = useState(0);

  if (!types || types.length === 0) return null;

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-pink rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-blue rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm font-bold bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
              DIFFERENT TYPES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Choose Your
            <span className="block mt-2 bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue bg-clip-text text-transparent">
              Perfect Style
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Explore our range of professional mounting and installation options
          </p>
        </div>

        {/* Types Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {types.map((type, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`}></div>
                <Image
                  src={type.image}
                  alt={type.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>

                {/* Scan Line Animation */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-pink to-transparent animate-scan"></div>
                </div>

                {/* Type Number Badge */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-pink transition-colors duration-300">
                  {type.name}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {type.description}
                </p>

                {/* Decorative Arrow */}
                <div className="flex items-center text-primary-pink opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-semibold mr-2">Learn More</span>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>

              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Types Carousel - Mobile/Tablet */}
        <div className="lg:hidden">
          {/* Active Card */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 max-w-2xl mx-auto">
            {/* Image */}
            <div className="relative h-80 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`}></div>
              <Image
                src={types[activeType].image}
                alt={types[activeType].name}
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>

              {/* Type Number Badge */}
              <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {String(activeType + 1).padStart(2, '0')}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">
                {types[activeType].name}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {types[activeType].description}
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center mt-8 space-x-3">
            {types.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveType(index)}
                className={`transition-all duration-300 ${
                  index === activeType
                    ? `w-12 h-3 bg-gradient-to-r ${gradient} rounded-full`
                    : 'w-3 h-3 bg-white/30 rounded-full hover:bg-white/50'
                }`}
                aria-label={`View type ${index + 1}`}
              />
            ))}
          </div>

          {/* Type Names List */}
          <div className="mt-8 grid grid-cols-2 gap-4 max-w-2xl mx-auto">
            {types.map((type, index) => (
              <button
                key={index}
                onClick={() => setActiveType(index)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  index === activeType
                    ? `border-primary-pink bg-primary-pink/10`
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <div className="font-bold text-sm">{type.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400px); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
