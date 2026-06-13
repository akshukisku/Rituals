import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import ProductCard from "../../components/ProductCard";
import { getProductsPublic } from "../../service/helper/global.helper";

const ProductSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await getProductsPublic(1, 20);

        setProducts(response.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-[#5a0a2a] font-semibold text-2xl">
            Popular Wedding Cards
          </h2>
          <p className="mt-4">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto relative">
        <h2
          className="text-[#5a0a2a] font-semibold mb-6 sm:mb-8
          text-lg sm:text-xl md:text-2xl"
        >
          Popular Wedding Cards
        </h2>

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-1 sm:left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20
          bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full"
        >
          <FiChevronLeft />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-1 sm:right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20
          bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full"
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
              <ProductCard data={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSection;