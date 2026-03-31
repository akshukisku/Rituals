// import React from 'react'

const FounderLayout = () => {
  return (
    <div className="flex items-center justify-between p-6 rounded-lg max-w-6xl mx-auto">
      <div className="max-w-md">
        <h2 className="text- font-semibold text-[#5a0a2a] mb-3">
          Meet our Founder
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage,
        </p>
      </div>
      {/* Left Image */}
      <div className="flex flex-col items-center h-full w-full overflow-hidden rounded-lg">
        <img src="/photo-1534180477871-5d6cc81f3920.jpeg" alt="" className="w-[450px] object-contain " />
      </div>

      {/* Right Content */}
    </div>
  );
};

export default FounderLayout;
