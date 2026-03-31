const WeddingStats = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-[#570835] font-semibold text-xl md:text-2xl lg:text-3xl mb-16">
          India’s largest wedding gift platform
        </h2>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative max-w-6xl mx-auto h-[350px]">

          {/* 500+ */}
          <div className="absolute left-0 top-0 w-44 h-44 rounded-full bg-[#F9F6C1] flex flex-col items-center justify-center text-center">
            <span className="text-2xl font-semibold">500+</span>
            <span className="text-sm">Brands</span>
          </div>

          {/* 40M+ */}
          <div className="absolute left-[25%] bottom-0 w-44 h-44 rounded-full bg-[#F9F6C1] flex flex-col items-center justify-center text-center">
            <span className="text-2xl font-semibold">40M+</span>
            <span className="text-sm">Customer Served</span>
          </div>

          {/* 10K+ */}
          <div className="absolute left-[50%] top-0 w-44 h-44 rounded-full bg-[#F9F6C1] flex flex-col items-center justify-center text-center">
            <span className="text-2xl font-semibold">10K+</span>
            <span className="text-sm">Products</span>
          </div>

          {/* 3200+ */}
          <div className="absolute right-0 bottom-0 w-44 h-44 rounded-full bg-[#F9F6C1] flex flex-col items-center justify-center text-center">
            <span className="text-2xl font-semibold">3200+</span>
            <span className="text-sm">Delivery Ongoing</span>
          </div>

          {/* CONNECTOR SVG (Single Line = BEST) */}
          <svg
            className="absolute top-[51%] left-0 w-full -translate-y-1/2 -z-10"
            height="120"
            viewBox="0 0 1000 120"
            fill="none"
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
        <div className="flex flex-col items-center gap-8 lg:hidden">

          {[
            { number: "500+", label: "Brands" },
            { number: "40M+", label: "Customer Served" },
            { number: "10K+", label: "Products" },
            { number: "3200+", label: "Delivery Ongoing" },
          ].map((item, i) => (
            <div
              key={i}
              className="w-35 h-35 rounded-full bg-[#F9F6C1] flex flex-col items-center justify-center text-center"
            >
              <span className="text-lg font-semibold">{item.number}</span>
              <span className="text-xs">{item.label}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WeddingStats;