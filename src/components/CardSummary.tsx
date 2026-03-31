const CartSummary = () => {
  return (
    <div className="bg-[#efe6d5] rounded-xl p-6 flex flex-col gap-4">

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

      <h3 className="font-semibold text-[#5a0a2a] mt-4">
        Checkout
      </h3>

      <div className="text-sm flex justify-between">
        <span>Total Products (10)</span>
        <span>$230</span>
      </div>

      <div className="text-sm flex justify-between">
        <span>Discount</span>
        <span>$30</span>
      </div>

      <div className="text-sm flex justify-between">
        <span>Final Price</span>
        <span>$200</span>
      </div>

      <button className="bg-[#5a0a2a] text-white py-2 rounded-full mt-3">
        Proceed to Checkout
      </button>

    </div>
  );
};

export default CartSummary;