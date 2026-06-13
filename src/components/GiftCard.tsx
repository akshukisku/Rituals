
// import React from 'react'
import type { GiftCardProps } from "../typescript/interface/rituals.interface";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useAppDispatch } from "../hooks/useredux";
import {  addToCart } from "../store/slices/cart.slice";
import { addWish } from "../store/slices/wishlist.slice";
import { toast } from "sonner";
import { account } from "../lib/appwrite.config";

const GiftCard = (g: GiftCardProps) => {
  // console.log(g);

  const dispatch = useAppDispatch();

const AddCart = async () => {
  try {
    const user = await account.get();


    await dispatch(
      addToCart({
        userId: user.$id,
        product: g.gift,
      })
    ).unwrap();

    toast.success(`${g.gift.name} added to cart 🛒`);  // ✅ moved inside try
  } catch (error: any) {
    console.error("Add to cart error:", error);
    toast.error(error?.message || "Failed to add to cart");
  }
};
  const addWishItem =()=>{
 console.log("Gift",g.gift);

  dispatch(addWish(g.gift));

  toast.success(`${g.gift.name} added to wishlist ❤️`);
  }
  return (
    <div className="w-[240px] bg-[#efe4cf] rounded-2xl overflow-hidden shadow-sm">
      {/* Product Image */}
      <div className="relative">
        <img
          src={g.gift.image}
          alt={g.gift.name}
          className="w-full h-[200px] object-cover rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-[#5a0a2a]">
        {/* Title + Heart */}
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{g.gift.name}</h3>
          <FiHeart className="cursor-pointer" size={20} onClick={addWishItem} />
        </div>
        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          {/* Stars */}
          <div className="flex text-[#5a0a2a]">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                size={14}
                className={
                  index < g.gift.rating ? "text-[#5a0a2a]" : "text-gray-300"
                }
              />
            ))}
          </div>

          {/* Reviews */}
          <span className="text-sm text-gray-700">
            {g.gift.reviews} Reviews
          </span>
        </div>
        {/* Price + Discount */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg">
              ₹{g.gift.price.toFixed(2)}
            </span>

            <span className="line-through text-gray-500">
              ₹{g.gift.oldPrice.toFixed(2)}
            </span>
          </div>

          <span className="text-sm font-medium flex items-center gap-1">
            {g.gift.discount}% Off
          </span>
        </div>
        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button className="flex-1 border border-[#5a0a2a] rounded-full py-2 text-sm hover:bg-[#5a0a2a] hover:text-white transition" onClick={AddCart}>
            Add to Cart
          </button>

          <button className="flex-1 bg-[#5a0a2a] text-white rounded-full py-2 text-sm hover:opacity-90">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
