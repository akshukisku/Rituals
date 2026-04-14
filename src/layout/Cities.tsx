const Cities = () => {
  return (
    <div className="
      flex flex-col lg:flex-row 
      items-center justify-between 
      gap-8 
      p-6 
      max-w-6xl mx-auto
    ">

      {/* Left Image */}
      <div className="flex flex-col items-center w-full lg:w-1/2">

        <img
          src="/cities.png"
          alt="cities"
          className="w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[450px] object-contain"
        />

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mt-2 text-center lg:text-left">
          {/* Optional title */}
        </h2>

      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">

        <h3 className="text-lg sm:text-xl font-semibold text-[#5a0a2a] mb-3">
          Rituals Store Founded In Different Cities
        </h3>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        </p>

      </div>

    </div>
  );
};

export default Cities;