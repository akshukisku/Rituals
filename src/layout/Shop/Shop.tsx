import { useState } from "react";
import CategorySidebar from "../../components/CategorySidebar";
import CategoriesSection from "../Homepage/CategoriesSection";
import PriceSecrion from "../Homepage/PriceSecrion";
import { ListFilter } from "lucide-react";
import ProductsPublic from "./ProductsPublic";

const Shop = () => {
  const [open, setOpen] = useState(false);

  const [filters, setFilters] = useState({
    maxPrice: 0,
    productTypes: [] as string[],
    quantity: [] as string[],
    availability: "",
  });

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[300px] xl:w-[440px] shrink-0 bg-white px-4 sticky top-0 h-screen overflow-y-auto">
        <CategorySidebar
          onFilter={(data) => setFilters(data)}
        />
      </aside>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="bg-black/40 w-full"
            onClick={() => setOpen(false)}
          />

          <aside className="w-[300px] bg-white h-full overflow-y-auto">
            <CategorySidebar
              onFilter={(data) => {
                setFilters(data);
                setOpen(false);
              }}
            />
          </aside>
        </div>
      )}

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-4 w-full">

        <div className="lg:hidden mb-4 flex items-center gap-3">
          <button onClick={() => setOpen(true)}>
            <ListFilter size={24} />
          </button>

          <h2 className="text-lg font-semibold">
            Filter
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-10">
          <ProductsPublic filters={filters} />
          <PriceSecrion />
          <CategoriesSection />
        </div>
      </main>
    </div>
  );
};

export default Shop;