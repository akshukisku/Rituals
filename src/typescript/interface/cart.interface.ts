export interface CartItem {
  $id: string;
  productId: string;
  userId: string;
  quantity: number;

  image: string;
  name: string;
  price: number;
}
export interface CartState {
  cartItem: CartItem[];
  loading: boolean;
  error: string | null;
}
export interface CartProduct {
  $id?: string;
  name: string;
  price: number;
  images?: string;
}