'use client';

import { TrendingUp, Users, Award, Target } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: '5,000+',
      label: 'Happy Clients',
      description: 'Businesses trust us',
      gradient: 'from-primary-pink to-pink-600'
    },
    {
      icon: Award,
      number: '10,000+',
      label: 'Projects Completed',
      description: 'Successfully delivered',
      gradient: 'from-primary-blue to-blue-600'
    },
    {
      icon: Target,
      number: '99%',
      label: 'Satisfaction Rate',
      description: 'Client approval',
      gradient: 'from-primary-yellow to-yellow-600'
    },
    {
      icon: TrendingUp,
      number: '10+',
      label: 'Years Experience',
      description: 'Industry expertise',
      gradient: 'from-primary-pink to-primary-blue'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-pink rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-blue rounded-full filter blur-3xl"></div>
      </div>

      {/* Animated Grid Background */}
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
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
              BY THE NUMBERS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Proven Track Record of
            <span className="block mt-2 bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue bg-clip-text text-transparent animate-gradient">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Numbers that speak to our commitment to quality and customer satisfaction
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>

              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Number */}
              <div className={`relative text-5xl font-bold mb-2 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>

              {/* Label */}
              <div className="relative text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <div className="relative text-sm text-gray-400">
                {stat.description}
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/10 group-hover:border-primary-pink rounded-br-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Wave Divider */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Serving clients nationwide since 2014</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Stats;
