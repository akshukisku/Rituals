import { FiTrash2 } from "react-icons/fi";
import { useAppDispatch } from "../hooks/useredux";
import { decrease, increase, removeItem } from "../store/slices/cart.slice";

interface CartItemProps {
  id: string | number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const CartItem = ({ id, image, name, price, quantity }: CartItemProps) => {
  const dispatch = useAppDispatch();



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
        <button className="px-3 py-1 bg-[#5a0a2a] text-white" onClick={()=>dispatch(decrease(id))}>-</button>
        <span className="px-4">{quantity}</span>
        <button className="px-3 py-1 bg-[#5a0a2a] text-white" onClick={()=>dispatch(increase(id))}>+</button>
      </div>

      <button className="text-[#5a0a2a]" onClick={()=>dispatch(removeItem(id))}>
        <FiTrash2 />
      </button>
    </div>
  );
};

export default CartItem;