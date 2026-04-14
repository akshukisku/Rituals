import star from "/blur-star.svg";

const SectionDivide = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto w-full">
        
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Left Line */}
          <div className="flex-1 h-[1px] bg-[#570835]" />

          {/* Star */}
          <figure className="flex-shrink-0">
            <img
              src={star}
              alt="star divider"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          </figure>

          {/* Right Line */}
          <div className="flex-1 h-[1px] bg-[#570835]" />

        </div>
      </div>
    </div>
  );
};

export default SectionDivide;