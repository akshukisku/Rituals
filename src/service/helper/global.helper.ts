import { account } from "../../lib/appwrite.config";
import { tablesDB } from "../../lib/appwrite.config";
import { Query } from "appwrite";

export const getCurrentUser = async () => {
  try {
    return await account.get();
  } catch {
    return null;
  }
};

interface ProductFilters {
  maxPrice?: number;
  category?: string[];
}

export const getProductsPublic = async (
  page: number = 1,
  limit: number = 12,
  filters?: ProductFilters,
) => {
  const offset = (page - 1) * limit;

  const queries = [
    Query.limit(limit),
    Query.offset(offset),
  ];

  // Category Filter
  if (filters?.category && filters.category.length > 0) {
    queries.push(Query.equal("category", filters.category));
  }

  const response = await tablesDB.listRows({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "products",
    queries,
  });

  let products = response.rows;

  // Price Filter
  if (filters?.maxPrice && filters.maxPrice > 0) {
    products = products.filter(
      (item: any) => Number(item.price) <= filters.maxPrice!
    );
  }

  return {
    products,
    total: products.length,
  };
};

export const getFeaturedProducts = async (
  limit: number = 8,
) => {
  const response = await tablesDB.listRows({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "products",
    queries: [
      Query.equal("isFeatured", true),
      Query.limit(limit),
    ],
  });

  return response.rows;
};

export const getProductsByCategory = async (
  categoryId: string,
  page: number = 1,
  limit: number = 12,
) => {
  const offset = (page - 1) * limit;

  const response = await tablesDB.listRows({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "products",
    queries: [
      Query.equal("category", categoryId),
      Query.limit(limit),
      Query.offset(offset),
    ],
  });

  return {
    products: response.rows,
    total: response.total,
  };
};