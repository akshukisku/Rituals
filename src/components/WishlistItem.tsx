import { FiTrash2 } from "react-icons/fi";

interface WishlistItemProps {
  id: string | number;
  image: string;
  name: string;
  price: number;
  onRemove: (id: string | number) => void;
}

const WishlistItem = ({ id, image, name, price, onRemove }: WishlistItemProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-[#efe6d5] rounded-xl p-4 shadow-sm">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-lg object-cover"
      />

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-[#5a0a2a]">{name}</h3>
        </div>
        <p className="text-xs text-green-600 mt-1">Saved to wishlist</p>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[#5a0a2a] font-semibold">₹{price.toFixed(2)}</span>
      </div>

      <button
        className="text-[#5a0a2a] p-2 rounded-full hover:bg-[#e6d7bf] transition"
        onClick={() => onRemove(id)}
      >
        <FiTrash2 />
      </button>
    </div>
  );
};

export default WishlistItem;