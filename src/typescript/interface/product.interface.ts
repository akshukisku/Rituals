export interface ProductState {
  isLoading: boolean;
  isError: string | null;
  products: [];

  dialog: {
    open: boolean;
    isSelectedproducts: null;
    isAddProductLoading: boolean;
  };
}

export interface ProductPayLoad {
  name: string;
  description: string;
  price: string;
  mrp: string;
}
