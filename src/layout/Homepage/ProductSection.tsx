import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "../../components/ProductCard";
import { weddingCards } from "../../service/json/rituals.data";

const ProductSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-16 px-6 relative">
      <div className="container relative">

        <h2 className="text-[#5a0a2a] font-semibold mb-8 text-xl">
          Popular Wedding Cards
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

        {/* ✅ overflow-hidden prevents slides from wrapping into columns */}
        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={24}
            slidesPerView={4}
            breakpoints={{
              0:    { slidesPerView: 1.2 },
              640:  { slidesPerView: 2 },
              768:  { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            style={{ width: "100%" }}
          >
            {weddingCards.map((card) => (
              // ✅ h-full keeps all slides the same height in a row
              <SwiperSlide key={card.id} style={{ height: "auto" }}>
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