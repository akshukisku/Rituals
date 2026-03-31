// import React from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PaintingSection = () => {
  return (
    <section className="w-full bg-[#e8d6b5] py-2 px-6">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        {/* Left Image Section */}
        <div className="relative w-full lg:w-1/2">

          <img
            src="/painting.png"
            alt="Madhubani Paintings"
            className="w-full h-[400px] object-cover rounded-2xl"
          />

          {/* Left Arrow */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-sm p-2 rounded-full">
            <FiChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-sm p-2 rounded-full">
            <FiChevronRight size={20} />
          </button>

        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 text-center lg:text-left">

          <h2 className="text-2xl font-semibold text-[#5a0a2a]">
            Madhubani Paintings
          </h2>

          <p className="mt-4 text-sm text-gray-700 leading-relaxed max-w-md">
            Madhubani painting, also known as Mithila art, is a vibrant Indian
            folk art from Bihar’s Mithila region, characterized by intricate
            patterns, geometric designs, and themes of nature, mythology and
            daily life.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <button className="text-sm bg-[#5a0a2a] text-white px-6 py-2 rounded-full hover:opacity-90 transition">
              Shop now
            </button>

            <button className="border text-sm border-[#5a0a2a] text-[#5a0a2a] px-6 py-2 rounded-full hover:bg-[#5a0a2a] hover:text-white transition">
              View all
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default PaintingSection