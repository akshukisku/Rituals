// import React from "react";   

const CategorySidebar = () => {
  return (
    <aside className="w-[400px] bg-[#f3f3f3] p-6 text-[#5a0a2a]">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-6">Filter</h2>

      {/* Price */}
      <div className="mb-8">
        <p className="text-sm mb-3">Price</p>

        <div className="flex items-center gap-2">
          <span className="bg-[#5a0a2a] text-white text-xs px-3 py-1 rounded-full">
            Min
          </span>

          <input type="range" className="w-full accent-[#5a0a2a]" />

          <span className="bg-[#5a0a2a] text-white text-xs px-3 py-1 rounded-full">
            Max
          </span>
        </div>

        <button className="w-full mt-4 bg-[#5a0a2a] text-white py-2 rounded-full">
          Apply
        </button>
      </div>

      {/* Product Types */}
      <div className="mb-8">
        <p className="text-sm mb-3">Product Types</p>

        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-[#5a0a2a]"

            />
            Handcrafted Decor
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-[#5a0a2a]"

            />
            Madhubani Paintings
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-[#5a0a2a]"
            />
            Wooden Handicrafts
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-[#5a0a2a]" 
            />
            Traditional Art Pieces
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#5a0a2a]" />
            Gift Hampers
          </label>
        </div>
      </div>

      {/* Min order quantity */}
      <div className="mb-8">
        <p className="text-sm mb-3">Min Order Quantity</p>

        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-[#5a0a2a]"
            />
            1 - 10 Pieces
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-[#5a0a2a]"
            />
            10 - 50 Pieces
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#5a0a2a]" />
            50 - 100 Pieces
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#5a0a2a]" />
            100+ Pieces
          </label>
        </div>
      </div>

      {/* In Stock */}
      <div>
        <p className="text-sm mb-3">Availability</p>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="accent-[#5a0a2a]" />
          In Stock
        </label>
      </div>
    </aside>
  );
};

export default CategorySidebar;
