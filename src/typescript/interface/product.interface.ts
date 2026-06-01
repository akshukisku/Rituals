export interface Product {
  $id?: string ;
  name: string;
  description: string;
  price: string;
  mrp: string;
  images?: string | null;
}

export interface ProductState {
  isLoading: boolean;
  isError: string | null;

  products: Product[];

  imagePreview: string | null;

  dialog: {
    open: boolean;
    isSelectedproducts: Product | null;
    isAddProductLoading: boolean;
    isDialogLoading: boolean;
  };
}

export interface ProductPayLoad {
  name: string;
  description: string;
  price: number;
  mrp: number;
  image?: File | string | null;
}
