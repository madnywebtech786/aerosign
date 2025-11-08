'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function GallerySlider({ gallery, serviceName, gradient }) {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  // Prepare gallery slides - 2 images per slide (stacked vertically)
  const slides = [];

  // Group all images into slides of 2 (top and bottom)
  for (let i = 0; i < gallery.length; i += 2) {
    slides.push(gallery.slice(i, i + 2));
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our
            <span className={`ml-3 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              Work
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Check out some examples of our {serviceName.toLowerCase()} projects
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            loop={slides.length > 3}
            className="gallery-swiper"
          >
            {slides.map((slideImages, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="flex flex-col gap-6 pb-16">
                  {slideImages.map((imagePath, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <Image
                        src={imagePath}
                        alt={`${serviceName} Project ${slideIndex * 2 + imageIndex + 1}`}
                        fill
                        className=" transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .gallery-swiper {
          width: 100%;
          padding-bottom: 20px;
        }

        .gallery-swiper .swiper-pagination {
          bottom: 0px !important;
        }

        .gallery-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .gallery-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #d91277 0%, #1e40af 100%);
          opacity: 1;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}
