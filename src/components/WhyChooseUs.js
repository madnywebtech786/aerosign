'use client';

import { Award, Clock, Lightbulb, Users, CheckCircle2, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Industry-leading materials and cutting-edge printing technology ensure exceptional results every time.',
      gradient: 'from-primary-pink to-pink-600'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Rush services available with same-day and next-day delivery options to meet your urgent needs.',
      gradient: 'from-primary-blue to-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'Our expert design team brings innovative ideas to life with custom solutions tailored to your brand.',
      gradient: 'from-primary-yellow to-yellow-600'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to delivering excellence and exceeding your expectations.',
      gradient: 'from-primary-pink to-primary-blue'
    },
    {
      icon: CheckCircle2,
      title: 'Satisfaction Guaranteed',
      description: 'We stand behind our work with a 100% satisfaction guarantee and comprehensive support.',
      gradient: 'from-primary-blue to-primary-yellow'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Pricing',
      description: 'Best value in the market with transparent pricing and no hidden fees. Quality meets affordability.',
      gradient: 'from-primary-yellow to-primary-pink'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-pink rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-pink/10 to-primary-blue/10 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your Success is
            <span className="block mt-2 bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue bg-clip-text text-transparent animate-gradient">
              Our Priority
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We combine years of expertise with cutting-edge technology to deliver
            signage and printing solutions that drive real results for your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-pink via-primary-yellow to-primary-blue rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4  group-hover:text-white transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-white">
                {feature.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-gray-100 group-hover:border-primary-pink rounded-tr-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '10,000+', label: 'Projects Completed' },
            { number: '5,000+', label: 'Happy Clients' },
            { number: '99%', label: 'On-Time Delivery' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default WhyChooseUs;
