import CategorySidebar from '../../components/CategorySidebar'
import CategoriesSection from '../CategoriesSection'
import GiftsSection from '../GiftsSection'
import PriceSecrion from '../Homepage/PriceSecrion'

const Shop = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-5 p-2">

      {/* LEFT SIDEBAR */}
      <div className="w-full lg:w-[260px] xl:w-[400px] flex-shrink-0">
        <CategorySidebar />
      </div>

      {/* RIGHT CONTENT */}
      {/* ✅ min-w-0 prevents flex child from overflowing its container */}
      <div className="flex-1 min-w-0 flex flex-col gap-10">

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