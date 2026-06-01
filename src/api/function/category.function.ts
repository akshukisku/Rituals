import { ID, tablesDB } from "../../lib/appwrite.config";
import type {
  Category,
  CategoryPayLoad,
} from "../../typescript/interface/category.interface";

export const fetchCategoryListfns = async () => {
  const response = await tablesDB.listRows({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "categories",
  });

  return response;
};

export const addCategoryFns = async (
  data: CategoryPayLoad
): Promise<Category> => {
  const category = await tablesDB.createRow({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "categories",
    rowId: ID.unique(),
    data: {
      title: data.title,
      description: data.description,
    },
  });

  return category as unknown as Category;
};

export const editCategoryfns = async ({
  id,
  data,
}: {
  id: string;
  data: CategoryPayLoad;
}) => {
  const response = await tablesDB.updateRow({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "categories",
    rowId: id,
    data: {
      title: data.title,
      description: data.description,
    },
  });

  return response as unknown as Category;
};

export const deleteCategoryfns = async (id: string) => {
  await tablesDB.deleteRow({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "categories",
    rowId: id,
  });

  return { success: true, id };
};