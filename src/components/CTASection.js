'use client';

import { ArrowRight, Sparkles, Phone } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from './Button';

const CTASection = ({ variant = 'primary' }) => {
  if (variant === 'secondary') {
    return (
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue opacity-5"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-blue/10 to-primary-pink/10 rounded-full mb-6">
              <Phone className="w-4 h-4 text-primary-blue" />
              <span className="text-sm font-semibold text-gray-700">
                Available 24/7
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Contact us today for a free consultation and quote. Let's bring your vision to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryButton href="#contact">
                Request A Quote <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </PrimaryButton>
              <SecondaryButton href="tel:+14037647000">
                Call Now
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-pink via-primary-yellow to-primary-blue"></div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px)`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/20 rounded-lg rotate-45 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white/30 rounded-full animate-float"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Transform Your Business Today
          </h2>
          <p className="text-xl mb-10 leading-relaxed opacity-90">
            Join thousands of satisfied clients who have elevated their brand with our
            premium signage and printing solutions. Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary-pink font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-pink transition-all duration-300 inline-flex items-center justify-center">
              View Portfolio
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Satisfaction</div>
            </div>
            <div className="h-8 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div>
            <div className="h-8 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">Fast</div>
              <div className="text-sm">Turnaround</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-25px) rotate(45deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CTASection;
