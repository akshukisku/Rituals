import star from "/blur-star.svg";

const SectionDivide = () => {
  return (
    <div className="container py-6">
      <div className="max-w-[380px] mx-auto w-full">
        <div className="flex items-center gap-4">
          <div className="bg-[#570835] h-px w-full"></div>

          <figure className="flex-shrink-0">
            <img src={star} alt="star divider" className="w-5 h-5" />
          </figure>

          <div className="bg-[#570835] h-px w-full"></div>
        </div>
      </div>
    </div>
  );
};
export default SectionDivide;
