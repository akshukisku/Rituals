import { tablesDB } from "../../lib/appwrite.config";
import type { CartProduct } from "../../typescript/interface/cart.interface";
// import type { Product } from "../../typescript/interface/product.interface";
import { Query } from "appwrite";

export const getCartItemsFns = async (userId: string) => {
  return await tablesDB.listRows({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "cart",
    queries: [Query.equal("userId", userId)],
  });
};

export const addToCartFns = async ({
  userId,
  product,
}: {
  userId: string;
  product: CartProduct;
}) => {
  const productId = String((product as any).id ?? product.$id ?? "");

  if (!userId || !productId) {
    throw new Error(
      `Missing fields — userId: ${userId}, productId: ${productId}`,
    );
  }

  const existing = await tablesDB.listRows({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "cart",
    queries: [
      Query.equal("userId", userId),
      Query.equal("productId", productId), // "1" as string ✅
    ],
  });

  if (existing.rows.length > 0) {
    const item = existing.rows[0];
    return await tablesDB.updateRow({
      databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
      tableId: "cart",
      rowId: item.$id,
      data: { quantity: item.quantity + 1 },
    });
  }

  return await tablesDB.createRow({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "cart",
    rowId: "unique()",
    data: {
      userId,
      productId,
      quantity: 1,
      productName: product.name,
      image: product.images,
      price: Number(product.price),
    },
  });
};

export const updateCartQuantityFns = async (
  cartId: string,
  quantity: number,
) => {
  return await tablesDB.updateRow({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "cart",
    rowId: cartId,
    data: {
      quantity,
    },
  });
};

export const removeFromCartFns = async (cartId: string) => {
  return await tablesDB.deleteRow({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "cart",
    rowId: cartId,
  });
};
