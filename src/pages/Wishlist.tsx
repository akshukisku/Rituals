import { useNavigate } from "react-router-dom";
import WishlistItem from "../components/WishlistItem";
import { useAppDispatch, useAppSelector } from "../hooks/useredux";
import { removeWish } from "../store/slices/wishlist.slice";

const Wishlist = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { list } = useAppSelector((state) => state.wishlist);
  const { user } = useAppSelector((state) => state.auth);

  // User not logged in
  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="rounded-xl bg-[#efe6d5] p-8 text-center">
          <h2 className="text-2xl font-semibold text-[#5a0a2a]">
            Login Required
          </h2>

          <p className="mt-2 text-gray-600">
            You need to sign in to view your wishlist ❤️
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold text-[#5a0a2a] mb-6">My Wishlist</h3>

      {list.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          Your wishlist is empty ❤️
        </div>
      ) : (
        <div className="space-y-4">
          {list.map((item) => (
            <WishlistItem
              key={item.$id}
              id={item.$id}
              image={item.image}
              name={item.name}
              price={item.price}
              onRemove={(id) => dispatch(removeWish(id))}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
