import { useEffect } from "react";
import CartItem from "../components/CardItem";
import CartSummary from "../components/CardSummary";
import SpecialInstruction from "../components/SpecialInstruction";
import { useAppDispatch, useAppSelector } from "../hooks/useredux";
import { fetchCart } from "../store/slices/cart.slice";
import { account } from "../lib/appwrite.config";
import { useNavigate } from "react-router-dom";

const CardLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const { cartItem, loading,error } = useAppSelector((state) => state.cart);
    const { user } = useAppSelector((state) => state.auth);


// console.log("cartItem:", cartItem);
// console.log("error:", error);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const user = await account.get(); // ✅ get user same way GiftCard does
        console.log("Fetching cart for userId:", user.$id);
        dispatch(fetchCart(user.$id));
      } catch (err) {
        console.error("Failed to get user for cart fetch:", err);
      }
    };

    loadCart();
  }, [dispatch]);
    // User not logged in
  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="rounded-xl bg-[#efe6d5] p-8 text-center">
          <h2 className="text-2xl font-semibold text-[#5a0a2a]">
            Login Required
          </h2>

          <p className="mt-2 text-gray-600">
            You need to sign in to view your Cart
          </p>

          <button
            className="mt-5 rounded-full bg-[#5a0a2a] px-6 py-2 text-white"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-[#5a0a2a] mb-6">Cart</h2>
        <div className="flex min-h-[60vh] w-full items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#5a0a2a] border-t-transparent" />
            <p className="text-sm text-gray-500">Loading your cart...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-[#5a0a2a] mb-6">Cart</h2>
        <div className="flex min-h-[60vh] w-full items-center justify-center">
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold text-[#5a0a2a] mb-6">Cart</h2>

      {cartItem.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 flex flex-col gap-4">
            {cartItem.map((it) => (
              <CartItem
                key={it.$id}
                id={it.$id}
                image={it.image}
                name={it.name}
                price={it.price}
                quantity={it.quantity}
              />
            ))}
          </div>

          {/* Summary */}
          <div className="w-full lg:w-[320px] flex flex-col gap-6">
            <CartSummary />
            <SpecialInstruction />
          </div>
        </div>
      ) : (
        <div className="flex min-h-[60vh] w-full items-center justify-center px-4">
          <div className="w-full max-w-md rounded-2xl bg-[#efe6d5] p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#5a0a2a]/10">
              <span className="text-3xl">🛒</span>
            </div>
            <h2 className="text-2xl font-semibold text-[#5a0a2a]">
              Your cart is empty
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              No items have been added to your cart yet.
            </p>
            <button className="mt-5 rounded-full bg-[#5a0a2a] px-6 py-2 text-sm font-medium text-white transition hover:opacity-90">
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CardLayout;
