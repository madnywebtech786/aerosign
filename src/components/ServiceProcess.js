'use client';

import { Palette, Cog, Wrench } from 'lucide-react';

const iconMap = {
  'Palette': Palette,
  'Cog': Cog,
  'Wrench': Wrench
};

export default function ServiceProcess({ processes, gradient }) {
  if (!processes || processes.length === 0) return null;

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-pink rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-blue/10 to-primary-pink/10 rounded-full mb-6 border border-primary-blue/20">
            <span className="text-sm font-bold bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent">
              OUR PROCESS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            From Concept to
            <span className="block mt-2 bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue bg-clip-text text-transparent">
              Installation
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Our proven three-step process ensures exceptional results from start to finish
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {processes.map((process, index) => {
            const IconComponent = iconMap[process.icon] || Palette;
            const gradients = [
              'from-primary-pink to-pink-600',
              'from-primary-blue to-blue-600',
              'from-primary-yellow to-yellow-600'
            ];

            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Connection Line */}
                {index < processes.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 -ml-4">
                    <div className={`h-full bg-gradient-to-r ${gradients[index]} opacity-20`}></div>
                  </div>
                )}

                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-xl border-4 border-white z-10">
                    <span className={`text-2xl font-bold bg-gradient-to-br ${gradients[index]} bg-clip-text text-transparent`}>
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {process.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>

                  {/* Hover Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl border-2 border-gray-200">
            <p className="text-gray-700 font-semibold">
              <span className="bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
                Professional installation
              </span>
              {' '}included with every project • Call us today for a free consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
