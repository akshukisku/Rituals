import { FiTrash2 } from "react-icons/fi";

interface CartItemProps {
  image: string;
  name: string;
  price: number;
  oldPrice: number;
  productId: string;
}

const CartItem = ({ image, name, price, oldPrice, productId }: CartItemProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-[#efe6d5] rounded-xl p-4">

      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-lg object-cover"
      />

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-[#5a0a2a]">{name}</h3>

        <p className="text-xs text-gray-500">
          Product Id : {productId}
        </p>

        <p className="text-xs text-green-600 mt-1">
          Product in stock
        </p>
      </div>

      {/* Price */}
      <div className="flex items-center gap-2">
        <span className="text-[#5a0a2a] font-semibold">
          ${price}
        </span>

        <span className="line-through text-gray-400 text-sm">
          ${oldPrice}
        </span>
      </div>

      {/* Quantity */}
      <div className="flex items-center border rounded-lg overflow-hidden">
        <button className="px-3 py-1 bg-[#5a0a2a] text-white">-</button>
        <span className="px-4">10</span>
        <button className="px-3 py-1 bg-[#5a0a2a] text-white">+</button>
      </div>

      {/* Delete */}
      <button className="text-[#5a0a2a]">
        <FiTrash2 />
      </button>

    </div>
  );
};

export default CartItem;