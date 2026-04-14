const stats = [
  { number: "500+", label: "Brands" },
  { number: "40M+", label: "Customer Served" },
  { number: "10K+", label: "Products" },
  { number: "3200+", label: "Delivery Ongoing" },
];

const WeddingStats = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-center text-[#570835] font-semibold 
          text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10 sm:mb-14 lg:mb-16">
          India’s largest wedding gift platform
        </h2>

        {/* Desktop / Tablet Layout */}
        <div className="hidden md:block relative max-w-6xl mx-auto h-[280px] lg:h-[350px]">

          {/* Circles */}
          {stats.map((item, i) => {
            const positions = [
              "left-0 top-0",
              "left-[25%] bottom-0",
              "left-[50%] top-0",
              "right-0 bottom-0",
            ];

            return (
              <div
                key={i}
                className={`absolute ${positions[i]} 
                w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-44 lg:h-44
                rounded-full bg-[#F9F6C1] flex flex-col items-center justify-center text-center shadow-sm`}
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-semibold">
                  {item.number}
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm">
                  {item.label}
                </span>
              </div>
            );
          })}

          {/* Connector Line */}
          <svg
            className="absolute top-1/2 left-0 w-full -translate-y-1/2 -z-10"
            viewBox="0 0 1000 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M60 10 Q300 90 350 80 T450 20 T950 80"
              stroke="#a16207"
              strokeDasharray="4 4"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>
        </div>

        {/* Mobile Layout */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:hidden place-items-center">

          {stats.map((item, i) => (
            <div
              key={i}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#F9F6C1]
              flex flex-col items-center justify-center text-center shadow-sm"
            >
              <span className="text-sm sm:text-base font-semibold">
                {item.number}
              </span>
              <span className="text-[10px] sm:text-xs">
                {item.label}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WeddingStats;