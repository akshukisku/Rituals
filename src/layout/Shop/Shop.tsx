// import React from 'react'
import CategorySidebar from '../../components/CategorySidebar'
import CategoriesSection from '../CategoriesSection'
import GiftsSection from '../GiftsSection'
import PriceSecrion from '../Homepage/PriceSecrion'

const Shop = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-5 p-2">

      {/* LEFT SIDEBAR */}
      <div className="
        w-full 
        lg:w-[260px] 
        xl:w-[300px]
      ">
        <CategorySidebar />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col gap-10">

        <GiftsSection />

        <PriceSecrion />

        <CategoriesSection />

        <div className="gift-section">
          <GiftsSection />
        </div>

      </div>

    </div>
  );
};

export default Shop;