'use client';

export default function AboutImage() {
  return (
    <div className="lg:sticky lg:top-24">
      <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-pink via-primary-yellow to-primary-blue p-1 rounded-3xl">
          <div className="h-full w-full bg-gray-900 rounded-3xl overflow-hidden relative">
            {/* Main Image */}
            <img
              src="/images/about-side.png"
              alt="Aero Sign & Print - About Us"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }}
            />

            {/* Fallback */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center" style={{ display: 'none' }}>
              <div className="text-center text-white">
                <div className="text-6xl mb-4">📋</div>
                <p className="text-lg font-semibold">About Us</p>
              </div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

            {/* Animated scan line */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-pink to-transparent opacity-50 animate-scan"></div>
            </div>

            {/* Corner accents - Top Left */}
            <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none">
              <div className="absolute top-4 left-4 w-4 h-px bg-gradient-to-r from-primary-pink to-transparent"></div>
              <div className="absolute top-4 left-4 w-px h-4 bg-gradient-to-b from-primary-pink to-transparent"></div>
            </div>

            {/* Corner accents - Top Right */}
            <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
              <div className="absolute top-4 right-4 w-4 h-px bg-gradient-to-l from-primary-blue to-transparent"></div>
              <div className="absolute top-4 right-4 w-px h-4 bg-gradient-to-b from-primary-blue to-transparent"></div>
            </div>

            {/* Corner accents - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none">
              <div className="absolute bottom-4 left-4 w-4 h-px bg-gradient-to-r from-primary-yellow to-transparent"></div>
              <div className="absolute bottom-4 left-4 w-px h-4 bg-gradient-to-t from-primary-yellow to-transparent"></div>
            </div>

            {/* Corner accents - Bottom Right */}
            <div className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none">
              <div className="absolute bottom-4 right-4 w-4 h-px bg-gradient-to-l from-primary-pink to-transparent"></div>
              <div className="absolute bottom-4 right-4 w-px h-4 bg-gradient-to-t from-primary-pink to-transparent"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-pink rounded-full opacity-60 animate-float"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary-blue rounded-full opacity-60 animate-float-delayed"></div>
            <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primary-yellow rounded-full opacity-60 animate-float"></div>

            {/* Info badge - slides up on hover */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary-pink/90 via-primary-blue/90 to-primary-yellow/90 backdrop-blur-sm px-6 py-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-semibold text-center text-sm">
                Aero Sign & Print - Your Trusted Partner Since 2014
              </p>
            </div>
          </div>
        </div>

        {/* Outer glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-br from-primary-pink via-primary-yellow to-primary-blue rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
      </div>
    </div>
  );
}
