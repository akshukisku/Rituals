// import React from 'react'
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Swiper as SwiperType } from "swiper";
import { comboCards } from "../../service/json/rituals.data";
import ComboCard from "../../components/ComboCard";
const ComboBundles = () => {
 const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-16 px-6 relative">
      <div className="container relative">
        <h2 className="text-[#5a0a2a] font-semibold mb-8 text-xl">
          Combo Bundles
        </h2>

        {/* LEFT ARROW */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-[-20px] top-[55%] z-10 bg-white shadow-lg w-10 h-10 flex items-center justify-center rounded-full"
        >
          <FiChevronLeft size={22} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-[-20px] top-[55%] z-10 bg-white shadow-lg w-10 h-10 flex items-center justify-center rounded-full"
        >
          <FiChevronRight size={22} />
        </button>

        {/* SWIPER */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
            {comboCards.map((data) => (
                <SwiperSlide key={data.id}>
                    <ComboCard data={data} />
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ComboBundles;
