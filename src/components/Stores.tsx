// import React from 'react'

const Stores = () => {
  return (
      <section className="py-16 text-center">

      {/* Title */}
      <h2 className="text-2xl font-semibold text-[#5a0a2a]">
        Our Stores
      </h2>

      <p className="text-sm text-gray-600 mt-2">
        Fine the nearest store to experience our products
      </p>

      {/* Cities */}
      <div className="flex justify-center gap-16 mt-12 flex-wrap">

        {/* Mumbai */}
        <div className="flex flex-col items-center">
          <div className="w-[320px] h-[160px] rounded-md">
            <img src="/Mumbai Icon 1.png" alt="" />
          </div>
        </div>
        {/* Kolkata */}
        <div className="flex flex-col items-center">
          <div className="w-[320px] h-[160px] rounded-md">
            <img src="/Kolkata Icon 1.png" alt="Kolkata" />
          </div>
        </div>

        {/* Ahmedabad */}
        <div className="flex flex-col items-center">
          <div className="w-[320px] h-[160px]  rounded-md">
            <img src="/Amedabad Icon 1.png" alt="Ahmedabad" />
          </div>
        </div>

      </div>

    </section>
  )
}

export default Stores