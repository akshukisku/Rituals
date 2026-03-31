import { FiArrowRight } from "react-icons/fi";

interface OfferCardProps {
  title: string;
  description: string;
  offers: number;
}

const OfferCard = ({ title, description, offers }: OfferCardProps) => {
  return (
    <div className="bg-[#f5f0e7] p-4 rounded-xl flex flex-col gap-5 justify-between aspect-square min-w-[100px] max-w-[150px]">

      <h4 className="text-[#5a0a2a] font-semibold">
        {title}
      </h4>

      <p className="text-xs text-gray-600">
        {description}
      </p>

      <span className="text-xs text-blue-600 flex items-center gap-1 cursor-pointer">
        {offers} offer <FiArrowRight />
      </span>

    </div>
  );
};

export default OfferCard;