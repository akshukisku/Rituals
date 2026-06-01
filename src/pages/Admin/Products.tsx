import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Stack,
  CircularProgress,
  Box,
} from "@mui/material";
import { Trash2, Edit, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../hooks/useredux";
import {
  addProduct,
  closeImagePreview,
  deleteProduct,
  editProduct,
  fetchProductList,
  setDialogClose,
  setDialogOpen,
  setEditDialogOpen,
  setEditDialogClose,
  setImagePreview,
} from "../../store/slices/product.slice";
import { ProductInputField } from "../../service/json/product.inputfield";
import DynamicInput from "../../components/DynamicInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../../service/validation/product.validation";
import type { ProductPayLoad } from "../../typescript/interface/product.interface";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

type ProductFormValues = {
  name: string;
  description: string;
  price: string;
  mrp: string;
  image?: File | string | null;
};

const Products = () => {
  const { dialog, imagePreview, products, isLoading } = useAppSelector(
    (state) => state.product
  );
  const dispatch = useAppDispatch();

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: yupResolver(productSchema),
  });

  const selectedProduct = dialog.isSelectedproducts;
  const isSubmitting = dialog.isDialogLoading || dialog.isAddProductLoading;

  // Fix: prevent double-fetch (React StrictMode mounts twice in dev)
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    dispatch(fetchProductList());
  }, [dispatch]);

  // Populate form when editing a product
  useEffect(() => {
    if (selectedProduct) {
      reset({
        name: selectedProduct.name,
        description: selectedProduct.description,
        price: String(selectedProduct.price),
        mrp: String(selectedProduct.mrp),
        image: null,
      });
      dispatch(setImagePreview(selectedProduct.images));
    } else {
      reset({ name: "", description: "", price: "", mrp: "", image: null });
      dispatch(closeImagePreview());
    }
  }, [selectedProduct, reset, dispatch]);

const onSubmit = async (data: ProductFormValues) => {
  const payload: ProductPayLoad = {
    name: data.name,
    description: data.description,
    price: Number(data.price),
    mrp: Number(data.mrp),
    image: data.image ?? null,
  };

  try {
    if (selectedProduct?.$id) {
      const editPayload: ProductPayLoad = {
        ...payload,
        image: data.image instanceof File ? data.image : selectedProduct.images,
      };

      await dispatch(
        editProduct({ id: selectedProduct.$id, data: editPayload })
      ).unwrap();

      toast.success("Product updated successfully");
    } else {
      await dispatch(addProduct(payload)).unwrap();
      toast.success("Product added successfully");
    }

    reset({ name: "", description: "", price: "", mrp: "", image: null });
  } catch {
    toast.error("Something went wrong");
  }
};

  const handleDelete = async (item: any) => {
    try {
      await dispatch(
        deleteProduct({ id: item.$id, imageId: item.imageId })
      ).unwrap();
      toast.success("Product deleted successfully");
    } catch {
      toast.error("Failed to delete product");
    }
  };

  const handleOpenAdd = () => {
    dispatch(setEditDialogClose()); // clear any selected product first
    reset({ name: "", description: "", price: "", mrp: "", image: null });
    dispatch(closeImagePreview());
    dispatch(setDialogOpen());
  };

  const handleCloseDialog = () => {
    dispatch(setDialogClose());
    reset({ name: "", description: "", price: "", mrp: "", image: null });
  };

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
          mb: 2,
        }}
      >
        <Typography variant="h5">Products</Typography>

        <Button variant="contained" onClick={handleOpenAdd}>
          Add Product
        </Button>
      </Box>

      {/* Add / Edit Dialog */}
      <Dialog open={dialog.open} onClose={handleCloseDialog}>
        <DialogTitle>{selectedProduct ? "Edit Product" : "Add Product"}</DialogTitle>

        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <DialogContent sx={{ width: "400px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {ProductInputField.map((field, index) => (
                <DynamicInput
                  key={index}
                  name={field.name}
                  required={field.required}
                  type={field.type}
                  label={field.label}
                  register={register}
                  errors={errors}
                />
              ))}
            </Box>

            {/* Image upload */}
            <Stack sx={{ mt: 2 }}>
              {imagePreview && (
                <Box
                  sx={{
                    width: "150px",
                    height: "150px",
                    border: "1px dotted #ccc",
                    margin: 2,
                    position: "relative",
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() => {
                      dispatch(closeImagePreview());
                      setValue("image", null);
                    }}
                    sx={{
                      position: "absolute",
                      top: -10,
                      right: -10,
                      backgroundColor: "rgba(0,0,0,0.6)",
                      color: "#fff",
                      zIndex: 1,
                      "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
                    }}
                  >
                    <X size={16} />
                  </IconButton>

                  <img
                    src={imagePreview}
                    alt="preview"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  />
                </Box>
              )}

              <Button
                variant="outlined"
                component="label"
                htmlFor="upload"
              >
                {imagePreview ? "Change Image" : "Upload Image"}
                <input
                  id="upload"
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => {
                    const file = e.target?.files?.[0] || null;
                    if (file) {
                      setValue("image", file);
                      dispatch(setImagePreview(URL.createObjectURL(file)));
                    }
                    // Reset input so the same file can be re-selected
                    e.target.value = "";
                  }}
                />
              </Button>
            </Stack>
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" onClick={handleCloseDialog} disabled={isSubmitting}>
              Cancel
            </Button>

            <Button variant="contained" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <CircularProgress size={22} color="inherit" />
              ) : selectedProduct ? (
                "Update"
              ) : (
                "Add"
              )}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Products Table */}
      <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Market Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : products.length > 0 ? (
              products.map((item: any) => (
                <TableRow key={item.$id}>
                  <TableCell>
                    {item.images ? (
                      <img
                        src={item.images}
                        alt={item.name}
                        width={60}
                        style={{ borderRadius: "8px", objectFit: "cover", height: "60px" }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "8px",
                          backgroundColor: "#f0f0f0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "11px",
                          color: "#999",
                        }}
                      >
                        No image
                      </Box>
                    )}
                  </TableCell>

                  <TableCell>
                    <Typography sx={{ fontWeight: "bold" }}>{item.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.description}
                    </Typography>
                  </TableCell>

                  <TableCell>₹{item.price}</TableCell>
                  <TableCell>₹{item.mrp}</TableCell>

                  <TableCell>
                    <IconButton
                      onClick={() => dispatch(setEditDialogOpen(item))}
                      title="Edit product"
                    >
                      <Edit size={18} />
                    </IconButton>

                    <IconButton
                      color="error"
                      onClick={() => handleDelete(item)}
                      title="Delete product"
                    >
                      <Trash2 size={18} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography color="text.secondary" sx={{ py: 4 }}>
                    No products added yet
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Products;
