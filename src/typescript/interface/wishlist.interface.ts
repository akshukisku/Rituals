type ProductItem = {
  $id: string;
  quantity: number;
  name: string;
  price: number;
  image: string;
};

export type WishlistState={
    list:ProductItem[]
}