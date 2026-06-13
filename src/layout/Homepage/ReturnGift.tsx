import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import ReturnCard from "../../components/ReturnCard";
import { getProductsPublic } from "../../service/helper/global.helper";

const ReturnGift = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await getProductsPublic(1, 20, {
        });

        setProducts(response.products);
      } catch (error) {
        console.log(error);
      }
    };

    loadProducts();
  }, []);

  return (
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto relative">
        <h2 className="text-[#5a0a2a] font-semibold mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl">
          Return Gifts
        </h2>

        {/* Left Arrow */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-[55%] -translate-y-1/2 z-50
          bg-white shadow-lg w-10 h-10 rounded-full
          flex items-center justify-center"
        >
          <FiChevronLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-[55%] -translate-y-1/2 z-50
          bg-white shadow-lg w-10 h-10 rounded-full
          flex items-center justify-center"
        >
          <FiChevronRight />
        </button>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          grabCursor
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 12 },
            480: { slidesPerView: 1.5, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 2.5, spaceBetween: 16 },
            1024: { slidesPerView: 3.5, spaceBetween: 20 },
            1280: { slidesPerView: 4.5, spaceBetween: 20 },
            1536: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.$id}>
              <ReturnCard data={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReturnGift;