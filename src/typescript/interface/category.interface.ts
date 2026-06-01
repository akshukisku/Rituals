export interface Category {
  $id: string;
  title: string;
  description: string;
}

export interface CategoryPayLoad {
  title: string;
  description: string;
}

export interface CategoryState {
  isLoading: boolean;
  isError: string | null;

  categories: Category[];

  imagePreview: string | null;

  dialog: {
    open: boolean;
    isSelectedCategory: Category | null;
    isAddCategoryLoading: boolean;
    isDialogLoading: boolean;
  };
}
