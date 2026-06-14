import { useEffect, useState } from "react";
import { getProducts } from "../../api/function/dashboard.function";
import FeaturedChart from "./Dashboard/FeaturedChart";
import PriceRangeChart from "./Dashboard/PriceRangeChart";

const Dashboard = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
    try {
      setLoading(true);

      const response = await getProducts();

      setProducts(response.rows);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const totalProducts = products.length;

  const featuredProducts = products.filter(
    (item) => item.isFeatured
  ).length;

  const averagePrice =
    products.length > 0
      ? products.reduce(
          (acc, item) => acc + Number(item.price || 0),
          0
        ) / products.length
      : 0;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h2 className="text-xl font-semibold">Loading Dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Overview of your Rituals store
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-gray-500 text-sm">
            Total Products
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {totalProducts}
          </h1>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-gray-500 text-sm">
            Featured Products
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {featuredProducts}
          </h1>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-gray-500 text-sm">
            Average Price
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹{averagePrice.toFixed(0)}
          </h1>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            Featured vs Normal Products
          </h2>

          <div className="h-[350px] flex justify-center items-center">
            <FeaturedChart products={products} />
          </div>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            Product Price Distribution
          </h2>

          <div className="h-[350px]">
            <PriceRangeChart products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;