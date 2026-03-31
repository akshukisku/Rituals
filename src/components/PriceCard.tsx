import type { PriceCardProps } from "../type/interface/rituals.interface";


const PriceCard = ({ price}: PriceCardProps) => {
  return (
    <div className="w-[150px] bg-[#f7efd7] border-2 border-[#e5c77a] rounded-xl p-3 flex flex-col items-center justify-center text-center hover:shadow-md transition duration-300 cursor-pointer">
      
      <p className="text-lg text-gray-600 mb-2">Shop by</p>

      <p className="text-xl font-semibold text-[#8b3a3a] leading-5">
        {price.min}
      </p>

      {/* TO TEXT */}
      <p className="text-xs text-gray-500">to</p>

      <p className="text-xl font-semibold text-[#8b3a3a] leading-5">
        {price.max}
      </p>

      <button className="text-lg mt-2 text-[#8b3a3a]  hover:text-black transition">
        Shop now &gt;
      </button>

    </div>
  );
};

export default PriceCard;