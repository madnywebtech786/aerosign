'use client';

import Image from 'next/image';
import { Facebook, Twitter, MapPin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary-pink via-primary-yellow to-primary-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-sm">
          {/* Left - Social Media Icons */}
          <div className="flex items-center space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              aria-label="Visit our Twitter page"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Address with Canadian Flag */}
          <div className="hidden sm:flex items-center space-x-2 text-xs sm:text-sm">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="hidden md:inline">4852 50th Ave NE, Calgary, AB T3J 4LB</span>
            <span className="md:hidden">Calgary, AB</span>
            <Image
              src="/images/flag.png"
              alt="Canadian Flag"
              width={40}
              height={40}
              className="rounded-full w-8 h-8 ml-2"
            />
          </div>

          {/* Mobile - Just Flag and City */}
          <div className="flex sm:hidden items-center space-x-2 text-xs">
            <span>Calgary, AB</span>
            <Image
              src="/images/flag.png"
              alt="Canadian Flag"
              width={40}
              height={40}
              className="rounded-full w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
