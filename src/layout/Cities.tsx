// import React from 'react'

const Cities = () => {
  return (
      <div className="flex items-center justify-between p-6 rounded-lg max-w-6xl mx-auto">

      {/* Left Image */}
      <div className="flex flex-col items-center">
        <img
          src="/cities.png"
          alt=""
          className="w-[450px] object-contain"
        />
        <h2 className="text-3xl font-semibold text-gray-700 mt-2">
          
        </h2>
      </div>

      {/* Right Content */}
      <div className="max-w-md">
        <h3 className="text-lg font-semibold text-[#5a0a2a] mb-3">
          Rituals Store Founded In Different Cities
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
        </p>
      </div>
    </div>

  )
}

export default Cities