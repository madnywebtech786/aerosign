'use client';

import { Sparkles, ArrowRight, Star } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from './Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    badge: "#1 Signage & Printing Solution",
    heading: "Transform Your",
    gradientText: "Brand Identity",
    description: "From stunning signage to professional printing, we deliver cutting-edge solutions that make your business stand out. Your vision, our expertise.",
    primaryCTA: {
      text: "Get Started",
      href: "#contact"
    },
    secondaryCTA: {
      text: "Explore Services",
      href: "#services"
    }
  },
  {
    badge: "Premium Quality Guaranteed",
    heading: "Elevate Your",
    gradientText: "Business Presence",
    description: "Expert craftsmanship meets innovative design. We create eye-catching signage and premium printing that drives customer engagement and boosts your brand visibility.",
    primaryCTA: {
      text: "View Portfolio",
      href: "#services"
    },
    secondaryCTA: {
      text: "Contact Us",
      href: "#contact"
    }
  },
  {
    badge: "Calgary's Trusted Partner",
    heading: "Bring Your",
    gradientText: "Vision to Life",
    description: "With over a decade of experience, we transform ideas into impactful visual solutions. From concept to installation, we're with you every step of the way.",
    primaryCTA: {
      text: "Get Quote",
      href: "#contact"
    },
    secondaryCTA: {
      text: "Our Services",
      href: "#services"
    }
  }
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-pink-50/30 pt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-pink/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-blue/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-yellow/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-4 border-primary-pink/30 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 border-4 border-primary-blue/30 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-primary-yellow/30 to-primary-pink/30 rounded-full animate-float"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          loop={true}
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8 text-center lg:text-left">
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-lg border border-primary-pink/20 animate-fade-in">
                    <Star className="w-4 h-4 text-primary-yellow fill-primary-yellow" />
                    <span className="text-sm font-semibold bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
                      {slide.badge}
                    </span>
                    <Sparkles className="w-4 h-4 text-primary-pink" />
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                    {slide.heading}
                    <span className="block mt-2 bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue bg-clip-text text-transparent animate-gradient">
                      {slide.gradientText}
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {slide.description}
                  </p>

                  {/* Stats Bar */}
                  <div className="grid grid-cols-3 gap-4 py-6 max-w-xl mx-auto lg:mx-0">
                    <div className="text-center lg:text-left">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
                        10+
                      </div>
                      <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                    </div>
                    <div className="text-center lg:text-left border-l border-r border-gray-200 px-4">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary-blue to-primary-yellow bg-clip-text text-transparent">
                        5000+
                      </div>
                      <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary-yellow to-primary-pink bg-clip-text text-transparent">
                        99%
                      </div>
                      <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <PrimaryButton href={slide.primaryCTA.href}>
                      {slide.primaryCTA.text} <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </PrimaryButton>
                    <SecondaryButton href={slide.secondaryCTA.href}>
                      {slide.secondaryCTA.text}
                    </SecondaryButton>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500 pt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Available 24/7</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse"></div>
                      <span>Fast Turnaround</span>
                    </div>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="relative lg:h-[600px] hidden lg:block">
                  <div className="relative h-full">
                    {/* Main Image */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src="/images/hero-img.png"
                        alt="Aero Sign & Print - Professional Signage"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback when image not found */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 flex items-center justify-center" style={{ display: 'none' }}>
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#d91277_1px,transparent_1px),linear-gradient(to_bottom,#d91277_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                        </div>

                        {/* Mockup Content */}
                        <div className="relative text-center space-y-4 p-8 z-10">
                          <div className="text-8xl">🎨</div>
                          <p className="text-gray-500 text-sm font-medium">Your Design Preview</p>
                          <p className="text-xs text-gray-400 max-w-xs">Add your hero image at /public/images/hero-img.png</p>
                        </div>
                      </div>
                    </div>

                    {/* Floating Feature Cards */}
                    <div className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-xl animate-float border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-pink to-primary-blue rounded-xl flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-800">100%</div>
                          <div className="text-xs text-gray-500">Quality</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white p-5 rounded-2xl shadow-xl animate-float-delayed border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-yellow to-primary-pink rounded-xl flex items-center justify-center">
                          <Star className="w-6 h-6 text-white fill-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-800">5.0</div>
                          <div className="text-xs text-gray-500">Rating</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-6 right-12 bg-white p-5 rounded-2xl shadow-xl animate-float border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-yellow rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          24
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-800">Fast</div>
                          <div className="text-xs text-gray-500">Hour Service</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C360,120 1080,0 1440,64 L1440,120 L0,120 Z"
            className="fill-white"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>

      <style jsx global>{`
        .hero-swiper {
          width: 100%;
          padding-bottom: 60px;
        }

        .hero-swiper .swiper-pagination {
          bottom: 20px !important;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #d91277 0%, #1e40af 100%);
          opacity: 1;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
