import { FiTrash2 } from "react-icons/fi";
import { useAppDispatch } from "../hooks/useredux";
import { decrease, increase, removeCartItem, updateCartQuantity } from "../store/slices/cart.slice";
// import { useAppSelector } from "../hooks/useredux";

interface CartItemProps {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const CartItem = ({ id, image, name, price, quantity }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const handleDecrease = () => {
    if (quantity <= 1) return; // prevent going below 1
    dispatch(decrease(id));                              // update UI instantly
    dispatch(updateCartQuantity({ cartId: id, quantity: quantity - 1 })); // persist to Appwrite
  };

  const handleIncrease = () => {
    dispatch(increase(id));                              // update UI instantly
    dispatch(updateCartQuantity({ cartId: id, quantity: quantity + 1 })); // persist to Appwrite
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-[#efe6d5] rounded-xl p-4">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-lg object-cover"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-[#5a0a2a]">{name}</h3>
        <p className="text-xs text-green-600 mt-1">Product in stock</p>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[#5a0a2a] font-semibold">${price}</span>
      </div>

      <div className="flex items-center border rounded-lg overflow-hidden">
        <button
          className="px-3 py-1 bg-[#5a0a2a] text-white disabled:opacity-40"
          onClick={handleDecrease}
          disabled={quantity <= 1}   // disable at 1 instead of allowing 0
        >
          -
        </button>
        <span className="px-4">{quantity}</span>
        <button
          className="px-3 py-1 bg-[#5a0a2a] text-white"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>

      <button
        className="text-[#5a0a2a]"
        onClick={() => dispatch(removeCartItem(id))}
      >
        <FiTrash2 />
      </button>
    </div>
  );
};

export default CartItem;