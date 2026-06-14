import { tablesDB } from "../../lib/appwrite.config";

export const getProducts = async () => {
  return await tablesDB.listRows({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "products",
  });
};