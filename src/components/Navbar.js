'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { servicesData } from '@/data/services';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null); // Still used for mobile

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      dropdown: Object.keys(servicesData).map(key => ({
        label: servicesData[key].title,
        href: `/services/${key}`,
        nested: servicesData[key].services.map(service => ({
          label: service.name,
          href: `/services/${key}/${service.slug}`,
        }))
      }))
    },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-primary-blue/5'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              <Image
                src="/logo.gif"
                alt="Aero Sign & Print"
                width={180}
                height={60}
                className="relative h-12 lg:h-16 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-pink font-medium transition-colors duration-200 py-2">
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-visible">
                        <div className="py-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <div
                              key={subIndex}
                              className="relative group/submenu"
                            >
                              <Link
                                href={subItem.href}
                                className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary-pink/10 hover:to-primary-blue/10 hover:text-primary-pink transition-all duration-200 border-l-4 border-transparent hover:border-primary-pink"
                              >
                                <span>{subItem.label}</span>
                                {subItem.nested && <ChevronRight className="w-4 h-4" />}
                              </Link>

                              {/* Nested Dropdown - Shows on hover of parent group */}
                              {subItem.nested && (
                                <>
                                  {/* Invisible bridge to prevent dropdown from closing */}
                                  <div className="hidden group-hover/submenu:block absolute left-full top-0 w-4 h-full"></div>

                                  <div className="hidden group-hover/submenu:block absolute left-full top-0 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 ml-1">
                                    <div className="py-2 max-h-96 overflow-y-auto">
                                      {subItem.nested.map((nestedItem, nestedIndex) => (
                                        <Link
                                          key={nestedIndex}
                                          href={nestedItem.href}
                                          className="block px-6 py-3 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-primary-yellow/10 hover:to-primary-pink/10 hover:text-primary-pink transition-all duration-200 border-l-4 border-transparent hover:border-primary-yellow"
                                        >
                                          {nestedItem.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary-pink font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-pink after:to-primary-blue hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="#contact"
              className="relative px-8 py-3 bg-gradient-to-r from-primary-pink to-primary-blue text-white font-semibold rounded-full overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary-pink/30 hover:scale-105"
            >
              <span className="relative z-10">Get A Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'
          }`}
        >
          <div className="space-y-2 pt-4">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary-pink/10 hover:to-primary-blue/10 rounded-lg transition-all duration-200"
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openDropdown === item.label ? 'max-h-[800px] mt-2' : 'max-h-0'
                      }`}
                    >
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <div key={subIndex}>
                            <div className="flex items-center justify-between">
                              <Link
                                href={subItem.href}
                                className="flex-1 block px-4 py-2 text-gray-600 hover:text-primary-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                              {subItem.nested && (
                                <button
                                  onClick={() =>
                                    setOpenNestedDropdown(
                                      openNestedDropdown === subItem.label ? null : subItem.label
                                    )
                                  }
                                  className="p-2"
                                >
                                  <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-200 ${
                                      openNestedDropdown === subItem.label ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>
                              )}
                            </div>
                            {subItem.nested && (
                              <div
                                className={`overflow-hidden transition-all duration-300 ${
                                  openNestedDropdown === subItem.label ? 'max-h-96 mt-1' : 'max-h-0'
                                }`}
                              >
                                <div className="pl-4 space-y-1">
                                  {subItem.nested.map((nestedItem, nestedIndex) => (
                                    <Link
                                      key={nestedIndex}
                                      href={nestedItem.href}
                                      className="block px-4 py-2 text-sm text-gray-500 hover:text-primary-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {nestedItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary-pink/10 hover:to-primary-blue/10 rounded-lg font-medium transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="#contact"
              className="block mt-4 mx-4 px-6 py-3 bg-gradient-to-r from-primary-pink to-primary-blue text-white font-semibold rounded-full text-center hover:shadow-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
