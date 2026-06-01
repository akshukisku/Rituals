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
  CircularProgress,
  Box,
  TextField,
} from "@mui/material";
import { Trash2, Edit } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../hooks/useredux";
import {
  addCategory,
  deleteCategory,
  editCategory,
  fetchCategoryList,
  setCategoryDialogClose,
  setCategoryDialogOpen,
  setEditCategoryDialogOpen,
  setEditCategoryDialogClose,
} from "../../store/slices/category.slice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import type { CategoryPayLoad } from "../../typescript/interface/category.interface";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

const categorySchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

type CategoryFormValues = {
  title: string;
  description: string;
};

const Categories = () => {
  const { dialog, categories, isLoading } = useAppSelector(
    (state) => state.category,
  );
  const dispatch = useAppDispatch();

  const hasFetched = useRef(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormValues>({
    resolver: yupResolver(categorySchema),
  });

  const selectedCategory = dialog.isSelectedCategory;
  const isSubmitting = dialog.isDialogLoading || dialog.isAddCategoryLoading;

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    dispatch(fetchCategoryList());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      reset({
        title: selectedCategory.title ?? "",
        description: selectedCategory.description ?? "",
      });
    } else {
      reset({ title: "", description: "" });
    }
  }, [selectedCategory, reset]);

  const onSubmit = async (data: CategoryFormValues) => {
    const payload: CategoryPayLoad = {
      title: data.title,
      description: data.description,
    };

    try {
      if (selectedCategory?.$id) {
        await dispatch(
          editCategory({ id: selectedCategory.$id, data: payload }),
        ).unwrap();
        toast.success("Category updated successfully");
      } else {
        await dispatch(addCategory(payload)).unwrap();
        toast.success("Category added successfully");
      }

      reset({ title: "", description: "" });
    } catch {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteCategory(id)).unwrap();
      toast.success("Category deleted successfully");
    } catch {
      toast.error("Failed to delete category");
    }
  };

  const handleOpenAdd = () => {
    dispatch(setEditCategoryDialogClose());
    reset({ title: "", description: "" });
    dispatch(setCategoryDialogOpen());
  };

  const handleCloseDialog = () => {
    dispatch(setCategoryDialogClose());
    reset({ title: "", description: "" });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
          mb: 2,
        }}
      >
        <Typography variant="h5">Categories</Typography>

        <Button variant="contained" onClick={handleOpenAdd}>
          Add Category
        </Button>
      </Box>

      <Dialog open={dialog.open} onClose={handleCloseDialog}>
        <DialogTitle>
          {selectedCategory ? "Edit Category" : "Add Category"}
        </DialogTitle>

        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <DialogContent sx={{ width: "400px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <TextField
                label="Title"
                fullWidth
                {...register("title")}
                error={!!errors.title}
                helperText={errors.title?.message}
              />

              <TextField
                label="Description"
                fullWidth
                multiline
                minRows={2}
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            </Box>
          </DialogContent>

          <DialogActions>
            <Button
              variant="outlined"
              onClick={handleCloseDialog}
              disabled={isSubmitting}
            >
              Cancel
            </Button>

            <Button variant="contained" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <CircularProgress size={22} color="inherit" />
              ) : selectedCategory ? (
                "Update"
              ) : (
                "Add"
              )}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : categories.length > 0 ? (
              categories.map((item: any) => (
                <TableRow key={item.$id}>
                  <TableCell>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {item.title}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="caption" color="text.secondary">
                      {item.description}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <IconButton
                      onClick={() => dispatch(setEditCategoryDialogOpen(item))}
                      title="Edit category"
                    >
                      <Edit size={18} />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(item.$id)}
                      title="Delete category"
                    >
                      <Trash2 size={18} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <Typography color="text.secondary" sx={{ py: 4 }}>
                    No categories added yet
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

export default Categories;
