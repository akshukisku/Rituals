import { useState } from "react";

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex border rounded-lg overflow-hidden w-fit">
      <button onClick={decrease} className="px-3 py-1 bg-gray-100">
        -
      </button>

      <span className="px-4 py-1 flex items-center">{quantity}</span>

      <button onClick={increase} className="px-3 py-1 bg-gray-100">
        +
      </button>
    </div>
  );
};

export default QuantityCounter;