'use client';

export default function ServiceImage({ slug, name, gradient, image, sideImage }) {
  const hasImage = sideImage || image || ['3d-channel-lettering', 'light-box-cabinet-sign', 'pylon-sign'].includes(slug);
  const imageSrc = sideImage || image || `/images/services/${slug}.png`;

  return (
    <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
      {/* Animated gradient border */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} p-1 rounded-3xl`}>
        <div className="h-full w-full bg-gray-900 rounded-3xl overflow-hidden relative">
          {/* Check if service has an image */}
          {hasImage ? (
            <>
              <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60`}></div>

              {/* Animated scan line */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-pink to-transparent opacity-50 animate-scan`}></div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary-pink opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary-blue opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary-yellow opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary-pink opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-pink rounded-full animate-float opacity-60"></div>
                <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary-blue rounded-full animate-float-delayed opacity-60"></div>
                <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primary-yellow rounded-full animate-float opacity-60"></div>
              </div>

              {/* Service name badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
                <div className={`h-1 w-20 bg-gradient-to-r ${gradient} rounded-full`}></div>
              </div>
            </>
          ) : null}

          {/* Fallback placeholder */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}
            style={{ display: hasImage ? 'none' : 'flex' }}
          >
            <div className="text-center p-8">
              <div className="w-32 h-32 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-6xl">📋</span>
              </div>
              <p className="text-xl font-semibold text-white">Service Image</p>
              <p className="text-sm opacity-75 mt-2 text-white">Add image at /public/images/services/{slug}.png</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
