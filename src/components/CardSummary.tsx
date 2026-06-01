import { useMemo } from "react";
import { useAppSelector } from "../hooks/useredux";

const DELIVERY_FEE = 20;
const DISCOUNT_RATE = 0.1;

const CartSummary = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItem);

  const { totalProducts, subTotal, discount, finalPrice } = useMemo(() => {
    const totalProducts = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    const subTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const discount = subTotal * DISCOUNT_RATE;

    const finalPrice = subTotal - discount + DELIVERY_FEE;

    return {
      totalProducts,
      subTotal,
      discount,
      finalPrice,
    };
  }, [cartItems]);

  return (
    <div className="bg-[#efe6d5] rounded-xl p-6 flex flex-col gap-4">
      {/* Coupon */}
      <h3 className="font-semibold text-[#5a0a2a]">
        Coupon
      </h3>

      <div className="flex gap-2">
        <input
          placeholder="Type your coupon"
          className="flex-1 px-3 py-2 rounded-full border text-sm"
        />

        <button className="bg-[#5a0a2a] text-white px-4 rounded-full text-sm">
          Apply
        </button>
      </div>

      {/* Checkout */}
      <h3 className="font-semibold text-[#5a0a2a] mt-4">
        Checkout
      </h3>

      <div className="text-sm flex justify-between">
        <span>Total Products ({totalProducts})</span>
        <span>${subTotal.toFixed(2)}</span>
      </div>

      <div className="text-sm flex justify-between">
        <span>Discount</span>
        <span>-${discount.toFixed(2)}</span>
      </div>

      {/* Delivery Fee */}
      <div className="text-sm flex justify-between">
        <span>Delivery Fee</span>
        <span>${DELIVERY_FEE.toFixed(2)}</span>
      </div>

      {/* Line */}
      <div className="border-t border-[#c9b8a0] pt-4">
        <div className="text-sm flex justify-between font-semibold text-[#5a0a2a]">
          <span>Final Price</span>
          <span>${finalPrice.toFixed(2)}</span>
        </div>
      </div>

      <button className="bg-[#5a0a2a] text-white py-2 rounded-full mt-3 hover:opacity-90 transition">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;