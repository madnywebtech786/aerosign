'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['403-764-7000'],
      href: 'tel:+14037647000',
      gradient: 'from-primary-pink to-pink-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['sales@aerosign.ca'],
      href: 'mailto:sales@aerosign.ca',
      gradient: 'from-primary-blue to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['4852 50th Ave NE', 'Calgary, AB T3J 4L8'],
      href: 'https://maps.google.com/?q=4852+50th+Ave+NE+Calgary+AB+T3J+4LB',
      gradient: 'from-primary-yellow to-yellow-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8am - 6pm', 'Sat - Sun: 10am - 4pm'],
      href: '#',
      gradient: 'from-primary-pink to-primary-blue'
    }
  ];

  const services = [
    'Business Signs',
    'Large Format Printing',
    'Digital Signs',
    'Commercial Printing',
    'Vehicle Wraps',
    'Website Design',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-pink rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-blue rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-blue/10 to-primary-yellow/10 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-primary-blue to-primary-yellow bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Start Your
            <span className="block mt-2 bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue bg-clip-text text-transparent animate-gradient">
              Next Project
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to elevate your brand? Contact us today for a free consultation
            and quote. We're here to bring your vision to life!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <info.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">
                  {detail}
                </p>
              ))}
            </a>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h3>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll contact you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-yellow focus:ring-2 focus:ring-primary-yellow/20 outline-none transition-all duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all duration-200 bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-pink to-primary-blue text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-pink/30 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Send Message</span>
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            )}
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-primary-pink via-primary-yellow to-primary-blue rounded-3xl overflow-hidden shadow-2xl h-[400px] relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <div className="text-center text-white p-8">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Visit Our Location</h4>
                  <p className="text-lg">4852 50th Ave NE</p>
                  <p className="text-lg">Calgary, AB T3J 4L8</p>
                  <a
                    href="https://maps.google.com/?q=4852+50th+Ave+NE+Calgary+AB+T3J+4LB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-6 py-3 bg-white text-primary-pink font-semibold rounded-full hover:scale-105 transition-transform duration-300"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary-pink to-pink-600 rounded-2xl p-6 text-white">
                <Phone className="w-8 h-8 mb-3" />
                <div className="text-sm opacity-90 mb-1">Call Anytime</div>
                <div className="text-xl font-bold">24/7 Support</div>
              </div>
              <div className="bg-gradient-to-br from-primary-blue to-blue-600 rounded-2xl p-6 text-white">
                <Mail className="w-8 h-8 mb-3" />
                <div className="text-sm opacity-90 mb-1">Quick Response</div>
                <div className="text-xl font-bold">Under 24hrs</div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    100% Satisfaction Guaranteed
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We stand behind our work. If you're not completely satisfied,
                    we'll make it right. Your success is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
