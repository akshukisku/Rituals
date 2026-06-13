import { functions } from "../lib/appwrite.config";

export const checkout = async (cartItems: any[]) => {
  const result = await functions.createExecution(
    "6a2be1b3001d9c512b2a",
    JSON.stringify({
      items: cartItems,
    })
  );

  const data = JSON.parse(result.responseBody);

  window.location.href = data.url;
};