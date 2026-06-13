import { bucket, ID, tablesDB } from "../../lib/appwrite.config";
import type {
  Product,
  ProductPayLoad,
} from "../../typescript/interface/product.interface";

export const fetchProductListfns = async () => {
  const response = await tablesDB.listRows({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "products",
  });

  return response;
};

export const addProductFns = async (
  data: ProductPayLoad
): Promise<Product> => {
  let imageUrl = "";

  if (data.image instanceof File) {
    const uploadImage = await bucket.createFile({
      bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
      fileId: ID.unique(),
      file: data.image,
    });

    const viewImage = bucket.getFileView({
      bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
      fileId: uploadImage.$id,
    });

    imageUrl = viewImage.toString();
  } else if (typeof data.image === "string") {
    imageUrl = data.image;
  }

  const product = await tablesDB.createRow({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "products",
    rowId: ID.unique(),
    data: {
      name: data.name,
      description: data.description,
      price: String(data.price),
      mrp: String(data.mrp),
      images: imageUrl,
      category: data.category ?? null,
      isFeatured: data.isFeatured ?? false,
    },
  });

  return product as unknown as Product;
};

export const editProductfns = async ({
  id,
  data,
}: {
  id: string;
  data: ProductPayLoad;
}) => {
  let imageUrl = "";

  if (data.image instanceof File) {
    const uploadImage = await bucket.createFile({
      bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
      fileId: ID.unique(),
      file: data.image,
    });

    const viewImage = bucket.getFileView({
      bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
      fileId: uploadImage.$id,
    });

    imageUrl = viewImage.toString();
  } else if (typeof data.image === "string") {
    imageUrl = data.image;
  }

  const payload: Record<string, any> = {
    name: data.name,
    description: data.description,
    price: String(data.price),
    mrp: String(data.mrp),
    category: data.category ?? null,
    isFeatured: data.isFeatured ?? false,
  };

  if (imageUrl) {
    payload.images = imageUrl;
  }

  const response = await tablesDB.updateRow({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "products",
    rowId: id,
    data: payload,
  });

  return response as unknown as Product;
};

export const deleteProductfns = async (id: string, imageId?: string) => {
  if (imageId) {
    await bucket.deleteFile({
      bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
      fileId: imageId,
    });
  }

  await tablesDB.deleteRow({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "products",
    rowId: id,
  });

  return { success: true, id };
};