// import React from 'react'

const NewsSection = () => {
  return (
    <section className="bg-[#e8dfd2] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-2xl  font-semibold text-[#5b0f3a]">
          Stay updated with what’s new & what’s on sale!
        </h2>

        <p className="mt-4 text-[#6b3b52] text-base md:text-lg">
          From new arrivals to special savings and gift ideas you’ll love
          <br />
          Subscribe & stay in the know
        </p>

        {/* Input + Button */}
        <div className="mt-8 flex justify-center">
          <div className="flex w-full max-w-md bg-white rounded-full p-1 shadow-sm">
            
            <input
              type="email"
              placeholder="Write your mail"
              className="flex-1 px-5 py-3 rounded-full outline-none text-sm"
            />

            <button className="bg-[#5b0f3a] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#4a0c30] transition-all duration-300">
              Subscribe
            </button>

          </div>
        </div>

      </div>
    </section>
  )
}

export default NewsSection