const FounderLayout = () => {
  return (
    <div className="
      flex flex-col-reverse lg:flex-row 
      items-center justify-between 
      gap-8 
      p-6 
      max-w-6xl mx-auto
    ">

      {/* TEXT CONTENT */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">

        <h2 className="text-xl sm:text-2xl font-semibold text-[#5a0a2a] mb-3">
          Meet our Founder
        </h2>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>

      </div>

      {/* IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center">

        <img
          src="/photo-1534180477871-5d6cc81f3920.jpeg"
          alt="Founder"
          className="
            w-full 
            max-w-[300px] 
            sm:max-w-[400px] 
            lg:max-w-[450px] 
            object-cover 
            rounded-xl
          "
        />

      </div>

    </div>
  );
};

export default FounderLayout;