import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import ProductCard from "../../components/ProductCard";
import { weddingCards } from "../../service/json/rituals.data";

const ProductSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto relative">

        {/* Heading */}
        <h2 className="text-[#5a0a2a] font-semibold mb-6 sm:mb-8 
        text-lg sm:text-xl md:text-2xl">
          Popular Wedding Cards
        </h2>

        {/* LEFT ARROW */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-1 sm:left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 
          bg-white/90 backdrop-blur shadow-md 
          w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 
          flex items-center justify-center rounded-full"
        >
          <FiChevronLeft className="text-base sm:text-lg lg:text-xl" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-1 sm:right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 
          bg-white/90 backdrop-blur shadow-md 
          w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 
          flex items-center justify-center rounded-full"
        >
          <FiChevronRight className="text-base sm:text-lg lg:text-xl" />
        </button>

        {/* Swiper */}
        <div className="w-full overflow-hidden">
          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            grabCursor={true}
            breakpoints={{
              0:    { slidesPerView: 1.2, spaceBetween: 12 },
              480:  { slidesPerView: 1.5 },
              640:  { slidesPerView: 2, spaceBetween: 16 },
              768:  { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5, spaceBetween: 20 },
              1280: { slidesPerView: 4.5 },
              1536: { slidesPerView: 5 },
            }}
          >
            {weddingCards.map((card) => (
              <SwiperSlide key={card.id} className="h-auto">
                <ProductCard data={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;