import React from "react";

interface CategorySidebarProps {
  onFilter: (filters: {
    maxPrice: number;
    productTypes: string[];
    quantity: string[];
    availability: string;
  }) => void;
}



const CategorySidebar = ({ onFilter }: CategorySidebarProps) => {

  
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {
    maxPrice: Number(formData.get("price") || 0),
    productTypes: formData.getAll("productTypes") as string[],
    quantity: formData.getAll("quantity") as string[],
    availability: (formData.get("availability") as string) || "",
  };

  onFilter(data);
};

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[400px] bg-[#f3f3f3] p-6 text-[#5a0a2a]"
    >
      {/* Title */}
      <h2 className="text-lg font-semibold mb-6">Filter</h2>

      {/* Price */}
      <div className="mb-8">
        <p className="text-sm mb-3">Price</p>

        <div className="flex items-center gap-2">
          <span className="bg-[#5a0a2a] text-white text-xs px-3 py-1 rounded-full">
            Min
          </span>

          <input
            type="range"
            name="price"
            className="w-full accent-[#5a0a2a]"
          />

          <span className="bg-[#5a0a2a] text-white text-xs px-3 py-1 rounded-full">
            Max
          </span>
        </div>
      </div>

      {/* Product Types */}
      <div className="mb-8">
        <p className="text-sm mb-3">Product Types</p>

        <div className="space-y-2 text-sm">
          {[
            "Handcrafted Decor",
            "Madhubani Paintings",
            "Wooden Handicrafts",
            "Traditional Art Pieces",
            "Gift Hampers",
          ].map((item) => (
            <label key={item} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="productTypes"
                value={item}
                className="accent-[#5a0a2a]"
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Min order quantity */}
      <div className="mb-8">
        <p className="text-sm mb-3">Min Order Quantity</p>

        <div className="space-y-2 text-sm">
          {[
            "1-10",
            "10-50",
            "50-100",
            "100+",
          ].map((qty) => (
            <label key={qty} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="quantity"
                value={qty}
                className="accent-[#5a0a2a]"
              />
              {qty} Pieces
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="mb-8">
        <p className="text-sm mb-3">Availability</p>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="availability"
            value="inStock"
            className="accent-[#5a0a2a]"
          />
          In Stock
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-4 bg-[#5a0a2a] text-white py-2 rounded-full"
      >
        Apply Filters
      </button>
    </form>
  );
};

export default CategorySidebar;