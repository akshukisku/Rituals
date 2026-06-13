import { useAppSelector } from "../hooks/useredux";

const TestCart = () => {
    console.log("CardLayout Rendered");
  const { cartItem, loading, error } = useAppSelector(
    (state) => state.cart
  );

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error: {error}</h1>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Test Cart</h1>

      {cartItem.length === 0 ? (
        <p>Cart Empty</p>
      ) : (
        cartItem.map((item) => (
          <div
            key={item.$id}
            className="border p-4 mb-3 rounded"
          >
            <p><strong>ID:</strong> {item.$id}</p>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Image:</strong> {item.image}</p>
            <p><strong>Price:</strong> {String(item.price)}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>

            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover mt-2"
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TestCart;