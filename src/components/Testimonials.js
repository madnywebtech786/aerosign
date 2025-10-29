'use client';

import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: '👩‍💼',
      rating: 5,
      text: 'Aero Sign & Print transformed our office with stunning interior signage and vehicle wraps. The quality exceeded our expectations, and their team was incredibly professional throughout the entire process.',
      gradient: 'from-primary-pink to-pink-600'
    },
    {
      name: 'Michael Chen',
      role: 'Owner, Chen\'s Restaurant',
      image: '👨‍🍳',
      rating: 5,
      text: 'Their menu printing and table tents are absolutely gorgeous! The colors are vibrant, and the material quality is top-notch. Our customers constantly compliment our professional presentation.',
      gradient: 'from-primary-blue to-blue-600'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, FastGrow',
      image: '👩‍💻',
      rating: 5,
      text: 'We needed a complete rebrand with new business cards, brochures, and outdoor signage. Aero delivered beyond our wildest dreams. Fast turnaround and exceptional customer service!',
      gradient: 'from-primary-yellow to-yellow-600'
    },
    {
      name: 'David Thompson',
      role: 'Real Estate Agent',
      image: '👨‍💼',
      rating: 5,
      text: 'I order lawn signs and vehicle wraps regularly for my real estate business. Aero Sign & Print has never disappointed. Quality products, competitive pricing, and always on time!',
      gradient: 'from-primary-pink to-primary-blue'
    },
    {
      name: 'Lisa Martinez',
      role: 'Store Manager, Fashion Hub',
      image: '👩',
      rating: 5,
      text: 'The window decals and interior signage completely transformed our store. Sales increased by 30% after the new signage installation. Highly recommend their services!',
      gradient: 'from-primary-blue to-primary-yellow'
    },
    {
      name: 'James Wilson',
      role: 'Owner, Wilson Auto Services',
      image: '👨‍🔧',
      rating: 5,
      text: 'Our new pylon sign and vehicle wraps have brought in so many new customers. The LED digital sign is a game-changer for our business. Worth every penny!',
      gradient: 'from-primary-yellow to-primary-pink'
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-pink-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-pink rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-yellow/10 to-primary-pink/10 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-primary-yellow to-primary-pink bg-clip-text text-transparent">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients
            <span className="block mt-2 bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue bg-clip-text text-transparent animate-gradient">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Don't just take our word for it. See what our satisfied clients have to say
            about their experience with Aero Sign & Print.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Gradient Border */}
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeIndex].gradient} opacity-10`}></div>

            <div className="relative p-8 md:p-12">
              {/* Quote Icon */}
              <div className={`absolute top-8 right-8 w-20 h-20 bg-gradient-to-br ${testimonials[activeIndex].gradient} rounded-full flex items-center justify-center opacity-20`}>
                <Quote className="w-10 h-10 text-white" />
              </div>

              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                {/* Client Avatar */}
                <div className="flex flex-col items-center md:items-start">
                  <div className={`w-24 h-24 bg-gradient-to-br ${testimonials[activeIndex].gradient} rounded-full flex items-center justify-center text-4xl shadow-lg mb-4`}>
                    {testimonials[activeIndex].image}
                  </div>
                  {/* Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary-yellow fill-primary-yellow" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[activeIndex].text}"
                  </p>
                  <div>
                    <h4 className={`text-xl font-bold bg-gradient-to-r ${testimonials[activeIndex].gradient} bg-clip-text text-transparent`}>
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300 group border border-gray-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-primary-pink transition-colors" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-gradient-to-r from-primary-pink to-primary-blue'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300 group border border-gray-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-primary-pink transition-colors" />
            </button>
          </div>
        </div>

        {/* Bottom Grid of Mini Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                index === activeIndex
                  ? 'border-primary-pink scale-105'
                  : 'border-transparent hover:border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-xl`}>
                  {testimonial.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-bold text-gray-900 truncate">{testimonial.name}</h5>
                  <p className="text-sm text-gray-600 truncate">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary-yellow fill-primary-yellow" />
                ))}
              </div>
              <p className="text-sm text-gray-600 line-clamp-3">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
