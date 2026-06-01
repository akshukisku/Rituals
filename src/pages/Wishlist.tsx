
import WishlistItem from "../components/WishlistItem";
import { useAppDispatch, useAppSelector } from "../hooks/useredux";
import { removeWish } from "../store/slices/wishlist.slice";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.wishlist);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold text-[#5a0a2a] mb-6">
        My Wishlist
      </h3>

      {list?.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          Your wishlist is empty ❤️
        </div>
      ) : (
        <div className="space-y-4">
          {list?.map((item) => (
            <WishlistItem
              key={item.id}
              id={item.id}
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