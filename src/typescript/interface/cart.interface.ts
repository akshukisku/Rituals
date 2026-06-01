type CartItem = {
  id:  number;
  quantity: number;
  name: string;
  price: number;
  image: string;
};

export type CartState = {
  cartItem: CartItem[];
  quantity:number
};
