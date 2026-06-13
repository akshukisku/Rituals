import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

interface ReturnCardProps {
  data: any;
}

const ReturnCard = ({ data }: ReturnCardProps) => {
  return (
    <div className="w-[250px]">
      {/* Image */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={data.images}
          alt={data.name}
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Title + Heart */}
      <div className="flex justify-between items-center mt-2">
        <h3 className="text-lg font-medium text-[#5a0a2a]">
          {data.name}
        </h3>

        <FiHeart
          className="text-[#5a0a2a] cursor-pointer"
          size={16}
        />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 text-[#5a0a2a] text-xs mt-1">
        {[...Array(Number(data.rating || 5))].map((_, i) => (
          <FaStar key={i} />
        ))}

        <span className="text-gray-500 ml-1">
          {data.reviews || 0} Reviews
        </span>
      </div>

      {/* Price */}
      <div className="flex gap-2 text-xs mt-1">
        <span className="text-[#5a0a2a] font-semibold">
          ₹{Number(data.price || 0).toFixed(2)}
        </span>

        {data.oldPrice && (
          <span className="line-through text-gray-400">
            ₹{Number(data.oldPrice).toFixed(2)}
          </span>
        )}
      </div>
    </div>
  );
};

export default ReturnCard;