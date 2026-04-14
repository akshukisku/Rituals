import CategorySidebar from "../../components/CategorySidebar";
import CategoriesSection from "../Homepage/CategoriesSection";
import GiftsSection from "../GiftsSection";
import PriceSecrion from "../Homepage/PriceSecrion";

const Shop = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[300px] xl:w-[440px] shrink-0 bg-white p-4 sticky top-0 h-screen overflow-y-auto">
        <CategorySidebar />
      </aside>

      {/* Right Content */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-10">
          <GiftsSection />
          <PriceSecrion />
          <CategoriesSection />
          <GiftsSection />
        </div>
      </main>
    </div>
  );
};

export default Shop;
