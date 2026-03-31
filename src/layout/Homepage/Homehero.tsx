const Homehero = () => {
  return (
    <section className="w-full grid lg:grid-cols-2 bg-[#f3ede4]">
      {/* LEFT CONTENT */}
      <div className="px-10 lg:px-20 py-16 flex flex-col justify-center">

        <p className="text-[#6a1236] text-sm border-b border-[#6a1236] inline-block pb-2 w-fit font-libre text-[31px] leading-8">
          SPECIAL OFFER <span className="ml-2 font-semibold">50% OFF</span>
        </p>

        <h1 className="text-[70px] lg:text-[64px] xl:text-[110px] leading-tight text-[#6a1236] mt-6 border-b border-[#6a1236] pb-4 w-fit font-playfair">
          Wedding <br /> Cards
        </h1>

        <p className="text-[#6a1236] text-lg mt-4">
          Elegant and best quality cards
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-8">

          <button
            className="bg-[#6a1236] text-white px-6 py-2 rounded-full text-sm
            transition duration-300 ease-in-out
            hover:bg-white hover:text-[#6a1236] hover:border hover:border-[#6a1236]
            hover:scale-105"
          >
            Shop Now
          </button>

          <button
            className="border border-[#6a1236] text-[#6a1236] px-6 py-2 rounded-full text-sm
            transition duration-300 ease-in-out
            hover:bg-[#6a1236] hover:text-white
            hover:scale-105"
          >
            Explore Now
          </button>

        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="bg-[#e5dfa3] flex items-center justify-center py-20 relative ">

        {/* Image 1 */}
        <img
          src="/home-hero.jpg"
          alt="Card"
          className="
          w-[220px]
          sm:w-[260px]
          md:w-[300px]
          lg:w-[340px]
          xl:w-[360px]
          rounded-3xl
          shadow-md
          relative
          md:absolute
          md:-top-10
          md:left-10
          lg:left-20
          xl:-left-32
          xl:top-20
          transition duration-500
          hover:scale-105 hover:-translate-y-2
        "
        />

        {/* Image 2 */}
        <img
          src="/be8d208614ba29f6df56c11523ee7ed4.jpg"
          alt="Card"
          className="
          w-[180px]
          sm:w-[200px]
          md:w-[220px]
          lg:w-[260px]
          xl:w-[300px]
          h-[220px]
          sm:h-[240px]
          md:h-[260px]
          lg:h-[320px]
          xl:h-[400px]
          object-cover
          rounded-t-[120px]
          rounded-b-none
          shadow-md
          relative
          md:absolute
          md:right-10
          lg:right-20
          xl:right-32
          md:top-10
          mt-6
          md:mt-0
          transition duration-500
          hover:scale-105 hover:-translate-y-2
        "
        />

      </div>
    </section>
  );
};

export default Homehero;