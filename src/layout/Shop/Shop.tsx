import { useState } from "react";
import CategorySidebar from "../../components/CategorySidebar";
import CategoriesSection from "../Homepage/CategoriesSection";
import GiftsSection from "../GiftsSection";
import PriceSecrion from "../Homepage/PriceSecrion";
import { ListFilter  } from "lucide-react";

const Shop = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Sidebar (Desktop) */}
      <aside className="hidden lg:block w-[300px] xl:w-[440px] shrink-0 bg-white px-4 sticky top-0 h-screen overflow-y-auto">
        <CategorySidebar />
      </aside>

      {/* Mobile Sidebar (Drawer style) */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="bg-black/40 w-full"
            onClick={() => setOpen(false)}
          ></div>

          {/* Sidebar */}
          <aside className="w-[2000px] bg-white h-full overflow-y-auto">
            <CategorySidebar />
          </aside>
        </div>
      )}

      {/* Right Content */}
      <main className="flex-1 overflow-y-auto p-4 w-full">
        
        {/* Mobile Top Bar */}
        <div className="lg:hidden mb-4 flex items-center gap-3">
          <button onClick={() => setOpen(true)}>
            <ListFilter  size={24} />
          </button>
          <h2 className="text-lg font-semibold">Filter</h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-10">
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