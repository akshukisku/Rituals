import { useEffect, useState } from "react";
import { getProductsPublic } from "../../service/helper/global.helper";
import GiftCard from "../../components/GiftCard";
import type { Product } from "../../typescript/interface/product.interface";

interface ProductsPublicProps {
  filters: {
    maxPrice: number;
    productTypes: string[];
    quantity: string[];
    availability: string;
  };
}

const ProductsPublic = ({ filters }: ProductsPublicProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);

        const response = await getProductsPublic(1, 12, {
          maxPrice: filters.maxPrice,
          category: filters.productTypes,
        });

        setProducts(response.products as unknown as Product[]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [filters]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center px-4">
        <h2 className="text-lg md:text-xl font-semibold text-center">
          Loading Products...
        </h2>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 md:py-10">
      <div className="mb-6 md:mb-8 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5a0a2a]">
          Our Products
        </h1>

        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Discover our premium collection of gifts and rituals.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-xl md:text-2xl font-semibold">
            No Products Found
          </h2>
        </div>
      ) : (
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-4
            md:gap-6
          "
        >
          {products.map((product) => (
            <div key={product.$id} className="flex justify-center">
              <GiftCard
                gift={{
                  id: product.$id ?? "",

                  name: product.name,

                  image: product.images,

                  price: Number(product.price),

                  oldPrice: Number(product.mrp),

                  reviews: 0,

                  rating: 5,

                  discount:
                    Number(product.mrp) > 0
                      ? Math.round(
                          ((Number(product.mrp) - Number(product.price)) /
                            Number(product.mrp)) *
                            100,
                        )
                      : 0,
                }}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsPublic;
